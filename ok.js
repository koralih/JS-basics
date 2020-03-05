function lod(){
    var tach=JSON.parse(localStorage.getItem("task"));
    var p = JSON.parse(localStorage.getItem("con")); 
    var t = JSON.parse(localStorage.getItem("users") ) || [];
    var ul = document.getElementById("ul");
    tach.forEach(e => {
        var z = t.find(w => w.id == e.userid);
        if (p.id==e.userid){
        var html=`
         <li> les taches de ${z.name} : ${z.username} taches sont ${e.desc1} et ${e.desc2}  </li>
        `
        ul.innerHTML+=html}

    })

}