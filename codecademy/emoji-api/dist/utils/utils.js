"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedElements = exports.updateElement = exports.getElementById = exports.getIndexById = exports.createElement = void 0;
var expressionIdCounter = 0;
var animalIdCounter = 0;
var getElementById = function (id, elementList) {
    return elementList.find(function (element) {
        return element.id === Number(id);
    });
};
exports.getElementById = getElementById;
var getIndexById = function (id, elementList) {
    return elementList.findIndex(function (element) {
        return element.id === Number(id);
    });
};
exports.getIndexById = getIndexById;
var createElement = function (elementType, queryArguments) {
    if (queryArguments.hasOwnProperty("emoji") &&
        queryArguments.hasOwnProperty("name")) {
        var currentId = void 0;
        if (elementType === "expressions") {
            expressionIdCounter += 1;
            currentId = expressionIdCounter;
        }
        else {
            animalIdCounter += 1;
            currentId = animalIdCounter;
        }
        return {
            id: currentId,
            emoji: queryArguments.emoji,
            name: queryArguments.name,
        };
    }
    return undefined;
};
exports.createElement = createElement;
var updateElement = function (id, queryArguments, elementList) {
    var elementIndex = getIndexById(id, elementList);
    if (elementIndex === -1) {
        throw new Error("updateElement must be called with a valid id parameter");
    }
    if (queryArguments.id) {
        queryArguments.id = Number(queryArguments.id);
    }
    Object.assign(elementList[elementIndex], queryArguments);
    return elementList[elementIndex];
};
exports.updateElement = updateElement;
var seedElements = function (arr, type) {
    if (type === "expressions") {
        arr.push(createElement("expressions", { emoji: "😀", name: "happy" }));
        arr.push(createElement("expressions", { emoji: "😎", name: "shades" }));
        arr.push(createElement("expressions", { emoji: "😴", name: "sleepy" }));
    }
    else if (type === "animals") {
        arr.push(createElement("animals", { emoji: "🐶", name: "Pupper" }));
        arr.push(createElement("animals", { emoji: "🐍", name: "Snek" }));
        arr.push(createElement("animals", { emoji: "🐱", name: "Maru" }));
    }
    else {
        throw new Error("seed type must be either 'expression' or 'animal'");
    }
};
exports.seedElements = seedElements;
