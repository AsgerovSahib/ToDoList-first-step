const InfoMessage = document.querySelector("#infoMessage");
let todoInput = document.querySelector("#todoInput");
todoSent = document.querySelector("#todoSent");
todoList = document.querySelector("#todoList");

let tododate = [];

todoInput.addEventListener("input", function (e) {
  const value = e.target.value;
  if (value.length < 20) {
    InfoMessage.style.display = "block";
    return;
  } else {
    InfoMessage.style.display = "none";
  }

  //   console.log(`value`, value);
});

todoSent.addEventListener("click", function () {
  createToDo();
});

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createToDo();
  }
  console.log(e);
});

function createToDo() {
  const value = todoInput.value;
  if (value.length < 20) {
    alert("Error");
    return;
  }
  tododate.push(value);
  todoInput.value = "";
  // console.log(tododate)
  rendertodolist(tododate);
}

function removeToDo(todoIndex) {
  console.log(todoIndex);
  const newToDoDate = tododate.filter((item,index) =>index!==todoIndex)

  tododate=newToDoDate

  rendertodolist(newToDoDate)
}

function rendertodolist(arr) {
  const newContent = arr
    .map(
      (todo, index) =>
        `<li onclick="removeToDo(${index})">${index + 1}. ${todo} </li>`
    )
    .join("");
  console.log(newContent);
  todoList.innerHTML = newContent;
}
