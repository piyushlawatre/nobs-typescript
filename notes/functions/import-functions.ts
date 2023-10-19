import blendTwoFruits, { combineFruityStrings, blendFruityValues, fruityVoidExample } from './functions';

const fruityBlend = blendTwoFruits(1, 3);
console.log('🍎 Fruity Blend: 🍎', fruityBlend);

const fruityCombo = combineFruityStrings('apple', 'mango');
console.log('🍊 Fruity Combo: 🍊', fruityCombo);

// Utilizing default value for second string parameter 🍍
const fruityDefaultCombo = combineFruityStrings('apple');
console.log('🍍 Fruity Default Combo: 🍍', fruityDefaultCombo);

const fruityBlend1 = blendFruityValues(12, 'apple');
console.log('🍎 First Fruity Blend: 🍎', fruityBlend1);

const fruityBlend2 = blendFruityValues(12, 13);
console.log('🍊 Second Fruity Blend: 🍊', fruityBlend2);

fruityVoidExample({ name: 'pineapple', source: 'china' });
