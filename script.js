var canvasControl = (function(){
  var position = -1;
  var ele = document.getElementById("box");
  return {
    forward : function(){
      ele.style.left = null;
      ele.style.top = null;
      ele.style.right = null;
      ele.style.bottom = null;
      position = (position+1)%4;
      switch (position) {
        case 0:
          ele.style.left = "0";
          ele.style.top = "0";
          break;
        case 1:
          ele.style.left = "calc( 100% - 100px)";
          ele.style.top = "0";
          break;
        case 2:
          ele.style.left = "calc( 100% - 100px)";
          ele.style.top = "calc( 100% - 100px)";
          break;
        default:
          ele.style.left = "0";
          ele.style.top = "calc( 100% - 100px)";
          break;
      }
      console.log(position,"forward");
    },
    backward : function(){
      ele.style.left = null;
      ele.style.top = null;
      ele.style.right = null;
      ele.style.bottom = null;
      switch (position) {
        case 0:
          ele.style.left = "0";
          ele.style.top = "calc( 100% - 100px)";
          break;
        case 1:
          ele.style.left = "0";
          ele.style.top = "0";
          break;
        case 2:
          ele.style.left = "calc( 100% - 100px)";
          ele.style.top = "0";
          break;
        default:
          ele.style.left = "calc( 100% - 100px)";
          ele.style.top = "calc( 100% - 100px)";
          break;
      }
      position = position == 0? 3 : position - 1;
      console.log(position,"backward");
    }
  }
})()

canvasControl.forward()
