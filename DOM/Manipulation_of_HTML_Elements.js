/*
Attributes of HTML Elements
Attributes are the extra information we can add to HTML elements.
Ex: <a href="www.google.com">I am a link</a>
Here, href is an attribute of the anchor tag.
Other Examples: id, src, class, etc. 

getAttribute():
    - Returns the value of the attribute.
    - Syntax: element.getAttribute("attributeName");
    - Example: 
        Consider, <a href="www.google.com">I am a link</a>
        then document.querySelector("a").getAttribute("href"); 
        //returns "www.google.com"

setAttribute():
    - Sets the value of the attribute.
    - Syntax: element.setAttribute("attributeName", "attributeValue");
    - Example:
        In above example,
        document.querySelector("a").setAttribute("href", "www.yahoo.com"); 
        //changes the href attribute value to "www.yahoo.com"