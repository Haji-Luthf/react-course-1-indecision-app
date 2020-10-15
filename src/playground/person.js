const isAdult = (age) => age >= 18 ? 'Is an Adult' : 'Is not an Adult';
const canDrink = (age) => age >= 21 ? 'Can drink' : 'Cannot drink';
const seniorCitizen = (age) => age >= 60 ? 'Senior Citizen' : 'Not Senior Citizen';

export { isAdult, canDrink as default, seniorCitizen };

