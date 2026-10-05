"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ExpressionsController_1 = __importDefault(require("../controllers/ExpressionsController"));
var expressionsRouter = express_1.Router();
// Get all expressions
expressionsRouter.get("/", ExpressionsController_1.default.getAll);
// Get a single expression
expressionsRouter.get("/:id", ExpressionsController_1.default.getOne);
// Update an expression
expressionsRouter.put("/:id", ExpressionsController_1.default.update);
// Create an expression
expressionsRouter.post("/", ExpressionsController_1.default.create);
// Delete an expression
expressionsRouter.delete("/:id", ExpressionsController_1.default.delete);
exports.default = expressionsRouter;
