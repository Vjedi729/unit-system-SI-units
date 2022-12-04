import { BaseSIUnit, UnitNameConstruct, UnitShape } from "@goggles/unit-system"

const SI_BASIS = [
    {name:'meter',      abbreviation:'m',   shape: new UnitShape("Length")},
    {name:'second',     abbreviation:'s',   shape: new UnitShape("Time")},
    {name:'kelvin',     abbreviation:'K',   shape: new UnitShape("Temperature")},
    {name:'kilogram',   abbreviation:'kg',  shape: new UnitShape("Mass")},
    {name:'ampere',     abbreviation:'A',   shape: new UnitShape("ElectricCurrent")},
    {name:'candela',    abbreviation:'cd',  shape: new UnitShape("LuminousIntensity")},
    {name:'mole',       abbreviation:'mol', shape: new UnitShape("Amount")},
]

// export var NoUnit = new BaseSIUnit("None",  new UnitShape({}), '') // No longer needed -> Equivalent to combination unit with all powers as zero.
export var siBasisUnits = SI_BASIS.map((data) => new BaseSIUnit(data.shape, new UnitNameConstruct(data.name, data.abbreviation)))

export default siBasisUnits