
let block = document.querySelector('#slider'),
    slideWith = document.querySelector('#slide'),
    showResult = document.querySelector('.result'),
    boxleft, // положение блока по левой стороне
    startx, // стартовая точка соприкосновения по x
    dist = 0, // расстояние перемещения точки
    touchobj = null; // содержимое объекта перемещения

    block.addEventListener('touchstart', function(e){
          e.preventDefault(); 
          touchobj = e.changedTouches[0];
          boxleft = parseInt(block.style.left);
          startx = parseInt(touchobj.clientX); 
    }, false);

    block.addEventListener('touchmove', function(e){
          e.preventDefault();
          let dist = parseInt(touchobj.clientX) - startx;
            touchobj = e.changedTouches[0];
            block.style.left = ( (boxleft + dist > slideWith.offsetWidth)? slideWith.offsetWidth : (boxleft + dist < 0)? 0 : boxleft + dist ) + 'px';
            block.innerHTML = Math.round(block.offsetLeft * 50000 / slideWith.offsetWidth);
            function showCost (){
                showResult.innerHTML = Math.round( (block.offsetLeft * 50000 / slideWith.offsetWidth) * 20 );
            }    
            showCost ()    
    }, false);


    block.onmousedown = function(e) {
      e.preventDefault(); 
      let shiftX = e.clientX - block.getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
 
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

            block.innerHTML = Math.round(block.offsetLeft * 50000 / slideWith.offsetWidth);
        function showCost (){
            showResult.innerHTML = Math.round( (block.offsetLeft * 50000 / slideWith.offsetWidth) * 20 );
        }    
        showCost ()

      }
      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);

      }
    };
    block.ondragstart = function() {
      return false;
    };



  