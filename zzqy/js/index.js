function placeholderPic(){
var w = document.documentElement.offsetWidth; 
if(w>640){
	document.documentElement.style.fontSize=50+'px';
}else{
	document.documentElement.style.fontSize=w/6.4+'px';
}
}
placeholderPic();
window.onresize=function(){
placeholderPic();
}