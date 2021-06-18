import * as aws from 'aws-sdk';
import {Character} from "./src/models/character.js";
const guy = new Character('guy', 5, 'guy');
console.log (guy.name);