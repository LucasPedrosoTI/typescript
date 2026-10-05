import { Request, Response } from "express";

import { IElement } from "../global";
import { res400, res404 } from "../utils/responses";

import {
  getElementById,
  getIndexById,
  updateElement,
  seedElements,
  createElement,
} from "../utils/utils";

let animals: IElement[] = [];
seedElements(animals, "animals");

export default {
  getAll: (_req: Request, res: Response) => res.status(200).json(animals),

  getOne: (req: Request, res: Response) => {
    const animal = getElementById(req.params.id, animals);
    if (animal) {
      res.json(animal);
    } else {
      res.status(404).json(res404);
    }
  },

  create: (req: Request, res: Response) => {
    const receivedAnimal = createElement("animals", req.query);
    if (receivedAnimal) {
      animals.push(receivedAnimal);
      res.status(201).json(receivedAnimal);
    } else {
      res.status(400).json(res400);
    }
  },

  update: (req: Request, res: Response) => {
    const animalIndex = getIndexById(req.params.id, animals);
    if (animalIndex !== -1) {
      updateElement(req.params.id, req.query, animals);
      res.json(animals[animalIndex]);
    } else {
      res.status(404).json(res404);
    }
  },

  delete: (req: Request, res: Response) => {
    const animalIndex = getIndexById(req.params.id, animals);
    if (animalIndex !== -1) {
      animals.splice(animalIndex, 1);
      res.status(204).json(animals);
    } else {
      res.status(404).json(res404);
    }
  },
};
