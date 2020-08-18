// In your index.js file, create the following elements:

// <h1></h1>
// <h2></h2>
// 3 <p></p>
// 1 <ul></ul>
// 3 <li></li> as children of the previous <ul>
// Put any text you would like in all the elements. If you're not sure what to put, try using your folktale.




document.addEventListener('DOMContentLoaded', function (e) {
    const container = document.getElementById('container');
    const heading1 = document.createElement("h1");
    const heading2 = document.createElement("h2");
    const paragraph1 = document.createElement("p");
    const paragraph2 = document.createElement("p");
    const paragraph3 = document.createElement("p");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    container.appendChild(heading1);
    heading1.innerHTML = "Heading #1";

    container.appendChild(heading2);
    heading2.innerHTML = "Heading #2";

    container.appendChild(paragraph1);
    paragraph1.innerHTML = "Paragraph 1";

    container.appendChild(paragraph2);
    paragraph2.innerHTML = "Paragraph 2";

    container.appendChild(paragraph3);
    paragraph3.innerHTML = "Paragraph 3";

    container.appendChild(ul);

    li1.innerHTML = "List Item 1"
    ul.appendChild(li1);

    li2.innerHTML = "List Item 2"
    ul.appendChild(li2);

    li3.innerHTML = "List Item 3"
    ul.appendChild(li3);

})