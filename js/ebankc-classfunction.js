    jQuery(".select").focus(function() {
       jQuery(this).css("border","1px solid #09f");
    });
    jQuery(".select").blur(function() {
       jQuery(this).css("border","1px solid #fff");
    });

    // 新功能介绍 遮罩框
    var bodyheight = jQuery("body").css("height");
    jQuery("#presentmask").css("height",bodyheight);
    var clickcount=0;
    jQuery(".ebankc-newpresentnext").bind('click',function(){
        var lislen =jQuery(this).siblings('ul').find('li').length;
        clickcount =clickcount+1;
        jQuery(".ebankc-newpresentpre").removeClass('ebankc-newpresentstart');
        if(lislen == 4){
            if(clickcount==1){
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else if(clickcount==2){
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else if(clickcount==3){
                jQuery(this).addClass('ebankc-newpresentend');
                jQuery(".ebankc-newpresentmore").css('display','block');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');           
            }else{
                clickcount=4;
                jQuery(".ebankc-shade").css('display','none');
                jQuery(".ebankc-newpresent").css('display','none');            
            };  
        }else if(lislen == 3){
            if(clickcount==1){
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else if(clickcount==2){
                jQuery(this).addClass('ebankc-newpresentend');
                jQuery(".ebankc-newpresentmore").css('display','block');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else{
                clickcount=3;
                jQuery(".ebankc-shade").css('display','none');
                jQuery(".ebankc-newpresent").css('display','none');            
            };  
        }else if(lislen == 2){
            if(clickcount==1){
                jQuery(this).addClass('ebankc-newpresentend');
                jQuery(".ebankc-newpresentmore").css('display','block');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else{
                clickcount=2;
                jQuery(".ebankc-shade").css('display','none');
                jQuery(".ebankc-newpresent").css('display','none');
            }; 
        };    
    });
    jQuery(".ebankc-newpresentpre").bind('click',function(){
        var lislen =jQuery(this).siblings('ul').find('li').length;
        clickcount =clickcount-1;
        jQuery(".ebankc-newpresentnext").removeClass('ebankc-newpresentend');
        if(lislen == 4){
            if(clickcount == 2){
                jQuery(".ebankc-newpresentmore").css('display','none');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else if(clickcount == 1){
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else if(clickcount == 0){
                jQuery(this).addClass('ebankc-newpresentstart');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else{
                clickcount = 0;
            };  
        }else if(lislen == 3){
            if(clickcount == 1){
                jQuery(".ebankc-newpresentmore").css('display','none');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else if(clickcount == 0){
                jQuery(this).addClass('ebankc-newpresentstart');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else{
                clickcount = 0;
            };  
        }else if(lislen ==2){
            if(clickcount == 0){
                jQuery(".ebankc-newpresentmore").css('display','none');
                jQuery(this).addClass('ebankc-newpresentstart');
                jQuery(".ebankc-newpresentchangeimg ul").find("li:eq("+clickcount+")").addClass('ebankc-imgshow').siblings('li').removeClass('ebankc-imgshow');
                jQuery(".ebankc-newpresentchange ul").find("li:eq("+clickcount+")").addClass('ebankc-dotcurrent').siblings('li').removeClass('ebankc-dotcurrent');
            }else{
                clickcount = 0;
            };
        };      
    });
    jQuery(".ebankc-newpresentclose").bind('click',function(){
        jQuery(".ebankc-shade").css('display','none');
        jQuery(".ebankc-newpresent").css('display','none');   
    });


    // part和block渲染一致,下一版本需注释掉
    jQuery(".ebankc-mc-part:gt(0)").css("borderTop","none");



    // .ebankc-mcp-row padding变化label垂直方向top对齐
    var rowpaddingchange =function(classname){
        jQuery(classname).each(function(){
            var rowheight = jQuery(this).height();
            if(rowheight > 42){
                jQuery(this).children("label").css("vertical-align","top"); 
            }else if(rowheight >= 32){
               jQuery(this).css("padding-bottom","5px");
               jQuery(this).children("label").css("vertical-align","middle");
            }else if(rowheight > 0){
                jQuery(this).css("padding-bottom","15px");
                jQuery(this).children("label").css("vertical-align","middle");
            };
        });
    };
    rowpaddingchange(".ebankc-mc-queryterms .ebankc-mcp-row");
    rowpaddingchange(".ebankc-mc-1cols .ebankc-mcp-row");
    
    



    //判断浏览器是否支持placeholder属性
	var supportPlaceholder='placeholder'in document.createElement('input');
    var supportPlaceholdertextarea='placeholder'in document.createElement('textarea');
	placeholder=function(element){
	    var text = element.attr('placeholder');
	    var defaultValue = element.val();
	    if(!defaultValue){
	    	element.val(text).addClass("ebankc-phcolor");
	    };
	    element.focus(function(){
	    	if(element.val() == text){
	    		jQuery(this).val("");
	    	};
	    }); 
	    element.blur(function(){
	    	if(element.val() == ""){     
	    		jQuery(this).val(text).addClass("ebankc-phcolor");
	    	};
	    });
	    //输入的字符不为灰色
	    element.keydown(function(){
	    	jQuery(this).removeClass("ebankc-phcolor");
	    });
	};
    //当浏览器不支持placeholder属性时，调用placeholder函数
	if(!supportPlaceholder){
	    jQuery('input').each(function(){
	 		var text = jQuery(this).attr("placeholder");
	      	if(jQuery(this).attr("type") == "text"){
	 			placeholder(jQuery(this));
	  	    };
	    });
	};
    if(!supportPlaceholdertextarea){
        jQuery('textarea').each(function(){
            var text = jQuery(this).attr("placeholder");
            if(text){
                placeholder(jQuery(this));
            };
        });
    };

    // 默认---展示黑色，鼠标悬浮变蓝
    jQuery(".ebankc-default").hover(function(){
        jQuery(this).css("color","#003098");
    },function(){
        jQuery(this).css("color","#000000");
    })

    // 单选复选框选中切换背景图
    var inputcheckboxchange = function(){
        jQuery(".ebankc-inputcheckbox").each(function(){
            var that = jQuery(this);
            var checkedflag =that.find('input').attr("checked");
            var onclass= that.hasClass('ebankc-inputcheckboxon');
            // var halfcheckedflag =that.find('input').attr("indeterminate");
            if(checkedflag){
                if(!onclass){
                    jQuery(this).addClass( "ebankc-inputcheckboxon" );
                };
            }else{
                if(onclass){
                    jQuery(this).removeClass( "ebankc-inputcheckboxon" );
                };
            };
        });
    };
    inputcheckboxchange(".ebankc-inputcheckbox");

    jQuery(".ebankc-inputcheckbox").bind("click",function(){
        var flag = jQuery(this).children('input').attr("checked");
        // console.log(flag);
        var onclass= jQuery(this).hasClass('ebankc-inputcheckboxon');
        if(flag){
            var childnotonflag = jQuery(this).hasClass('ebankc-checkboxchildnoton');
            if(childnotonflag){
                jQuery(this).removeClass( "ebankc-checkboxchildnoton" );
            };
            if(!onclass){
                jQuery(this).addClass( "ebankc-inputcheckboxon" );
            };
        }else{
            if(onclass){
                jQuery(this).removeClass( "ebankc-inputcheckboxon" );
            };
        };  
    });
    


    jQuery(".ebankc-inputradio").each(function(){
        var that = jQuery(this);
        var thatparent = that.parent('div');
        var parentwrapflag = thatparent.hasClass('ebankc-mcp-rowcontainchild');
        var checkedflag =that.find('input').attr("checked");
        // console.log(checkedflag);
        if(checkedflag){
            if(parentwrapflag){
                jQuery(this).addClass("ebankc-inputradioon").parent(".ebankc-mcp-rowcontainchild").siblings(".ebankc-mcp-rowcontainchild").children('span').removeClass("ebankc-inputradioon");
            }else{
                jQuery(this).addClass("ebankc-inputradioon").siblings(".ebankc-inputradio").removeClass("ebankc-inputradioon");
            };   
        };
    });
    jQuery(".ebankc-inputradio").click(function(){
        // console.log(flag);
        var thatparent = jQuery(this).parent('div');
        var parentwrapflag = thatparent.hasClass('ebankc-mcp-rowcontainchild');
        var checkedflag =jQuery(this).find('input').attr("checked");
        // console.log(checkedflag);
        if(checkedflag){
            if(parentwrapflag){
                jQuery(this).addClass("ebankc-inputradioon").parent(".ebankc-mcp-rowcontainchild").siblings(".ebankc-mcp-rowcontainchild").children('span').removeClass("ebankc-inputradioon");
            }else{
                jQuery(this).addClass("ebankc-inputradioon").siblings(".ebankc-inputradio").removeClass("ebankc-inputradioon");
            };   
        }else{
            return false;
        };       
    });
	

    // 12px小字ebankc-default 紧邻的前一个span margin为10px
    jQuery(".ebankc-default").prev("span").css("margin-right","10px");

		
    // 提示气泡展示隐藏
	var tipbubblesshowhide =function(classname){
		jQuery(classname).mouseenter(function(){
			jQuery(this).find(".ebankc-remindbubbles").css("display","block");
		});
		jQuery(classname).mouseleave(function(){
			jQuery(this).find(".ebankc-remindbubbles").css("display","none");
		});
	}
	tipbubblesshowhide(".ebankc-tipbubbles");
		

	// 计算文本长度函数
	var _gettextWidth = function(text){ 
        var sen = jQuery('<pre>'+ text +'</pre>').css({display: 'none'}); 
        jQuery('body').append(sen); 
        var width = sen.width();
        sen.remove(); 
        return width;
    };

    // 按钮自适应 
    var btnwidthauto = function(classname){
    	jQuery(classname).each(function(){
    		var btntext = jQuery.trim(jQuery(this).text());
			var btnwidth = _gettextWidth(btntext);
            // console.log(btntext+btnwidth);
			if( btnwidth < 80 ){
				jQuery(this).css("width",100);
			}else{
				jQuery(this).css("width",btnwidth+20);
			};
    	});
    };
    btnwidthauto(".ebankc-commonbtn");
    btnwidthauto(".ebankc-weakbtn");
    //按钮悬浮点击颜色切换
    jQuery(".ebankc-commonbtn").each(function(){
        jQuery(this).hover(function(){
            jQuery(this).css("background-color","#d00226");
        },function(){
             jQuery(this).css("background-color","#b80020");
        });
        jQuery(this).click(function(){
            jQuery(this).css("background-color","#97041e");
            setTimeout(function(){
                jQuery(this).css("background-color","#b80020");
            },100);
        });
    });

    jQuery(".ebankc-weakbtn").each(function(){
        jQuery(this).hover(function(){
            jQuery(this).css("background-color","#e6e6e6");
        },function(){
            jQuery(this).css("background-color","#d8d8d8");
        });
        jQuery(this).click(function(){
            jQuery(this).css("background-color","#c5c5c5");
            setTimeout(function(){
                jQuery(this).css("background-color","#d8d8d8");
            },100);
        });
    });


    // 交易结果页面 信息一行居中，两行左对齐
    var resultptextalign = function(item){
    	jQuery(item).children("p").each(function(){
    		var that=jQuery(this);
    		var resultplen = that.height();
    		if(resultplen>24){
    			that.css("text-align","left");
    		}else {
    			that.css("text-align","center");
    		}
    	})
    };
    resultptextalign(".ebankc-mc-result");
    resultptextalign(".ebankc-mcp-tippara");
    
	

	// 文本框失去焦点 下拉框隐藏
	var selectblur =function(classname){
		jQuery(classname).each(function(){
			var s =jQuery(this);
			var divin = jQuery(this).children('div');
			var _hide=function(){
		    	divin.css("display","none").parent().css("z-index","99");
		    };
			jQuery("body").bind("click",function(event){
				if(!jQuery(event.target).parents(classname).is(s)){
					_hide();
					// s.children('input').css("background","#fff url(../styles/transit/zh_CN/img/zhanshou1.png) center right no-repeat")
                    s.children('input').removeClass('zhanshou2');
				};	
			// console.log(event.target.id);
			});	
		});
	}
	selectblur(".ebankc-selectdrop");
	// 带下拉框按钮失去焦点，下拉框隐藏
	selectblur(".ebankc-leftselect");
		

	// 切换当前按钮样式
	var changebtnnowcss= function(nowclass){
		var btn = jQuery(nowclass).find("button");
		btn.click(function(){
			jQuery(this).addClass('ebankc-btnactive').siblings('button').removeClass('ebankc-btnactive');
		})
	};
	changebtnnowcss(".ebankc-changebtns");
	changebtnnowcss(".ebankc-yesornobtn");


 	// 文本框自适应
	var _textWidth = function(text){ 
        var sensor = jQuery('<pre>'+ text +'</pre>').css({display: 'none'}); 
        jQuery('body').append(sensor); 
        var width = sensor.width();
        if(width <= 216){
        	width = 216;
        }else if(width >= 338){
        	width = 338;
        };
        sensor.remove(); 
        return width;
    };


    // 一行多个文本框，输入过长折行
    jQuery("input.ebankc-midtext").unbind('keyup').bind('keyup', function(){
        jQuery(this).width(_textWidth(jQuery.trim(jQuery(this).val())));
        var nowwidth =jQuery(this).width();
        var diverror = jQuery(this).parent();
        var divrow = jQuery(this).parent().parent();
        // console.log(nowwidth);
        if(nowwidth>218){
        	// console.log(1112);
        	var divrowheight = divrow.height();
        	if(divrowheight <= 32){
        		divrow.css('height','78px').find("div.ebankc-errorbox:first").after("<p class='wall'></p>");
        		divrow.find("label:eq(1)").removeClass('ebankc-labelonline');
        		// divrow.find("div.ebankc-errorbox").css('height','41px');
        	}else if(divrowheight<= 40){
        		divrow.css('height','85px');
        		divrow.find("label:eq(1)").removeClass('ebankc-labelonline');
        		var flag1 = jQuery(this).parent().parent().find('input.ebankc-midtext:first').hasClass('ebankc-inputtexterror');
        		var flag2 = jQuery(this).parent().parent().find('input.ebankc-midtext:last').hasClass('ebankc-inputtexterror');
        		if(flag1== true && flag2==false){	
        			divrow.find("div.ebankc-errorbox:first").after("<p></p>");
        		}else if(flag1== false && flag2==true){
        			divrow.find("div.ebankc-errorbox:first").after("<p class='wall'></p>");
        		}else if(flag1== true && flag2==true){
        			divrow.find("div.ebankc-errorbox:first").after("<p></p>");
        		};
        	};
        }else{
        	var divrowheight = divrow.height();
        	var pdom = divrow.find("p");
        	pdom.remove();
        	divrow.find("label:eq(1)").addClass('ebankc-labelonline');
        	if(divrowheight >= 85){
        		divrow.css('height','40px');       			
        	}else if(divrowheight >= 78){
        		divrow.css('height','32px');
        	};
        };
    });
    // jQuery("input.ebankc-smalltext").unbind('keydown').bind('keydown', function(){
    //     jQuery(this).width(_textWidth(jQuery(this).val()));
    // });

    	 
    // 文本框选中边框变蓝
    jQuery(".ebankc-inputtext").focus(function() {
        jQuery(this).css("border-color","#94c0ed");
    });
    jQuery(".ebankc-inputtext").blur(function() {
        jQuery(this).css("border-color","#E7E7E7");
    });
    // textarea 选中边框变蓝 
    jQuery(".ebankc-table textarea").focus(function() {
        jQuery(this).css("border-color","#94c0ed");
    });
    jQuery(".ebankc-table textarea").blur(function() {
        jQuery(this).css("border-color","#E7E7E7");
    });


    //三级四级切换标签
    jQuery(".ebankc-mcp-3or4tab li").bind("click",function(){
    	jQuery(this).addClass('ebankc-active').siblings('li').removeClass('ebankc-active');
    });
    var tabdraw = function(classname){
    	var tablen = jQuery(classname).width();
    	var Lis = jQuery(classname).find("li");
    	var sum =0;
    	Lis.each(function(){
    	 	sum +=jQuery(this).width()+20;
    	});
    	// console.log(tablen);
    	// console.log(sum);
    	jQuery(classname).children('ul').width(sum);
    	var tabullen = sum;
    	if(tabullen > tablen) {
    	 	jQuery(classname).children('a').css("display","block");
    	 	jQuery(classname).children('ul').css("left","30px");
    	}else{
    	 	jQuery(classname).children('a').css("display","none");
        };
    	jQuery(classname).children('a.ebankc-left').bind('click',function(){
    	 	var Left =parseInt(jQuery(this).siblings('ul').css("left"));
    	 	var now =Math.abs(Left);
    	 	if(Left < 0){
    	 		if( now <= 100){
    	 			jQuery(this).siblings('ul').css("left","30px");
    	 		}else {
    	 			jQuery(this).siblings('ul').stop().animate({left: "+=100px"});
    	 		};	
    	 	};
    	 });
    	 jQuery(classname).children('a.ebankc-right').bind('click',function(){
    	 	var Left =parseInt(jQuery(this).siblings('ul').css("left"));
    	 	var now =Math.abs(Left);
    	 	var val = tablen-tabullen;
    	 	var flag = Math.abs(val)-Math.abs(Left);
    	 	if(Left > val){
    	 		if( flag <= 100){
    	 			jQuery(this).siblings('ul').css("left",(val-30)+'px');
    	 		}else {
    	 			jQuery(this).siblings('ul').stop().animate({left: "-=100px"});
    	 		};
    	 	};
    	});
    };
    tabdraw(".ebankc-mcp-3or4tab");
    
    	 

    // 文本框输入错误提示信息
    jQuery(".ebankc-inputtexterror").each(function(){
    	jQuery(this).parent().css('height','46px');
    	jQuery(this).next().css('visibility','visible').parent().parent().css('height','40px');
    });
    	    	

    //we cheese
    jQuery(".ebankc-mcp-rowwecheese").each(function(){
    	var s0 = jQuery(this).children("s:eq(0)");
        var s1 = jQuery(this).children("s:eq(1)");
    	var s0len =_gettextWidth(jQuery.trim(s0.text()));
        var s1len =_gettextWidth(jQuery.trim(s1.text()));
        if(s0len>s1len){
            slen=s0len;
        }else {
            slen=s1len;
        }
    	s0.width(slen);
        s1.width(slen);
    	jQuery(this).width(slen);
    	var spanh =jQuery(this).height();
    	jQuery(this).prev().height(spanh).css({"vertical-align":"middle","line-height":spanh+"px"});
    	jQuery(this).parent().height(spanh);
    });



    // 表格弹框
    //关闭按钮
    jQuery(".ebankc-close1,.ebankc-close2").click(function() {
        jQuery(this).parent().hide();
    });


    //下载弹框内容显示隐藏
    var t = false;
    jQuery("#epd-item-xls").click(function() {
        t = !t;
        if (t) {
            jQuery("#content-xls").hide();
        } else {
            jQuery("#content-xls").show();
        };
    });


    // pop-tab tab栏切换
    jQuery(".ept-tab ul li.active").prev().children('a').css("border-right-color", "#707088");
    jQuery(".ept-tab ul li.active").children("a").css("border-right-color", "#fff");
    jQuery(".ept-tab ul li").each(function() {
        var index=jQuery(this).index();
        jQuery(this).click(function() {
            jQuery(this).addClass("active").siblings().removeClass("active");
            jQuery(this).siblings().children("a").css("border-right-color", "#ddd");
            jQuery(this).prev().children('a').css("border-right-color", "#707088");
            jQuery(this).children("a").css("border-right-color", "#fff");
            jQuery(this).parents('.ept-tab').siblings(".ept-content:eq("+index+")").css('display','block').siblings('.ept-content').css('display','none');
        });
    });


    // .ebankc-select1 下拉框
    jQuery(".ebankc-select1").each(function() {
        var s = jQuery(this);
        var z = parseInt(s.css("z-index"));
        var dt = s.children("dt");
        var dd = s.children("dd");
        var _show = function() {
            dd.slideDown(200);
            dt.addClass("cur");
            s.css("z-index", z + 1);
        }; //展开效果
        var _hide = function() {
            dd.slideUp(200);
            dt.removeClass("cur");
            s.css("z-index", z);
        }; //关闭效果
        dt.click(function() {
            dd.is(":hidden") ? _show() : _hide();
        });
        dd.find("a").click(function() {
            dt.html(jQuery(this).html());
            _hide();
        }); //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
        jQuery("body").click(function(i) {
            !jQuery(i.target).parents(".ebankc-select1").is(s) ? _hide() : "";
        });
    });


    // 文本弹窗
    function shadow() {
        jQuery(".ebankc-pop-shadow-box").show();
        jQuery(".ebankc-pop-shadow").show();
        jQuery(".ebankc-pop-shadow").css("top", jQuery(document).scrollTop() - jQuery(".ebankc-pop-shadow-box").offset().top + 200 + "px");
    };
    jQuery(".for-shadow").click(function() {
        shadow();
    });
    jQuery(".ebankc-pop-shadow-box,.ebankc-pop-shadow").bind("mousewheel", function(e) {
        e.preventDefault();
    });
    jQuery(".ebankc-pop-shadow .ebankc-close2,.ebankc-pop-shadow button").bind("click", function() {
        jQuery(".ebankc-pop-shadow-box,.ebankc-pop-shadow").hide();
    });
    jQuery(".ebankc-handle u").bind("click", function() {
        jQuery(".ebankc-pop-handle").show();
    }); 


    // 表格提示气泡 >3
    jQuery(".ebankc-bubbledata").each(function(){
        var that = jQuery(this);
        var bubblebox = that.next("div.ebankc-tablebubbles");
        var bubble = bubblebox.find("div.ebankc-remindtablebubbles");
        var data =jQuery.trim(that.text());
        var dataarray = data.split(",");
        var datalen = dataarray.length;
        if(datalen >= 3){
            for(var i= 0;i< datalen;i++){
                var con =dataarray[i];
               bubble.append("<p class='ebankc-tdnowrap'>"+con+"</p>");
               if(i<2) {
                    bubblebox.append("<p class='ebankc-tdnowrap'>"+con+"</p>");
               };
            };
            bubblebox.append("<p class='ebankc-tdnowrap'>...</p>");
        }else {
            for(var i= 0;i< datalen;i++){
                var con =dataarray[i];
                bubblebox.append("<p class='ebankc-tdnowrap'>"+con+"</p>");
            };
        };   
    });
    jQuery(".ebankc-tablebubbles").hover(function(){
        // console.log(11);
        var that = jQuery(this);
        var bubble = that.find(".ebankc-remindtablebubbles");
        var data = jQuery.trim(that.prev(".ebankc-bubbledata").text());
        var dataarray = data.split(",");
        var datalen = dataarray.length;
        if(datalen >= 3){
            that.css("cursor","pointer");
            bubble.css("display","block"); 
        };
    },function(){
        var that = jQuery(this);
        var bubble = that.find(".ebankc-remindtablebubbles");
        bubble.css("display","none"); 
    });

    // 表格提示气泡 >5
    jQuery(".ebankc-bubbledatagt5").each(function(){
        var that = jQuery(this);
        var bubblebox = that.next("div.ebankc-tablebubblesgt5");
        var bubble = bubblebox.find("div.ebankc-remindtablebubblesgt5");
        var data =jQuery.trim(that.text());
        var dataarray = data.split(",");
        var datalen = dataarray.length;
        if(datalen >= 6){
            for(var i= 0;i< datalen;i++){
                var con =dataarray[i];
               bubble.append("<p class='ebankc-tdnowrap'>"+con+"</p>");
               if(i<5) {
                    bubblebox.append("<p class='ebankc-tdnowrap'>"+con+"</p>");
               };
            };
            bubblebox.append("<p class='ebankc-tdnowrap'>...</p>");
        }else {
            for(var i= 0;i< datalen;i++){
                var con =dataarray[i];
                bubblebox.append("<p class='ebankc-tdnowrap'>"+con+"</p>");
            };
        };   
    });
    jQuery(".ebankc-tablebubblesgt5").hover(function(){
        // console.log(11);
        var that = jQuery(this);
        var bubble = that.find(".ebankc-remindtablebubblesgt5");
        var data = jQuery.trim(that.prev(".ebankc-bubbledatagt5").text());
        var dataarray = data.split(",");
        var datalen = dataarray.length;
        if(datalen >= 6){
            that.css("cursor","pointer");
            bubble.css("display","block"); 
        };
    },function(){
        var that = jQuery(this);
        var bubble = that.find(".ebankc-remindtablebubblesgt5");
        bubble.css("display","none"); 
    });

    //表格账号提示气泡
    jQuery(".ebankc-accountbubblebox").children('a').hover(function(){
        jQuery(this).siblings('.ebankc-remindaccountbubbles').css("display","block"); 
    },function(){
        jQuery(this).siblings('.ebankc-remindaccountbubbles').css("display","none"); 
    });


    // 表格里自定折行位置
    var tdwrapuserdefined=function(className,fg){
        jQuery(className).each(function(){
            var text = jQuery.trim(jQuery(this).text());
            var newtextarray1 =[];
            var newtextarray2 =[];
            var newtext1;
            var newtext2;
            var textarray = text.split("");
            var textlen = textarray.length;
            var textwidth = _gettextWidth(text);
            var tdwidth =jQuery(this).width();
            if(textwidth>tdwidth){
                for(var i=0;i<textlen;i++){
                    if(i>=0 && i<fg){
                        newtextarray1.push(textarray[i]);
                    }else if(i>=fg && i<textlen){
                        newtextarray2.push(textarray[i]);
                    };  
                };
                newtext1=newtextarray1.join("");
                newtext2=newtextarray2.join("");
                jQuery(this).html(newtext1+"<br/>"+newtext2);
                jQuery(this).addClass('ebankc-tdnowrap');
                // console.log(textarray);
            }else{
                // jQuery(this).removeClass('ebankc-tdnowrap');
                return false;
            };
        });
    };
    tdwrapuserdefined(".ebankc-tdnowraptimeslot","11");

    // 协议内容表格样式覆盖
    jQuery(".ebankc-instructiontable").children('table tr:eq(0)').find('strong').css("font-size","20px");

    // 表格排序
    jQuery(".ebankc-tablesortup").bind("click",function(){
        jQuery(this).addClass('ebankc-tablesortupgray').siblings('a').removeClass('ebankc-tablesortdowngray');
    });
    jQuery(".ebankc-tablesortdown").bind("click",function(){
        jQuery(this).addClass('ebankc-tablesortdowngray').siblings('a').removeClass('ebankc-tablesortupgray');
    });


    // 表格可编辑textarea
    jQuery(".textareas").each(function(){
        var that =jQuery(this);
        var text = jQuery.trim(that.text());
        var textwidth = _gettextWidth(text);
        
        if(textwidth>157){
            that.css("height","40px");
        };
    });

    jQuery(".textareas").bind('keyup',function(){
        var that =jQuery(this);
        var text = jQuery.trim(that.val());
        // console.log(text);
        var textwidth = _gettextWidth(text);
        // console.log(textwidth);
        if(textwidth <= 157){
            that.css("height","20px");
        }else {
            that.css("height","40px");
        };
    });
    jQuery(".textareasmall").each(function(){
        var that =jQuery(this);
        var text = jQuery.trim(that.text());
        var textwidth = _gettextWidth(text);
        if(textwidth>88){
            that.css("height","40px");
        };
    });

    jQuery(".textareasmall").bind('keyup',function(){
        var that =jQuery(this);
        var text = that.val();
        // console.log(text);
        var textwidth = _gettextWidth(text);
        if(textwidth<88){
            that.css("height","20px");
        }else {
            that.css("height","40px");
        };
    });
    // 表格可编辑textarea 限制输入金额和类型
    var ifnumdata;
    jQuery(".ifnum").keyup(function() {
        var a= jQuery.trim(jQuery(this).val());
        // 输入不为空
        if(a){
            if(!isNaN(a)){
                // 内容为数字
                // console.log(a.length);
                if(a.length>5){
                    // console.log("金额过长");  
                }else{
                    ifnumdata=a;
                    // console.log("ifnumdata    "+ifnumdata);
                };    
            }else{
                // 内容不为数字
                // console.log("内容不为数字");
            };  
        };
    });

    //表格每行第一个和最后一个单元格，距边10px
    jQuery(".ebankc-table div>table tr").each(function(){
        jQuery(this).children("td:first").css("padding-left","10px");
        jQuery(this).children("td:last").css("padding-right","10px");
        jQuery(this).children("th:first").css("padding-left","10px");
        jQuery(this).children("th:last").css("padding-right","10px");
    }); 

    // 表格过长 增加横向滚动条
    var ifaddxscroll =function(classname){
        jQuery(classname).each(function(){
            var tablewidth = jQuery(this).width();
            var divwidth = jQuery(this).parent().width();
            var ifxscroll = jQuery(this).parent().hasClass('ebankc-table-content-x');
            if(!ifxscroll){
                if(tablewidth>divwidth){
                    jQuery(this).parent().addClass('ebankc-table-content-x');
                }; 
            }else{
                if(tablewidth<divwidth){
                    jQuery(this).parent().removeClass('ebankc-table-content-x');
                };
            };  
        });
    };
    ifaddxscroll(".ebankc-table div.ebankc-table-content>table");
    

jQuery(window).resize(function(){
        rowpaddingchange(".ebankc-mc-queryterms .ebankc-mcp-row");
        rowpaddingchange(".ebankc-mc-1cols .ebankc-mcp-row");

        resultptextalign(".ebankc-mc-result");
        resultptextalign(".ebankc-mcp-tippara");


        ifaddxscroll(".ebankc-table div.ebankc-table-content>table");

        jQuery(".ebankc-mcp-3or4tab").children('ul').css("left","0");
        tabdraw(".ebankc-mcp-3or4tab");
    });
    // var resizeTimer = null;           
    // jQuery(window).bind('resize', function () {  
    //     if (resizeTimer) clearTimeout(resizeTimer);   
    //     resizeTimer = setTimeout(function(){  
    //         rowpaddingchange(".ebankc-mc-queryterms .ebankc-mcp-row");
    //         rowpaddingchange(".ebankc-mc-1cols .ebankc-mcp-row");

    //         resultptextalign(".ebankc-mc-result");
    //         resultptextalign(".ebankc-mcp-tippara");


    //         ifaddxscroll(".ebankc-table div.ebankc-table-content>table");

    //         jQuery(".ebankc-mcp-3or4tab").children('ul').css("left","0");
    //         tabdraw(".ebankc-mcp-3or4tab");
    //     } , 200);   
    // });  
    //ie圆角 
    // jQuery('.ebankc-commonbtn').each(function() {  
    //     PIE.attach(this);  
    // }); 
    // jQuery('.ebankc-weakbtn').each(function() {  
    //     PIE.attach(this);  
    // });

