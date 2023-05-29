interface Motor{
    encender():void;
    acelerar():void;
}

export class MotorV8{
    encender():void{
        console.log('Enciendo motor v8');
    }

    acelerar():void{
        console.log('acelerando motor v8');
        
    }
}

class AdaptadorMotorV8 implements Motor {

    private motorV8:MotorV8;
    constructor(motorV8:MotorV8){
        this.motorV8 = motorV8;
    }

    encender(): void {
        this.motorV8.encender;
    }
    acelerar(): void {
        this.motorV8.acelerar
    }
}