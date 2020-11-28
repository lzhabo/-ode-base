class TypeScript{
    version:string
    constructor(version:string) {
        this.version=version;
    }
    info(name:string){
        return`TS version ${this.version}`
    }
}

// class Car{
//     readonly model:string
//     readonly numberWheels:number=4;
//
//     constructor(theModel:string) {
//         this.model=theModel;
//     }
// }
// equal code
class Car{
    readonly numberWheels:number=4;
    constructor(readonly model:string) {}
}

//модификаторы
//protected public
class Animal{
    protected voice: string=""
    public color: string=""
    private hmm: string=""
}


//абстрактные классы
abstract class Component{
    abstract rendor():void
    abstract info():string
}

class AppComponent extends Component{
    rendor() {
        console.log("Compopent on rendor")
    }
    info(): string {
        return "";
    }
}