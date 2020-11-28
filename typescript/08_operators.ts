interface Person {
    name: string,
    age: string
}

type PersonKeys = keyof Person;// "name"| "age"


type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}
type UserKeyNoMeta = Exclude<keyof User, "_id" | "createdAt">
type UserKeyMeta = Pick< User, "name" | "email">