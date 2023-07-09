import { test, expect, describe } from "@jest/globals";

import { SIUnits } from "."

describe("Test expected units are created", () => {

    test("Mole-based Units (shouldn't exist)", () => {
        expect(SIUnits.mole).toBeDefined()
        expect(SIUnits.kilomole).toBeUndefined()
    })

    test("Kilogram-based Units", () => {
        expect(SIUnits.kilogram).toBeDefined()
        expect(SIUnits.gram).toBeDefined()
        expect(SIUnits.microgram).toBeDefined()
    })

    test("Meter-based Units", () => {
        expect(SIUnits.meter).toBeDefined()
        expect(SIUnits.centimeter).toBeDefined()
        expect(SIUnits.kilometer).toBeDefined()
        expect(SIUnits.micrometer).toBeDefined()
        expect(SIUnits.nanometer).toBeDefined()
        expect(SIUnits.femtometer).toBeDefined()
    })
})

describe("Test units convert properly", () => {
    test("Meter-based Units", () => {
        expect(SIUnits.kilometer.convertTo(1, SIUnits.meter)).toBeCloseTo(1000)
        expect(SIUnits.centimeter.convertTo(1, SIUnits.meter)).toBeCloseTo(1/100)
        expect(SIUnits.millimeter.convertTo(10, SIUnits.centimeter)).toBeCloseTo(1)
    })
})