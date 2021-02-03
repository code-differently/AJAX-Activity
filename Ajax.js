
let xhr = new XMLHttpRequest
xhr.onreadystatechange= function(){
    if (xhr.readyState=== 4 && xhr.status ===200){
        let data =JSON.parse(xhr.responseText);
        let image;
        for(let i=0;i<3;i++){
            image =`<img src="${data.message[i]}">`; //accessing each index in the message array of the json file
            document.getElementById("ajax").innerHTML += image; //concatenating so that each old image is not replaced by the new image
            // same as saying:
            //document.getElementById("ajax").innerHTML = `<img src="${data.message[0]}"><img src="${data.message[1]}"><img src="${data.message[2]}">`
        }
    }
}
xhr.open ("GET","https://dog.ceo/api/breeds/image/random/3");
function fetch(){

xhr.send();
}