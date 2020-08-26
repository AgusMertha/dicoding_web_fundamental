class TvItem extends HTMLElement {
    set tvShow(tv) {
        this._tv = tv;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col-md-3">
            <div class="card bg-transparent tv-show" style="width: 6rem;" id="${this._tv.id}">
                <img src="https://image.tmdb.org/t/p/w200${this._tv.poster_path}"
                    class="card-img-top" alt="">
                <div class="card-body list-body">
                    <span class="card-text">${this._tv.name}</span>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("tv-item", TvItem);