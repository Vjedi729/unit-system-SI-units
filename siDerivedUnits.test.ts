import { describe, expect, test } from "@jest/globals";
import { siBasisUnitsByAbbreviation } from "./siDerivedUnits";

describe("Derived Units have correct components", () => {
    test("SI Basis Units By Abbreviation were properly generated", () => {
        Object.entries(siBasisUnitsByAbbreviation).forEach(([key, val]) => expect(key).toBe(val.abbreviation))
    })

    
})