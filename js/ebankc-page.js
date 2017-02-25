/**
 * select：   ID选择器
 * star：     起始页
 * end：      结束页
 */
function page(select, star, end) {
    var star = star,
        end = end;
    var that = jQuery(select);
    pagea(that, star, end);
    if (!(star && that && end)) alert("参数错误");
    that.find(".ebankc-page-content").bind("click", "a", function() {
        star = Math.floor(jQuery(this).text());
        // alert(star)
        pagea(that, star, end);
        if (star == 1) {
            that.find(".ebankc-page-pre").addClass("ebankc-page-none");
        } else {
            that.find(".ebankc-page-pre").removeClass("ebankc-page-none");
        }
        if (star == end) {
            that.find(".ebankc-page-next").addClass("ebankc-page-none");
        } else {
            that.find(".ebankc-page-next").removeClass("ebankc-page-none");
        }
    })

    that.find(".ebankc-page-pre").bind("click", function() {
        if (star > 1) {
            if (star == 2) {
                jQuery(this).addClass("ebankc-page-none");
            } else {
                jQuery(this).removeClass("ebankc-page-none");
            }
            star--;
            pagea(that, star, end);
        }
        if (star < end) {
            that.find(".ebankc-page-next").removeClass("ebankc-page-none");
        }
    })
    that.find(".ebankc-page-next").bind("click", function() {
        if (star < end) {
            if (star + 1 == end) {
                jQuery(this).addClass("ebankc-page-none");
            } else {
                jQuery(this).removeClass("ebankc-page-none");
            }
            star++;
            pagea(that, star, end);
        }
        if (star > 1) {
            that.find(".ebankc-page-pre").removeClass("ebankc-page-none");
        }
    })

    that.find(".ebankc-page button").bind("click", function() {
        var a = Math.floor(that.find(".ebankc-page input").val());
        if (a && a <= end) {
            star = a;
            pagea(that, star, end);
        } else {
            alert("请输入正确数字");
        }
        that.find(".ebankc-page input").val("");
    })

    function pagea(select, star, end) {
        var pageArr;

        //动态渲染
        function render(arr) {
            clearChild();
            for (var i = 0; i < arr.length; i++) {
                select.find(".ebankc-page-content").append(jQuery("<a href='javascript:;'>" + arr[i] + "</a>"));
            }
        }
        //动态移除 
        function clearChild() {
            select.find(".ebankc-page-content").children().remove();
        }

        if (end <= 4) {
            pageArr = [];
            for (var i = 1; i <= end; i++) {
                pageArr.push(i);
            }
            render(pageArr);
            select.find(".ebankc-page-content").children("a:eq(" + (star - 1) + ")").addClass("active");
        } else if (star >= 4 && star + 2 < end) {
            pageArr = [1, star - 1, star, star + 1, end];
            render(pageArr);
            select.find(".ebankc-page-content").children("a:first-child").after(jQuery("<i>…</i>"));
            select.find(".ebankc-page-content").children("a:last-child").before(jQuery("<i>…</i>"));
            select.find(".ebankc-page-content").children("a:eq(2)").addClass("active");
        } else if (end - star <= 2) {
            pageArr = [1, end - 2, end - 1, end];
            render(pageArr);
            select.find(".ebankc-page-content").children("a:first-child").after(jQuery("<i>…</i>"));
            select.find(".ebankc-page-content").children("a:eq(" + (star - end + 3) + ")").addClass("active");
        } else {
            pageArr = [1, 2, 3, end];
            render(pageArr);
            select.find(".ebankc-page-content").children("a:last-child").before(jQuery("<i>…</i>"));
            select.find(".ebankc-page-content").children("a:eq(" + (star - 1) + ")").addClass("active");
        }
    }
}


// //关闭按钮
// jQuery(".ebankc-close1,.ebankc-close2").click(function() {
//     jQuery(this).parent().hide();
// })


// //下载弹框内容显示隐藏
// var t = false;
// jQuery(".epd-item-xls").click(function() {
//     t = !t;
//     if (t) {
//         jQuery(".ebankc-item-content").hide();
//         jQuery(this).removeClass("active");
//     } else {
//         jQuery(".content-xls").show();
//         jQuery(this).addClass("active");
//     }
// })

// // pop-tab tab栏切换
// jQuery(".ept-tab ul li.active").prev().children('a').css("border-right-color", "#707088");
// jQuery(".ept-tab ul li.active").children("a").css("border-right-color", "#fff");
// jQuery(".ept-tab ul li").each(function() {
//     jQuery(this).click(function() {
//         jQuery(this).addClass("active").siblings().removeClass("active");
//         jQuery(this).siblings().children("a").css("border-right-color", "#ddd");
//         jQuery(this).prev().children('a').css("border-right-color", "#707088");
//         jQuery(this).children("a").css("border-right-color", "#fff");
//     })
// })

// // .ebankc-select1 下拉框
// jQuery(function() {

//     jQuery(".ebankc-select1").each(function() {
//         var s = jQuery(this);
//         var z = parseInt(s.css("z-index"));
//         var dt = s.children("dt");
//         var dd = s.children("dd");
//         var _show = function() {
//             dd.slideDown(200);
//             dt.addClass("cur");
//             s.css("z-index", z + 1);
//         }; //展开效果
//         var _hide = function() {
//             dd.slideUp(200);
//             dt.removeClass("cur");
//             s.css("z-index", z);
//         }; //关闭效果
//         dt.click(function() {
//             dd.is(":hidden") ? _show() : _hide();
//         });
//         dd.find("a").click(function() {
//             dt.html(jQuery(this).html());
//             _hide();
//         }); //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
//         jQuery("body").click(function(i) {
//             !jQuery(i.target).parents(".ebankc-select1").is(s) ? _hide() : "";
//         });
//     })
// })

// // 文本弹窗

// jQuery(".for-shadow").click(function() {
//     shadow();

// })
// jQuery(".ebankc-pop-shadow-box,.ebankc-pop-shadow").bind("mousewheel", function(e) {
//     e.preventDefault();
// })
// jQuery(".ebankc-pop-shadow .ebankc-close2,.ebankc-pop-shadow button").bind("click", function() {
//     jQuery(".ebankc-pop-shadow-box,.ebankc-pop-shadow").hide();
// })

// function shadow() {
//     jQuery(".ebankc-pop-shadow-box").show();


//     jQuery(".ebankc-pop-shadow").show();
//     jQuery(".ebankc-pop-shadow").css("top", jQuery(document).scrollTop() - jQuery(".ebankc-pop-shadow-box").offset().top + 200 + "px");

// }
