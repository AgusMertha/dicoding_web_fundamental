class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col-md-3">
            <div class="card bg-transparent movie-item" style="width: 6rem;" id="${this._movie.id}">
                <img src="https://image.tmdb.org/t/p/w200${this._movie.poster_path}"
                    class="card-img-top" alt="">
                <div class="card-body list-body">
                    <span class="card-text">${this._movie.title}</span>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define("movie-item", MovieItem);