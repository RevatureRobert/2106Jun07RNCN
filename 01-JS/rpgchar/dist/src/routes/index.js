"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
const cRoute = __importStar(require("./Characters"));
// User-route
const appRouter = express_1.Router();
//appRouter.get('/all', getAllUsers);
//appRouter.post('/add', addOneUser);
//appRouter.put('/update', updateOneUser);
//appRouter.delete('/delete/:id', deleteOneUser);
appRouter.get('/all', cRoute.getAllCharacters);
// Export the base-router
const baseRouter = express_1.Router();
baseRouter.use('/rpg', appRouter);
exports.default = baseRouter;
