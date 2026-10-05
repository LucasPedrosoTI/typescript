"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var expressions_1 = __importDefault(require("./routes/expressions"));
var animals_1 = __importDefault(require("./routes/animals"));
var app = express_1.default();
var PORT = process.env.PORT || 3333;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/expressions", expressions_1.default);
app.use("/animals", animals_1.default);
app.listen(PORT, function () {
    console.log("Express running on port " + PORT);
});
