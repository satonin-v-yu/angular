let el = this.document.getElementById("content");
 
class User{
    name : string;
    age : number;
    constructor(_name:string, _age: number){
         
        this.name = _name;
        this.age = _age;
    }
}
let tom : User = new User("Том", 5);
console.log("Имя: ", tom.name, " возраст: ", tom.age);
el.innerHTML="Имя: " + tom.name + " возраст: " + tom.age;
/*

*/