var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "blue";
ctx.fillRect(100,100,200,200);
ctx.globalCompositeOperation = "destination-atop";
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(300,300,100,0,2*Math.PI,false);
ctx.closePath();
ctx.fill();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "blue";
ctx.fillRect(100,100,200,200);
ctx.globalCompositeOperation = "destination-atop";
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(300,300,100,0,2*Math.PI,false);
ctx.closePath();
ctx.fill();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "blue";
ctx.fillRect(100,100,200,200);
ctx.globalCompositeOperation = "destination-atop";
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(300,300,100,0,2*Math.PI,false);
ctx.closePath();
ctx.fill();
//--------
var canvas = docunment.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ccc";
ctx.fillRect(0,0,canvas.width,canvas.height);
canvas.onmousedown = function(){
    canvas.onmousemove = function(ev){
        ctx.beginPath();
        ctx.globalCompositeOperation = "destination-out";
        ctx.arc(ev.offsetX,ev.offsetY,20,0,2*Math.PI,false);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    document.onmouseup = function(){
        canvas,onmousemove = null;
    }
}
var canvas = docunment.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ccc";
ctx.fillRect(0,0,canvas.width,canvas.height);
canvas.onmousedown = function(){
    canvas.onmousemove = function(ev){
        ctx.beginPath();
        ctx.globalCompositeOperation = "destination-out";
        ctx.arc(ev.offsetX,ev.offsetY,20,0,2*Math.PI,false);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    document.onmouseup = function(){
        canvas,onmousemove = null;
    }
}
var canvas = docunment.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#ccc";
ctx.fillRect(0,0,canvas.width,canvas.height);
canvas.onmousedown = function(){
    canvas.onmousemove = function(ev){
        ctx.beginPath();
        ctx.globalCompositeOperation = "destination-out";
        ctx.arc(ev.offsetX,ev.offsetY,20,0,2*Math.PI,false);
        ctx.fillStyle = "black";
        ctx.fill();
    }
    document.onmouseup = function(){
        canvas,onmousemove = null;
    }
}
function draw(){
    var ctx = document.getElementById('canvas');
    ctx.fillRect(0,0,150,150);
    ctx.save();
    ctx.fillStyle = '#09F';
    ctx.fillRect(15,15,120,120);
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = .5;
    ctx.fillRect(30,30,90,90);
    ctx.restore();
    ctx.fillRect(45,45,60,60);
    ctx.restore();
    ctx.fillRect(60,60,30,30);
}
draw();
function draw(){
    var ctx = document.getElementById('canvas');
    ctx.fillRect(0,0,150,150);
    ctx.save();
    ctx.fillStyle = '#09F';
    ctx.fillRect(15,15,120,120);
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = .5;
    ctx.fillRect(30,30,90,90);
    ctx.restore();
    ctx.fillRect(45,45,60,60);
    ctx.restore();
    ctx.fillRect(60,60,30,30);
}
draw();
function draw(){
    var ctx = document.getElementById('canvas');
    ctx.fillRect(0,0,150,150);
    ctx.save();
    ctx.fillStyle = '#09F';
    ctx.fillRect(15,15,120,120);
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.globalAlpha = .5;
    ctx.fillRect(30,30,90,90);
    ctx.restore();
    ctx.fillRect(45,45,60,60);
    ctx.restore();
    ctx.fillRect(60,60,30,30);
}
draw();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.save();
ctx.fillRect(100,100,40,40);
ctx.restore();
ctx.save();
ctx.rotate(0.2);
ctx.fillStyle = 'blue';
ctx.fillRect(100,100,40,40);
ctx.fill();
ctx.rotate(0.1);
ctx.fillStyle = 'pink';
ctx.fillRect(100,100,40,40);
ctx.fill();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.save();
ctx.fillRect(100,100,40,40);
ctx.restore();
ctx.save();
ctx.rotate(0.2);
ctx.fillStyle = 'blue';
ctx.fillRect(100,100,40,40);
ctx.fill();
ctx.rotate(0.1);
ctx.fillStyle = 'pink';
ctx.fillRect(100,100,40,40);
ctx.fill();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.save();
ctx.fillRect(100,100,40,40);
ctx.restore();
ctx.save();
ctx.rotate(0.2);
ctx.fillStyle = 'blue';
ctx.fillRect(100,100,40,40);
ctx.fill();
ctx.rotate(0.1);
ctx.fillStyle = 'pink';
ctx.fillRect(100,100,40,40);
ctx.fill();
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("canvas");
canvas.width =600;
canvas.height =600;
canvas.style.border = "1px solid #000";
ctx.fillStyle = 'red';
ctx.fillRect(10,10,100,100);
ctx.save();
ctx.restore();
ctx.translate(60,60);
ctx.scale(2,2);
ctx.fillRect(10,10,100,100);
ctx.restore();
ctx.translate(50,120);
ctx.fillStyle = 'green';
ctx.strokeStyle = 'purple';
ctx.moveTo(0,0);
ctx.lineTo(400,0);
ctx.moveTO(0,0);
ctx.lineTo(0,400);
ctx.stroke();
ctx.globalAlpha = 0.3;
ctx.restore();
ctx.fillRect(10,10,40,40);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("canvas");
canvas.width =600;
canvas.height =600;
canvas.style.border = "1px solid #000";
ctx.fillStyle = 'red';
ctx.fillRect(10,10,100,100);
ctx.save();
ctx.restore();
ctx.translate(60,60);
ctx.scale(2,2);
ctx.fillRect(10,10,100,100);
ctx.restore();
ctx.translate(50,120);
ctx.fillStyle = 'green';
ctx.strokeStyle = 'purple';
ctx.moveTo(0,0);
ctx.lineTo(400,0);
ctx.moveTO(0,0);
ctx.lineTo(0,400);
ctx.stroke();
ctx.globalAlpha = 0.3;
ctx.restore();
ctx.fillRect(10,10,40,40);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("canvas");
canvas.width =600;
canvas.height =600;
canvas.style.border = "1px solid #000";
ctx.fillStyle = 'red';
ctx.fillRect(10,10,100,100);
ctx.save();
ctx.restore();
ctx.translate(60,60);
ctx.scale(2,2);
ctx.fillRect(10,10,100,100);
ctx.restore();
ctx.translate(50,120);
ctx.fillStyle = 'green';
ctx.strokeStyle = 'purple';
ctx.moveTo(0,0);
ctx.lineTo(400,0);
ctx.moveTO(0,0);
ctx.lineTo(0,400);
ctx.stroke();
ctx.globalAlpha = 0.3;
ctx.restore();
ctx.fillRect(10,10,40,40);
//--------
var canvas = document.getElementById("canvas");
var ctx.getContext("canvas");
var rad = 0.1;
setInterval(function(){
    red +=0.1;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(250,250);
    ctx.rotate(rad);
    ctx.fillRect(-50,-50,100,100);
    ctx.restore();
},20)
var canvas = document.getElementById("canvas");
var ctx.getContext("canvas");
var rad = 0.1;
setInterval(function(){
    red +=0.1;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(250,250);
    ctx.rotate(rad);
    ctx.fillRect(-50,-50,100,100);
    ctx.restore();
},20)
var canvas = document.getElementById("canvas");
var ctx.getContext("canvas");
var rad = 0.1;
setInterval(function(){
    red +=0.1;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    ctx.translate(250,250);
    ctx.rotate(rad);
    ctx.fillRect(-50,-50,100,100);
    ctx.restore();
},20)
//--------
var stage = new Konva.Stage({
    container:'container',
    width:window.innerWidth,
    height:window.innnerHeight,
})
var layer = new Konva.Layer();
stage.add(layer);
var rect = new Konva.Rect({
    x:100,
    y:100,
    width:100,
    height:200,
    fill:'orange',
    opacity:.4,
    rotation:40,
    scaleX:1.5,
    scaleY:1.5,
    draggable:true,
})
layer.add(rect);
stage.draw();
var stage = new Konva.Stage({
    container:'container',
    width:window.innerWidth,
    height:window.innnerHeight,
})
var layer = new Konva.Layer();
stage.add(layer);
var rect = new Konva.Rect({
    x:100,
    y:100,
    width:100,
    height:200,
    fill:'orange',
    opacity:.4,
    rotation:40,
    scaleX:1.5,
    scaleY:1.5,
    draggable:true,
})
layer.add(rect);
stage.draw();
var stage = new Konva.Stage({
    container:'container',
    width:window.innerWidth,
    height:window.innnerHeight,
})
var layer = new Konva.Layer();
stage.add(layer);
var rect = new Konva.Rect({
    x:100,
    y:100,
    width:100,
    height:200,
    fill:'orange',
    opacity:.4,
    rotation:40,
    scaleX:1.5,
    scaleY:1.5,
    draggable:true,
})
layer.add(rect);
stage.draw();
//-----------------
var stage = new Konva.Stage({
    container:'container',
    width:300,
    height:300
});
var layer = new Konva.Layer();
var star = new Konva.Star({
    x:stage.getWidth(),
    y:stage.getHeight(),
    numPoints:5,
    innerRadius:40,
    outerRadius:100,
    fill:'yellow',
    stroke:'red',
    strokeWidth:4,
});
layer.add(star);
stage.add(layer);
var stage = new Konva.Stage({
    container:'container',
    width:300,
    height:300
});
var layer = new Konva.Layer();
var star = new Konva.Star({
    x:stage.getWidth(),
    y:stage.getHeight(),
    numPoints:5,
    innerRadius:40,
    outerRadius:100,
    fill:'yellow',
    stroke:'red',
    strokeWidth:4,
});
layer.add(star);
stage.add(layer);
var stage = new Konva.Stage({
    container:'container',
    width:300,
    height:300
});
var layer = new Konva.Layer();
var star = new Konva.Star({
    x:stage.getWidth(),
    y:stage.getHeight(),
    numPoints:5,
    innerRadius:40,
    outerRadius:100,
    fill:'yellow',
    stroke:'red',
    strokeWidth:4,
});
layer.add(star);
stage.add(layer);
//---------------
var width = window.innerWidth;
var height = window.innerHeight;
function star(){
    var scale = Math.random();
    var star = new Konva.Star({
        x:Math.random()*stage.getWidth(),
        y:Math.random()*stage.getHeight(),
        numPoints:5,
        innerRadius:30,
        outerRadius:50,
        fill:'#89b717',
        opactiy:0.8,
        draggable:true,
        scale:{
            x:scale,
            y:scale
        },
        rotation:Math.random(),
        shadowColor:'black',
        shadowBlur:10,
        shadowOffset:{
            x:5,
            y:5
        },
        shadowOpacity:0.6,
        startScale:scale
    })
    layer.add(star);
}
var stage = new Konva.Stage({
    container:'container',
    width:width,
    height:height
})
var layer = new Konva.Layer();
for(var i = 0; i<10 ;i++){
    star()
}
stage.add(layer);
var width = window.innerWidth;
var height = window.innerHeight;
function star(){
    var scale = Math.random();
    var star = new Konva.Star({
        x:Math.random()*stage.getWidth(),
        y:Math.random()*stage.getHeight(),
        numPoints:5,
        innerRadius:30,
        outerRadius:50,
        fill:'#89b717',
        opactiy:0.8,
        draggable:true,
        scale:{
            x:scale,
            y:scale
        },
        rotation:Math.random(),
        shadowColor:'black',
        shadowBlur:10,
        shadowOffset:{
            x:5,
            y:5
        },
        shadowOpacity:0.6,
        startScale:scale
    })
    layer.add(star);
}
var stage = new Konva.Stage({
    container:'container',
    width:width,
    height:height
})
var layer = new Konva.Layer();
for(var i = 0; i<10 ;i++){
    star()
}
stage.add(layer);
var width = window.innerWidth;
var height = window.innerHeight;
function star(){
    var scale = Math.random();
    var star = new Konva.Star({
        x:Math.random()*stage.getWidth(),
        y:Math.random()*stage.getHeight(),
        numPoints:5,
        innerRadius:30,
        outerRadius:50,
        fill:'#89b717',
        opactiy:0.8,
        draggable:true,
        scale:{
            x:scale,
            y:scale
        },
        rotation:Math.random(),
        shadowColor:'black',
        shadowBlur:10,
        shadowOffset:{
            x:5,
            y:5
        },
        shadowOpacity:0.6,
        startScale:scale
    })
    layer.add(star);
}
var stage = new Konva.Stage({
    container:'container',
    width:width,
    height:height
})
var layer = new Konva.Layer();
for(var i = 0; i<10 ;i++){
    star()
}
stage.add(layer);