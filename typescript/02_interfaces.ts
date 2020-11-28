//интерфейсы нужны для создания обэектов или классов где какие поля и функ нужны быть

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 100,
        height: 150
    },
    color: "#ccc"
}
//приведение типов
const rec3 = {} as Rect
const rec4 = <Rect>{}

//наследование
interface RectWithArea extends Rect {
    getArea: () => number
}

const rec5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 14
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}


interface IClock {
    time: Date,

    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date) {
        this.time = date
    }
}

// с большим кол динам ключей
interface Styles {
    [key: string]:string
}

const css: Styles = {
    border: "1px solid black",
    marginTop: "",
    borderRadius: ""
}