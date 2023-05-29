class Student {
    private _dni:string;
    private _firstName:string;
    private _lastName:string;
    private _email:string;
    public constructor(dni:string, firstName:string, lastName:string, email?:string ){
        this._dni = dni;
        this._firstName = firstName;
        this._lastName = lastName;
        email !== undefined? this._email = email : this._email = 'No tiene email'
    }

    public showData():void {
        console.table(`
            ----------------
            Datos del Alumno
            ----------------
            DNI      : ${this._dni}
            NOMBRE   : ${this._firstName}
            APELLIDO : ${this._lastName}
            EMAIL    : ${this._email}
            `);
    };

    public getDni ():string {
        return this._dni
    }

    public setDni (dni:string) {
        this._dni = dni;
    }

    public getFirstName ():string {
        return this._firstName
    }

    public setFisrtName (firstName:string) {
        this._firstName = firstName
    }

    public getLastName ():string {
        return this._lastName
    }

    public setLastName (lastName:string) {
        this._lastName = lastName
    }

    public getEmail ():string {
        return this._email
    }

    public setEmail (email:string) {
        this._email = email
    }
    
}

const s001:Student = new Student('30240510', 'Nicolas', 'Stuer')

s001.showData()