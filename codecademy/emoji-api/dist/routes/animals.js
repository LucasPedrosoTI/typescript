"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var animalsRouter = express_1.Router();
var AnimalsController_1 = __importDefault(require("../controllers/AnimalsController"));
// Get all animals
animalsRouter.get("/", AnimalsController_1.default.getAll);
// Get a single animal
animalsRouter.get("/:id", AnimalsController_1.default.getOne);
// Create an animal
animalsRouter.post("/", AnimalsController_1.default.create);
// Update an animal
animalsRouter.put("/:id", AnimalsController_1.default.update);
// Delete a single animal
animalsRouter.delete("/:id", AnimalsController_1.default.delete);
exports.default = animalsRouter;
