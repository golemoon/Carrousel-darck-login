const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');

function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (name === '' || email === '' || password === '') {
        errorMessage.textContent = 'Veuillez remplir tous les champs.';
    } else {
        window.location.href = 'Principal.html';
    }
}

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
