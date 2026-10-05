import { Router } from "express";

const animalsRouter = Router();

import AnimalsController from "../controllers/AnimalsController";

// Get all animals
animalsRouter.get("/", AnimalsController.getAll);

// Get a single animal
animalsRouter.get("/:id", AnimalsController.getOne);

// Create an animal
animalsRouter.post("/", AnimalsController.create);

// Update an animal
animalsRouter.put("/:id", AnimalsController.update);

// Delete a single animal
animalsRouter.delete("/:id", AnimalsController.delete);

export default animalsRouter;
