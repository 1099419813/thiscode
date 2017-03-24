/**
 * Created by Shikun on 2016/8/29.
 */
//阻止选中页面文本
$(document).attr('unselectable', 'on')
    .css({
        '-moz-user-select': '-moz-none',
        '-moz-user-select': 'none',
        '-o-user-select': 'none',
        '-khtml-user-select': 'none',
        '-webkit-user-select': 'none',
        '-ms-user-select': 'none',
        'user-select': 'none'
    }).bind('selectstart', function () {
    return false;
});
//模态窗口拖拽
$(document).ready(function () {
    $("#title").css({"cursor": "move"});
    $("#title").mousedown(function (event) {
        var isMove = true;
        var disX = event.pageX - $("#model").position().left;
        var disY = event.pageY - $("#model").position().top;
        $(document).mousemove(function (event) {
            if (isMove) {
                $("#model").css(
                    {
                        left: event.pageX - disX,
                        top: event.pageY - disY
                    }
                );
                if ($("#model").offset().top < 5) {
                    $("#model").css({"top": 5});
                }
                if ($("#model").offset().top > ($("body").outerHeight() - $("#model").outerHeight())) {
                    $("#model").css({"top": $("body").outerHeight() - $("#model").outerHeight() + "px"});
                }
                if ($("#model").offset().left < 0) {
                    $("#model").css({"left": 0});
                }
                if ($("#model").offset().left > ($("body").outerWidth() - $("#model").outerWidth())) {
                    $("#model").css({"left": $("body").outerWidth() - $("#model").outerWidth() + "px"});
                }
            }
        });
        $(document).mouseup(function () {
            isMove = false;
        });
    });
});
//登陆input
$(document).ready(function () {
    $("#username").click(function () {
        $(this).val("");
    });
    $("#username").blur(function () {
        $(this).val("邮箱");
    });
    $("#password").click(function () {
        $(this).val("");
    });
    $("#password").blur(function () {
        $(this).val("Password");
    });
});
//登陆Login
$(document).ready(function () {
    $("#login").mouseover(function () {
        $(this).animate({"backgroundColor": "#EA4B55"}, 200);
    });
    $("#login").mouseleave(function () {
        $(this).animate({"backgroundColor": "#37BDE0"}, 200);
    });
});
//登陆Login按钮跳转
$(document).ready(function () {
    $("#login").click(function () {
        return false;
    });
});
//登陆inputframe
$(document).ready(function () {
    $(".inputframe").each(function () {
        var index = $(".inputframe").index(this);
        $(this).click(function () {
            $("div.input").eq(index).animate({"borderColor": "#EA4B55"}, 200);
        });
        $(".inputframe").blur(function () {
            $("div.input").eq(index).css({"borderColor": "#ccc"}, 200);
        });
    });
});
//StayLogedin Checkbox
$(document).ready(function () {
    $("#checkbox").click(function () {
        $("#check").toggleClass("hidden");
    });
});
