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

let expressions: IElement[] = [];

seedElements(expressions, "expressions");

export default {
  getAll: (_req: Request, res: Response) => {
    res.json(expressions);
  },

  getOne: (req: Request, res: Response) => {
    const foundExpression = getElementById(req.params.id, expressions);
    if (foundExpression) {
      res.json(foundExpression);
    } else {
      res.status(404).json(res404);
    }
  },

  update: (req: Request, res: Response) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
      updateElement(req.params.id, req.query, expressions);
      res.json(expressions[expressionIndex]);
    } else {
      res.status(404).json(res404);
    }
  },

  create: (req: Request, res: Response) => {
    const receivedExpression = createElement("expressions", req.query);
    if (receivedExpression) {
      expressions.push(receivedExpression);
      res.status(201).json(receivedExpression);
    } else {
      res.status(400).json(res400);
    }
  },

  delete: (req: Request, res: Response) => {
    const expressionIndex = getIndexById(req.params.id, expressions);
    if (expressionIndex !== -1) {
      expressions.splice(expressionIndex, 1);
      res.status(204).json(expressions);
    } else {
      res.status(404).json(res404);
    }
  },
};
