const RepositoryGitHub = require("./repositoryGitHub");

class RepositoryUseCase {
    getRepositoriesByDate(date) {
        if (date) {
            const repositories = new RepositoryGitHub().search(date);
            return repositories;
        }
    }
}

module.exports = RepositoryUseCase;