// guards - вспомогательные  конструкции что позволяют     работать с типами

function strip(x: string | number) {
    if (typeof (x) === 'number') return x.toFixed(2)
    return x.trim()
}

//instance of проверяет принадлежность какого-то обёекта к классу

//if( res instanceof MyClass)


//