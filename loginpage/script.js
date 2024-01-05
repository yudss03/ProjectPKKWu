const cover1 = document.querySelector(".cover");
const flipSignup = document.getElementById("#flip-signup");
const cover2 = document.querySelector(".cover2");
const flipLogin = document.getElementById("#flip-login");

let onClick = true;
flipSignup.addEventListener('click', () => {
    if(!onClick) {
        flipSignup.classList.add('onClick');
    }
});
