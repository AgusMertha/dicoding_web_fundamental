class TvList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="col-md-12">
            <div class="card text-white bg-dark mt-4">
                <div class="card-header">Tv Shows On Air</div>
                <div class="card-body">
                    <div class="row" id="tv-list">
                        
                    </div>
                </div>
            </div>
        </div>
        `;


    }
}

customElements.define("tv-list", TvList);
