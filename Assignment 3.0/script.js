const url = "http://127.0.0.1:12345";
let tkn="";

let back = document.getElementById("back");
let back_sec= document.getElementById("back_sec");
let home = document.getElementById("main");
let regpage = document.getElementById("reg");
let datapage = document.getElementById("getdata");
let hometknbtn = document.getElementById("tkn");
let homedtbtn = document.getElementById("dt");
let displaytkn= document.getElementById("user_token");
let unameinp= document.getElementById("nameinp");
let udatainp= document.getElementById("datainp");
let rform= document.getElementById("regfrm");
let dform= document.getElementById("tknfrm");
let show= document.getElementById("show");
let fill= document.getElementById("res");

const getToken = async () => {
    let response=await fetch(url+"/get_token");
    if(response.ok)
    {
        let json = await (await response.text()).toString();
        tkn=json.slice(14,30);
    }
    else
    {
        alert("HTTP-Error: " + response.status);
    }
};

// Events
hometknbtn.addEventListener('click', async () =>{
    await getToken();
    fill.innerHTML="";
    home.style.display = 'none';
    regpage.style.display = 'block';
    console.log(tkn);
    displaytkn.innerHTML = "The token is: " + tkn;
    console.log('Done');
});

back.addEventListener('click', () => {
    home.style.display = 'block'; regpage.style.display = 'none'; datapage.style.display = 'none';
});
back_sec.addEventListener('click', () => {
    home.style.display = 'block'; regpage.style.display = 'none'; datapage.style.display = 'none';
});
homedtbtn.addEventListener('click', () => {home.style.display = 'none'; regpage.style.display = 'none'; datapage.style.display = 'block';
});


rform.onsubmit = async (e) =>
{
    e.preventDefault();
    let user =
    {
        "username" : unameinp.value,
        "data" : udatainp.value,
        "token" : tkn
    };
    console.log(user);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
            
            fill.innerHTML=xhttp.responseText.toUpperCase();
            unameinp.value="";
            udatainp.value="";
        }
    }
    xhttp.open("POST", url+"/register", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(user));
}

let token= document.getElementById("tokeninp");
let uname= document.getElementById("uname");
let udata= document.getElementById("udata");


dform.onsubmit = async (e) =>
{
    e.preventDefault();
    let obj=
    {
        "token" : token.value
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) 
        {
            show.style.display= 'block';
            uname.innerHTML=JSON.parse(xhttp.responseText).username;
            udata.innerHTML=JSON.parse(xhttp.responseText).data;
            token.value="";
        }
    }
    xhttp.open("POST", url+"/get_data", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(obj));
}