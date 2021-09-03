module.exports = class ServerRouterAdapter {
    static adapter(RepositoryRoute) {
        return async(req, res) => {
            const httpRequest = {
                query: new Date().toJSON().slice(0, 10).replace(/-/g, "-"),
            };
            const httpResponse = new RepositoryRoute().index(httpRequest);
            res
                .status(httpResponse.status)
                .json(await httpResponse.data.then((result) => result));
        };
    }
};