const val=document.getElementById("input");
function num(v){
    val.value+=v;
}
function cls(){
    val.value="";
}
function equal(){
    val.value=eval(val.value);
}
function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
}