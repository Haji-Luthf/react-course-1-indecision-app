const isAdult = (age) => age >= 18 ? 'Is an Adult' : 'Is not an Adult';
const canDrink = (age) => age >= 21 ? 'Can drink' : 'Cannot drink';

export {isAdult, canDrink as default};
