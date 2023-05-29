/*
Las clases abstractas son clases son clases normales, pero permiten tener metodos sin implementacion. Una clase abstracta no permite instanciar objetos sino a traves de las clases que la extienden.
Podemos pensar en esta clase abstracta como una anotacion y tambien en cierto modo, como se se tratase de una lista de tareas. En la vida real solemos hacer breves anotaciones de tareas pendientes sin entrar en detalles de como realizarlas. Se trata de no olvidarnos nada y de evitar hacer borron y cuenta nueva, rehaciendo cosas q ya teniamos resueltas.

Estas clases abstractas funcionan como una clase que declara la existencia de metosos mans no su implementacion -> esto lo haremos en la subclase. Un a clase abstracta puede contener metodos no abstractos PERO AL MENOS UNO DEBE SERLO
*/

abstract class Vegetal{
    private name:string;
    private variety:string;
    constructor(name:string, variety:string){
        this.name = name;
        this.variety = variety;
    }

    public abstract getVegetables():void;
}

class TomatePerita extends Vegetal{
    private precio:number;
    public constructor(precio:number){
        super('Tomate', 'Perita')
        this.precio = precio;
    }

    public setPrecio(precio:number):number{
        return this.precio = precio
    }

    //override del metodo
    public getVegetables():TomatePerita {
        return this
    }
}

const prod01:TomatePerita = new TomatePerita(399)
console.log(prod01.getVegetables());
prod01.setPrecio(450)
console.log(prod01.getVegetables());

