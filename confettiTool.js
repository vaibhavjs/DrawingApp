function ConfettiTool() {
    this.icon = "assets/confetti.jpg";
    this.name = "confetti";

    let star = loadImage('assets/star.png');
    let leaves = loadImage('assets/leaves.png');
    let stars = loadImage('assets/stars.png');
    let ball = loadImage('assets/ball.png');
    let leaf = loadImage('assets/leaf.png');

    this.draw = () => {
            if(mouseIsPressed){   

                for(let i=0; i<this.sliderStamp.value(); i++) {

                    let stampSize = this.stampSizeSlider.value();

                    let stampX = random((mouseX - stampSize / 2) - 80, (mouseX - stampSize / 2) + 80);
                    let stampY = random((mouseY - stampSize / 2) - 80, (mouseY - stampSize / 2) + 80);

                    if(this.pickOption.selected() == 'star') {
                        image(star, stampX, stampY, stampSize,stampSize);
                    }
                    if(this.pickOption.selected() == 'leaves') {
                        image(leaves, stampX, stampY, stampSize,stampSize);
                    }
                    if(this.pickOption.selected() == 'stars') {
                        image(stars, stampX, stampY, stampSize,stampSize);
                    }
                    if(this.pickOption.selected() == 'ball') {
                        image(ball, stampX, stampY, stampSize,stampSize);
                    }
                    if(this.pickOption.selected() == 'leaf') {
                        image(leaf, stampX, stampY, stampSize,stampSize);
                    }

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

        let slider2 = createDiv();
        slider2.id('slider2');
        slider2.class('btns');
        slider2.parent("#sliderOptions");

        let option1 = createDiv();
        option1.id('option1');
        option1.class('btns1');
        option1.parent('sliderOptions');

        this.sizeStamp = createP("Confetti-Item-Size");
        this.sizeStamp.parent("#slider1");

        this.stampSizeSlider = createSlider(5,40,10);
        this.stampSizeSlider.parent("#slider1");

        this.frequencyStamp = createP("Frequency");
        this.frequencyStamp.parent("#slider2");

        this.sliderStamp = createSlider(1,20,1);
        this.sliderStamp.parent("#slider2");

        this.pickOne = createP("PickOne : ");
        this.pickOne.parent("#option1");

        this.pickOption = createSelect();
        this.pickOption.parent("#option1");

        let stampOptions = ['star', 'leaves', 'stars', 'ball', 'leaf'];
        for(let i=0; i<stampOptions.length; i++) {
            this.pickOption.option(stampOptions[i]);
        }
    };
    
    this.unselectTool = () => {
        select("#options").html("");
    }
}







