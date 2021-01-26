const xmlhttp = new XMLHttpRequest();
const url = "https://dog.ceo/api/breeds/image/random";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const returnArr = JSON.parse(this.responseText);
        ParseImage(returnArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function ParseImage(arr) {
    const out = "";
    let i;
    for(i = 0; i < arr.length; i++) {
        out += '<img src="' + arr[i].url + '">' +
        arr[i].display + '</img><br>';
    }
    document.getElementById("emptyDiv").innerHTML = out;
}