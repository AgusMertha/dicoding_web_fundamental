class DetailMovie extends HTMLElement {
    set MovieDetail(detail) {
        this._MovieDetail = detail;
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="modal fade" id="movieDetail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card m-auto" style="max-width:700px">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="https://image.tmdb.org/t/p/original${this._MovieDetail.poster_path}" class="card-img" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${this._MovieDetail.title}</h5>
                                        <p class="card-text">${this._MovieDetail.overview}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('detail-movie', DetailMovie);