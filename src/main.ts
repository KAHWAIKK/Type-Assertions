
//Type alliases

type One = string
type Two = string | number
type Three = 'hello'

/* 
In TypeScript, type assertions are a way to tell the compiler to treat a value as a specific type, even if the compiler cannot infer that type. TypeScript provides two syntaxes for type assertions: 

Angle bracket syntax 
As Keyword Syntax

*/

//converting to more or less specific 

let a : One = 'hello';
let b = a as Two ;//converting to less specific since Type Two can either be a string or a number
let c = a as Three ;//converting to less more specific since Type Three is a type .hello'

//Using angle brackets syntax instead os 'as' keyword - you cant use such brackets in react files

let d = <One> 'world'
let e = <string | number> 'world'

//Using assertions for narrowing

let f = <string | number> 'world'

const addOrConcat = (a: number , b: number , c: 'add' | 'concat'): number | string => {
    if ( c === 'add' ) return a + b
    return '' + a + b
}

let myVal : string = addOrConcat(2,2, 'concat') as string//we are telling the compiler that it should expect a string instead

let myValA : string = addOrConcat(2,2, 'add') as string





//Be careful as TS doesnt see any problem but there will be a mistake as a string will be returned
let nextVal : number = addOrConcat(3,2, 'concat') as number//we are telling the compiler that it should expect a string instead

let nextValA : number = addOrConcat(3,2, 'add') as number

console.log(nextVal)//console returns 32
console.log(nextValA)//console returns 5


console.log(myVal)//console retuns 22
console.log(myValA)//console retuns 4

//Double casting or double assertions - better to avoid


/* DOM SELECTION TYPES */
//Benefits with assertions when working with DOM

const img = document.querySelector('img')//here TS infers an HTMLImage element which is more specific

const id = document.querySelector('#myId')//here TS infers an just element.

const myImg = document.getElementById('#img')//here TS infers an HTML element which is specific




//image.src 
//TS indicates there is an error

const image = document.querySelector('img') as HTMLImageElement

image.src//no error as we have used assertions to tell TS that we know image is an HTMLElement

//Non-null assertions

const imgA = document.querySelector('img')! 

imgA.src
//you do need to use the non-null operator tpgether with the as keyword