class hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <div class="hero">
            <div class="hero_inner">
                <h1 class="hero_title">Go-Resto Apps</h1>
                <h1 class="hero_tagline">Explore Restaurant That Give All The Things You Want</h1>
            </div>
        </div>
        `;
    }
}

customElements.define('hero-comp', hero);