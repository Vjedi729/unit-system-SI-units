import Unit, { SimpleUnit, UnitNameConstruct } from "@goggles/unit-system"
import siBasisUnits from './siBasisUnits'
import siDerivedUnits from './siDerivedUnits'
import {SIPrefixUnit} from './prefixes'

let siUnits: {[key: string]: Unit} = {}

let siBaseUnits = siBasisUnits.concat(siDerivedUnits)

const unprefixedSIUnits = ['mole', 'degree Celsius']
const SIUnitBasePrefixes = { 'kilogram': 'kilo' }

siBaseUnits.forEach( (baseUnit) => {
    if (unprefixedSIUnits.find(name => name == baseUnit.name) != undefined) { 
        siUnits[baseUnit.name] = baseUnit; 
        return; 
    }

    SIPrefixUnit(baseUnit, SIUnitBasePrefixes[baseUnit.name]).forEach(unit => {siUnits[unit.name] = unit} )
})

// TODO: These time units are not SI Units and should be moved to a separate package
// Based on: https://en.wikipedia.org/wiki/Non-SI_units_mentioned_in_the_SI  
siUnits['minute'] = new SimpleUnit(siUnits.second.shape, 1/60, new UnitNameConstruct('minute', 'min'))
siUnits['hour'] = new SimpleUnit(siUnits.second.shape, 1/(60*60), new UnitNameConstruct('hour', 'hr'))

export var SIUnits = siUnits
export default SIUnits