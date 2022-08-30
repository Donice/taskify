let names: string = "Donice";
let age: number | string;
let isSstudent: boolean;
let hobbies: string[];
let role: [number, string, boolean]; //tuple
let personName: unknown; // recommended instead of any

interface Person {
//declaring an object in typescript
name: string;
age?: number; // makes the age parameter to be optional, with the ?
}
// NOTE
// interface Person extends X (for merging a type into an interface) &
// type X = Person & (for merging an interface into a type)

interface Person {
profession: string;
}

type X = {
a: string;
b: number;
};

type Y = X & {
// X is estended to Y
c: string;
d: number;
};

let y: Y = {
// y is initiated and binded with Y
a: "Lover",
b: 19,
c: "Uddy",
d: 22,
};

let lotsOfPeple: Person[];

let printName: Function; // normal way to assign functions
let printsNmame: (name: string) => never; // recommended way

// void returns undedfined
// never returns nothing
