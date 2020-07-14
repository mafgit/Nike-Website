let m = document.querySelectorAll(".m");
let w = document.querySelectorAll(".w");

let mcount = 0;
let fcount = 0;


function Right(){
    if (mcount < m.length - 3){
        m[mcount].style.display="none";
        mcount++;
    }
    if(mcount == m.length - 3){
        mright.style.visibility = "hidden";
    }
    mleft.style.visibility = "visible";
}

function Left(){
    mright.style.visibility = "visible";
    if(mcount > 0){
        mcount--;
        m[mcount].style.display = "inline-block";
        
    }
    if (mcount == 0){
        mleft.style.visibility = "hidden";
    }
}



function wRight(){
    if (fcount < w.length - 3){
        w[fcount].style.display="none";
        fcount++;
    }
    if(fcount == w.length - 3){
        wright.style.visibility = "hidden";
    }
    wleft.style.visibility = "visible";

}

function wLeft(){
    wright.style.visibility = "visible";
    if(fcount > 0){
        fcount--;
        w[fcount].style.display = "inline-block";
    }
    if (fcount == 0){
        wleft.style.visibility = "hidden";
    }
}