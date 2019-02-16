"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.routes = express_1.Router();
        this.config();
    }
    config() {
        this.routes.get('/', (req, res) => res.send('helooo'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.routes;
