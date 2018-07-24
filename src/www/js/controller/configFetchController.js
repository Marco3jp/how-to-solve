class configFetchController {
    constructor(){
        fetch(host+":"+port+apiPrefix+configEndpoint).then(function (response) {
            return response.json();
        }).then(function (config) {
            console.log(config);
            document.querySelector(".contents").style.color = config.color.font;

            document.querySelector(".stepA-bg").style.backgroundColor= config.color.main_light;
            document.querySelector(".stepB-bg").style.backgroundColor = config.color.main;
            document.querySelector(".stepC-bg").style.backgroundColor = config.color.main_dark;

            document.querySelector(".labelA").textContent = config.label.pointA;
            document.querySelector(".labelB").textContent = config.label.pointB;
            document.querySelector(".labelC").textContent = config.label.pointC;

            document.querySelector(".loading").classList.add("hidden");
            document.querySelector(".contents").classList.remove("hidden");
        })
    }
}

let ConfigFetchController = new configFetchController();