let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        document.getElementById('dog image').src = data.message[0];
        document.getElementById('dog image1').src = data.message[1];
        document.getElementById('dog image2').src = data.message[2];
        console.log(data.message);
    }
};

function sendAJAX() {
    xhr.open ('GET', `https://dog.ceo/api/breeds/image/random/3`);
    xhr.send();

}
xhr.open ('GET', `https://dog.ceo/api/breeds/image/random`);

xhr.send();
//document.getElementById('load').style.display = "none";
