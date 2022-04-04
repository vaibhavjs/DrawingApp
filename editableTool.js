function EditableTool(){
    this.icon= "assets/editable.jpg";
    this.name="editable";

    let editButton = createButton('Edit Shape');
    editButton.hide();
    let finishButton = createButton('Finish Shape');
    finishButton.hide();

    let editMode = false;
    let currentShape = [];

    editButton.mousePressed (() => {
        if(editMode){
            editMode = false;
            editButton.html('Edit Shape');
        }
        else{
            editMode = true;
            editButton.html('Add Vertices');
        }
    })

    noFill();

    finishButton.mousePressed(() => {
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];
    })

    this.draw = () => {
        noFill();
        updatePixels();
        if(mousePressOnCanvas(canvas) && mouseIsPressed){

            if(!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else{
                for(var i = 0; i < currentShape.length; i++){
                   if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 15 ){
                       currentShape[i].x = mouseX;
                       currentShape[i].y = mouseY;
                   }
                }
            }
        }
        
        beginShape();
        for (var i = 0; i < currentShape.length; i++) {
            
            vertex(currentShape[i].x, currentShape[i].y);
            if(editMode){
                fill('red');
                ellipse(currentShape[i].x, currentShape[i].y, 5);
                noFill();
            }
        }
        endShape();
    }

    this.populateOptions = () => {
        editButton.parent('#options');
        finishButton.parent('#options');

        editButton.show();
        finishButton.show();
    }

    this.unselectTool = () => {
        select("#options").html("");
    }
};