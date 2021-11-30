const connection = require('./connection');
const Authors = require('./Author')

const isValid = (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;

  return true;
}

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)', [title, authorId]
);

const getAllBooks = async () => {
  const [books] = await connection.execute(
    `SELECT title FROM model_example.books;`
  )

  return books;
}

const getBookById = async(id) => {
  const [book] = await connection.execute(
    `SELECT title FROM model_example.books WHERE id = ?;`, [id]
  )

  if (book.length === 0) return null;

  return book;
}

module.exports = {
  getAllBooks,
  getBookById,
  isValid,
  create,
}