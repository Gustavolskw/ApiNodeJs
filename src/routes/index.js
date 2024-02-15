import express from "express";
import livrosRoutes from "./livrosRoutes.js"

const routes = (app) => {

    app.use(express.json(), livrosRoutes);

};

export default routes;