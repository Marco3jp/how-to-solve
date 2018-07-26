class fetchTodoModule {
    getTodo(){
        SelectingView.setLabel('A',this.textContent);
        fetch(host+":"+port+apiPrefix+todoEndpoint+"?genreId="+this.dataset.genreId).then(function (response) {
            return response.json();
        }).then(function (todo) {
            console.log(todo);
        })
    }
}

let FetchTodoModule = new fetchTodoModule();
