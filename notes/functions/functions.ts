function blendTwoFruits(fruityOne: number, fruityTwo: number): number {
    return fruityOne + fruityTwo;
}

// 🚫 Module exports aren't compatible with TypeScript. 🚫
/* Instead, use the 'export' keyword to make functions or variables accessible. 🍎 */
export default blendTwoFruits;

export const combineFruityStrings = (fruityStringOne: string, fruityStringTwo: string = 'pineapple'): string => {
    return `${fruityStringOne} ${fruityStringTwo}`;
};
