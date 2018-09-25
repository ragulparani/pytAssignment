let list = document.getElementsByClassName("list")[0];
let container = document.getElementsByClassName("container")[0];
let listCount = 0;
//let message = document.getElementById("message")
function insert(){
  var input = document.getElementsByName("item")[0].value;
  if(input.trim() == " " || input.trim() == "" ){
    var warn = document.createElement("div");
    if(document.getElementsByClassName("warning").length == 0){
      warn.classList.add("warning");
      warn.innerHTML = "List item cannot be empty";
      container.insertBefore(warn,list);
      setTimeout(function(){
        warn.remove();
      },1000);
    }
  } else {
    listCount++;
    // if(listCount == 0){
    //   message.style.display = "block";
    // } else {
    //   message.style.display = "none";
    // }
      let listItem = document.createElement("div");
      listItem.classList.add("list-item");
      listItem.innerHTML = input;
      let cross = document.createElement("div");
      cross.classList.add("cross");
      cross.innerHTML = "x";
      listItem.appendChild(cross);
      cross.onclick = function(){
        this.parentNode.remove()
        listCount--
        // if(listCount == 0){
        //   message.style.display = "block"
        // }
      }
      list.appendChild(listItem);
      document.getElementsByName("item")[0].value = ""
  }
}
