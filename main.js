let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        document.getElementById('dogimg').src = data.message;
        console.log(data.message);
    }
};
 function sendAJAX() {
     xhr.open('GET', `https://dog.ceo/api/breeds/image/random`);
     xhr.send();
 }
   
xhr.open('GET', `https://dog.ceo/api/breeds/image/random`);
xhr.send();
//document.getElementById('load').style.display = "none";