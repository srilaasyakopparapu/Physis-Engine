function isTouching(){
    if(rect1.x-rect2.x < rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2&&rect1.y-rect2.y<rect1.height/2+rect2.height/2){
        rect1.shapeColor = "green"
        rect2.shapeColor = "yellow"
      }
      else{
        rect1.shapeColor = "red"
        rect2.shapeColor = "blue"
      }
}