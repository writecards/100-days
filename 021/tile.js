let free2;
function preload(){
    free2 = loadFont("FreeSans.ttf");
   }
   


class Tile{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    display(t){
        let colors = ["#0B0B0D", "#021373", "#044BD9", "#0460D9", "#D0D7D9"];
        fill(random(colors));
  
        noStroke();
        rect(this.x, this.y, this.w, this.h);
        
        // textFont(free2)
        // textSize(this.w/20)
        // text(t, this.x + w/2, this.y - h/2 )
        
        
    }

    contains(px, py) {
        // Check if the given point is inside the circle
        let d = dist(px, py, this.x, this.y);
        return d < this.r;
      }
}