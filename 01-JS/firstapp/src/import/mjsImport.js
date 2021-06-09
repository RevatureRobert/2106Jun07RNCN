/**
 * The import keyword is used for mjs projects. 
 * Typically used for modern code.
 */

import * as obj from '../export/math.mjs';
console.log(obj.add(1,2));

//for default imports:
import fun from '../export/math.mjs';
fun();