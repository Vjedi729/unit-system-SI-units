import Unit, { SimpleUnit, CombinationUnit, UnitShape, UnitNameConstruct } from "@goggles/unit-system"

export interface SI_Prefix {name: string, abbreviation: string, exp: number}

export const SI_PREFIXES: Array<SI_Prefix> = [
    {name: 'yotta',	abbreviation: 'Y',	exp: 24},
    {name: 'zetta',	abbreviation: 'Z',	exp: 21},
    {name: 'exa',	abbreviation: 'E',	exp: 18},
    {name: 'peta',	abbreviation: 'P',	exp: 15},
    {name: 'tera',	abbreviation: 'T',	exp: 12},
    {name: 'giga',	abbreviation: 'G',	exp: 9},
    {name: 'mega',	abbreviation: 'M',	exp: 6},
    {name: 'kilo',	abbreviation: 'k',	exp: 3},
    {name: 'hecto',	abbreviation: 'h',	exp: 2},
    {name: 'deka',	abbreviation: 'da',	exp: 1}, {name: 'deca',	abbreviation: 'da',	exp: 1}, // American v British English
    
    {name: '',	    abbreviation: '',	exp: 0},

    {name: "deci",  abbreviation: "d",	exp: -1},
    {name: "centi", abbreviation: "c",	exp: -2},
    {name: "milli", abbreviation: "m",	exp: -3},
    {name: "micro", abbreviation: "μ",	exp: -6},
    {name: "nano",  abbreviation: "n",	exp: -9},
    {name: "pico",  abbreviation: "p",	exp: -12},
    {name: "femto", abbreviation: "f",	exp: -15},
    {name: "atto",  abbreviation: "a",	exp: -18},
    {name: "zepto", abbreviation: "z",	exp: -21},
    {name: "yocto", abbreviation: "y",	exp: -24},
]

var decaUnit = new SimpleUnit(new UnitShape("Amount"), 10, new UnitNameConstruct('deka', 'da'));
export var siPrefixUnits: Array<Unit> = SI_PREFIXES.map( prefix => new CombinationUnit([[decaUnit, prefix.exp]], new UnitNameConstruct(prefix.name, prefix.abbreviation)))
export default siPrefixUnits

export function SIPrefixUnit(baseUnit:Unit, basePrefixName:string = ''): Array<Unit> {

    let tryfindBasePrefix = siPrefixUnits.find(prefix => prefix.name == basePrefixName)
    if(tryfindBasePrefix == undefined) {
        throw new RangeError("SIPrefixedUnits() :: Prefix name must be a valid SI unit prefix")
    } else {
        let basePrefix: Unit = tryfindBasePrefix;
        let baseName = baseUnit.name.slice(basePrefix.name.length)
        let baseAbbreviation = basePrefix.abbreviation ? baseUnit.abbreviation?.slice(basePrefix.abbreviation.length-1) : undefined
        
        return siPrefixUnits.map( 
            (prefix) => 
            (prefix.name == basePrefixName) ? 
                baseUnit : 
                new CombinationUnit(
                    [[baseUnit, 1], [prefix, 1]], 
                    new UnitNameConstruct(
                        `${prefix.name}${baseName}`, 
                        baseAbbreviation ? `${prefix.abbreviation}${baseAbbreviation}` : undefined
                    )
                )
        )
    }
}
