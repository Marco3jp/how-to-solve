class configView {
    displayAll(config){
        this.displayColor(config.color);
        this.displayLabel(config.label);
        document.querySelector(".loading").classList.add("hidden");
        document.querySelector(".contents").classList.remove("hidden");
    }

     displayColor(colors){
        document.querySelector(".contents").style.color = colors.font;
        document.querySelector(".stepA-bg").style.backgroundColor= colors.main_light;
        document.querySelector(".stepB-bg").style.backgroundColor = colors.main;
        document.querySelector(".stepC-bg").style.backgroundColor = colors.main_dark;
    }

    displayLabel(labels){
        document.querySelector(".labelA").textContent = labels.pointA;
        document.querySelector(".labelB").textContent = labels.pointB;
        document.querySelector(".labelC").textContent = labels.pointC;
    }
}

let ConfigView = new configView();