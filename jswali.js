var cities = [];
var totalCities = 5;
 var checker=[];
var recordDistance;
var bestEver;
var sum=0;
var arr=[];
var g=[];
var ind=0;
function setup() 
{
  createCanvas(400, 600);
  background(50);
  frameRate(1);
  for (var i = 0; i < totalCities; i++)
  {
    var v = createVector(random(width), random(height));
    cities[i] = v;
    checker[i]=0;
  }
  for (var i = 0; i < totalCities; i++)
  {
    console.log(cities[i]);
  }
}
var ind=0;
var t=0;
var storage=[];
function draw() 
{
  
  fill(0);
  noStroke();
  textSize(12);
  fill(255);
  let bhh=1;
  for (var i = 0; i < cities.length; i++) 
  {
    let p = document.createElement("p");
    p.innerHTML = `${bhh}`;
    bhh++;
    document.body.appendChild(p);
    p.style.position = "absolute";
    p.style.left = `${cities[i].x-10}px`;
    p.style.top = `${cities[i].y-10}px`;
    p.style.color = "yellow";
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }

  
  stroke(255);
  strokeWeight(10);
  noFill();
  beginShape(LINES);
  console.log("start");
  for (var i = 0; i<arr.length; i++) 
  {
    console.log("pp");
    
    vertex(arr[i].x, arr[i].y);
  }
  endShape();
  console.log("kk");
  if(ind===-1)
  {
    console.log("endinf");
    stroke(255, 0, 255);
  strokeWeight(4);
    textSize(32);
  var s = "";
  for (var i = 0; i < storage.length; i++) {
    s += storage[i]+1;
  }
  s += 1;
  console.log(s);
  fill(255);
  text(s,50,200);
  noLoop();
  }
  storage[t]=ind;
  t++;
  calcdistance(ind); 
}
 function calcdistance(a)
 {
  console.log("index");
  console.log(a);
  var index=-1;
  checker[a]=1;
  var minm=9999999999;
  for(var i=0;i<cities.length;i++)
  {
    if(checker[i]===0)
    {

      if(dist(cities[i].x,cities[i].y,cities[a].x,cities[a].y)<minm)
      {
        index=i;
        minm=dist(cities[i].x,cities[i].y,cities[a].x,cities[a].y);
      }
    }
  }
  
    if(index===-1&&a!=-1)
  {
     sum+=dist(cities[0].x,cities[0].y,cities[a].x,cities[a].y);
     console.log(sum);
     g[0]=cities[a];
      g[1]=cities[0];
    arr=g;
    g=[];
     
     
  }
   else if(index!=-1)
   {
    sum+=dist(cities[index].x,cities[index].y,cities[a].x,cities[a].y);
      console.log("pushing");
      g[0]=cities[a];
      g[1]=cities[index];
      arr=g;
      g=[];
      console.log("bb");
  console.log("ll");
}
 /*stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < arr; i++) 
  {
    vertex(arr[i].x,arr[i].y);
  }
  endShape();*/
  ind=index;
  

  
  /*for(var i=0;i<a.length-1;i++)
  {
    var minm=999999;
    var index=-1;
    for(var j=i+1;j<a.length&&checker[j]===0;j++)
    {
      if(dist(a[i].x,a[i].y,a[j].x,a[j].y)<minm)
      {
        index=j;
        minm=dist(a[i].x,a[i].y,a[j].x,a[j].y);
      }
    }
    if(index!=-1)
    {
    checker[index]=1;
    checker[i]=1;
   console.log(i);
   console.log("index");
   console.log(index);
   console.log("cccc");
    console.log(dist(a[i].x,a[i].y,a[index].x,a[index].y))
    sum+=dist(a[i].x,a[i].y,a[index].x,a[index].y)
    var arr=[];
    arr[0]=i;
    arr[1]=index;
    function draw()
    {
    stroke(255);
  strokeWeight(1);
  noFill();
  beginShape();
  for (var i = 0; i < arr; i++) 
  {
    vertex(arr[i].x,arr[i].y);
  }
  endShape();
}
}
  }*/
  return sum;
 }