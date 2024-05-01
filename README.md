# Challenge Backend

## Exercise 1
Given an array of integers, keep a total score based on the following:

- Add 1 point for every even number in the array
- Add 3 points for every odd number in the array, except for the number "5"
- Add 5 points every time he number "5" appears in the array

```
Resolution:

    const readline = require("readline")

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    rl.on("line", function (line) {
        let values = line.split(" ")
        let sum = values.reduce((sum, value) => {
            return parseInt(value) === 5
            ? sum + 5
            : isEven(parseInt(value))
            ? sum + 1
            : sum + 3
        }, 0)
        console.log(sum)
    })

    function isEven(num) {
        return num % 2 === 0
    }

```

## Questions

> 1. You're building a high-throughput API for a cryptocurrency trading platform. For this platform, time is extremely important because microseconds count when processing high-volume trade orders. For communicating with the API, you want to choose the verb that is fastest for read-only operations.

### What verb should you choose for retrieving trade orders with the API server?

SELECT ONLY ONE
1. **GET**
2. UPDATE
3. DELETE
4. POST

> 2. You work for a Customer Relationship Management (CRM) company. The company's clients gain CRM access through a RESTful API. The CRM allows clients to add contact information for customers, prospects, and related persons (e.g., virtual assistants or marketing directors). You want to choose an appropriate API request path so clients can easily retrieve information for a single contact while also being flexible for future software changes.

### Which of the following API paths should you use?

SELECT ONLY ONE
1. /customers/{customer_id}
2. **/contacts/{contact_id}**
3. /contacts/{contact_type}/all
4. /customers/all

>3. You work for a large social media network, and you've been tasked witherror handling for the API. You're trying to decide on an appropriate errorcode for authentication failures based on non-existent users and incorrect passwords. You want to balance security against brute force attacks with providing descriptive and true error codes.

### Which HTTP error code(s) should you use to keep the system secure and still report that an error occurred?

SELECT ONLY ONE
1. 404 if the user doesn't exist, and 403 if the password is wrong.
2. 403 if the user doesn't exist, and 401 if the password is wrong.
3. 500 if the user doesn't exist or if the password is wrong.
4. **401 if the user doesn't exist or if the password is wrong.**

> 4. You're writing documentation for requesting information about a given user in your system. Your system uses UUIDS (universally unique identifiers) as user identifiers. In your documentation, you want to show an example.

### True or false: You should put a fake UUID into the example code (instead of just the text "UUID") as a placeholder.

SELECT ONLY ONE
1. **TRUE**
2. FALSE

> 5. You're building code to handle errors issued from a remote API server. The response may or may not have an error.

### How much work should your method, handleErrors(response), handle?

SELECT ONLY ONE
1. **Check for the presence of an error. If it exists, then set class property to the error.**
3. Check for the presence of an error. If it exists, throw an exception with the error.
4. Check for the presence of an error. If it exists, set a class property to the error, then throw an exception.

> 6. You have two classes: a database driver and an email driver. Both classes need to set errors so that your front-end interface displays any errors that transpire on your platform.

### Which way should you implement this error handling?

SELECT ONLY ONE
1. Write the error handling the same way in both classes, but keep it to one line of code.
2. Make a trait to handle errors so it'll collect errors in any class that uses it.
3. Make a driver-based error provider to handle errors in all classes that can issue errors.

> 7. You need to name the private method in your class that handles loopingthrough eCommerce products to collect and parse data. That data gets stored in an array and set as a class property.

### Which of the following should you use to name your method?

SELECT ONLY ONE
1. loopThroughProductsAndParseData()
2. loopProductsAndParse()
3. parseDataForProducts()
4. **parseDataForProductsAndSetArray()**

> 8. There are multiple places in your codebase that need to access the database. To access the database, you need to supply credentials. You want to balance security with useability.

### What strategy should you use to store and access these credentials?

SELECT ONLY ONE
1. Put them in the code that connects to the database for each place that needs database access.
2. Put them in a configuration file, then include that file in the code everywhere that needs to access the database.
3. Put the credentials into a configuration file, then load them with a database service provider.
4. **Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider.**

## Coding Exercise
**Problem:** Develop a REST API in Node.js that manages a basic blogging system. It should include authentication, CRUD operations for posts and comments, and functionality to tag and filter posts by categories and tags. The quality of the code, error handling and project organization will be assessed.


```

```

**Scenario Analysis**
Question: Given a distributed system that experiences latencies and occasional failures in one of its microservices, how would you optimize it?
Describe your approach to identifying the problem, possible solutions, and how  you would ensure high availability and resilience


```

```