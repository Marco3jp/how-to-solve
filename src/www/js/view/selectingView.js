class selectingView {
    constructor(){
        this.labelA = document.querySelector(".selectingA");
        this.labelB = document.querySelector(".selectingB");
    }

    setLabel(step,name){
        switch (step) {
            case 'A':
                this.labelA.textContent = name;
                break;
            case 'B':
                this.labelB.textContent = name;
                break;
       }
    }
}


let SelectingView = new selectingView();
