let menuElem = document.getElementById('burger');
let titleElem = menuElem.querySelector('.menu__icon');

titleElem.onclick = function () {
    menuElem.classList.toggle('menu__open');
};



window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("btn").style.display = "block";
    } else {
        document.getElementById("btn").style.display = "none";
    }
}


function topFunction() {
    let start = Date.now();

    let timer = setInterval(function() {

        let timePassed = Date.now() - start; //

        document.body.scrollTop -= timePassed / 5; // For Safari
        document.documentElement.scrollTop -= timePassed / 5; // For Chrome, Firefox, IE and Opera

        if (timePassed >= 1200) clearInterval(timer);

    }, 20);
}



function validateEmail(email) {

    let subscribe = document.getElementById('subscribe-btn');

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)){
        email.style.color = '#046380'; //blue
        if (subscribe.hasAttribute('disabled')) {
            subscribe.toggleAttribute('disabled');
        }
    }
    else {
        if (!subscribe.hasAttribute('disabled')) {
            subscribe.toggleAttribute('disabled');
        }
        email.style.color = 'red';
    }

}

function drawImage(img, imgSrc) {
    let tmpImage = new Image();
    tmpImage.onload = function () {
        img.setAttribute('src', this.src);
    };
    tmpImage.src = imgSrc;
}


let price = document.getElementById('price');
let room = document.getElementById('room');
let sorted = false;

price.onclick = function () {
    if (!price.classList.contains('page-section__sort-style')) {
        price.classList.toggle('page-section__sort-style');
    }
    room.classList.remove('page-section__sort-style');

    let priceSortImage = document.getElementsByClassName('page-section__sort-arrow')[0];

    if (sorted) {
        drawImage(priceSortImage, 'img/arrow-up.svg');
        sortByPriceDesc();
        sorted = false;
    } else {
        drawImage(priceSortImage, 'img/arrow-down.svg');
        sortByPriceAsc();
        sorted = true;
    }
};

room.onclick = function () {
    if (!room.classList.contains('page-section__sort-style')) {
        room.classList.toggle('page-section__sort-style');
    }
    price.classList.remove('page-section__sort-style');

    let priceSortImage = document.getElementsByClassName('page-section__sort-arrow')[1];

    if (sorted) {
        drawImage(priceSortImage, 'img/arrow-up.svg');
        sortByRoomsDesc();
        sorted = false;
    } else {
        drawImage(priceSortImage, 'img/arrow-down.svg');
        sortByRoomsAsc();
        sorted = true;
    }
};


const apartmentArray = [
    {
        "percent": null,
        "card": false,
        "star": true,
        "img": "img/1.png",
        "name": "Студия №44",
        "numberOfRooms": 0,
        "finish": "без отделки",
        "area": "28 м²",
        "floor": "12/14",
        "price": 1900000,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": null,
        "card": false,
        "star": false,
        "img": "img/2.png",
        "name": "Однокомнатная №666",
        "numberOfRooms": 1,
        "finish": "базовая отделка",
        "area": "66 м²",
        "floor": "6/6",
        "price": 1666666,
        "button": "СВОБОДНО"
    },
    {
        "percent": null,
        "card": false,
        "star": true,
        "img": "img/3.png",
        "name": "Двухкомнатная №567",
        "numberOfRooms": 2,
        "finish": "черновая отделка",
        "area": "65.6 м²",
        "floor": "7/14",
        "price": 5900000,
        "button": "ПРОДАНО"
    },
    {
        "percent": null,
        "card": false,
        "star": false,
        "img": "img/4.png",
        "name": "Трехкомнатная №45",
        "numberOfRooms": 3,
        "finish": "без отделки",
        "area": "56 м²",
        "floor": "1/14",
        "price": 12900000,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": "-17 %",
        "card": true,
        "star": true,
        "img": "img/5.png",
        "name": "Студия №25",
        "numberOfRooms": 0,
        "finish": "черновая отделка",
        "area": "18 м² ",
        "floor": "12/14",
        "price": 1900000,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": "-6 %",
        "card": false,
        "star": false,
        "img": "img/6.png",
        "name": "Четырехкомнатная №259",
        "numberOfRooms": 4,
        "finish": "черновая отделка",
        "area": "98 м²",
        "floor": "14/14",
        "price": 23900000,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": null,
        "card": false,
        "star": false,
        "img": "img/7.png",
        "name": "Однокомнатная №56",
        "numberOfRooms": 1,
        "finish": "без отделки",
        "area": "36 м²",
        "floor": "3/6",
        "price": 5666666,
        "button": "СВОБОДНО"
    },
    {
        "percent": null,
        "card": false,
        "star": false,
        "img": "img/8.png",
        "name": "Трехкомнатная №46",
        "numberOfRooms": 3,
        "finish": "черновая отделка",
        "area": "86 м²",
        "floor": "1/6",
        "price": 5696664,
        "button": "СВОБОДНО"
    },
    {
        "percent": "-9 %",
        "card": true,
        "star": false,
        "img": "img/9.png",
        "name": "Однокомнатная №2",
        "numberOfRooms": 1,
        "finish": "черновая отделка",
        "area": "18 м²",
        "floor": "3/14",
        "price": 1200000,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": "-6 %",
        "card": false,
        "star": false,
        "img": "img/10.png",
        "name": "Студия №12",
        "numberOfRooms": 0,
        "finish": "черновая отделка",
        "area": "38 м²",
        "floor": "6/14",
        "price": 1500500,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": null,
        "card": false,
        "star": false,
        "img": "img/11.png",
        "name": "Однокомнатная №8",
        "numberOfRooms": 1,
        "finish": "черновая отделка",
        "area": "48 м²",
        "floor": "3/14",
        "price": 6200000,
        "button": "ЗАБРОНИРОВАНО"
    },
    {
        "percent": "-6 %",
        "card": false,
        "star": false,
        "img": "img/12.png",
        "name": "Двухкомнатная №23",
        "numberOfRooms": 2,
        "finish": "базовая отделка",
        "area": "48 м²",
        "floor": "3/14",
        "price": 5255006,
        "button": "ЗАБРОНИРОВАНО"
    }
];

let html = `<div id="wrapper" class="wrapper">

    <div class="promo">
         <div class="promo__card"></div>
         <div class="promo__star"><img class="favorite" alt="star"></div>
    </div>

    <div class="wrapper__box">
         <div class="wrapper__img-card">
             <img id="apartment-img" class="wrapper__flat" alt="plan">
         </div>
         <span class="wrapper__name"></span>

         <div class="wrapper__block">
             <span class="wrapper__finish"></span>
             <span class="wrapper__area"><span class="wrapper__area_big"></span> площадь</span>
             <span class="wrapper__floor"><span class="wrapper__floor_big"></span> этаж</span>
         </div>

         <span class="wrapper__price"></span>
    </div>
    <button class="wrapper__btn"></button>
</div>`;

let container = document.getElementById('container');

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

function loadData() {
    apartmentArray.forEach(function (apartment) {
        let wrapper = document.createElement('div');
        wrapper.innerHTML = html;

        wrapper.getElementsByClassName('wrapper__name')[0].innerHTML = apartment.name;
        wrapper.getElementsByClassName('wrapper__finish')[0].innerHTML = apartment.finish;
        wrapper.getElementsByClassName('wrapper__area_big')[0].innerHTML = apartment.area;
        wrapper.getElementsByClassName('wrapper__floor_big')[0].innerHTML = apartment.floor;
        wrapper.getElementsByClassName('wrapper__price')[0].innerHTML =
            apartment.price.format(0, 3,' ') + ' руб.';

        if (apartment.percent !== null) {
            let promo = wrapper.getElementsByClassName('promo__card')[0];

            let promoPercent = document.createElement('div');
            promoPercent.className = 'promo__percent';
            promoPercent.innerText = apartment.percent;
            promo.appendChild(promoPercent);

            if (apartment.card) {
                let promoCard = document.createElement('div');
                promoCard.className = 'promo__discount';
                promoCard.innerText = 'ШОК ЦЕНА!';

                promo.appendChild(promoCard);
            }
        }


        let btn = wrapper.getElementsByClassName('wrapper__btn')[0];
        btn.innerHTML = apartment.button;
        if (apartment.button === 'ЗАБРОНИРОВАНО') btn.className += ' wrapper__btn_booked';
        else if (apartment.button === 'СВОБОДНО') btn.className += ' wrapper__btn_free';
        else if (apartment.button === 'ПРОДАНО') btn.className += ' wrapper__btn_sold';

        // Loading star image according value from array
        let starImg = wrapper.getElementsByClassName('favorite')[0];
        let fakeStarImg = new Image();
        fakeStarImg.onload = function () {
            starImg.setAttribute('src', this.src);
        };

        if (apartment.star) fakeStarImg.src = 'img/marked-star.svg';
        else fakeStarImg.src = 'img/star.svg';

        // Loading apartment image from array
        let img = wrapper.getElementsByClassName('wrapper__flat')[0];
        let apartmentImg = new Image();
        apartmentImg.onload = function() {
            img.src = this.src;
        };
        apartmentImg.src = apartment.img;

        container.appendChild(wrapper);
    });
}

window.addEventListener("load", function() {
    loadData();
});

function sortByPriceAsc() {
    container.innerHTML = '';

    apartmentArray.sort(function (a, b) {
       return a.price - b.price
    });

    loadData();
}

function sortByPriceDesc() {
    container.innerHTML = '';

    apartmentArray.sort(function (a, b) {
       return b.price - a.price
    });

    loadData();
}

function sortByRoomsAsc() {
    container.innerHTML = '';

    apartmentArray.sort(function (a, b) {
       return a.numberOfRooms - b.numberOfRooms
    });

    loadData();
}

function sortByRoomsDesc() {
    container.innerHTML = '';

    apartmentArray.sort(function (a, b) {
       return b.numberOfRooms - a.numberOfRooms
    });

    loadData();
}
