var object={
    "btn":{
        "other_actions":".btns-aditional-actions"
    },
    "pdf":{
        "des":"bio-desayuno.png",
        "alm":"bio-lunch.png"
    },
    "ing":{
        "des":"bio-desayuno.png",
        "alm":"bio-lunch.png"
    }
}

function des(){
    console.log(object.pdf.des);
    var x = document.getElementById("desayunoclass");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 

    x = document.getElementById("lunchclass");
    x.style.display = "none";
    //document.getElementById("elPdf2").innerHTML = "<div class='mx-auto' style='margin: 5px;align-content: center;'><img src='files/" + object.pdf.des + "' class='menu' width='100%''></img></div>";
}


function alm(){
    var x = document.getElementById("lunchclass");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 

    x = document.getElementById("vinoclass");
    x.style.display = "none";
}



function vin(){
    var x = document.getElementById("vinoclass");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 

    x = document.getElementById("lunchclass");
    x.style.display = "none";

}


