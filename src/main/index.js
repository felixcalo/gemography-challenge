const app = require("./config/app");
const router = require("express").Router();
const serverRouterAdapter = require("./adapter/serverRouterAdapter");
const RepositoryRouter = require("../presentation/router/repositoryRouter");
const port = 3000;

app.get("/api", serverRouterAdapter.adapter(RepositoryRouter));
app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
);