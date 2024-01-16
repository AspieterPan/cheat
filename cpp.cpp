#include <iostream>
#include <ranges>
#include <vector>

int main() {
  // Auto type deduction
  auto x = 5; // x is deduced to be int

  // Range-based for loop
  std::vector<int> v = {1, 2, 3, 4, 5};
  for (auto &i : v) {
    std::cout << i << std::endl;
  }

  // Lambda expressions
  auto add = [](int a, int b) -> int { return a + b; };
  std::cout << add(2, 3) << std::endl;

  // Smart pointers
  std::unique_ptr<int> uptr(new int(10));                // Unique pointer
  std::shared_ptr<int> sptr = std::make_shared<int>(20); // Shared pointer

  // nullptr keyword
  int *ptr = nullptr;

  // Initializer lists
  std::vector<int> vec = {1, 2, 3, 4, 5};

  // Rvalue references and move semantics
  std::string str = "Hello";
  std::string movedStr = std::move(str);

  // static_assert for compile-time assertions
  static_assert(sizeof(int) == 4, "Integers are not 32 bits.");

  // enum class for strongly-typed enums
  enum class Color { Red, Green, Blue };
  Color color = Color::Red;

  // Binary literals and digit separators
  auto binary = 0b0101'1110;

  // Generic lambdas (lambda with auto type)
  auto genericLambda = [](auto a, auto b) { return a + b; };
  std::cout << genericLambda(5, 3.2) << std::endl; // Mixing int and double

  // Structured bindings
  std::pair<int, std::string> p = {1, "String"};
  auto [i, _str] = p;

  // std::optional
  std::optional<int> opt = 5;
  if (opt)
    std::cout << *opt << std::endl;

  // std::variant for type-safe unions
  std::variant<int, float, std::string> _v;
  _v = 20;
  _v = "Hello";

  // Ranges for working with sequences
  std::vector<int> _vec = {1, 2, 3, 4, 5};
  auto even = _vec | std::views::filter([](int n) { return n % 2 == 0; });
  for (int n : even) {
    std::cout << n << ' ';
  }

  // std::span for views over contiguous sequences
  void print(std::span<int> sp) {
    for (auto n : sp)
      std::cout << n << ' ';
  }
}

// Return type deduction for normal functions
auto addNumbers(int a, int b) { return a + b; }

// Deprecated attribute
[[deprecated("Use newFunction() instead")]] void oldFunction() {}

// Nested namespaces
namespace A::B::C {
int x;
}

// std::string_view for efficient string passing
void printString(std::string_view sv) { std::cout << sv << std::endl; }

// if constexpr for compile-time if statements
template <typename T> auto getValue(T t) {
  if constexpr (std::is_pointer<T>::value)
    return *t;
  else
    return t;
}

// Inline variables
inline int myInlineVar = 10;

// Concepts for specifying template requirements
template <typename T>
concept Addable = requires(T a, T b) {
  { a + b } -> std::same_as<T>;
};

template <Addable T> T add(T a, T b) { return a + b; }
