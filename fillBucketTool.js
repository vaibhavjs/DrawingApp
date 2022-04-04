
function FillBucketTool(colourPalette) {
    this.icon = "assets/fillBucket.jpg";
    this.name = "fillBucket";
    
    this.draw = () => {
        let mousePressed = mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;

        if (mousePressed) {
            loadPixels();
            let colour = colourPalette.selectedColourAsRgb();
            fillAll(mouseX, mouseY, colour);
            updatePixels();
        }
    };

    let fillAll = (x, y, prospectiveColour) => {
        let bucketList = [];
        let presentValue = {x, y};
        let initialColour = colourPixel(x, y);

        if(comparison(initialColour, prospectiveColour)) {
            return;
        }

        bucketList.push({x: presentValue.x, y: presentValue.y});

        while(bucketList.length > 0) {
            presentValue = bucketList.pop();
            let left = false;
            let right = false;
            let down = true;
            let up = true;
            while(up && presentValue.y >= 0) {
                presentValue.y--;
                up = comparison(colourPixel(presentValue.x, presentValue.y), initialColour);
            }
 
            while(down && presentValue.y < height) {
                setColour(prospectiveColour, presentValue.x, presentValue.y);

                if (presentValue.x - 1 >= 0 && comparison(colourPixel(presentValue.x - 1, presentValue.y), initialColour)) {
                    if(!left) {
                        left = true;
                        bucketList.push({x: presentValue.x - 1, y: presentValue.y});
                    }
                } 
                else {
                    left = false;
                }

                if (presentValue.x + 1 < width && comparison(colourPixel(presentValue.x + 1, presentValue.y), initialColour)) {
                    if(!right) {
                        right = true;
                        bucketList.push({x: presentValue.x + 1, y: presentValue.y});
                    }
                } 
                else {
                    right = false;
                }

                presentValue.y += 1;
                down = comparison(colourPixel(presentValue.x, presentValue.y), initialColour);
            }
        }
    }

    let colourPixel = (x, y) => {
        let density = pixelDensity();
        let index = 4 * ((y * density) * width * density + (x * density));
        return [pixels[index], pixels[index + 1], pixels[index + 2]];
    }

    
    let setColour = (colour, x, y) => {
        let density = pixelDensity();
        for (let i = 0; i < density; i++) {
            for (let j = 0; j < density; j++) {
                let index = 4 * ((y * density + j) * width * density + (x * density + i));
                pixels[index] = colour[0];
                pixels[index+1] = colour[1];
                pixels[index+2] = colour[2];
            }
        }
    }

    let comparison = (x, y) => {
        if(x[0] == y[0] && x[1] == y[1] && x[2] == y[2]) {
            return true;
        }
        else {
            return false;
        }
    }
}