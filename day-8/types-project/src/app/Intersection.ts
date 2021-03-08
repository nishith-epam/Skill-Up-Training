/* 
 we can create a new intersection type combining two interfaces, for example, 
 but not the other way around. We cannot create an interface combining two types, 
 because it doesn’t work:

*/

type Name = {
    name: string
};

type Age = {
    age: number
};

type Person = Name & Age;

// possible

/*
interface Name {
    name: string
};

interface Age {
    age: number
};

type Person = Name & Age;
*/