class footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <footer>
            <p>Copyright © 2020 - Go-Resto Apps</p>
        </footer>
        `;
    }
}

customElements.define('footer-comp', footer);