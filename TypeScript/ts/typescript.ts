// let bool: boolean = true;
// bool = false;
// let elm: string = "Hello world! "
// let elm1 = `elm ${elm}`;
// console.log(elm1);
// console.log(bool);
///////////////////////////   Array     //////////////
// let arrNumber: Array<number> = [1, 2, 3];
// let arrString: string[] = ["a", "b", "c"];
// console.log(arrNumber);
// console.log(arrString);
// console.log(arrString.push("d"));
// console.log(arrString);
///////////////////////         Tuple       ////////////////////
// let tulpe: [string, number];
// tulpe = ["hello", 10];
// console.log(tulpe);
//////////////////////////          Enum /////////////
// enum STATUS { CRETATE = 1, PROCCESS, FINISH };
// let todoStatus: STATUS = STATUS.CRETATE;
// console.log(todoStatus);
///////         Any      ////////
// let mVariable: any = 4;
// console.log(mVariable);
// let mArray: any[] = [1, 2, "true"];
// console.log(mArray);
// function showInfo() :void{
//     console.log("hello World");
// }
// showInfo();
///////////////                 Type assetions///////
// let temString: any = "typescript training";
// let total = (<string>temString).length;
// console.log(total);
/////       Interface Object    //////
// let obj1: any = {};
// console.log(obj1);
// interface CourceInterface{
//     name: string;
//     time: number;
// }
// let obj2: CourceInterface;
// obj2 = { name: "obj2", time: 20 };
// let obj3: CourceInterface = {
//     name: "obj3", time: 30
// };
// console.log(obj2);
// console.log(obj3);
//////////////////////          Interface Array  /////////
// let array: string[] = ["sang", "trua", "toi"];
// console.log(array);
// interface stringList{
//     [index:number]:string
// }
// let array12: stringList = ["sang", "toi", "trua"];
// console.log(array12);
//////      Chapter 4    ///////////
////////   Function return  ////////
// function funcPrint():void{
//     console.log("funcPrint");
// }
// funcPrint();
// function funcNumber(): number{
//     return 2;
// }
// console.log(funcNumber());
// function funcAny(): any{
//     return [1, 2, 3];
// }
// console.log(funcAny());
///////                            Function Param     /////////
// function totalLength(x:(string|any[]),y:string[]): number{
//     return x.length+y.length;
// }
// console.log(totalLength('abcd', ["1", "d"]));
// console.log(totalLength(['abcd',"111"],["1","d"]));
//////      Rest Parameters     //////////////
// function showInfoStudent(name:string,...cource:string[]): string{
//     return `Name: ${name} study: ${cource.join("-")}`;
// }
// console.log(showInfoStudent('john', "java","c#","automat"));
////////                        Type define function    //////////
////////                      Type 1 //////////////////////
// let func1 = function (name: string,age: number) :string{
//     return `My name is ${name}, ${age} years old`;
// }
// //////           Type 2
// let func2: (name: string, age: number) => string =
// function(name,age){
//    return `My name is ${name}, ${age} years old`;
// }

///////                      Arrow function      ///////////////
// let f1 = function (i: number): number { return i * i };
// let f2 = function (i: number) { return i * i };
// let f3 = (i: number): number => { return i * i };
// let f4 = (i: number) => { return i * i };
// let f5 = (i: number) => { i * i };
///////////                  Overload        ///////////
// function funcTest(x: string): number { return 100; };
// function funcTest(x: number): string { return "abc" };
// function funcOverload(x: string): number;
// function funcOverload(x: number): string;
// function funcOverload(x: any): any{
//     if (typeof x== "string") {
//         return 100;
//     } else if (typeof x == "number") {
//         return "abc";

//     }
// }
/////////////           OOP                 ///////////
// class Product{
//     id: number;
//     name: string;
//     quantity: number;
//     price: number;
//     constructor(id: number, name: string, quantity: number, price: number) {
//         this.id = id;
//         this.name = name;
//         this.quantity = quantity;
//         this.price = price;
//     }
//     showProductInfo() {
//         console.log(`${this.id}-${this.name}-${this.quantity}-${this.price}`);
//     }

// }
// let pro1 = new Product(1, "Product1", 10, 10000);
// console.log(pro1);
// pro1.showProductInfo();
///////
// enum ProductState{
//     Active = 100,
//     NoActive=200
// }
// interface Product{
//     id: number;
//     name: string;
//     quantity: number;
//     price: number;
//     active?: ProductState;
// }
// class ProductService{
//     public static user: string = "Hello";
//    static products: Product[];
//     constructor(products:Product[]) {
//         ProductService.products = products;
//     }
//     getItems() {
//         return ProductService.products;
//     }
//    static showProductInfo() :void{
//         for (let pro of ProductService.products) {
//             console.log(`${ProductService.user} - ${pro.name}`);
//         }
//        console.log("showProductInfo");
//     }
// }
// let pro1: Product[] = [
//     { id: 1, name: "product1", quantity: 5, price: 10000, active: ProductState.Active },
//     {id:2,name:"prodict2",quantity:10,price:20000,active:ProductState.NoActive}
// ];
// let pros = new ProductService(pro1);
// console.log(pros.getItems());
// console.log(ProductService.user);
// ProductService.showProductInfo();
//////      extend          /////////////
// class Course{
//     private _id: number;
//     private _name: string;
//     private _price: number;
//     constructor(id: number, name: string, price: number) {
//         this._id = id;
//         this._name = name;
//         this._price = price;
//     }
//     showCourse() {
//         console.log(`${this._id}-${this._name}-${this._price}`)
//     }
//     public get id(): number{ return this._id }
//     public get name(): string{ return this._name }
//     public get price(): number{ return this._price }
//     public set id(id: number){
//        this._id = id;
//     }
//     public set name(name: string) {
//         this._name= name;
//     }
//     public set price(price: number) {
//         this._price = price;
//     }
// }
// class CourseMath extends Course{
//     author: string;
//     constructor(id: number, name: string, price: number,author:string) {
//         super(id, name, price);
//         this.author = author;
//     }
//     showCourse() {
//         super.showCourse();
//         console.log(this.author);
//     }
// }
// let course1 = new Course(1, "course1", 100000);
// course1.showCourse();
// let course2 = new CourseMath(2, "course2", 10000, "aaaaa");
// course2.showCourse();

/*         |        Inside    |    Outside      |   Child class
public     |         +        |      +          |     +
private    |         +        |      -          |     -
protected  |         +        |      -          |     + 
*/
// let course1 = new Course(1, "Study", 10000);
// abstract class Laptop {
// 	public keyboard(): void {
// 		console.log("Laptop keyboard");
// 	}
// 	public main(): void {
// 		console.log("Laptop main");
// 	}
// 	public abstract chip(): void;
// }
// class LaptopDell extends Laptop {
// 	public keyboard(): void {
// 		console.log("LaptopDell keyboard");
// 	}
// 	public chip(): void {
// 		console.log("LaptopDell chip");
// 	}
// }
// let laptop = new LaptopDell();
// laptop.keyboard();
// laptop.main();
// laptop.chip();
////////////        Generic         //////////////////////////////////

//
// const arr = [{ name: "Amy" }, { name: "Bob" }];
// console.log(arr);
// arr.map((it) => it.name); // map
// let temarr = arr.reduce((c, n) => [...c, n.name], []); // reduce
// console.log(temarr);
//
// function Animal(name, weight) {
// 	this.name = name;
// 	this.weight = weight;
// 	this.info = function () {
// 		console.log(this.name);
// 	};
// }
// var a = new Animal("a", 20);
// a.info;
// Animal.prototype.info = function () {this.name};
// let person = {
// 	firstName: "John",
// 	lastName: "Doe",
// 	fullName: function () {
// 		return this.firstName + " " + this.lastName;
// 	},
// };
function check(x: number) {
	x = 5;
	// console.log(x);
}
let x = 1;
console.log(x);
check(x);
console.log(x);
