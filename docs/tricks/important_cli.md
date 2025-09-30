# Useful .NET CLI Commands for Razor Pages Apps

The .NET CLI (`dotnet`) is essential for developing, running, and maintaining Razor Pages applications. Below are common commands with explanations and examples.

---

## 1. Create a New Razor Pages App

```bash
dotnet new razor -n MyRazorApp
```
*Creates a new Razor Pages project in a folder named `MyRazorApp`.*

---

## 2. Run the Application

```bash
dotnet run
```
*Runs the app in the current directory. Use inside your project folder.*

---

## 3. Restore Dependencies

```bash
dotnet restore
```
*Restores NuGet packages required by the project.*

---

## 4. Build the Application

```bash
dotnet build
```
*Compiles the app and checks for errors.*

---

## 5. Publish for Deployment

```bash
dotnet publish -c Release -o ./publish
```
*Builds and packages the app for deployment in the `./publish` folder.*

---

## 6. Add a NuGet Package

```bash
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```
*Adds a NuGet package (e.g., Entity Framework Core for SQL Server).*

---

## 7. Update Project Dependencies

```bash
dotnet list package --outdated
```
*Lists outdated NuGet packages.*

---

## 8. Run Unit Tests

```bash
dotnet test
```
*Runs tests in the solution.*

---

## 9. Migrate Database (with EF Core)

```bash
dotnet ef database update
```
*Applies pending migrations to the database (requires `dotnet-ef` tool).*

---

## 10. Watch for Changes and Rebuild

```bash
dotnet watch run
```
*Automatically rebuilds and reruns the app when files change.*

---

**Tip:** Use `dotnet --help` for more commands and options.