class fetchConfigModule{
    getConfig(){
        fetch("https://"+subdomain + "." + host+apiPrefix+configEndpoint).then(function (response) {
            return response.json();
        }).then(function (config) {
            console.log(config);
            ConfigView.displayAll(config);
        })
    }
}

let FetchConfigModule = new fetchConfigModule();