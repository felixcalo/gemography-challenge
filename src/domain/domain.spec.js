const RepositoryGitHub = require("./repositoryGitHub");
const RepositoryUseCase = require("./repositoryUseCase");

describe("Test promise from api github", () => {
    test("Get promise from github", (done) => {
        const date = "2010-10-12";
        const promise = new RepositoryGitHub().search(date);
        expect(promise).rejects.toThrow();
        done();
    });

    test("Extraire objects from promise ", (done) => {
        const data = [{
            id: 102137661,
            language: "Java",
            node_id: "MDEwOlJlcG9zaXRvcnkxMDIxMzc2NjE=",
            name: "NullAway",
            full_name: "uber/NullAway",
            private: false,
        }, ];
        const response = new RepositoryGitHub().show(data);
        expect(response).toEqual({
            Java: { numberItems: 1, repositories: ["NullAway"] },
        });
        done();
    });

    test("Get Repository by date", (done) => {
        const date = "2010-10-12";
        const promise = new RepositoryUseCase().getRepositoriesByDate(date);
        expect(promise).rejects.toThrow();
        done();
    });
});