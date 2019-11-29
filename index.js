"use strict"

const NamedRegExp = require("named-regexp-groups")

module.exports = (string) => {
    const { main, options } = string.match(new NamedRegExp("/(?<main>.+)/(?<options>.*)")).groups

    return new RegExp(main, options)
}
