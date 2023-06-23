function loadMeme(){
    var titulo = document.getElementById('head')
    var img =document.getElementById('meme')
    
    fetch('https://meme-api.com/gimme/raimimemes',{
        method:"GET"
    }).then((res)=>res.json())
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)})
}