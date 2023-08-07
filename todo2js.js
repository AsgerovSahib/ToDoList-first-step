const input = document.querySelector("#input");
let show = document.querySelector("#show");
let send = document.querySelector("#send");
let list = document.querySelector("#list");
let arr = [];

send.addEventListener("click", function (e) {
  let data = input.value;
  arr.push(data);
  // console.log(data);
  input.value = "";
  // console.log(arr)
});
show.addEventListener("click", function (e) {
//   for (let i = 0; i < arr.length; i++) {}

  const newContent = arr
    .map((a, index) => `<li>${index + 1}. ${a} </li>`)
    .join("");
  list.innerHTML = newContent;
});
