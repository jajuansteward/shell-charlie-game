let shellPosition = $('#shell').position();

document.querySelector("#resetBtn")
    .addEventListener('click', resetGame); 
    // .addEventListener('click', function(){
    //     console.log('stuff in click f/n IIFE: ', 'whatever')
    // }); 

$('#shell').draggable({

    stop: function() {
        shellPosition = $('#shell').position();
        console.log(shellPosition);           
      }
    }
);
$('#coconut').draggable();

$('#finish').droppable({
  
    accept: '#shell',
  
    drop: function() {
    alert('you win!');
  }
});

function resetGame(){
    const vanillaShell = document.querySelector("#shell");
    vanillaShell.style.left = "0px";
    vanillaShell.style.top = "0px";
}