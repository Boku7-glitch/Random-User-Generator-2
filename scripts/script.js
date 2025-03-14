const img = document.querySelector('#img');
const nameElement = document.querySelector('#name');
const ageElement = document.querySelector('#age');
const dobElement = document.querySelector('#dob');
const genderElement = document.querySelector('#gender');
const emailElement = document.querySelector('#email');
const phoneElement = document.querySelector('#phone');
const addressElement = document.querySelector('#address');
const generateBtn = document.querySelector('#generate');
const info = document.querySelector('.info');

generateBtn.addEventListener('click', () => {
    getUserData();
});

async function getUserData() {
    const url = `https://randomuser.me/api/`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const user = json.results[0];

        const fullName = `${user.name.first} ${user.name.last}`;
        const gender = user.gender;
        const country = user.location.country;
        const city = user.location.city;
        const email = user.email;
        const dob = new Date(user.dob.date).toLocaleDateString();
        const age = user.dob.age;
        const icon = user.picture.medium;

        info.innerHTML = `
            <img src="${icon}" alt="User Image">
            <h3>Country: ${country}, ${city}</h3>
            <h2>Name: ${fullName}</h2>
            <p>Gender: ${gender}</p>
            <p>Age: ${age}</p>
            <p>Date Of Birth: ${dob}</p>
            <p>Email: ${email}</p>
        `;
    } catch (error) {
        console.error("Error fetching user data:", error.message);
    }
}
