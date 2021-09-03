const router = require("express").Router();
const serverRouterAdapter = require("../adapter/serverRouterAdapter");
const repositoryRouter = require("../../presentation/router/repositoryRouter");

module.exports = (router) => {
    router.get("/api", serverRouterAdapter.adapter(repositoryRouter));
};