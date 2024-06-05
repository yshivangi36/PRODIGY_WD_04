let tabLink=document.getElementsByClassName("tab-link");
let tabContant=document.getElementsByClassName("tab-contant");
function opentab(tabname){
    for(tablinks of tabLink ){
        tablinks.classList.remove("active-link")
    }
    for(tabcontants of tabContant  ){
        tabcontants.classList.remove("active-contant")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-contant")
}