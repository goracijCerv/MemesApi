function loadMeme(){
    var titulo = document.getElementById('head')
    var img =document.getElementById('meme')
    var txt = document.getElementById('texto')
    fetch('https://meme-api.com/gimme/raimimemes',{
        method:"GET"
    }).then((res)=>res.json())
    .then((res)=>{
        img.src = res.url
        titulo.innerText = res.author
        txt.innerText = res.title
    })
    .catch((error)=>{
        console.log(error)})
}