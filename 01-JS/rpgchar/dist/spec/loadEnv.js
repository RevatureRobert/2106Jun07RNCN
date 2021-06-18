"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Set the env file, must be first
const dotenv_1 = __importDefault(require("dotenv"));
const result2 = dotenv_1.default.config({
    path: `./src/pre-start/env/test.env`,
});
if (result2.error) {
    throw result2.error;
}
