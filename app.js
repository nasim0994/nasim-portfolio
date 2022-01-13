var a;
function showHide(){
    if(a==1){
        document.querySelector('.headerManu').style.display = "block";
        return a=0;
    }
    else{
        document.querySelector('.headerManu').style.display = "none";
        return a=1;
    }
}
