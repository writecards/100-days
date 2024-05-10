let x, y, w, h;
let mousecount = 0;
let direction = 0;
let free;

function preload(){
 free = loadFont("FreeSans.ttf");
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    x = 0;
    y = 0;
    w = width; 
    h = height;
}

function draw(){

    //rect(x, y, w, h);
   // divide(x, y, w, h, 0);
  //noLoop();
}


function mouseClicked(){
   
    divide(x, y, w, h, 0, direction);
    mousecount++;

}

function divide(x, y, w, h, count, direction){
    let tiles = [];
    // let split = random(0.3, 0.6);
    let split = 0.5;
    direction = floor(random(0,2))

    if(direction == 0){
        tiles.push(new Tile(x, y, w*split, h));
        tiles.push(new Tile(x + w*split, y,w-w*split, h));
        //direction = 1;
    }else{
        tiles.push(new Tile(x, y, w, h*split));
        tiles.push(new Tile(x, y + h*split,w, h- h*split));
       // direction = 0;
    }
  
print(mousecount);
if(mousecount > 12){
    mousecount = 1;
}
   for(let i = 0; i < tiles.length; i++){
    if(count < mousecount){
        divide(tiles[i].x, tiles[i].y, tiles[i].w, tiles[i].h, count+1, direction);
    }else{
        tiles[i].display(i);
        
    }

    if(tiles[i].contains(mouseX, mouseY)){
        print(mouseX, mouseY);
    }
   }
   
   
}