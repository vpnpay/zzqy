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

//选择图片，马上预览
            function xmTanUploadImg(obj) {
                var file = obj.files[0];
                
                console.log(obj);console.log(file);
                console.log("file.size = " + file.size);  //file.size 单位为byte

                var reader = new FileReader();

                //读取文件过程方法
                reader.onloadstart = function (e) {
                    console.log("开始读取....");
                }
                reader.onprogress = function (e) {
                    console.log("正在读取中....");
                }
                reader.onabort = function (e) {
                    console.log("中断读取....");
                }
                reader.onerror = function (e) {
                    console.log("读取异常....");
                }
                reader.onload = function (e) {
                    console.log("成功读取....");

                    var img = document.getElementById("xmTanImg");
                    img.src = e.target.result;
                    //或者 img.src = this.result;  //e.target == this
                }

                reader.readAsDataURL(file)
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
		Vue.component('zz-dl4',{
			template:'\
			<div class="zz-dl4">\
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
				zztc44val:false,
				zztc4vals:"",
				zztc44vals:" 请选择",
				myqylx:"",
				zztc5val:false,
				zztc6val:false,
				sfzbz:false,
				quxiaoqdhval:true,
				quxiaoqdhvals:"是",
				styless:{
					color: 'black'
				},
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
				quxiaoqdh(){
					if(this.quxiaoqdhvals == "否"){
						this.quxiaoqdhval = false;
					}else{
						this.quxiaoqdhval = true;
					}
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
				closetc44(){
					this.zztc44val = !this.zztc44val;
				},
				closetc5(){
					this.zztc5val = !this.zztc5val;
				},
				closetc6(){
					this.zztc6val = !this.zztc6val;
				},
				closetc44to(myqylx){
					switch(myqylx)
					{
					case 1:
					  this.zztc44vals="国有";
					  break;
					case 2:
					  this.zztc44vals="事业单位";
					  break;
					case 3:
					  this.zztc44vals="股份制";
					  break;
					case 4:
					  this.zztc44vals="社会团体";
					  break;
					case 5:
					  this.zztc44vals="民营";
					  break;
					case 6:
					  this.zztc44vals="个体工商户";
					  break;
					case 7:
					  this.zztc44vals="境外独资";
					  break;
					case 8:
					  this.zztc44vals="非盈利组织";
					  break;
					case 9:
					  this.zztc44vals="合资";
					  break;
					default:
					  this.zztc44vals="其他";
					}
					this.zztc44val = !this.zztc44val;
				},
				closetc4box(){
					this.zztc4val=false;
					this.sfzbz = false;
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
				closetc6to1(){
					this.zztc6val = !this.zztc6val;
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
				},
				imgandnext1(){
					document.getElementById("imgandnext1").click();
				},
				imgandnext2(){
					document.getElementById("imgandnext1").click();
				}
			}
		});

