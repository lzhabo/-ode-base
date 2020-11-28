function Add(a: number, b: number): number {
    return a + b;
}

function toUpper(a: string): string {
    return a.toUpperCase();
}

interface IMyPosition {
    x: number | undefined
    y: number | undefined
}

interface IMyPositionWithDefault extends IMyPosition {
    default: string;
}
//перегрузки для функций
function position(): IMyPosition
function position(a: number): IMyPositionWithDefault
function position(a: number, b: number): IMyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x:a, y:b}

}

console.log("empty", position())
console.log("one param", position(42))
console.log("two param", position(42,15))