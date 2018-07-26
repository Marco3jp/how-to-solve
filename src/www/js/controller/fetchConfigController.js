class configFetchController {
    constructor(){
        FetchConfigModule.getConfig();
    }
}

let FetchConfigController = new configFetchController();