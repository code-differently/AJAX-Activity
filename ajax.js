


let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function (){
    if(this.readyState === 4 && this.status === 200){
        console.log(xhr.responseText)
    }
}
xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
xhr.send();