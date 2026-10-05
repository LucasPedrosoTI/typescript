"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responses_1 = require("../utils/responses");
var utils_1 = require("../utils/utils");
var expressions = [];
utils_1.seedElements(expressions, "expressions");
exports.default = {
    getAll: function (_req, res) {
        res.json(expressions);
    },
    getOne: function (req, res) {
        var foundExpression = utils_1.getElementById(req.params.id, expressions);
        if (foundExpression) {
            res.json(foundExpression);
        }
        else {
            res.status(404).json(responses_1.res404);
        }
    },
    update: function (req, res) {
        var expressionIndex = utils_1.getIndexById(req.params.id, expressions);
        if (expressionIndex !== -1) {
            utils_1.updateElement(req.params.id, req.query, expressions);
            res.json(expressions[expressionIndex]);
        }
        else {
            res.status(404).json(responses_1.res404);
        }
    },
    create: function (req, res) {
        var receivedExpression = utils_1.createElement("expressions", req.query);
        if (receivedExpression) {
            expressions.push(receivedExpression);
            res.status(201).json(receivedExpression);
        }
        else {
            res.status(400).json(responses_1.res400);
        }
    },
    delete: function (req, res) {
        var expressionIndex = utils_1.getIndexById(req.params.id, expressions);
        if (expressionIndex !== -1) {
            expressions.splice(expressionIndex, 1);
            res.status(204).json(expressions);
        }
        else {
            res.status(404).json(responses_1.res404);
        }
    },
};
