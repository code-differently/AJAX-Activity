



let xhr = new XMLHttpRequest
xhr.onreadystatechange = function (){
if (this.readyState === 4 && this.status === 200){

    let data =JSON.parse(this.response)
    console.log(data)
    document.getElementById("image").src = data.message
    
    
    }
}
let fetch = function(){
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
xhr.send();

}
