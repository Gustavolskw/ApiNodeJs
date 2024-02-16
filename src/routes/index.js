import express from "express";
import livrosRoutes from "./livrosRoutes.js"
import autorRoutes from "./autoresRoutes.js";

const routes = (app) => {

    app.use(express.json(), livrosRoutes);
    app.use(express.json(), autorRoutes)
};

export default routes;