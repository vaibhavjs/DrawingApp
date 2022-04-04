function EllipseTool()
{
    this.icon = "assets/ellipse.jpg";
    this.name = "ellipse";

    let mouseXprev = mouseYprev = mouseXfirst = mouseYfirst = -1;
    let selectOption = null;

    this.draw = () => {
        if(mouseIsPressed)
        {
            if(selectOption.value() == "Filled")
            {
                fill(colourP.selectedColour);
            }
            else
            {
                noFill();
            }
            if(mouseXprev == -1)
            {
                mouseXprev = mouseX;
                mouseYprev = mouseY;
                mouseXfirst = mouseX;
                mouseYfirst = mouseY;
            }
            else
            {
                updatePixels();
                let len = (mouseX-mouseXfirst);
                let wid = (mouseY-mouseYfirst);
                ellipse(mouseXfirst,mouseYfirst,len*2,wid*2);
                mouseXprev = mouseX;
                mouseYprev = mouseY;
            }
        }
        else
        {
            mouseXprev = -1;
            mouseYprev = -1;
            loadPixels();
        }
    };

    this.populateOptions = () => {
        selectOption = createSelect();
        selectOption.option("Filled");
        selectOption.option("Empty");
        selectOption.parent("#options");
    };

    this.unselectTool = () => {
        select("#options").html("");
    }
}