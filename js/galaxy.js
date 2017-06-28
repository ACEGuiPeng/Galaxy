function runStar(json) {

"use strict";
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,

    hue = 217, //色相
    stars = [],
    count = 0,
    maxStars = json.starCount; //调整画布中的星星个数

var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);

//HSL即是代表色相，饱和度，明度三个通道的颜色
/*属性分别为，加入星星的颜色的大小，HSL颜色*/
gradient2.addColorStop(0.1, '#fff');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');
/*自己添加的*/
gradient2.addColorStop(0.1, json.starColor[0]); //红色
ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

/*蓝色部分*/
var canvas3 = document.createElement('canvas'),
    ctx3 = canvas3.getContext('2d');
canvas3.width = 100;
canvas3.height = 100;
var half3 = canvas3.width / 2,
    gradient3 = ctx3.createRadialGradient(half3, half3, 0, half3, half3, half3);

//HSL即是代表色相，饱和度，明度三个通道的颜色
/*属性分别为，加入星星的颜色的大小，HSL颜色*/
gradient3.addColorStop(0.1, '#fff');
gradient3.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient3.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient3.addColorStop(1, 'transparent');


ctx3.fillStyle = gradient3;
ctx3.beginPath();
ctx3.arc(half3, half3, half3, 0, Math.PI * 2);
ctx3.fill();

/*黄色部分*/
var canvas4 = document.createElement('canvas'),
    ctx4 = canvas4.getContext('2d');
canvas4.width = 100;
canvas4.height = 100;
var half4 = canvas4.width / 2,
    gradient4 = ctx4.createRadialGradient(half4, half4, 0, half4, half4, half4);

//HSL即是代表色相，饱和度，明度三个通道的颜色
/*属性分别为，加入星星的颜色的大小，HSL颜色*/
gradient4.addColorStop(0.1, '#fff');
gradient4.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient4.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient4.addColorStop(1, 'transparent');
/*自己添加的*/
gradient4.addColorStop(0.1, json.starColor[2]);
ctx4.fillStyle = gradient4;
ctx4.beginPath();
ctx4.arc(half4, half4, half4, 0, Math.PI * 2);
ctx4.fill();

// End cache




/*生成随机数*/
function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (min > max) {
        var hold = max;
        max = min;
        min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*最大轨道半径*/
function maxOrbit(x, y) {
    var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
}
/*对象属性赋值*/
var Star = function() {

    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / parseInt(json.starSpeed);
    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
}

/*定义星星的运动轨迹*/
Star.prototype.draw1 = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}
/*根据定义的星星个数，生成一个星星对象，并放入数组里面*/
for (var i = 0; i < maxStars; i++) {
    new Star();
}

Star.prototype.draw2 = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas3, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}
Star.prototype.draw3 = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas4, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}
/*根据定义的星星个数，生成一个星星对象，并放入数组里面*/
for (var i = 0; i < maxStars; i++) {
    new Star();
}
function sum(obj) {
    var sum = 0;
    for (var i = 0; i < obj.length; i++) {
        sum = sum + parseInt(obj[i]);
    }

    return sum;
}
function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
    ctx.fillRect(0, 0, w, h);

    ctx.globalCompositeOperation = 'lighter';
    var l1 = Math.round(parseInt(json.starWeight[0])*stars.length/sum(json.starWeight));
    var l2 = l1+Math.round(parseInt(json.starWeight[1])*stars.length/sum(json.starWeight));
    var l3 = stars.length
    for (var i = 1; i < l1; i++) {

        stars[i].draw1();
    };
   for (var i = l1; i < l2; i++) {
        stars[i].draw2();
    };
    for (var i = l2;i < l3; i++) {
        stars[i].draw3();
    };
    window.requestAnimationFrame(animation);
}

animation();
}