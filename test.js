import test from "ava"
import string2Regex from "."

test("main", (t) => {
    t.deepEqual(string2Regex("/a/g"), /a/g) // eslint-disable-line ava/no-incorrect-deep-equal
})
