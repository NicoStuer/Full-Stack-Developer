interface iVehicle{
    readonly year:number //public for default
    speedUp(n:number):number;
    getSpeed():number
}

class FamiliCar implements iVehicle{
    readonly year: number;
    private make:string;
    private model:string;
    private maxSpeed:number;
    private speed:number;
    constructor(_year:number, _make:string, _model:string, _maxSpeed:number){
        this.year = _year;
        this.make = _make;
        this.model = _model;
        this.maxSpeed = _maxSpeed;
        this.speed = 0;
    }

    speedUp(n:number): number {
        return this.speed += n
    }

    getSpeed(): number {
        return 0;
    }
}

const car01 = new FamiliCar(1990, 'volvo', 'ForEver', 200);

console.log(car01);

class RacerCar implements iVehicle{
    readonly year:number;
    private make:string;
    private model:string;
    private maxSpeed:number;
    private category:string;
    private speed:number;
    constructor(_year:number, _make:string, _model:string, _maxSpeed:number, _category:string){
        this.year = _year;
        this.make = _make;
        this.model = _model;
        this.maxSpeed = _maxSpeed;
        this.category = _category;
        this.speed = 0;
    }

    public overDrive():number {
        return this.speed += 50;
    }

    speedUp(n:number): number {
        return this.speed += n
    }

    getSpeed(): number {
        return this.speed;
    }
}

const raceCar01 = new RacerCar(2000, 'Fiat', 'Super Europa', 300, 'Euro Race')

console.log(raceCar01.speedUp(20));
console.log(raceCar01.getSpeed());
console.log(raceCar01.overDrive());
console.log(raceCar01.getSpeed());


//--------------------------------------

interface iActor{
    name:string;
    genere:string;
}

interface iSinger{
    album:string;
}

class PoliArtista implements iActor, iSinger{
    name: string;
    genere: string;
    album: string;
}
