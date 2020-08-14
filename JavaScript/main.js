var div_list=document.getElementsByTagName("div");

for(var i=0; i<div_list.length; i++) {
    var red=Math.floor(Math.random()*256);  //0부터 255까지의 난수
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);

    //백틱(`) : ES2015 버전 이상에서만 사용 가능한 연산자
    var s="rgb ("+red+","+green+","+blue+")";
    var color_string=`rgb(${red}, ${green}, ${blue})`;
    div_list[i].style.backgroundColor=color_string;
    div_list[i].innerHTML=color_string;
}