function lo(){
    var tach=JSON.parse(localStorage.getItem("task")) || [];
    var t = JSON.parse(localStorage.getItem("users") ) || [];
    var ul = document.getElementById("ul");
    ul.innerHTML="";
    
    tach.forEach(e => {
        var z = t.find(w => w.id == e.userid);

        var html=`
         <li> les taches de ${z.name} : ${z.id} taches sont ${e.desc1} et ${e.desc2}  </li>
        `
        ul.innerHTML+=html

    })
    t.forEach(s=>{
       var x = document.getElementById("3");
        var option = document.createElement("option");
  option.text = s.name;
  x.add(option);

        
})

}

function aj(){
    var tach=JSON.parse(localStorage.getItem("task")) || []
    var obj = new Object();
    obj.id=Math.floor(Math.random() * 1000);
    var t = JSON.parse(localStorage.getItem("users") ) || [];
    obj.desc1=document.getElementById("1").value;
    obj.desc2=document.getElementById("2").value;
    var select=document.getElementById("3");
    var z = t.find(w => w.name==select.options[select.selectedIndex].text);
    console.log(z);
    
    obj.userid=z.id;
    tach.push(obj);
    localStorage.setItem("task",JSON.stringify(tach));
}
function ef(){
    var tach=JSON.parse(localStorage.getItem("task")) || []
    tach.pop();
    localStorage.setItem("task",JSON.stringify(tach))
}