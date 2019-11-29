/**
 * Convert a string encoded regex into a usable one.
 * @param string The string to convert.
 * @example
 * ```
 * const string2Regex = require("string2regex");
 *
 * string2Regex("/a/g")
 * //=> /a/g
 * ```
*/
declare function string2Regex(string: string): RegExp;

export = string2Regex;
