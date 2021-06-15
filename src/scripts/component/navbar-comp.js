import logo from '../../public/images/logo.png';

class navBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML =
        `
        <nav class="nav">
        <div class="logo">
            <img src="${logo}" alt="Go-Resto">
        </div>
                <ul class="nav_list"></ul>
                    <li class="nav_item"><a href="/">Home</a></li>
                    <li class="nav_item"><a href="#">Favorite</a></li>
                    <li class="nav_item"><a href="https://github.com/afieyudha">About Us</a></li>
                </ul>
        </nav>

        <div class="menu_resp">
            <div class="button_menu" id="menu"><a href="#">☰</a></div>
            <div class="nav_logo">
                <img src="${logo}" alt="Go-Resto">
            </div>
            <div class="nav_logo">&nbsp;</div>
        </div>
        `;
    }
}

customElements.define('navbar-comp', navBar);