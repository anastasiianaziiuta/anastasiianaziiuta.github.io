window.addEventListener('DOMContentLoaded', function (){

  let block = document.querySelector('#slider'),
      slideWith = document.querySelector('#slide'),
      showResult = document.querySelector('.result'),
      boxleft, // положение блока по левой стороне
      startx, // стартовая точка соприкосновения по x
      dist = 0, // расстояние перемещения точки
      touchobj = null; // содержимое объекта перемещения

      block.addEventListener('touchstart', onTouchStart);
      block.addEventListener('touchend', onTouchEnd);
      function onTouchStart(e){
        console.log('start');
            e.preventDefault(); 
            touchobj = e.changedTouches[0];
            boxleft = block.style.left;
            startx = touchobj.clientX;

            block.addEventListener('touchmove', onTouchMove); 
            
            function onTouchMove(e) {
              console.log('move');
              e.preventDefault();
                dist = touchobj.clientX - startx;
                touchobj = e.changedTouches[0];
                block.style.left = ( (boxleft + dist > slideWith.offsetWidth)? slideWith.offsetWidth : (boxleft + dist < 0)? 0 : boxleft + dist ) + 'px';
                block.innerHTML = Math.round(block.offsetLeft * 50000 / slideWith.offsetWidth);
                function showCost (){
                    showResult.innerHTML = Math.round( (block.offsetLeft * 50000 / slideWith.offsetWidth) * 20 );
                }    
                showCost ();   
          } 

      }
      function onTouchEnd(){
        block.removeEventListener('touchstart', onTouchStart);
        
      }
 
      block.addEventListener('mousedown', onMouseDown);
      function onMouseDown(e){
        e.preventDefault(); 
        
        startx = e.clientX - block.getBoundingClientRect().left;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
  
        function onMouseMove(e) {
          boxleft = e.clientX - startx - slide.getBoundingClientRect().left;
          
          block.style.left = ( (boxleft + dist > slideWith.offsetWidth)? slideWith.offsetWidth : (boxleft + dist < 0)? 0 : boxleft + dist ) + 'px';
          block.innerHTML = Math.round(block.offsetLeft * 50000 / slideWith.offsetWidth);
          function showCost (){
              showResult.innerHTML = Math.round( (block.offsetLeft * 50000 / slideWith.offsetWidth) * 20 );
          }    
          showCost ();

        }
        function onMouseUp() {
          document.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);

        }
      }
  });    
 




  