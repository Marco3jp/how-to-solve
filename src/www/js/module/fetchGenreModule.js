class fetchGenreModule {
    getGenre() {
        fetch(subdomain + "." + host + apiPrefix + genreEndpoint).then(function (response) {
            return response.json();
        }).then(function (genre) {
            GenreView.displayAll(genre);
            FetchTodoController.setEventListener();
        })
    }
}

let FetchGenreModule = new fetchGenreModule();
