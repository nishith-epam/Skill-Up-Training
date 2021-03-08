class TypeAlias {

    declareTypeAlias() {
        type Person = {
            name: string,
            age: number
        };

        type ReturnPerson = (
            person: Person
        ) => Person;

        const returnPerson: ReturnPerson = (person) => {
            return person;
        };
    }
}
