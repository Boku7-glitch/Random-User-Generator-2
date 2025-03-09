const img =
    document.querySelector('#img');
const name =
    document.querySelector('#name');
const age =
    document.querySelector('#age');
const dob =
    document.querySelector('#dob');
const gender =
    document.querySelector('#gender');
const email =
    document.querySelector('#email');
const phone =
    document.querySelector('#phone');
const address =
    document.querySelector('#address');
const generateBtn =
    document.querySelector('#generate');


generateBtn.addEventListener('click', (e) => {
    getUserInfo()
})

async function getUserInfo() {
    const response =
        await fetch('https://randomuser.me/api/');
    const result = await response.json();
    console.log(result);
    setUserInfo(result);
}

function setUserInfo(result) {
    img.src = results.picture.large;
    name.textContent =
        results.name + " " + results.name.last;
    age.textContent = results.dob.age;
    dob.textContent = results.dob.date.split("T")[0];
    gender.textContent = results.gender;
    email.textContent = results.email;
    phone.textContent = results.phone;
    address.textContent =
        results.location.country + " " +
        results.location.city;
}