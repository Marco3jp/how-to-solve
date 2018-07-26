class fetchGenreModule {
    getGenre() {
        fetch(host + ":" + port + apiPrefix + genreEndpoint).then(function (response) {
            return response.json();
        }).then(function (genre) {
            GenreView.displayAll(genre);
            FetchTodoController.setEventListener();
        })
    }
}

let FetchGenreModule = new fetchGenreModule();
