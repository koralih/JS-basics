function zz() {
    var myobj, myJSON, obj;
    obj = { name: "", username: "", age: "" }
    //obj = JSON.parse(text);
    obj.name = document.getElementById("1").value;
    obj.username = document.getElementById("2").value;
    myJSON = JSON.stringify(obj);

    localStorage.setItem("testJSON", myJSON);
}
function hh() {
    var myobj, myJSON, obj;
    var t = JSON.parse(localStorage.getItem("users")) || [];
    var obj = new Object();
    var z = t.find(w => w.name == document.getElementById("1").value && w.username == document.getElementById("2").value);
    if (z) {
        console.log(z);

        if (z.name == "admin" && z.username == "admin")
            window.location.href = "admin.html"
        else { localStorage.setItem("con", JSON.stringify(z)) 
        window.location.href = "ok.html";}
        //ay hkeya
    }

    else
        window.location.href = "eX2.html";


    // text = localStorage.getItem("testJSON");
    // myobj = JSON.parse(text);
    // let x = myobj.name;
    //    if( document.getElementById("1").value == x &&
    //     document.getElementById("2").value == myobj.username)
    //     alert("logged in");
    //     else
    //     alert("veuillez vous inscrie")
}
// var t = JSON.parse(localStorage.getItem("users") ) || [];
function tab() {
    var myJSON;
    var t = JSON.parse(localStorage.getItem("users")) || [];

    var obj = new Object();
    obj.id = Math.floor(Math.random() * 1000);
    obj.name = document.getElementById("1").value;
    obj.username = document.getElementById("2").value;
    //t.pop(obj);
    t.push(obj);
    myJSON = JSON.stringify(t);
    localStorage.setItem("users", myJSON);
}