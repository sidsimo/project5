document.getElementById("select").onchange = ()=> {
    if(select.value == "btoa") {
        document.getElementById("text").value = window.btoa(document.getElementById("textarea").value);
    } else if(select.value == "atob"){
        document.getElementById("text").value = window.atob(document.getElementById("textarea").value);
    } else {
        window.alert("Error try again!!");
    }
}