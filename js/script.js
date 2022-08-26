/* create a close button and append it to each item 
this allows us to delete items in the list */
const myList = document.getElementsByTagName("li");

/* loops are used when you want to run the same code over again
here we are going through each list item by accessing the elements through getElementsByTagName above */
for (let i = 0; i < myList.length; i++) {
  //create a span for each list item
  const span = document.createElement("span");
  //this is the "x" symbol
  //createTextNode creates a text string from the specified value
  const symbol = document.createTextNode("\u00D7");
  span.className = "delete";
  //add the "x" symbol to each list item
  span.appendChild(symbol);
  //i represents each element in the list
  myList[i].appendChild(span);
}

/* implement delete functionality on button */
const remove = document.getElementsByClassName("delete");
//for each element in the list, when someone clicks the X button, it will be hidden
for (let i = 0; i < remove.length; i++) {
  remove[i].onclick = function () {
    const hide = this.parentElement;
    hide.style.display = "none";
  };
}
