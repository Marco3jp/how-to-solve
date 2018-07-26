class fetchSolutionModule {
    getSolution(){
        SelectingView.setLabel('B',this.textContent);
        fetch(host+":"+port+apiPrefix+solutionEndpoint+"?todoId="+this.dataset.todoId).then(function (response) {
            return response.json();
        }).then(function (solution) {
            console.log(solution);
        })
    }
}

let FetchSolutionModule = new fetchSolutionModule();
