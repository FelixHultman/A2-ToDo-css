// variabels
const info = document.querySelector("p");
const input = document.querySelector("input");
const addButton = document.querySelector("#btn");
const list = document.querySelector("ul");
const counter = document.querySelector("small");
const title = document.querySelector("h1");
const arr = [];
let countedTask = 0;

// add listener to addButton
addButton.addEventListener("click", function () {
  const userInput = input.value;

  // check so userInput is not empty
  if (userInput.length == 0) {
    info.innerText = "Input must not be empty";
    return;
  } else {
    info.innerText = "";
  }

  // push userInput into the array
  const todoObject = {
    title: userInput,
    id: Date.now(),
  };
  arr.push(userInput);
  // create li element
  const item = document.createElement("li");
  list.appendChild(item);

  //create span element
  const userTask = document.createElement("span");
  userTask.innerText = userInput;
  item.appendChild(userTask);

  //create a span with a trashcan
  const trashcan = document.createElement("span");
  //get trashcan icon
  trashcan.innerHTML = "&#x1F5D1;";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);

  // add eventlistener & change status of span
  userTask.addEventListener("click", function () {
    if (userTask.getAttribute("class") == "completed") {
      userTask.setAttribute("class", "");
      // decrease 1 from countedTask
      countedTask--;
    } else {
      userTask.setAttribute("class", "completed");
      // add 1 to countedTask
      countedTask++;
    }

    counter.innerText = `${countedTask} completed`;
  });

  //add a listener for trashcan
  trashcan.addEventListener("click", function () {
    //set completed
    if (userTask.getAttribute("class") == "completed") {
      countedTask--;
    }

    counter.innerText = `${countedTask} Completed`;

    //set todoArray
    let removeText = item.firstChild.firstChild.textContent;
    let indexToRemove = arr.indexOf(removeText);
    arr.splice(indexToRemove, 1);

    //remove li
    item.remove();
  });

  // Set input field to empty
  input.value = "";
});
