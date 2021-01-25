// Slider
let block = slide.querySelector('#slider');

    block.onmousedown = function(e) {
      e.preventDefault(); 
      let shiftX = e.clientX - block.getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      document.addEventListener("touchstart", handleStart, false);
      document.addEventListener("touchend", handleEnd, false);
      document.addEventListener("touchcancel", handleCancel, false);
      document.addEventListener("touchmove", handleMove, false);

      function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - slide.getBoundingClientRect().left;
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = slide.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        block.style.left = newLeft + 'px';

        let slideWith = document.querySelector('#slide'),
            showResult = document.querySelector('.result');
            block.innerHTML = Math.round(block.offsetLeft * 50000 / slideWith.offsetWidth);
        function showCost (){
            showResult.innerHTML = Math.round( (block.offsetLeft * 50000 / slideWith.offsetWidth) * 20 );
        }    
        showCost ()

      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener("touchstart", handleStart, false);
        document.removeEventListener("touchend", handleEnd, false);
        document.removeEventListener("touchcancel", handleCancel, false);
        document.removeEventListener("touchmove", handleMove, false);

      }
    };
    block.ondragstart = function() {
      return false;
    };
    // Calc


  