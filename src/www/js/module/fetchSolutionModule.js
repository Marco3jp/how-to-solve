class fetchSolutionModule {
    getSolution(){
        SelectingView.setLabel('B',this.textContent);
        fetch(subdomain+"."+host+apiPrefix+solutionEndpoint+"?todoId="+this.dataset.todoId).then(function (response) {
            return response.json();
        }).then(function (solution) {
            SolutionView.displayAll(solution);
            StepModule.forward();
        })
    }
}

let FetchSolutionModule = new fetchSolutionModule();
