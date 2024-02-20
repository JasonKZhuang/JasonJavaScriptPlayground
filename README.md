# JasonJavaScriptPlayground


# Jest for unit test
1. declare a const function name that is going to be tested by using require
2. a test method with two parameters:
   - First is the description what you want to test and expect
   - Second is the array function to be executed, the target function inside
3. using expect() function with the toBe() or toEqual()
4. Modify the "test" line in package.js to "test": "Jest --coverage"
5. execute npm test in the console, you will see the table showing the converage percent