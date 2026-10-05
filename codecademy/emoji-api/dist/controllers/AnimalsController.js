"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var responses_1 = require("../utils/responses");
var utils_1 = require("../utils/utils");
var animals = [];
utils_1.seedElements(animals, "animals");
exports.default = {
    getAll: function (_req, res) { return res.status(200).json(animals); },
    getOne: function (req, res) {
        var animal = utils_1.getElementById(req.params.id, animals);
        if (animal) {
            res.json(animal);
        }
        else {
            res.status(404).json(responses_1.res404);
        }
    },
    create: function (req, res) {
        var receivedAnimal = utils_1.createElement("animals", req.query);
        if (receivedAnimal) {
            animals.push(receivedAnimal);
            res.status(201).json(receivedAnimal);
        }
        else {
            res.status(400).json(responses_1.res400);
        }
    },
    update: function (req, res) {
        var animalIndex = utils_1.getIndexById(req.params.id, animals);
        if (animalIndex !== -1) {
            utils_1.updateElement(req.params.id, req.query, animals);
            res.json(animals[animalIndex]);
        }
        else {
            res.status(404).json(responses_1.res404);
        }
    },
    delete: function (req, res) {
        var animalIndex = utils_1.getIndexById(req.params.id, animals);
        if (animalIndex !== -1) {
            animals.splice(animalIndex, 1);
            res.status(204).json(animals);
        }
        else {
            res.status(404).json(responses_1.res404);
        }
    },
};
