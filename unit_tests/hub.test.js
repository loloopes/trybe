const getRepos = require('./hub');


// getRepos('https://api.github.com/orgs/tryber/repos')
//   .then(result => console.log(result))


  describe('Wether given repo exists or not', () => {
  it('should certify wether given repos are present in an array of repos', () => {
    expect.assertions(2);
    return getRepos('https://api.github.com/orgs/tryber/repos')
      .then(repoList => {
      expect(repoList).toContain('sd-01-week4-5-project-todo-list')
      expect(repoList).toContain('sd-01-week4-5-project-meme-generator')
    });
  });
});