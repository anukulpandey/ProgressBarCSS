console.log('This is progress bar');
function upload(){
    console.log('You clicked on the button');
        let progressBar = document.querySelector('.progressBar');
        if(progressBar.id!="play-animation"){
            progressBar.setAttribute('id','play-animation');
        }
        else if(progressBar.id=="play-animation"){
            progressBar.removeAttribute("id");
        }
        
}