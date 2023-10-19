// Variables
let fruityName: string = 'Apple';
let citrusName: string = 'Orange';
let splitFruityName: string[] = fruityName.split('');
let orchardIds: number[] = [11250, 68465];
let ripenessFlags: boolean[] = [true, false, true];
let produceCode: number = +14842989279;
let isOrganicProducer: boolean = true;
let fruitPattern: RegExp = /fruit/;

// Fruity Fusion
console.log('\n🍎🍏 Fruity Fusion: 🍎🍏', fruityName + citrusName);

// Orchard Identifiers
console.log('🥭 Orchard Identifiers: 🥭', orchardIds);

// Ripeness Indicators
console.log('🍇 Ripeness Indicators: 🍇', ripenessFlags);

// Produce Code
console.log('🍍 Produce Code: 🍍', produceCode);

// Organically Grown
console.log('🥝 Organically Grown: 🥝', isOrganicProducer);

// Fruitful Pattern
console.log('🍓 Fruitful Pattern: 🍓', fruitPattern);

// Object with type definition
let produceDetails: {
    name: string;
    lastName: string;
    contact: number;
} = {
    name: fruityName,
    lastName: citrusName,
    contact: produceCode
};

// Produce Particulars
console.log('\n🍉 Produce Particulars: 🍉', produceDetails);

// Type interface and object initialization
interface IExtraDetails {
    isOrganicProducer: boolean;
    splitFruityName: string[];
}

let produceExtraDetails: IExtraDetails = {
    isOrganicProducer,
    splitFruityName
};

// Extra Produce Tidbits
console.log('\n🍒 Extra Produce Tidbits: 🍒', produceExtraDetails);

// Record type for map-like objects
const orchardDetails: Record<number, { name: string; isRipe: boolean }> = {
    10101: { name: 'Apple Orchard', isRipe: true },
    10102: { name: 'Citrus Grove', isRipe: true }
};

// Orchard Overview
console.log('\n🍑 Orchard Overview: 🍑', orchardDetails);

// Array of nested Record types
type produceDetailsByName = Array<Record<string, { description: string }>>;

const produceDetailsByName: produceDetailsByName = [
    { Orchard: { description: 'Apple Orchard' } },
    { Grove: { description: 'Citrus Grove' } }
];

produceDetailsByName.push({ Farm: { description: 'Berry Farm' } });

// Produce Profiles by Name
console.log('\n🍇 Produce Profiles by Name: 🍇', produceDetailsByName);
