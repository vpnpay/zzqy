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

		Vue.component('zz-hd1',{
			template:'\
			<div class="zz-hd">\
				<div class="zz-hd-a">\
					<slot name="title"></slot>\
				</div>\
				<div class="zz-hd-b">\
					<a href="#">\
						<img src="./zzqy/img/icon-home.png">\
					</a>\
				</div>\
			</div>'
		});
		Vue.component('zz-dl1',{
			template:'\
			<div class="zz-dl1">\
				<dl>\
					<dt>\
						<slot name="title"></slot>\
					</dt>\
					<dd>\
						<slot name="inputval"></slot>\
					</dd>\
				</dl>\
			</div>'
		});
		Vue.component('zz-dl2',{
			template:'\
			<div class="zz-dl2">\
				<dl>\
					<dt>\
						<slot name="title"></slot>\
					</dt>\
					<dd>\
						<slot name="inputval"></slot>\
					</dd>\
					<dd>\
						<slot name="thirddiv"></slot>\
					</dd>\
				</dl>\
			</div>'
		});
		Vue.component('zz-dl2',{
			template:'\
			<div class="zz-dl2">\
				<dl>\
					<dt>\
						<slot name="title"></slot>\
					</dt>\
					<dd>\
						<slot name="inputval"></slot>\
					</dd>\
					<dd>\
						<slot name="thirddiv"></slot>\
					</dd>\
				</dl>\
			</div>'
		});
		Vue.component('zz-pres',{
			template:'\
			<div class="zz-pres">\
				<slot name="pclass"></slot>\
				<p>\
					<slot nama="ptext"></slot>\
				</p>\
			</div>'
		});
		var app = new Vue({
			el:'#app',
			data:{
				zzrd1val:false,
				zztc1val:false
			},
			methods:{
				zzrd1valc(){
					this.zzrd1val = !this.zzrd1val;
				},
				mfhq(mfhqval){
					setInterval(function(){
						if(mfhqval > 0){
							mfhqval--;
							document.getElementById("mfhqval").innerHTML=mfhqval+"s";
						}
					},1000);
				},
				closetc1(){
					this.zztc1val = !this.zztc1val;
				}
			}
		});