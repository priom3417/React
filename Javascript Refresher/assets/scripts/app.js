import filename from './util.js'; //Default export does not need curly braces, but named exports do. We can use any name we want for the imported module.

import {content, version, author} from './util.js'; //Named exports need curly braces. We must use the exact name of the exported module.

import {content as c, log, error, warn} from './util.js'; //We can import multiple modules from a file by separating them with commas. 

import {date, license as lic} from './util.js'; //We can use the as keyword to rename the imported module. In this case, we renamed license to lic.

import * as util from './util.js'; //We can import all the exported modules from a file using the * as syntax. We can then access the exported modules using the util object.

console.log(util.content); //This is the content of util.js
console.log(content); //This is the content of util.js
console.log(util.version); //1.0.0

log("This is a log message"); //This is a log message
error("This is an error message"); //This is an error message
warn("This is a warning message"); //This is a warning message

util.log("This is a log message"); //This is a log message
util.error("This is an error message"); //This is an error message
util.warn("This is a warning message"); //This is a warning message