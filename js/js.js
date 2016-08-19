/**
 * Created by Administrator on 2016/8/19.
 */
var circle=document.querySelector(".circle");

circle.onmouseenter= function () {
fun(this);
};

function fun(obj){
    obj.style.background="none";
    for(i=0;i<4;i++){
        var div=document.createElement("div");
        div.onmouseenter=function(){
            fun(this);
        };
        div.className="pro_circle pos"+i;
        div.style.backgroundColor=rgb();
        console.log(rgb());
        obj.appendChild(div);
    }
    obj.onmouseenter=function(){return}
}
function rgb(){
    var r=Math.floor(Math.random()*257);
    var g=Math.floor(Math.random()*257);
    var b=Math.floor(Math.random()*257);
    console.log(r,g,b);
    return "rgb("+r+","+g+","+b+")";

}
//console.log(rgb())
rgb();