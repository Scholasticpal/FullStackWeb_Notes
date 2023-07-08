/* 
DOM- getElements
In DOM, we can select HTML elements using:

1. getElementById():
    - Returns a single element object.
    - Syntax: document.getElementById("idName");
    - Returns the element with the specified ID, as an object.
    - If there are multiple elements with the same ID, it returns the first element.
    - Example: document.getElementById("demo").innerHTML = "Hello World!";

2. getElementsByClassName():
    - Returns an array of elements.
    - Syntax: document.getElementsByClassName("className");
    - Returns a collection of all elements in the document with the specified class name, as an object NodeList.
    - Example: document.getElementsByClassName("example");

3. getElementsByTagName():
    - Returns an array of elements.
    - Syntax: document.getElementsByTagName("tagName");
    - Returns a collection of all elements in the document with the specified tag name, as an object NodeList.
    - Example: document.getElementsByTagName("p");

    Note: 
    - Since getElementsByClassName() & getElementsbyTagName() method returns an array,
      we cant use methods & properties directly on it.
    - We need to use index to access the elements.
    - Example: document.getElementsByTagName("p").innerHTML = "Hello World!"; //Error
              document.getElementsByTagName("p")[0].innerHTML = "Hello World!"; //Correct
    - Even if there is only one element, an array is returned. so we need to use index to access it.

4. querySelector():
    - Returns a single element object.
    - Syntax: document.querySelector("selector"); //selector can be id, class, tagname, etc. that are used in CSS as well
    - Returns the first element that matches a specified CSS selector(s) in the document, as an object.
    - If there are multiple elements with the same selector, it returns the first element.
    - Example: document.querySelector("#demo").innerHTML = "Hello World!"; //id
               document.querySelector(".example").innerHTML = "Hello World!"; //class
               document.querySelector("p").innerHTML = "Hello World!"; //tagname

    - we can also combine selectors and use them to select elements.
    - Example: document.querySelector("li a").innerHTML = "Hello World!"; //selects the first <a> element that is inside a <li> element
    - Example: document.querySelector("div.example").innerHTML = "Hello World!"; //selects the first <div> element with class="example"
    - Note above that things that occur in different elements are separated by a space (Hierarchial Selector), but things that occur in the same element are not.

5. querySelectorAll():
    - Returns an array of elements.
    - Syntax: document.querySelectorAll("selector"); //selector can be id, class, tagname, etc. just like querySelector()
    - Returns all elements in the document that matches a specified CSS selector(s), as an object NodeList.
    - Example: document.querySelectorAll("p");

Q. Which method should we use?
A. querySelector() & querySelectorAll() are the most powerful methods and recommended to use.


*/
