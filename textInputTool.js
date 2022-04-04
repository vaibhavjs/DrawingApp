function TextInputTool() {
	
	this.icon = "assets/textInput.jpg";
	this.name = "textInput";

    let xPosition, yPosition, sizeProvided;

	this.draw = () => {
		
		strokeWeight(userInput.value);

		if (this.mousePressOnCanvas() && mouseIsPressed) {
			loadPixels();
			if (mouseIsPressed) {
				xPosition = mouseX;
				yPosition = mouseY;
			}
			strokeWeight(0.8);
			sizeProvided = Math.floor(userInput.value);
			textSize(sizeProvided); 
			text(givenInput.value, xPosition, yPosition);
		}
	}


	this.populateOptions = () => {
		
		select(".options").html(
			'<p class = "options">Stroke</p> <input type="text" id="givenInput" name="givenInput" placeholder="Enter your Text"> <input type="range" min="10" max="200" value="50" id="userInput">',
		);

	};


	this.mousePressOnCanvas = () => {
		if ((mouseX > 0 && mouseX < width) && (mouseY > 0 && mouseY < height)) {
			return true;
		} 
        
        else {
            return false;
        }
	}
}