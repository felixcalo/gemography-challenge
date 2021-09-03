const RepositoryRouter = require("./repositoryRouter");

describe("verify date", () => {
    test("return error  400 if date is null ", (done) => {
        const httpRequest = {
            query: "2020-10-12",
        };
        const httpResponse = new RepositoryRouter().index(httpRequest);
        expect(httpResponse.status).toBe(200);
        done();
    });
});