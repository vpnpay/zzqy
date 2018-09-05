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
		Vue.component('zz-dl3',{
			template:'\
			<div class="zz-dl1 zz-dl3">\
				<dl>\
					<div>\
						<slot name="title"></slot>\
					</div>\
					<div>\
						<slot name="inputval"></slot>\
					</div>\
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
					<dd class="first">\
						<slot name="inputval"></slot>\
					</dd>\
					<dd class="last">\
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
				zztc1val:false,
				zztc2val:false,
				zztc3val:false,
				zztc4val:false,
				zztc4vals:"",
				zztc5val:false,
				sfzbz:false,
				styless1: {
	                color: 'black'
	            },
				styless2: {
	                color: 'black'
	            },
				styless3: {
	                color: 'black'
	            }
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
				},
				closetc2(){
					this.zztc2val = !this.zztc2val;
				},
				closetc3(){
					this.zztc3val = !this.zztc3val;
				},
				closetc4(){
					this.zztc4val = !this.zztc4val;
				},
				closetc5(){
					this.zztc5val = !this.zztc5val;
				},
				closetc4to1(){
					if(this.zztc4vals="护照"){
						this.styless1.color = 'red';
						this.styless2.color = 'black';
						this.styless3.color = 'black';
						
					}else{
						this.styless1.color = 'black';
						this.zztc4vals = "护照";
					}
					this.zztc4val = !this.zztc4val;
					this.sfzbz = false;
				},
				closetc4to2(){
					if(this.zztc4vals="身份证"){
						this.styless2.color = 'red';
						this.styless1.color = 'black';
						this.styless3.color = 'black';
					}else{
						this.styless2.color = 'black';
						this.zztc4vals = "身份证";
					}
					this.zztc4val = !this.zztc4val;
					this.zztc5val = !this.zztc5val;
					this.sfzbz = true;
				},
				closetc4to3(){
					if(this.zztc4vals="驾驶证"){
						this.styless3.color = 'red';
						this.styless2.color = 'black';
						this.styless1.color = 'black';
						
					}else{
						this.styless3.color = 'black';
						this.zztc4vals = "驾驶证";
					}
					this.zztc4val = !this.zztc4val;
					this.sfzbz = false;
				}
			}
		});