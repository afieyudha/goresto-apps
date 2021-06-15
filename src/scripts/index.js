import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './component/skipcontent-comp.js';
import './component/navbar-comp.js';
import './component/drawer-comp.js';
import './component/hero-comp.js';
import './component/content-comp.js';
import './component/footer-comp.js';

import ('../DATA.json').then(({default: jsonData}) => {
    console.log(jsonData)
    let datas = jsonData['restaurants']
    let dataContent = '';
        datas.forEach(function(data) {
            dataContent += 
                `<div class="content_item_list">
                    <img class="content_item_thumbnail" src="${data['pictureId']}" 
                    alt="${data['name']}" title="${data['name']}">
                    <div class="city">${data['city']}</div>
                    <div class="content_item_list_data">
                        <p class="content_item_rating">
                            Rating : 
                            <a href="#" class="content_item_rating_value">${data['rating']}</a>
                        </p>
                        <h1 class="content_item_title"><a href="#">${data['name']}</a></h1>
                        <div class="content_item_description">${data['description'].slice(0, 195)}...</div>
                    </div>
                </div>
                `;
        });
    document.querySelector('#list_content').innerHTML = dataContent;
});

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
})

hero.addEventListener('click', function() {
    drawer.classList.remove('open');
})

main.addEventListener('click', function() {
    drawer.classList.remove('open');
})
