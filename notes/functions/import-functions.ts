import blendTwoFruits, { combineFruityStrings } from './functions';

const fruityBlend = blendTwoFruits(1, 3);
console.log('🍎 Fruity Blend: 🍎', fruityBlend);

const fruityCombo = combineFruityStrings('apple', 'mango');
console.log('🍊 Fruity Combo: 🍊', fruityCombo);

// Utilizing default value for second string parameter 🍍
const fruityDefaultCombo = combineFruityStrings('apple');
console.log('🍍 Fruity Default Combo: 🍍', fruityDefaultCombo);
