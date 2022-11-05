const temp = document.getElementById("user-card-template");
const contacts = document.getElementById("contacts");

document.addEventListener('userDataReady', e => {
    const content = JSON.parse(e.detail.jsonText);
    content.forEach(e => {
        createCard(e);
    })
    
});

const createCard = (user) => {
    let cloned = temp.content.cloneNode(true);
    cloned.querySelector('h1').innerHTML = user.firstName + " " + user.lastName;
    cloned.querySelector('img').alt = user.firstName + " " + user.lastName;
    cloned.querySelector('img').src = user.avatar;
    fill_address(user.address, cloned.querySelector('.address'));
    cloned.querySelector('.title.email').innerHTML = user.email;
    cloned.querySelector('.phone').querySelector('span').innerHTML = user.phoneNumber;
    cloned.querySelector('.homepage').querySelector('a').href = user.homepage;
    cloned.querySelector('.homepage').querySelector('a').innerHTML = user.homepage;
    contacts.appendChild(cloned);

}

const return_address = (address) => {
    streetZipCountry = [];
    for([key,value] of Object.entries(address)){
        streetZipCountry.push(value);
    }
    return streetZipCountry;
}

const fill_address = (address, target) => {
    let data = return_address(address);
    let paragraphs = target.querySelectorAll('p');
    paragraphs[0].innerHTML = data[0];
    paragraphs[1].innerHTML = data[2] + " " + data[1];
    paragraphs[2].innerHTML = data[3];
}

fetchUserData()

const arr = [ 2, 10, 7, 5, 1, 23 ];
arr.sort();
console.log(arr);