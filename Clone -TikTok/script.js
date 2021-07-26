const videos= document.querySelectorAll('video').forEach(video =>{
    video.addEventListener('click', function(){
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    })
});



