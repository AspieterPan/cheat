package main

import (
    "fmt"
    "math"
)

// Basic Function
func helloWorld() {
    fmt.Println("Hello, world!")
}

// Variables and Types
func variables() {
    var a int = 10         // Variable with type and initial value
    b := "Hello, Go!"      // Type inferred variable
    const pi float64 = 3.14 // Constant
    fmt.Println(a, b, pi)
}

// Basic Data Structures
func dataStructures() {
    // Array
    var arr [5]int

    // Slice (dynamic array)
    slice := []int{1, 2, 3}

    // Map (dictionary or hash table)
    m := make(map[string]int)
    m["one"] = 1

    fmt.Println(arr, slice, m)
}

// Control Structures: If, For, Switch
func controlStructures() {
    x := 3

    // If-else
    if x > 5 {
        fmt.Println("x is big")
    } else {
        fmt.Println("x is small")
    }

    // For loop
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }

    // Switch statement
    switch x {
    case 1:
        fmt.Println("One")
    case 2:
        fmt.Println("Two")
    default:
        fmt.Println("Many")
    }
}

// Functions and Return Values
func add(x int, y int) int {
    return x + y
}

// Multiple Return Values
func swap(x, y string) (string, string) {
    return y, x
}

// Named Return Values
func split(sum int) (x, y int) {
    x = sum * 4 / 9
    y = sum - x
    return
}

// Structs
type Vertex struct {
    X, Y int
}

func structs() {
    v := Vertex{1, 2}
    v.X = 4
    fmt.Println(v)
}

// Pointers
func pointers() {
    i, j := 42, 2701

    p := &i         // Point to i
    fmt.Println(*p) // Read i through the pointer
    *p = 21         // Set i through the pointer

    p = &j          // Point to j
    *p = *p / 37    // Divide j through the pointer
    fmt.Println(j)
}

// Interfaces
type Abser interface {
    Abs() float64
}

type MyFloat float64

func (f MyFloat) Abs() float64 {
    if f < 0 {
        return float64(-f)
    }
    return float64(f)
}

// Go Routines (Concurrency)
func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
        sum += v
    }
    c <- sum // Send sum to channel c
}

func main() {
    helloWorld()
    variables()
    dataStructures()
    controlStructures()

    // Function usage
    fmt.Println(add(42, 13))

    a, b := swap("hello", "world")
    fmt.Println(a, b)

    fmt.Println(split(17))

    structs()
    pointers()

    // Interface usage
    var a Abser
    f := MyFloat(-math.Sqrt2)
    a = f
    fmt.Println(a.Abs())

    // Go Routines
    s := []int{7, 2, 8, -9, 4, 0}
    c := make(chan int)
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    x, y := <-c, <-c // Receive from channel c
    fmt.Println(x, y, x+y)
}

