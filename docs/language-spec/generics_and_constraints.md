# 🧬 Advanced Generics and Constraints

Generics are the foundation of modern C# type safety and performance. This deep dive explores not just *how* to use generics, but *why* they work, their performance implications, and advanced patterns that separate novice from expert usage.

## 🎯 Learning Objectives

By the end of this section, you'll master:
- Generic type variance (covariance/contravariance) and when to apply it
- Advanced constraint patterns for API design
- Performance implications of generic specialization vs boxing
- Generic math and the new `INumber<T>` interfaces
- Memory allocation patterns with value type generics

## 🔥 Why Generics Matter for Advanced Development

```csharp
// Novice approach - boxing, allocations, no type safety
ArrayList numbers = new ArrayList();
numbers.Add(42);           // Boxing int -> object
int value = (int)numbers[0]; // Unboxing + cast required

// Expert approach - type safety, zero boxing, compile-time verification
List<int> numbers = new List<int>();
numbers.Add(42);           // No boxing
int value = numbers[0];    // No cast required
```

**Performance Impact**: The generic version is ~10x faster and uses significantly less memory.

## 🧠 Conceptual Foundation

### What Are Generics Really?

Generics in C# are **compile-time templates** that generate specialized code at runtime. Understanding this distinction is crucial:

```csharp
// This code...
List<int> intList = new List<int>();
List<string> stringList = new List<string>();

// Becomes specialized implementations at runtime:
// List`1<System.Int32> and List`1<System.String>
```

### The Type Erasure Myth

Unlike Java, C# generics are **reified** - type information is preserved at runtime:

```csharp
public void ExamineGenericType<T>(List<T> list)
{
    Type listType = list.GetType();
    Type genericArgument = listType.GetGenericArguments()[0];
    
    Console.WriteLine($"List of: {genericArgument.Name}");
    // Works perfectly - type info is preserved!
}
```

## 🔧 Advanced Generic Constraints

### Beyond Basic Constraints

Most developers know `where T : class` and `where T : new()`. Expert-level constraint usage goes much deeper:

#### **Multiple Constraints with Inheritance**
```csharp
public class Repository<T> where T : Entity, IValidatable, new()
{
    // T must:
    // - Inherit from Entity
    // - Implement IValidatable  
    // - Have parameterless constructor
    // - Be a reference type (implied by Entity)
}
```

#### **Advanced Constraint Patterns**
```csharp
// Self-referencing constraints (Curiously Recurring Template Pattern)
public abstract class Entity<T> where T : Entity<T>
{
    public virtual bool Equals(T other) => /* implementation */;
}

public class User : Entity<User>
{
    // Inherits type-safe Equals(User other)
}
```

#### **Generic Math Constraints (C# 11+)**
```csharp
public static T Sum<T>(IEnumerable<T> values) where T : INumber<T>
{
    T sum = T.Zero;
    foreach (T value in values)
    {
        sum += value;  // Compile-time verified arithmetic!
    }
    return sum;
}

// Usage
int intSum = Sum(new[] { 1, 2, 3, 4, 5 });
decimal decSum = Sum(new[] { 1.5m, 2.7m, 3.1m });
```

### Performance-Conscious Constraint Design

```csharp
// ❌ Poor performance - boxing for value types
public void Process<T>(T item) where T : class
{
    // T is constrained to reference types only
}

// ✅ Better - handles both reference and value types efficiently
public void Process<T>(T item) where T : notnull
{
    // No boxing, works with value types
}

// ✅ Best - specific constraints for specific needs
public void ProcessEntity<T>(T entity) where T : class, IEntity
{
    // Clear intent, optimal performance
}
```

## 🔄 Variance: Covariance and Contravariance

### Understanding Variance

Variance allows generic types to be more flexible in inheritance hierarchies:

```csharp
// Covariance (out) - can return more derived types
public interface IProducer<out T>
{
    T Produce();  // Only returns T, never accepts T as parameter
}

// Usage
IProducer<string> stringProducer = GetStringProducer();
IProducer<object> objectProducer = stringProducer; // ✅ Valid - string is object

// Contravariance (in) - can accept more base types  
public interface IConsumer<in T>
{
    void Consume(T item);  // Only accepts T, never returns T
}

// Usage
IConsumer<object> objectConsumer = GetObjectConsumer();
IConsumer<string> stringConsumer = objectConsumer; // ✅ Valid - can consume strings as objects
```

### Real-World Variance Patterns

```csharp
// Covariant collections (read-only)
IEnumerable<string> strings = GetStrings();
IEnumerable<object> objects = strings;  // ✅ Covariance

// Contravariant delegates
Action<object> objectAction = obj => Console.WriteLine(obj);
Action<string> stringAction = objectAction;  // ✅ Contravariance

// Practical example: Event handling
public delegate void EventHandler<in T>(object sender, T args);

EventHandler<EventArgs> baseHandler = (s, e) => { /* handle any EventArgs */ };
EventHandler<MouseEventArgs> mouseHandler = baseHandler;  // ✅ Works!
```

### Variance Performance Considerations

```csharp
// ⚠️ Variance can introduce runtime overhead
IEnumerable<string> strings = new List<string> { "a", "b", "c" };
IEnumerable<object> objects = strings;  // No immediate cost

foreach (object obj in objects)  // ⚠️ Each iteration has small cost
{
    // Runtime must verify the cast is valid
}

// 🚀 For performance-critical code, avoid unnecessary variance
List<string> stringList = GetStringList();
// Process directly without variance conversion
```

## ⚡ Performance Deep Dive

### Generic Specialization vs Boxing

The JIT compiler creates specialized versions of generic methods for value types:

```csharp
public void ProcessItems<T>(List<T> items)
{
    foreach (T item in items)
    {
        DoSomething(item);
    }
}

// Runtime creates:
// ProcessItems<int>(List<int>) - specialized, no boxing
// ProcessItems<string>(List<string>) - uses reference type version
// ProcessItems<MyStruct>(List<MyStruct>) - specialized, no boxing
```

### Benchmarking Generic Performance

```csharp
[MemoryDiagnoser]
[SimpleJob(RuntimeMoniker.Net80)]
public class GenericPerformanceBenchmark
{
    private const int ItemCount = 10000;
    
    [Benchmark(Baseline = true)]
    public long SumWithBoxing()
    {
        var list = new ArrayList();
        for (int i = 0; i < ItemCount; i++)
            list.Add(i);  // Boxing
            
        long sum = 0;
        foreach (int item in list)  // Unboxing
            sum += item;
        return sum;
    }
    
    [Benchmark]
    public long SumWithGenerics()
    {
        var list = new List<int>();
        for (int i = 0; i < ItemCount; i++)
            list.Add(i);  // No boxing
            
        long sum = 0;
        foreach (int item in list)  // No unboxing
            sum += item;
        return sum;
    }
}

// Results show ~10x performance improvement with generics
```

## 🛠️ Advanced Generic Patterns

### Generic Factory Pattern

```csharp
public interface IFactory<out T>
{
    T Create();
}

public class ConfigurableFactory<T> : IFactory<T> where T : new()
{
    private readonly Action<T> _configureAction;
    
    public ConfigurableFactory(Action<T> configureAction = null)
    {
        _configureAction = configureAction;
    }
    
    public T Create()
    {
        T instance = new T();
        _configureAction?.Invoke(instance);
        return instance;
    }
}

// Usage
var userFactory = new ConfigurableFactory<User>(user => 
{
    user.CreatedDate = DateTime.UtcNow;
    user.IsActive = true;
});
```

### Generic Repository with Advanced Constraints

```csharp
public interface IRepository<T> where T : class, IEntity
{
    Task<T> GetByIdAsync<TKey>(TKey id) where TKey : IEquatable<TKey>;
    Task<IEnumerable<T>> FindAsync<TProperty>(
        Expression<Func<T, TProperty>> selector,
        TProperty value)
        where TProperty : IComparable<TProperty>;
}

public class EntityRepository<T> : IRepository<T> 
    where T : class, IEntity, new()
{
    public async Task<T> GetByIdAsync<TKey>(TKey id) where TKey : IEquatable<TKey>
    {
        // Implementation uses the constraint to ensure type safety
        return await _context.Set<T>()
            .FirstOrDefaultAsync(e => e.Id.Equals(id));
    }
}
```

## 🧪 Practical Exercises

### Exercise 1: Generic Cache with Constraints
Build a generic cache that only accepts serializable types:

```csharp
public class SerializableCache<T> where T : ISerializable
{
    // Implement caching logic that can serialize/deserialize T
    // Use the constraint to ensure T can be serialized
}
```

### Exercise 2: Variance in Action
Create a generic event system using covariance and contravariance:

```csharp
// Define your interfaces with proper variance
// Implement producers and consumers
// Test the variance relationships
```

### Exercise 3: Performance Comparison
Benchmark different approaches to generic collections:

```csharp
// Compare: ArrayList vs List<T> vs custom generic collection
// Measure: execution time, memory allocation, GC pressure
// Analyze: results and explain the differences
```

## 🔗 Next Steps

Master these concepts, then move on to:
- [**Span\<T> and Memory\<T>**](./span-and-memory) - Zero-allocation programming
- [**Source Generators**](./source-generators) - Compile-time code generation
- [**Expression Trees**](./expression-trees) - Dynamic LINQ and metaprogramming

---

## 📊 Quick Reference

| Feature | Use Case | Performance Impact |
|---------|----------|-------------------|
| `where T : class` | Reference types only | Avoids boxing checks |
| `where T : struct` | Value types only | Enables optimizations |
| `where T : INumber<T>` | Generic math | Compile-time arithmetic |
| `out T` (covariance) | Read-only scenarios | Minimal runtime cost |
| `in T` (contravariance) | Write-only scenarios | Minimal runtime cost |

**Remember**: Generics are not just about code reuse—they're about performance, type safety, and expressive API design. Master these patterns, and you'll write C# code that's both elegant and fast! 🚀