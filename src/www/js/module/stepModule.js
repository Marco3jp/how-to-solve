class stepModule {
    constructor(){
        this.stepA = document.querySelector(".selectionA");
        this.stepB = document.querySelector(".selectionB");
        this.stepC = document.querySelector(".solution");
        this.stepABg = document.querySelector(".stepA-bg");
        this.stepBBg = document.querySelector(".stepB-bg");
        this.stepCBg = document.querySelector(".stepC-bg");
    }

    back(){
        switch (step) {
            case 2:
                step--;
                this.stepA.classList.remove("selected");
                this.stepA.classList.add("selectable");
                this.stepB.classList.remove("selectable");

                this.stepABg.classList.add("current-step");
                this.stepBBg.classList.remove("current-step");
                break;
            case 3:
                step--;
                this.stepB.classList.remove("selected");
                this.stepB.classList.add("selectable");
                this.stepC.classList.add("hidden");

                this.stepBBg.classList.add("current-step");
                this.stepCBg.classList.remove("current-step");
                break;
        }
    }

    forward(){
        switch (step) {
            case 1:
                console.log("lets go next stage!!");
                step++;
                this.stepA.classList.add("selected");
                this.stepA.classList.remove("selectable");
                this.stepB.classList.add("selectable");

                this.stepABg.classList.remove("current-step");
                this.stepBBg.classList.add("current-step");
                break;
            case 2:
                console.log("lets go next stage!!");
                step++;
                this.stepB.classList.add("selected");
                this.stepB.classList.remove("selectable");
                this.stepC.classList.remove("hidden");

                this.stepBBg.classList.remove("current-step");
                this.stepCBg.classList.add("current-step");
                break;
        }
    }
}

let StepModule = new stepModule();