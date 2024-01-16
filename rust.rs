// Variables and Mutability
let x = 5; // Immutable variable
let mut y = 10; // Mutable variable
y = 15; // Changing a mutable variable

// Data Types
let a: u32 = 123; // Unsigned 32-bit integer
let b: f64 = 3.14; // 64-bit floating point
let c: bool = true; // Boolean type
let d: char = 'a'; // Character type
let s: &str = "Hello"; // String slice
let s: String = String::from("Hello"); // String object

// Control Flow
if x < 5 {
    // code
} else {
    // code
}

// Loop
loop {
    // Infinite loop
}

for i in 0..5 {
    // Loop from 0 to 4
}

while x < 5 {
    // While loop
}

// Functions
fn add(x: i32, y: i32) -> i32 {
    x + y // Return value
}

// Ownership and Borrowing
fn take_ownership(s: String) {
    // s comes into scope
} // s goes out of scope and 'drop' is called

fn borrow_string(s: &String) {
    // s is a reference to a String
}

// Structs
struct Person {
    name: String,
    age: u8,
}

let person = Person { name: String::from("Alice"), age: 30 };

// Enums
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

// Pattern Matching
match msg {
    Message::Quit => { /* code */ },
    Message::Move { x, y } => { /* code */ },
    Message::Write(s) => { /*code */ },
    Message::ChangeColor(r, g, b) => { / code */ },
}

// Using `Option`
fn divide(numerator: f64, denominator: f64) -> Option<f64> {
    if denominator == 0.0 {
        None
    } else {
        Some(numerator / denominator)
    }
}

// Using `Result`
fn divide_result(numerator: f64, denominator: f64) -> Result<f64, String> {
    if denominator == 0.0 {
        Err(String::from("Division by zero"))
    } else {
        Ok(numerator / denominator)
    }
}

// Handling Option/Result
let result = divide(10.0, 2.0);
match result {
    Some(x) => println!("Result: {}", x),
    None => println!("Cannot divide by 0"),
}

let result = divide_result(10.0, 0.0);
match result {
    Ok(x) => println!("Result: {}", x),
    Err(e) => println!("Error: {}", e),
}

// Vector
let mut vec = vec![1, 2, 3];
vec.push(4);
vec.pop();

// HashMap
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("key1", "value1");
map.insert("key2", "value2");

// Iterators
let v = vec![1, 2, 3, 4, 5];
let v_squared: Vec<i32> = v.iter().map(|x| x * x).collect();

use std::thread;

// Spawning a thread
thread::spawn(|| {
    // code to run in new thread
});

// Using channels for inter-thread communication
use std::sync::mpsc;
let (tx, rx) = mpsc::channel();
thread::spawn(move || {
    tx.send(42).unwrap();
});
println!("Received: {}", rx.recv().unwrap());

// Macros
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
}
say_hello!();

// Attributes
#[derive(Debug)]
struct My Struct {
field1: i32,
field2: String,
}

// Using cfg attribute for conditional compilation
#[cfg(target_os = "linux")]
fn are_we_on_linux() {
println!("We're running on Linux!");
}

#[cfg(not(target_os = "linux"))]
fn are_we_on_linux() {
println!("We're not running on Linux!");
}

// Traits
trait Animal {
    fn make_sound(&self);
}

struct Dog;
impl Animal for Dog {
    fn make_sound(&self) {
        println!("Woof!");
    }
}

let my_dog = Dog;
my_dog.make_sound();

// Generics
fn print_item<T: Display>(item: T) {
    println!("{}", item);
}

print_item("Hello");
print_item(5);

// Lifetimes
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

let string1 = String::from("long string is long");
let result;
{
    let string2 = String::from("xyz");
    result = longest(string1.as_str(), string2.as_str());
}
println!("The longest string is {}", result);

// Closures
let add_one = |x: i32| -> i32 { x + 1 };
println!("The result is {}", add_one(5));

