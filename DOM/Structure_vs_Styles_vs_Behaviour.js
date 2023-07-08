/* As a general rule

HTML is for content/Structure
CSS is for style/Presentation
JavaScript is for behaviour

So, instead of using JS directly to style an element, 
we should use CSS classes and then use JS to add/remove classes to elements to style them.

this can be done using classList property.
Example: 
document.querySelector("h1").classList.add("huge"); //adds the class "huge" to the h1 element
document.querySelector("h1").classList.remove("huge"); // removes the class "huge"
document.querySelector("h1").classList.toggle("huge"); // adds the class "huge" if it is not present, removes it if it's present

and in css, we can define the class "huge" as:
.huge {
    font-size: 3rem;
}

*/