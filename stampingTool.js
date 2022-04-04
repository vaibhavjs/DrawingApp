function StampingTool () {
    this.icon = "assets/stamp.jpg";
    this.name = "stamp";

    let minion = loadImage('assets/minions.png');
    let jerry = loadImage('assets/jerry.png');
    let mickey = loadImage('assets/mickey.png');
    let spongebob = loadImage('assets/spongebob.png');

    this.draw = () => {
            if(mouseIsPressed){   

                let stampSize = this.stampSizeSlider.value();

                let stampX = mouseX;
                let stampY = mouseY;

                if(this.pickOption.selected() == 'minion') {
                    image(minion, stampX, stampY, stampSize,stampSize);
                }
                if(this.pickOption.selected() == 'jerry') {
                    image(jerry, stampX, stampY, stampSize,stampSize);
                }
                if(this.pickOption.selected() == 'mickey') {
                    image(mickey, stampX, stampY, stampSize,stampSize);
                }
                if(this.pickOption.selected() == 'spongebob') {
                    image(spongebob, stampX, stampY, stampSize,stampSize);
                }

            } 
    }

    this.populateOptions = () => {
        
        let sliderOptions = createDiv();
        sliderOptions.id('sliderOptions');
        sliderOptions.parent('#options');
        sliderOptions.style('display','flex');
       
        let slider1 = createDiv();
        slider1.id('slider1');
        slider1.class('btns');
        slider1.parent("#sliderOptions");

        let option1 = createDiv();
        option1.id('option1');
        option1.class('btns1');
        option1.parent('sliderOptions');

        this.sizeStamp = createP("Stamp-Size");
        this.sizeStamp.parent("#slider1");

        this.stampSizeSlider = createSlider(25,400,100);
        this.stampSizeSlider.parent("#slider1");

        this.pickOne = createP("PickOne : ");
        this.pickOne.parent("#option1");

        this.pickOption = createSelect();
        this.pickOption.parent("#option1");

        let stampOptions = ['minion', 'jerry', 'mickey', 'spongebob'];
        for(let i=0; i<stampOptions.length; i++) {
            this.pickOption.option(stampOptions[i]);
        }
    };
    
    this.unselectTool = () => {
        select("#options").html("");
    }
} 