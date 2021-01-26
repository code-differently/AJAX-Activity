
//GetPicture_OnClick();

function GetPicture_OnClick() {
    const emptyDiv = document.getElementById('emptyDiv');
    const dogURL = `https://picsum.photos/400`;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const xhr = new XMLHttpRequest();

    emptyDiv.innerHTML = "";

    xhr.open('GET', proxy + dogURL, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {

            console.log('status 4');

            if (xhr.status === 200) {

                console.log('status 200');

                const dogImage = document.createElement("img");
                dogImage.src = xhr.responseURL;
                emptyDiv.appendChild(dogImage);

            }
        }
        else if (xhr.status === 499) {
            console.log('... waiting for thumbnail');
            retryAfter5s(); // implementation of retry loop is not important there
        }
        else {
            console.log('Image not found');
        }
    };

    xhr.send();
}
