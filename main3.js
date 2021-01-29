let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        document.getElementById('dogimg').src = data.message[0];
        document.getElementById('dogimg1').src = data.message[1];
        document.getElementById('dogimg2').src = data.message[2];
        // console.log(data.message);
    }   
    //     for (i= 0; i < data.message.length; i++){
    //     document.getElementById('dogimg').src = data.message[i];
    //     }
    //      console.log(data.message.length);

    // }
};
  function sendAJAX() {
     xhr.open('GET', `https://dog.ceo/api/breeds/image/random/3`);
     xhr.send();
   }
    // let dogImg = new Image();
    // dogImg.src = "https://images.dog.ceo/breeds/husky/n02110185_11396.jpg";
// }
// xhr.open('GET', `https://dog.ceo/api/breeds/image/random`);
// xhr.send();
// //document.getElementById('load').style.display = "none";