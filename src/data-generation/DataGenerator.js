"use strict";
exports.__esModule = true;
var unique_names_generator_1 = require("unique-names-generator");
var customConfig = {
    dictionaries: [unique_names_generator_1.adjectives, unique_names_generator_1.colors],
    separator: '-',
    length: 2
};
var shortName = (0, unique_names_generator_1.uniqueNamesGenerator)(customConfig);
console.log(shortName);
