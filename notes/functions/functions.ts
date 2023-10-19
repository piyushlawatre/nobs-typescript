function blendTwoFruits(fruityOne: number, fruityTwo: number): number {
    return fruityOne + fruityTwo;
}

// 🚫 Module exports aren't compatible with TypeScript. 🚫
/* Instead, use the 'export' keyword to make functions or variables accessible. 🍎 */
export default blendTwoFruits;

export const combineFruityStrings = (fruityStringOne: string, fruityStringTwo: string = 'pineapple'): string => {
    return `${fruityStringOne} ${fruityStringTwo}`;
};

export const blendFruityValues = (fruityValueOne: number, fruityValueTwo: number | string): string => {
    /* 🥭🍍 Union types in TypeScript allow a variable to hold values of different types. 🥭🍍
  Here, 'fruityValueTwo' can be either a number or a string. 🍎 */
    return `${fruityValueOne} ${fruityValueTwo}`;
};

export const fruityVoidExample = (fruityObject: object): void => {
    console.log('🍊 Fruity Void Object: 🍎', fruityObject);
};
