const account1 = {
    id: 1,
    username: 'mhf',
    owner: 'Mahbub Hossain Faisal',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: '1111',
};

const account2 = {
    id: 2,
    username: 'fis',
    owner: 'Farjana Islam Shanta',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: '2222',
};

const account3 = {
    id: 3,
    username:'mhb',
    owner: 'Monwar Hossain Babul',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: '3333',
};

const account4 = {
    id: 4,
    username: 'fb',
    owner: 'Fatema Begum',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: '4444',
};
const account5 = {
    id: 5,
    username: 'ha',
    owner: 'Hosna Ara',
    movements: [410, 1200, 900,150, 910],
    interestRate: 1,
    pin: '5555',
};

const accounts = [account1, account2, account3, account4,account5];

export default accounts;