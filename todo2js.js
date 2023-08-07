const input =document.querySelector("#input");
let show=document.querySelector("#show");
let send=document.querySelector("#send");
let arr=[];


send.addEventListener("click",function (e) {
    let data=input.value;
    arr.push(data);
    // console.log(data);
    input.value="";
    // console.log(arr)
})
show.addEventListener("click",function(e){
    for(let i=0;i<arr.length;i++){
        
    }

    const newContent = arr
    .map(
      (todo, index) =>
        `<li onclick="removeToDo(${index})">${index + 1}. ${todo} </li>`
    )
    .join("");
        




})









