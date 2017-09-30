
var digit = [
    [
        [0,0,1,1,1,0,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,0,1,1,0],
        [0,0,1,1,1,0,0]//0
    ],
    [
        [0,0,0,1,1,0,0],
        [0,1,1,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [1,1,1,1,1,1,1]//1
    ],
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,1]//2
    ],
    [
        [1,1,1,1,1,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,1,0,0],//
        [0,0,0,0,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,1,1,1,1,1,0]//3
    ],
    [
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,0],
        [0,0,1,1,1,1,0],
        [0,1,1,0,1,1,0],
        [1,1,0,0,1,1,0],//
        [1,1,1,1,1,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,1,1]//4
    ],
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,1,1,1,1,0],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]//5
    ],
    [
        [0,0,0,0,1,1,0],
        [0,0,1,1,0,0,0],
        [0,1,1,0,0,0,0],
        [1,1,0,0,0,0,0],
        [1,1,0,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]//6
    ],
    [
        [1,1,1,1,1,1,1],
        [1,1,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,0,0,1,1,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0],
        [0,0,1,1,0,0,0]//7
    ],
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,1,1,0]//8
    ],
    [
        [0,1,1,1,1,1,0],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [1,1,0,0,0,1,1],
        [0,1,1,1,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,0,1,1],
        [0,0,0,0,1,1,0],
        [0,0,0,1,1,0,0],
        [0,1,1,0,0,0,0]//9
    ],
    [
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]//:
    ]
];





const endTime = new Date(2017,9,1,9,0);
var curShowTimeSeconds = 0;//存储自1970年0时0分0秒到现在的毫米数，初始化为0；
var windowWidth = 1024;
var windowHieght = 768;
var R = 8;
var marginTop = 60;
var marginLeft = 30;
// var c = document.getElementById("clock");
// var context = c.getContext('2d');
window.onload = function () {
    var canvas = document.getElementById("clock");
    var ctx = canvas.getContext('2d');
    canvas.width = windowWidth;
    canvas.height = windowHieght;
    curShowTimeSeconds = getCurrentShowTimeSeconds();
    setInterval(function () {
        render(ctx);
        upDate();
    },50);
};

function upDate() {
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();
    //var curShowTimeSeconds = getCurrentShowTimeSeconds();

    var nexthours = parseInt(nextShowTimeSeconds / 3600);
    var nextminutes = parseInt((nextShowTimeSeconds - nexthours *3600)/60);
    var nextseconds = nextShowTimeSeconds % 60;

    var curhours = parseInt(curShowTimeSeconds / 3600);
    var curminutes = parseInt((curShowTimeSeconds - curhours *3600)/60);
    var curseconds = curShowTimeSeconds % 60;

    if (nextseconds != curseconds){
        curShowTimeSeconds = nextShowTimeSeconds;
    }
}

function render(cxt) {

    cxt.clearRect(0,0,windowWidth,windowHieght);
    var hours = parseInt(curShowTimeSeconds / 3600);//总秒数除以3600秒，强制类型转换
    var minutes = parseInt((curShowTimeSeconds - hours *3600)/60);//总时间减去小时的秒数，除以60秒，强制类型转换
    var seconds = curShowTimeSeconds % 60;//总时间除以60为分钟数，其的余数为秒数

    //console.log("ds");
    renderDigit(marginLeft,marginTop,parseInt(hours/10),cxt);
    renderDigit(15*(R+1)+marginLeft,marginTop,parseInt(hours%10),cxt);
    renderDigit(30*(R+1)+marginLeft,marginTop,10,cxt);
    //hours
    renderDigit(39*(R+1)+marginLeft,marginTop,parseInt(minutes/10),cxt);
    renderDigit(54*(R+1)+marginLeft,marginTop,parseInt(minutes%10),cxt);
    renderDigit(69*(R+1)+marginLeft,marginTop,10,cxt);
    //minutes
    renderDigit(78*(R+1)+marginLeft,marginTop,parseInt(seconds/10),cxt);
    renderDigit(93*(R+1)+marginLeft,marginTop,parseInt(seconds%10),cxt);
    //seconds
}

function renderDigit(x,y,num,ctx) {
    ctx.fillStyle = "rgb(0,102,153)";
    console.log(digit[num].length);
    for (var i = 0;i<digit[num].length;i++){//遍历所有数字的点阵
        //console.log(digit[num][i]);
        for (var j = 0;j<digit[num][i].length;j++){//遍历所有点阵中的点
            if (digit[num][i][j] === 1){
                ctx.beginPath();
                ctx.arc(x+j*2*(R+1)+(R+1),y+i*2*(R+1)+(R+1),R,0,Math.PI*2,true);
                // 圆的margin为2，每个圆在一个格子中，圆的半径为R
                // 格子边长为2*(R+1);i为y坐标，j为x坐标；第(i,j)个圆的圆心位置：(x+j*2*(R+1)+(R+1),y+i*2*(R+1)+(R+1))
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
function getCurrentShowTimeSeconds() {
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round(ret/1000);
    return ret >=0 ? ret:0;
}