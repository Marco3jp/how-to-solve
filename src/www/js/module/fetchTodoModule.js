class fetchTodoModule {
    getTodo(){
        SelectingView.setLabel('A',this.textContent);
        fetch(subdomain+"."+host+apiPrefix+todoEndpoint+"?genreId="+this.dataset.genreId).then(function (response) {
            return response.json();
        }).then(function (todo) {
            TodoView.displayAll(todo);
            StepModule.forward();

            FetchSolutionController.setEventListener();
        })
    }
}

let FetchTodoModule = new fetchTodoModule();
