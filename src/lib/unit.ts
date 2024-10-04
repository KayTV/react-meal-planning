export enum Unit {
    TABLESPOON = 'tbsp',
    TEASPOON = 'tsp',
    CUP = 'cup',
    OUNCE = 'oz',
    POUND = 'lb',
    WHOLE = 'whole',
    AS_NEEDED = 'as needed',
}

const unitConversions: { [key in Unit]: {[key in Unit]?: number}} = {
    [Unit.TABLESPOON]: {
        [Unit.TEASPOON]: 3,
        [Unit.CUP]: 1/16,
    },
    [Unit.TEASPOON]: {
        [Unit.TABLESPOON]: 1/3,
        [Unit.CUP]: 1/16/3,
    },
    [Unit.CUP]: {
        [Unit.TABLESPOON]: 16,
        [Unit.TEASPOON]: 16 * 3,
    },
    [Unit.OUNCE]: {
        [Unit.POUND]: 1/16,
    },
    [Unit.POUND]: {
        [Unit.OUNCE]: 16,
    },
    [Unit.WHOLE]: {},
    [Unit.AS_NEEDED]: {},
}

export function convertUnit(sourceUnit: Unit, targetUnit: Unit, quantity: number): number {
    if (sourceUnit === targetUnit) {
        return quantity;
    }

    if (!unitConversions[sourceUnit][targetUnit]) {
        console.error('Unit Conversion doesn\'t exist', sourceUnit, targetUnit, sourceUnit === targetUnit);
        console.trace();
        return 999999999;
    }

    return unitConversions[sourceUnit][targetUnit] * quantity;
}