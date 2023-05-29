class Televisor {
   private canalActual: number;
   private volumenActual: number;
   private estaPrendido: boolean;

   public constructor() {
       this.canalActual = 1;
       this.volumenActual = 0;
       this.estaPrendido = false;
   }

   public setIsOn():void{
    this.estaPrendido = !this.estaPrendido
   }

   public getInfo():void{
    if(this.estaPrendido)
    console.log(`
    ------------------
         Info
    ------------------
    Canal:   ${this.canalActual}
    Volumen: ${this.volumenActual}     
    `);
    
   }
   
}

class SmartTV extends Televisor {
   isNetflix:boolean;
    public constructor(isNetflix:boolean) {
        super()
       this.isNetflix = isNetflix;
   }
}

let tele = new SmartTV(true);

// console.log(tele);
// console.log(tele instanceof(Televisor));
// console.log(tele instanceof(SmartTV));

const oldTv = new Televisor();
// console.log(oldTv instanceof(Televisor));
// console.log(oldTv instanceof(SmartTV));
oldTv.setIsOn();
oldTv.getInfo()



