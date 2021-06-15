class content extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <main id="main_content">
            <section class="content">
                <div class="new_content">
                    <h1>Explore Restaurant</h1>
                    <div class="content_item" id="list_content"></div>
                </div>
            </section>
        </main>
        `;
    }
}

customElements.define('content-comp', content);