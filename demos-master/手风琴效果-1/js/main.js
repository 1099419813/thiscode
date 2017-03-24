var box = document.getElementById("box");
var lis = document.getElementsByTagName("li");
//通过JS 给每一个li添加背景图
//遍历取出每一个li 添加样式
for(var i=0; i<lis.length; i++) {
    var li = lis[i];
    //添加背景图
    li.style.backgroundImage = "url(images/" + (i+1) + ".jpg)";
    //通过JS重新摆放每一个li
    //盒子的总宽度是1200 一共5个li 每个li宽度一样
    //所以每个li之间的间隔是 240
    //0 240 480
    li.style.left = (i * 240) + "px";
    //给每一个li注册鼠标经过事件
    li.index = i;//给每个li绑定自定义属性 把索引号放进去
    li.onmouseover = function () {
        //让每个li的left值间隔100
        for(var j=0; j<lis.length; j++) {
            var li = lis[j];
            //不同的li处理方式不同
            // 设置每一个li的时候要判断
            //如果是当前li以及他前面的要跑到左侧
            //如果是当前li后面的 要跑到右侧
            if(li.index <= this.index) {
                //li.style.left = (j * 100) + "px";
                // 不是直接设置而是动画效果
                animate(li,{"left": j*100});
            } else {
                //当前li后面的li
                //400 现在 1100
                //300 现在 1000
                //200 现在 900
                //都是往后跑700px
                animate(li,{"left": j*100 + 700})
            }
        }
    }
}

//离开盒子之后 所有的li都恢复原来240的间隔
box.onmouseout = function () {
    for(var i=0; i<lis.length; i++) {
        animate(lis[i],{"left": i * 240});
    }
}


