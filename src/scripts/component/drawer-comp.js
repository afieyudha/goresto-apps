class drawer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <nav id="drawer" class="nav_resp">
            <ul class="nav_list_resp">
                <li class="nav_item_resp"><a href="/">Home</a></li>
                <li class="nav_item_resp"><a href="#">Favorite</a></li>
                <li class="nav_item_resp"><a href="https://github.com/afieyudha">About Us</a></li>
            </ul>
        </nav>
        `;
    }
}

customElements.define('drawer-comp', drawer);