const url = "http://127.0.0.1:12345";
let tkn="";



let back = document.getElementById("back");
let home = document.getElementById("main");
let form = document.getElementById("reg");
let datapage = document.getElementById("getdata");
let hometknbtn = document.getElementById("tkn");
let homedtbtn = document.getElementById("dt");
let displaytkn= document.getElementById("user_token");
const getToken = async () => {
    await fetch(url+"/get_token").then(res => res.json()).then(data => {tkn = data['token'].toString();});
    
};


hometknbtn.addEventListener('click', async () => {
    await getToken();
    home.style.display = 'none'; form.style.display = 'block'; datapage.style.display = 'none';
    displaytkn.innerHTML="(Your unique token is : )"+tkn;
    
});

/*const getToken = async () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      tkn = this.responseText;
    }
    };
    xhttp.open("GET","http://127.0.0.1:12345/get_token", true);
    xhttp.send();
};*/

// Events
hometknbtn.addEventListener('click', async () =>{
    await getToken();
    home.style.display = 'none';
    form.style.display = 'block';
    console.log(tkn);
    displaytkn.innerHTML = "The token is: " + tkn;
    console.log('Done');
});

back.addEventListener('click', () => {
    home.style.display = 'block'; form.style.display = 'none'; datapage.style.display = 'none';
});
homedtbtn.addEventListener('click', () => {home.style.display = 'none'; form.style.display = 'none'; datapage.style.display = 'block';
});

