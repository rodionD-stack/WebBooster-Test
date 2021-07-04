let app = new Vue({
    el: '#app',
    data: {
        goods: [{ product_id: 1, name: 'Парикмахерское кресло «Норм» гидравлическое', price: 9900 },
        { product_id: 2, name: 'Парикмахерское кресло «Норм» гидравлическое', price: 9900 },
        { product_id: 3, name: 'Парикмахерское кресло «Норм» гидравлическое', price: 9900 },
        { product_id: 4, name: 'Парикмахерское кресло «Норм» гидравлическое', price: 9900 }],

    },

    methods: {
        getForm() {
            const popUp = document.createElement('div');
            popUp.className = 'popUp'
            popUp.innerHTML = `
            <form class="popUp-form">
            
            <div class="userName">
                <label for="name">Имя</label>
                <input type="text" placeholder="Ваше имя">
            </div>
            <div class="userPhone">
                <label for="name">Телефон</label>
                <input type="tel" placeholder="+7 000 00 00 000">
            </div>
            <div class="userEmail">
                <label for="email">Email</label>
                <input type="email" placeholder="someUser@mail.com">
            </div>
            <div class="productName">
                <p></p>
            </div>
            <button class="popUp-form__btn" type="submit">Заказать</button>
            <button class="popUp-form__close" v-on:click.prevent="closeForm">Закрыть форму</button>
            </form>
            `
            const goodsList = document.querySelector('.goods-list');
            goodsList.insertAdjacentElement('afterEnd', popUp)
        },

        closeForm() {
            const popUp = document.querySelector('.popUp');
            popUp.style.display = 'none'
        }

    },





});