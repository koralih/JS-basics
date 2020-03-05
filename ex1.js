function hh() {
    var myobj, myJSON, obj;
    text = localStorage.getItem("testJSON");
    myobj = JSON.parse(text);
    let x = myobj.name;
    document.getElementById("1").value = x;
    document.getElementById("2").value = myobj.username;
    document.getElementById("3").value = myobj.age;
}
function zz() {
    var myobj, myJSON, obj;
    obj = { name: "", username: "", age: "" }
//obj = JSON.parse(text);
    obj.name = document.getElementById("1").value;
    obj.username = document.getElementById("2").value;
    obj.age = document.getElementById("3").value;
    myJSON = JSON.stringify(obj);

    localStorage.setItem("testJSON", myJSON);
}