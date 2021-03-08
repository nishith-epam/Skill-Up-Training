// we can only declare tuples using types and not interfaces.

type Reponse = [string, number]

// possible

interface Response {
    value: [string, number]
}