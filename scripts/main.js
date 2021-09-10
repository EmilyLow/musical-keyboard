

//TODO: Add abc option
//TODO: Add black and white option (not mutually exclusive)
//TODO: Potential - Add ability to record and replay sequences 
//TODO: !!!Potential - Have key stay white until sound finishes?
//TODO: Remove or change hover
//TODO: Add text that says press a key


const btn = document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', onClick);
})


function onClick() {
    console.log("click");
}

//var.setAttribute('id', 'idName');
//var.classList.add('new');
//var.classList.toggle('active');

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp)



function onKeyDown(e) {
    let keyCode = e.code;

    const key = document.querySelector('#' + keyCode);
       
    if(key != null) {
         key.classList.add('whiteB');
    }
    
    //Play appropriate sound
   
    const audio = document.querySelector('#' + keyCode + "Audio");
    
    if(audio != null) {
        console.log("Play");
        audio.currentTime = 0;
        audio.play();
    }
    
  
}

function onKeyUp(e) {
    
    let keyCode = e.code;

    const key = document.querySelector('#' + keyCode);
     
    if(key !=null) {
        key.classList.remove('whiteB');
    }
        
}

