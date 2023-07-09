import { test, expect, describe } from "@jest/globals";

import { BaseSIUnit, UnitNameConstruct } from "@goggles/unit-system";

import { SIPrefixUnit } from "./prefixes";
import { SIUnits } from "."

describe("Test on SI-prefix combined unit creator", () => {
    test("Fake Base Prefix throws error", () => {
        expect(() => { SIPrefixUnit(SIUnits.meter, "FakeSIPrefix")}).toThrowError();
    })

    test("Creats expected prefixed versions of units", () => {      
        let metersPrefixed = SIPrefixUnit(SIUnits.meter)
        let abbreviations = metersPrefixed.map(x => x.abbreviation)

        let expectedAbbrs = ['km', 'Ym', 'm', 'cm', 'mm', 'nm', 'μm']
        expectedAbbrs.forEach((expectedAbbr) => {
            expect(abbreviations).toContain(expectedAbbr)
        })
    })
})

describe("Test that prefixed units are named correctly", () => {
    test("Names", () => {
        expect(SIUnits.kilometer.name).toBe("kilometer")
        expect(SIUnits.gram.name).toBe("gram")
    })

    test("Abbreviations", () => {
        expect(SIUnits.kilometer.abbreviation).toBe("km")
        expect(SIUnits.gram.abbreviation).toBe("g")
    })

    test("No abbreviation for a base unit without an abbreviation", () => {
        let fakeUnit = new BaseSIUnit("FakeDimension", new UnitNameConstruct("FakeUnit"));

        let prefixedFakeUnits = SIPrefixUnit(fakeUnit, "")
        prefixedFakeUnits.forEach(pfUnit => {
            expect(pfUnit.abbreviation).toBeUndefined();
        })
    })

    // TODO: Test other names combining as expected when other names combination is added
})

describe("Test that conversion between prefixed units work correctly", () => {
    test("using meters", () => {
        expect(SIUnits.kilometer.convertTo(1, SIUnits.meter)).toBe(1000)
        expect(SIUnits.millimeter.convertTo(25, SIUnits.centimeter)).toBe(2.5)
    })
})