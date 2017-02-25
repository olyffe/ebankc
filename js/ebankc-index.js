	// 动态生成一级菜单栏 更多选项
	var nav1moreArray =[
		{
			title:"账户管理",
			flag:1
		},
		{
			title:"转账汇款",
			flag:1
		},{
			title:"投资理财",
			flag:1
		},{
			title:"收款业务",
			flag:0
		},{
			title:"付款业务",
			flag:1
		},{
			title:"集团理财",
			flag:1
		},{
			title:"国际业务",
			flag:1
		},{
			title:"网路融资",
			flag:1
		},{
			title:"贵宾室",
			flag:0
		},{
			title:"代理行业务",
			flag:1
		},{
			title:"企业年金",
			flag:1
		},{
			title:"商务卡管理",
			flag:1
		},{
			title:"托管服务",
			flag:1
		},{
			title:"指令查询与处理",
			flag:1
		}
	];
	var nav1dataArray=[];
	var nav1more =jQuery(".ebankc-mor-ul");
	// var checkedcount = 0;
	jQuery.each(nav1moreArray,function(index,value){
	     // console.log(value.title);
	     var level1more = jQuery("<li></li>");
	     if(value.flag == 1){
	     	// checkedcount = checkedcount+1;
	     	level1more.addClass('checked');
	     	nav1dataArray.push(value.title);
	     };
	     var amore = jQuery("<a href='javascript:;'>"+value.title+"<i></i></a>");
	     amore.appendTo(level1more);
	     level1more.appendTo(nav1more);
	});
	// if(checkedcount<6){
	// 	jQuery(".ebankc-more").css("display","none");
	// };

	// 动态生成一级菜单栏
	// console.log(nav1dataArray);
	var nav1 = jQuery(".ebankc-nav-ul");
	jQuery.each(nav1dataArray,function(index,value){
	     // alert(index+"..."+value);
	     var level1 = jQuery("<li><a href='javascript:;'>"+value+"</a></li>");
	     level1.appendTo(nav1);
	});
	
	// 一级菜单鼠标悬浮效果
	jQuery(".ebankc-nav ul.ebankc-nav-ul li a").hover(function(){
		jQuery(this).css({"background-color":"#C4000E","border-radius":"2px"});
	},function(){
		jQuery(this).css({"background-color":"transparent","border-radius":"0"});
	});

	 // 点击更多 展示隐藏nav1
	jQuery(".ebankc-more").bind("click",function(){
		var uldiv = jQuery(this).siblings('.ebankc-nav-uldiv');
		var add = jQuery(this).siblings('.ebankc-add');
		var showflag = uldiv.hasClass('ebankc-navulshow');
		// console.log(checkedflag);
		if(showflag){
			uldiv.removeClass('ebankc-navulshow');
			add.css('display',"none");
		}else{
			uldiv.addClass('ebankc-navulshow');
			add.css('display',"block");
		};
	});

	 // 点击添加加号  展示一级菜单选项
	jQuery(".ebankc-add").bind("click",function(){
		jQuery(".ebankc-more-sheet").css("display","block");
	});

	// 点击更多菜单选项按钮，切换样式
	jQuery(".ebankc-mor-ul li a").bind("click",function(){
		var liparent = jQuery(this).parent("li");
		var checkedflag = liparent.hasClass('checked');
		// console.log(checkedflag);
		if(checkedflag){
			liparent.removeClass('checked');
		}else{
			liparent.addClass('checked');
		};
	});

	// 点击确定  保存更改
	jQuery(".confirm").bind("click",function(){
		nav1dataArray=[];
		// console.log(nav1dataArray);
		jQuery(".ebankc-mor-ul li").each(function(){
			var title = jQuery(this).text();
			var flag = jQuery(this).hasClass('checked');
			if(flag){
				// console.log(title);
				nav1dataArray.push(title);
			}
			// console.log(title);
		});
		// console.log(nav1dataArray);
		nav1.empty();
		jQuery("<li><a href='javascript:;'>首页</a></li>").appendTo(nav1);
		jQuery.each(nav1dataArray,function(index,value){
	     // alert(index+"..."+value);
		     var level1 = jQuery("<li><a href='javascript:;'>"+value+"</a></li>");
		     level1.appendTo(nav1);
		});
		jQuery(".ebankc-more-sheet").css("display","none");
		jQuery(".ebankc-add").css("display","none");
		
	});

	// 动态生成左侧二级菜单栏
	var nav2dataObject = {
		level2data1:{
			title:"境内人民币汇款",
			nav3:{
				level3data1:{
					title:"1汇款",
					nav4:{
						level4data1:{
							title:"3.1",
							nav5:{}
						},
						level4data2:{
							title:"3.1",
							nav5:{}
						}
					}
				},
				level3data2:{
					title:"同城跨行汇款",
					nav4:{}
				}
			}
		},
		level2data2:{
			title:"境内外币汇款",
			nav3:{
				level3data1:{
					title:"同城跨行汇款",
					nav4:{}
				},
				level3data2:{
					title:"贷款资金支付",
					nav4:{}
				},
				level3data3:{
					title:"贷款资金支付",
					nav4:{}
				}
			}
		},level2data3:{
			title:"更多",
			nav3:{}
		}
	};
	var nav2 = jQuery(".ebankc-nav2");
	jQuery.each(nav2dataObject,function(name,value){
		var level2 =jQuery("<li class='ebankc-level2'></li>");
		var title = jQuery("<a href='javascript:;'><span>"+value.title+"</span></a>");
		// console.log(title);
		title.appendTo(level2);
		var nav3obj = value.nav3;
		if(!(jQuery.isEmptyObject(nav3obj))){
			// nav3不为空
			var flag3 =0;
			var nav3 =jQuery("<ul class='ebankc-nav3'></ul>");
			jQuery.each(nav3obj,function(name,value) {
				flag3=flag3+1;
				var level3 =jQuery("<li class='ebankc-level3'></li>");
				
				var title = jQuery("<a href='javascript:;'><span>"+value.title+"</span></a>");
				title.appendTo(level3);
				var nav4obj = value.nav4;
				if(!(jQuery.isEmptyObject(nav4obj))){
					// nav4不为空
					var flag4 =0;
					var nav4 =jQuery("<ul class='ebankc-nav4'></ul>");
					jQuery.each(nav4obj,function(name,value){
						flag4=flag4+1;
						var level4 =jQuery("<li class='ebankc-level4'></li>");
						if(flag4==1){
							level4.addClass('active');
						};
						var title = jQuery("<a href='javascript:;'><span>"+value.title+"</span></a>");
						title.appendTo(level4);
						level4.appendTo(nav4);
					});
					nav4.appendTo(level3);
				}else {
					if(flag3==1){
						level3.addClass('active');
					};
				};
				level3.appendTo(nav3);
			});
			nav3.appendTo(level2);
		};
		level2.appendTo(nav2);
	});


	//2、3、4级菜单 点击效果
	jQuery(".ebankc-level2>a").click(function(){
		jQuery(this).next().show().parent().siblings().children('ul').hide();
		jQuery(this).next().children('li:eq(0)').children('ul').show().parent().siblings().children('ul').hide();
		return false;
	});
	jQuery(".ebankc-level3>a").click(function(){
		var flag = jQuery(this).next().length;
		if(flag==1){
			// nav4存在
			jQuery(this).parent().removeClass('active').siblings().removeClass('active');
			jQuery(this).next().show();
			jQuery(this).parent().siblings().children('ul').hide();
		}else{
			jQuery(this).parent().siblings().children('ul').hide();
			jQuery(this).parent().addClass('active').siblings().removeClass('active').find('li').removeClass('active');	
		};
		return false;
	});
	jQuery(".ebankc-level4>a").click(function(){
		jQuery(this).parent("li").parent("ul").parent("li").removeClass('active').siblings().removeClass('active');
		jQuery(this).parent("li").addClass('active').siblings('li').removeClass('active');
		return false;
	});

	
