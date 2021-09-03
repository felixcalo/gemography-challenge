const RepositoryUseCase = require("../../domain/repositoryUseCase");
module.exports = class RepositoryRouter {
    index(HttpRequest) {
        const date = HttpRequest.query;
        const response = new RepositoryUseCase().getRepositoriesByDate(date);
        return {
            status: 200,
            data: response,
        };
    }
};