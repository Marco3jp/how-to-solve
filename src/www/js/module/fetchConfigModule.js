class fetchConfigModule{
    getConfig(){
        fetch(subdomain + "." + host+apiPrefix+configEndpoint).then(function (response) {
            return response.json();
        }).then(function (config) {
            ConfigView.displayAll(config);
        })
    }
}

let FetchConfigModule = new fetchConfigModule();