$(document).ready(function () {
    //文档准备好了之后执行的代码
    //1获取到每一个li 绑定鼠标移入事件
    $(".wrap li").mouseenter(function () {
        $(this).css("opacity",1).siblings().css("opacity",0.5);
    });
    //2选择到ul并注册鼠标移出事件 鼠标移出ul让所有的li的opacity为1
    $(".wrap").mouseleave(function () {//这里用.wrap不用ul，所以不闪
        $(this).find("li").css("opacity",1);
    });
})