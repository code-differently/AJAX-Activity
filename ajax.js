



let xhr = new XMLHttpRequest
xhr.onreadystatechange = function (){
if (this.readyState === 4 && this.status === 200){

    let data =JSON.parse(this.response)
    console.log(data)
    document.getElementById("image1").src = data.message[0]
    document.getElementById("image2").src = data.message[1]
    document.getElementById("image3").src = data.message[2]
    
    
    }
}
let fetch = function(){
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random/3', true);
xhr.send();

}
