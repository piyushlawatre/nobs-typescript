/* --------------------------- // INFO: Variables --------------------------- */
let fruityName: string = 'Apple';
let citrusName: string = 'Orange';
let splitFruityName: string[] = fruityName.split('');
let splitCitrusName: Array<string> = citrusName.split('');
let orchardIds: Array<number> = [11250, 68465];
let ripenessFlags: boolean[] = [true, false, true];
let produceCode: number = +14842989279;
let isOrganicProducer: boolean = true;
let fruitPattern: RegExp = /fruit/;

console.log('\n🍎🍏 Fruity Fusion: 🍎🍏', '(type of): ' + typeof (fruityName + citrusName) + ' 🍎🍏 ', fruityName + citrusName);
console.log('🥭 Orchard Identifiers: 🥭', '(type of): ' + typeof orchardIds + ' 🥭 ', orchardIds);
console.log('🍇 Ripeness Indicators: 🍇', '(type of): ' + typeof ripenessFlags + ' 🍇 ', ripenessFlags);
console.log('🍍 Produce Code: 🍍', '(type of): ' + typeof produceCode + ' 🍍 ', produceCode);
console.log('🥝 Organically Grown: 🥝', '(type of): ' + typeof isOrganicProducer + ' 🥝 ', isOrganicProducer);
console.log('🍓 Fruitful Pattern: 🍓', '(type of): ' + typeof fruitPattern + ' 🍓 ', fruitPattern);

/* ------------------ // INFO: Object with type definition ------------------ */
let produceDetails: {
    name: string;
    lastName: string;
    contact: number;
} = {
    name: fruityName,
    lastName: citrusName,
    contact: produceCode
};

console.log('\n🍉 Produce Particulars: 🍉', '(type of): ' + typeof produceDetails + ' 🍉 ', produceDetails);

/* -------------- // INFO: Interface and object initialization -------------- */
interface IExtraDetails {
    isOrganicProducer: boolean;
    splitFruityName: string[];
}

let produceExtraDetails: IExtraDetails = {
    isOrganicProducer,
    splitFruityName
};

console.log('\n🍒 Extra Produce Tidbits: 🍒', '(type of): ' + typeof produceExtraDetails + ' 🍒 ', produceExtraDetails);

/* ---------------- // INFO: Record type for map-like objects ---------------- */
const orchardDetails: Record<number, { name: string; isRipe: boolean }> = {
    10101: { name: 'Apple Orchard', isRipe: true },
    10102: { name: 'Citrus Grove', isRipe: true }
};

console.log('\n🍑 Orchard Overview: 🍑', '(type of): ' + typeof orchardDetails + ' 🍑 ', orchardDetails);

/* ------------------ // INFO: Array of nested Record types ----------------- */
type produceDetailsByName = Array<Record<string, { description: string }>>;

const produceDetailsByName: produceDetailsByName = [
    { Orchard: { description: 'Apple Orchard' } },
    { Grove: { description: 'Citrus Grove' } }
];

produceDetailsByName.push({ Farm: { description: 'Berry Farm' } });

console.log('\n🍇 Produce Profiles by Name: 🍇', '(type of): ' + typeof produceDetailsByName + ' 🍇 ', produceDetailsByName);