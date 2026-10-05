import { IElement } from "../global";

let expressionIdCounter = 0;
let animalIdCounter = 0;

const getElementById = (id: string, elementList: IElement[]) => {
  return elementList.find((element) => {
    return element.id === Number(id);
  });
};

const getIndexById = (id: string, elementList: IElement[]) => {
  return elementList.findIndex((element) => {
    return element.id === Number(id);
  });
};

const createElement = (
  elementType: string,
  queryArguments: IElement
): IElement | undefined => {
  if (
    queryArguments.hasOwnProperty("emoji") &&
    queryArguments.hasOwnProperty("name")
  ) {
    let currentId;
    if (elementType === "expressions") {
      expressionIdCounter += 1;
      currentId = expressionIdCounter;
    } else {
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

const updateElement = (
  id: string,
  queryArguments: IElement,
  elementList: IElement[]
) => {
  const elementIndex = getIndexById(id, elementList);
  if (elementIndex === -1) {
    throw new Error("updateElement must be called with a valid id parameter");
  }
  if (queryArguments.id) {
    queryArguments.id = Number(queryArguments.id);
  }
  Object.assign(elementList[elementIndex], queryArguments);
  return elementList[elementIndex];
};

const seedElements = (arr: IElement[], type: string) => {
  if (type === "expressions") {
    arr.push(createElement("expressions", { emoji: "😀", name: "happy" })!);
    arr.push(createElement("expressions", { emoji: "😎", name: "shades" })!);
    arr.push(createElement("expressions", { emoji: "😴", name: "sleepy" })!);
  } else if (type === "animals") {
    arr.push(createElement("animals", { emoji: "🐶", name: "Pupper" })!);
    arr.push(createElement("animals", { emoji: "🐍", name: "Snek" })!);
    arr.push(createElement("animals", { emoji: "🐱", name: "Maru" })!);
  } else {
    throw new Error(`seed type must be either 'expression' or 'animal'`);
  }
};

export {
  createElement,
  getIndexById,
  getElementById,
  updateElement,
  seedElements,
};
