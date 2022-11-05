let temp = document.getElementById("contact-template");
let form = document.getElementById("form");
let index = document.getElementById("contacts");

form.addEventListener("submit",function submitHandler(e){
    e.preventDefault();
    const formData = new FormData(form);
    let cloned = temp.content.cloneNode(true);
    let h2 = cloned.querySelector("h2");
    let email = cloned.querySelector(".email");
    let homepage = cloned.querySelector(".homepage");
    let anchor = homepage.querySelector("a");

    h2.innerText = formData.get('name');
    email.innerText = formData.get('email');
    anchor.href = formData.get('homepage');
    anchor.innerText = formData.get('homepage');

    index.appendChild(cloned);
    form.reset();
});