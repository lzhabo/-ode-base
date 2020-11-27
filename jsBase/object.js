const person = {
    name: "lidia",
    age: 21,
    isProgrammer: true

}


const logger = {
    keys() {
        console.log("object keys: ", Object.keys(this))
    },
    keysAndValues() {
        Object.keys(this).forEach(key => console.log(`"${key}": ${this[key]}`))
    },
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log("--------Start---------")
        }
        Object.keys(this).forEach((key,index,array)=> {
            console.log(`"${key}": ${this[key]}`);
            if (between && index!==array.length-1) {
                console.log("-----------------")
            }
        })

        if (bottom) {
            console.log("--------End---------")
        }

    }
}

logger.withParams.call(person, true,true,true); // не огранич количество параметром
logger.withParams.apply(person, [true,true,true] ); // принимает всегда 2 параметра