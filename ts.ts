// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3]; // Using generics

// Tuples
let x: [string, number];
x = ["hello", 10]; // OK

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string instead";

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Interfaces
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// Optional Properties
interface SquareConfig {
  color?: string;
  width?: number;
}

// Readonly properties
interface Point {
  readonly x: number;
  readonly y: number;
}

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}

// Implementing an interface
class Greeter implements LabelledValue {
  label: string;
  constructor(message: string) {
    this.label = message;
  }
  greet() {
    return "Hello, " + this.label;
  }
}

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString"); // Type of output will be 'string'

// Enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// Advanced Types - Union Types
function padLeft(value: string, padding: string | number) {
  // ...
}

// Advanced Types - Intersection Types
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;

// Type Guards and Differentiating Types
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

// Type Casting
let canvas = document.getElementById("canvas") as HTMLCanvasElement;

// Modules
export interface StringValidator {
  isAcceptable(s: string): boolean;
}

// Importing modules
import { StringValidator } from "./StringValidator";

// Ambient Declarations
declare var myLibrary;
