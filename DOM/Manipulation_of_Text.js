/*
Text Manipulation and Text Content Property

Consider, 
<h1><strong>Hello</strong></h1>
document.querySelector("h1").textContent = "Good Bye!"; //changes the text content of h1 to "Good Bye!"
document.querySelector("h1").innerHTML = "Good Bye!"; //changes the text content of h1 to "Good Bye!"

Q. What is the difference between textContent and innerHTML?
A. textContent returns only the text content, but innerHTML returns the text content along with the HTML tags.
Thus, in above example,
textContent returns: Good Bye!
innerHTML returns: <strong>Good Bye!</strong>

So, if we want to add moere HTML tags inside, we should use innerHTML, else textContent.

*/
