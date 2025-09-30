## Tutorial on How to Use Strings in C#

### 1. **Introduction to Strings in C#**

In C#, a `string` is an object that represents a sequence of characters. Strings are immutable, meaning that once a string is created, it cannot be modified. Any operation that appears to modify a string actually creates a new string object. The `String` class in C# provides many methods and properties to work with strings efficiently.

```csharp
string name = "Hello, World!";
```

### 2. **Common String Methods**

C# provides a wide variety of methods to manipulate strings. Below is a breakdown of the most commonly used methods for basic and advanced string operations.

#### **2.1. Concatenation**

You can combine multiple strings using the `+` operator or the `String.Concat()` method.

```csharp
string firstName = "John";
string lastName = "Doe";

// Using + operator
string fullName = firstName + " " + lastName;

// Using String.Concat method
string fullName2 = String.Concat(firstName, " ", lastName);

Console.WriteLine(fullName);  // John Doe
```

#### **2.2. Substrings**

You can extract a portion of a string using the `Substring()` method.

```csharp
string message = "Hello, World!";
string subMessage = message.Substring(7, 5);  // World
```

#### **2.3. String Length**

The `Length` property returns the number of characters in a string.

```csharp
string message = "Hello, World!";
Console.WriteLine(message.Length);  // 13
```

#### **2.4. Changing Case**

C# provides methods for converting strings to uppercase and lowercase:

```csharp
string message = "Hello, World!";
string upperCase = message.ToUpper();  // HELLO, WORLD!
string lowerCase = message.ToLower();  // hello, world!
```

#### **2.5. Trimming White Space**

You can remove whitespace from the beginning and end of a string using `Trim()`. You can also remove only leading or trailing whitespace using `TrimStart()` and `TrimEnd()` respectively.

```csharp
string paddedString = "   Hello, World!   ";
string trimmed = paddedString.Trim();  // "Hello, World!"
```

#### **2.6. Replacing Substrings**

The `Replace()` method allows you to replace all occurrences of a specified substring with another.

```csharp
string message = "Hello, World!";
string newMessage = message.Replace("World", "C#");  // Hello, C#!
```

#### **2.7. Splitting a String**

The `Split()` method breaks a string into an array of substrings, based on a specified separator.

```csharp
string csv = "apple,orange,banana";
string[] fruits = csv.Split(',');

foreach (string fruit in fruits)
{
    Console.WriteLine(fruit);
}
// Output:
// apple
// orange
// banana
```

#### **2.8. Joining Strings**

The `String.Join()` method concatenates an array of strings, using a specified separator.

```csharp
string[] words = { "Hello", "World" };
string sentence = String.Join(" ", words);  // "Hello World"
```

#### **2.9. Checking if a String Contains a Substring**

The `Contains()` method checks whether a string contains a specified substring.

```csharp
string message = "Hello, World!";
bool containsWorld = message.Contains("World");  // true
```

#### **2.10. Checking String Start/End**

- `StartsWith()`: Checks if a string starts with a specified substring.
- `EndsWith()`: Checks if a string ends with a specified substring.

```csharp
string message = "Hello, World!";
bool startsWithHello = message.StartsWith("Hello");  // true
bool endsWithExclamation = message.EndsWith("!");    // true
```

#### **2.11. Comparing Strings**

You can compare strings using `Equals()` or `Compare()`.

```csharp
string str1 = "hello";
string str2 = "HELLO";

bool areEqual = str1.Equals(str2, StringComparison.OrdinalIgnoreCase);  // true

// Compare returns an int: <0 if str1 < str2, 0 if str1 == str2, >0 if str1 > str2
int comparisonResult = String.Compare(str1, str2, StringComparison.OrdinalIgnoreCase);  // 0
```

#### **2.12. String Formatting**

You can format strings using `String.Format()` or string interpolation.

```csharp
string name = "John";
int age = 25;

// String.Format method
string formattedString = String.Format("Name: {0}, Age: {1}", name, age);

// String interpolation (introduced in C# 6.0)
string interpolatedString = $"Name: {name}, Age: {age}";
```

#### **2.13. Checking for Null or Empty**

You can use `String.IsNullOrEmpty()` or `String.IsNullOrWhiteSpace()` to check if a string is null or consists only of whitespace.

```csharp
string str = "  ";
bool isEmpty = String.IsNullOrEmpty(str);         // false
bool isWhitespace = String.IsNullOrWhiteSpace(str);  // true
```

### 3. **Advanced String Manipulation**

#### **3.1. StringBuilder for Performance**

For scenarios that involve many string modifications, using `StringBuilder` is more efficient because it is mutable, unlike `String`.

```csharp
using System.Text;

StringBuilder sb = new StringBuilder();
sb.Append("Hello");
sb.Append(" ");
sb.Append("World!");
string result = sb.ToString();  // "Hello World!"
```

#### **3.2. Regular Expressions (Regex)**

The `Regex` class allows pattern matching and advanced string manipulation.

```csharp
using System.Text.RegularExpressions;

string input = "Hello123";
string pattern = @"\d+";  // Matches one or more digits

bool hasDigits = Regex.IsMatch(input, pattern);  // true
string digits = Regex.Match(input, pattern).Value;  // "123"
```

#### **3.3. String Normalization**

Normalization is used when dealing with internationalization and Unicode strings. You can normalize a string using the `Normalize()` method.

```csharp
string s1 = "é";  // Unicode combining character
string s2 = "é";   // Single character

bool isEqual = s1.Equals(s2);  // false
bool normalizedEqual = s1.Normalize().Equals(s2.Normalize());  // true
```

### 4. **Real-World Examples**

#### **4.1. Parsing User Input**

Imagine you're building a command-line tool that accepts user input and parses it into commands and arguments.

```csharp
string input = "add 3,5,6";
string[] parts = input.Split(' ');

string command = parts[0];  // "add"
string[] numbers = parts[1].Split(',');

int sum = numbers.Select(int.Parse).Sum();
Console.WriteLine($"Sum: {sum}");  // Output: Sum: 14
```

#### **4.2. Handling File Paths**

When dealing with file paths, string manipulation can be crucial.

```csharp
string filePath = @"C:\Projects\myfile.txt";
string fileName = Path.GetFileName(filePath);  // "myfile.txt"
string directory = Path.GetDirectoryName(filePath);  // "C:\Projects"
```

#### **4.3. String Sanitization for Web Applications**

When handling user input in web applications, sanitizing strings is essential to avoid security risks like XSS (Cross-site Scripting).

```csharp
string userInput = "<script>alert('XSS');</script>";
string sanitizedInput = WebUtility.HtmlEncode(userInput);
// Output: "&lt;script&gt;alert('XSS');&lt;/script&gt;"
```

### 5. **Conclusion**

Strings in C# are versatile and powerful, offering a wide range of methods for manipulation, formatting, and validation. By understanding both the basic and advanced features, you can write efficient, clean, and maintainable code for real-world applications.