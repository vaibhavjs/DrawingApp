function ImageTool(){

	this.name = "background",
    this.icon = "assets/background.jpg";
    
    let input;
    let img;
    
    let imageBoolean = true;
    
    let overlay = createGraphics(canvasContainer.size().width, canvasContainer.size().height);
    overlay.parent("content");

	this.draw = () => {

        if(imageBoolean == true){
            if(img){
              image(img, 0, 0, width, height);
            }
        }
        
        
	};
    
    let fileHandler = (file) => {
        print(file);
        if(file.type ==='image'){
            img = createImg(file.data, '');
            img.hide();
            img.size(width, height);
        }
        
        else{
            img = null;
        }
    }
    
    
    this.unselectTool = () => {
        select(".options").html("");
    }
    
	this.populateOptions = () => {
        
        select(".options").html("<button id='removeImage'>Remove Image</button>");
        
		select("#removeImage").mouseClicked(() => {
            
            background(255);
            img = null;

        });
        

        input = createFileInput(fileHandler);
        input.parent(select(".options"));
        
    }

}
