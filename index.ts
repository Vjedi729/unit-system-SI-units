import Unit, { SimpleUnit } from "@goggles/unit-system"
import siBasisUnits from './siBasisUnits'
import siDerivedUnits from './siDerivedUnits'
import {SIPrefixUnit} from './prefixes'

let siUnits: {[key: string]: Unit} = {}

let siBaseUnits = siBasisUnits.concat(siDerivedUnits)
siBaseUnits.forEach( (baseUnit) => {
    if (baseUnit.name in ['mole']) return

    let basePrefix: string|undefined = undefined;
    if (baseUnit.name == 'kilogram') basePrefix = 'kilo';

    SIPrefixUnit(baseUnit, basePrefix).forEach(unit => {siUnits[unit.name] = unit} )
})

// Time
siUnits['minute'] = new SimpleUnit('minute', siUnits.second.shape, 1/60, 'min')
siUnits['hour'] = new SimpleUnit('hour', siUnits.second.shape, 1/(60*60), 'hr')

export var SIUnits = siUnits
export default SIUnits