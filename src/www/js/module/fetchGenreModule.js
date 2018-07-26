class fetchGenreModule {
    getGenre() {
        fetch(host + ":" + port + apiPrefix + genreEndpoint).then(function (response) {
            return response.json();
        }).then(function (genre) {
            console.log(genre);
        })
    }
}

let FetchGenreModule = new fetchGenreModule();
