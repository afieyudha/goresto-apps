class skipContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
            <a href="#main_content" class="skip-content">Skip to Content</a>
        `;
    }
}

customElements.define('skipcontent-comp', skipContent);