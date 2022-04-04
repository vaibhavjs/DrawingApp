function EraserTool(){
    this.icon = "assets/eraser.jpg";
	this.name = "eraser";

    this.draw = () => {
        if(mousePressOnCanvas(canvas) && mouseIsPressed){

            erase(255);
            circle(mouseX, mouseY,100);
            noErase();
        }
    }
}

