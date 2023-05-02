import { test, expect, describe } from "@jest/globals";
import { siPrefixUnits } from "./prefixes";
import { SIUnits } from "."
// TODO: Write tests?

describe("Test that prefixed units are named correctly", () => {

    test("Names", () => {
        expect(SIUnits.kilometer.name).toBe("kilometer")
        expect(SIUnits.gram.name).toBe("gram")
    })

    test("Abbreviations", () => {
        expect(SIUnits.kilometer.abbreviation).toBe("km")
        expect(SIUnits.gram.abbreviation).toBe("g")
    })
})