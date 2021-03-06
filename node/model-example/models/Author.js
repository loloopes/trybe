const connection = require('./connection');

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName!== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)', [firstName, middleName, lastName]
)

const getFullNameAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ")

  return fullName;
}

const findById = async (id) => {
  const [authorData] = await connection.execute(
    `SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?`, [id]
  );

  if (authorData.length === 0) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getFullNameAuthor({
    id,
    firstName,
    middleName,
    lastName,
  })
}

const serialize = ({id, first_name, middle_name, last_name}) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

const getAll = async () => {
  const [authors] = await connection.execute(
    `SELECT id, first_name, middle_name, last_name FROM model_example.authors;`
  );

  return authors.map(serialize);
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
}