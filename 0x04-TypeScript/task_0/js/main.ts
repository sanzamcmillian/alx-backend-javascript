interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentOne: Student = {
    firstName: 'Sanele',
    lastName: 'Skhosana',
    age: 24,
    location: 'Pretoria East',
};

const studentTwo: Student = {
    firstName: 'Sandile',
    lastName: 'Skhosana',
    age: 21,
    location: 'Pretoria East',
};

const studentsList: Array<Student> = [
    studentOne,
    studentTwo,
];