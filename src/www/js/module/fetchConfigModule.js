class fetchConfigModule{
    getConfig(){
        fetch(host+":"+port+apiPrefix+configEndpoint).then(function (response) {
            return response.json();
        }).then(function (config) {
            ConfigView.displayAll(config);
        })
    }
}

let FetchConfigModule = new fetchConfigModule();