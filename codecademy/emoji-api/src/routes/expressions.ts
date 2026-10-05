import { Router } from "express";

import ExpressionsController from "../controllers/ExpressionsController";

const expressionsRouter = Router();

// Get all expressions
expressionsRouter.get("/", ExpressionsController.getAll);

// Get a single expression
expressionsRouter.get("/:id", ExpressionsController.getOne);

// Update an expression
expressionsRouter.put("/:id", ExpressionsController.update);

// Create an expression
expressionsRouter.post("/", ExpressionsController.create);

// Delete an expression
expressionsRouter.delete("/:id", ExpressionsController.delete);

export default expressionsRouter;
