
const form = document.getElementById("formulario") as HTMLFormElement;

if(form){
form.addEventListener("submit", (e) => handleForm(e));
}
function handleForm(e:Event){
    e.preventDefault()
const formData:FormData =new FormData(form);
const name:string = formData.get("name")?.toString()!;
const age:string = formData.get("age")?.toString()!;
const password:string = formData.get("password")?.toString()!;

const newUser = {
    name:name,
    age:age,
    password:password
}

if(FormValidate.confirmName(newUser.name)){
    document.getElementById("img2")?.classList.add("validTrue")
    return
}else{
    document.getElementById("img2")?.classList.remove("validTrue")
    document.getElementById("img1")?.classList.add("validTrue")
}

if(FormValidate.confirmAge(Number(newUser.age))){
    document.getElementById("img4")?.classList.add("validTrue")
    return
}else{
    document.getElementById("img4")?.classList.remove("validTrue")
    document.getElementById("img3")?.classList.add("validTrue")
    
}

if(FormValidate.confirmPassword(newUser.password)){
    document.getElementById("img6")?.classList.add("validTrue")
    return
}else{
    document.getElementById("img6")?.classList.remove("validTrue")
    document.getElementById("img5")?.classList.add("validTrue")
    
}

if(FormValidate.confirmName(newUser.name) === false && FormValidate.confirmAge(Number(newUser.age)) === false && FormValidate.confirmPassword(newUser.password) === false){
    window.location.replace('http://127.0.0.1:5501/src/html/userInterface.html'); 
     FormValidate.localSaveUser(newUser)
}};


export class FormValidate{

    static localSaveUser(user:{}):void{
        localStorage.setItem('newUser' ,JSON.stringify(user)) 
    }
    
    static getUser(){
        let userGetted = localStorage.getItem('newUser')
        if(userGetted === null){
            userGetted === '0'
        }
        return userGetted
    }
    
    static confirmName(name:string):boolean{
        if(name === ""){
            return true
        }else{
            return false
        }
    }

    static confirmAge(age:number):boolean{
        if(!age || age < 18){
            return true;
        }else{
            return false
        }
    }

    static confirmPassword(password:string):boolean{
        if(password === ""){
           return true;
        }else{
            return false
        }
    }

}
    

