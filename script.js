const container = document.querySelector(".auth-container");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

document.getElementById("showSignup").onclick = () => {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
};

document.getElementById("showLogin").onclick = () => {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
};

document.getElementById("slideSignup").onclick = () => {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
};

document.getElementById("slideLogin").onclick = () => {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
};

/* Dark Mode Toggle */
document.getElementById("themeSwitch").addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

/* Lottie Animations */
lottie.loadAnimation({
    container: document.getElementById('loginAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://assets10.lottiefiles.com/packages/lf20_w51pcehl.json"
});

lottie.loadAnimation({
    container: document.getElementById('signupAnim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "https://assets1.lottiefiles.com/packages/lf20_puciaact.json"
});
