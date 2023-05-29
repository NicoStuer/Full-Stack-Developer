export class Battery{
    public capacity:number;
    public make:string;
    public model:string

    constructor(capacity:number, make:string, model:string){
        this.capacity = capacity;
        this.make = make;
        this.model = model;
    }

    getInfo():Battery{
        return this
    }
}