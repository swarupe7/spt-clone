console.log('welcome to Spotify')

let audioElement=new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:'haali ro haali',filepath:'songs/1.mp3',coverpath:'covers/1.jpg'},
    {songName:'haali ro haali',filepath:'songs/2.mp3',coverpath:'covers/2.jpg'},
    {songName:'haali ro haali',filepath:'songs/3.mp3',coverpath:'covers/3.jpg'},
    {songName:'haali ro haali',filepath:'songs/4.mp3',coverpath:'covers/4.jpg'},
    {songName:'haali ro haali',filepath:'songs/5.mp3',coverpath:'covers/5.jpg'},
    {songName:'haali ro haali',filepath:'songs/6.mp3',coverpath:'covers/6.jpg'},
    {songName:'haali ro haali',filepath:'songs/7.mp3',coverpath:'covers/7.jpg'},
    {songName:'haali ro haali',filepath:'songs/8.mp3',coverpath:'covers/8.jpg'},
    {songName:'haali ro haali',filepath:'songs/9.mp3',coverpath:'covers/9.jpg'},
    {songName:'haali ro haali',filepath:'songs/10.mp3',coverpath:'covers/10.jpg'}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0; 

    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('time update');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>[
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

})


])
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=9;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

})


