
let xhr = new XMLHttpRequest
xhr.onreadystatechange= function(){
    if (xhr.readyState=== 4 && xhr.status ===200){
    let data =JSON.parse(xhr.responseText);
    let image=`<img src="${data.message}">`;
    document.getElementById("ajax").innerHTML=image;

    }
}
xhr.open ("GET","https://dog.ceo/api/breeds/image/random");
function fetch(){

xhr.send();
}