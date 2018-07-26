class genreView {
    constructor(){
        this.genreListElement = document.querySelector(".selectionA");
    }

    displayAll(genreList){
        if(genreList.result){
            this.displayGenre(genreList.genre);
        }
    }

    displayGenre(genre){
        for (let i = 0; i < genre.length; i++) {
            let newGenreElement = document.createElement("li");
            let genreElement = this.genreListElement.appendChild(newGenreElement);
            genreElement.textContent = genre[i].genre_name;
            genreElement.dataset.genreId = genre[i].genre_id;
        }
    }
}

let GenreView = new genreView();