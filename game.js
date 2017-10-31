(function(){
	var ctx=null;
	var Game={
		canvas:document.getElementById('canvas');
		setup:function(){
			if(this.canvas.getContext){
				ctx=this.canvas.getContext('2d');
				this.width=this.canvas.width;
				this.height=this.canvas.height;
				
			}
		},
		init:function(){
			Background.init();
			Hub.init();
			Ball.init();
			Paddle.init();
			Bricks.init();
		},
		draw:function(){
			ctx.clearRect(0,0,this.width,this.height);
			Background.draw();
			Bricks.draw();
			Paddle.draw();
			Hub.draw();
			Ball.draw();
		}
	};
	var Background={
		init:function(){
			init:function(){
				this.ready=false;
				this.img=new Image();
				this.img.src="background.jpg";
			}
			this.img.onload=function(){
				Background.ready=true;
			}
		},
		draw:function(){
			if(this.ready){
				ctx.drawImage(this.img,0,0);
			}
		}
	};
	
	var Bricks={
		gap:2,//间隙
		col:5,
		w:80,
		h:15,
		init:function(){
			this.row=3;
			this.total=0;
			this.count=new Array(this.row);
			for(var i=0;i<this.row;i++){
				this.count[i]=new Array(this.col);
				for(var j=0;j<this.col;j++){
					this.count[i][j]=true;
				}
			}
		},
		draw:function(){
			
		}
	};
	var Ball={
		init:function(){
			for(var i=0;i<this.row;i++){
				for(var j=0;j<this.col;j++){
					if(this.count[i][j]!==false){
						ctx.fillStyle=this.gradient(i);
						ctx.fillRect(this.x(j),this.y(i),this.w,this.h);
					}
				}
			}
		},
		gradient:function(row){
			switch(row){
				case 0:
					return this.gradientPurple?this.gradientPurple:this.gradientPurple=this.makeGradient(row,'#bd06f9','#9604c7');
				case 1:
					return this.gradientPurple?this.gradientPurple:this.gradientPurple=this.makeGradient(row,'#f9064a','#c7043b');
				case 2:
                    return this.gradientGreen?this.gradientGreen:this.gradientGreen = this.makeGradient(row,'#05fa15','#04c711');
                default:
                    return this.gradientOrange?this.gradientOrange:this.gradientOrange = this.makeGradient(row,'#faa105','#c77f04');   
			}
		},
		makeGradient:function(row,color1,color2){
			var y=this.y(row);
			var grad=ctx.createLinearGradient(0,y,0,y+this.h);
			grad.addColorStop(0,color1);
			grad.addColorStop(1,color2);
			return grad;
		},
		x:function(col){
			return (this.w+this.gap)*col;
		}
		y:function(){
			return (this.h+this.gap)*row;
		}
		draw:function(){
			
		}
	};
	var Paddle={
		init:function(){
			
		},
		draw:function(){
			
		}
	};
	var Ctrl={
		init:function(){
			
		},
		draw:function(){
			
		}
	};
	var Hub={
		init:function(){
			
		},
		draw:function(){
			
		}
	};
	var Screen={
		init:function(){
			
		},
		draw:function(){
			
		}
	};
})()
