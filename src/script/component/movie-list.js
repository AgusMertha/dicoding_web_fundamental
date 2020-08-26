class MovieList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col-md-12">
            <div class="card text-white bg-dark mt-4">
                <div class="card-header">Latest Movies</div>
                <div class="card-body">
                    <div class="row" id="movie-list">
                        
                    </div>
                </div>
            </div>
        </div>
        `;


    }
}

customElements.define("movie-list", MovieList);
