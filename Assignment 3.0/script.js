let back = document.getElementById("back");
let home = document.getElementById("main");
let form = document.getElementById("reg");
let datapage = document.getElementById("getdata");
let hometknbtn = document.getElementById("tkn");
let homedtbtn = document.getElementById("dt");

back.addEventListener('click', () => {home.style.display = 'block'; form.style.display = 'none'; datapage.style.display = 'none';
});
hometknbtn.addEventListener('click', () => {home.style.display = 'none'; form.style.display = 'none'; datapage.style.display = 'none';
});