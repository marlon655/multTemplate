<template>
    <section class="bag">
        <emptyBag v-if="itens.length === 0"/>

        <div class="contents" v-else>
            <div class="left">
                <div class="card-01">
                    <div class="box-item-padding">
                        <div class="box-item" v-for="(info, index) in carrinho" :key="info.id">
                            <router-link :to="'produto/' + info.slug" class="link-product">
                                <div class="product">
                                    <div class="box-img">
                                        <img :src="info.front_img">
                                    </div>
                                    <div class="description">
                                        <span>{{ info.title }}</span>
                                        <span>{{ info.text_link }}</span>
                                    </div>
                                </div>
                            </router-link>
                            <div class="value-box">
                                <div class="number-itens">
                                    <select v-model="itens[index].quantity"
                                        @change="updateQt(info.id, +$event.target.value)" :key="info.id">
                                        <option v-for="number in Array.from({ length: 10 }, (_, index) => index + 1)"
                                            :value="number">{{ number }}</option>
                                        <!-- <option :value="2">2</option>
                                    <option :value="3">3</option> -->
                                    </select>
                                    <button @click="removeItem(info.id)">Remover</button>
                                </div>
                                <div class="value-item">
                                    <span class="max-price">{{ info.max_price }}</span>
                                    <span class="price">{{ info.price }}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="right">
                <div class="card-01">
                    <div class="inner-padding">
                        <router-link to="">
                            <button class="finaly">Finalizar compra</button>
                        </router-link>
                        <div class="inner-cart">
                            <div class="number-itens">
                                <span>Produtos:({{ totalItens }})</span>
                            </div>
                            <div class="total-itens">
                                <span class="price">{{ totalStr }}</span>
                            </div>
                        </div>
                        <div class="total">
                            <span class="subtotal">Subtotal:</span>
                            <span class="final-value">R${{ totalStr }}</span>
                        </div>
                        <div class="cupom-discont">
                            <h1>Tem cumpom de desconto?</h1>
                            <div class="cupom-apply">
                                <input type="text">
                                <button>APLICAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import sharedModule from '../../sharedModule';
import perfumesServices from '../../../services/perfumes.js';
import emptyBag from '@/components/template1/emptyBag.vue';
const PerfumesServices = new perfumesServices();
export default {
    components: { emptyBag },
    data() {
        return {
            itens: [],
            carrinho: [],
            unit: [],
            totalItens: 0,
            total: 0,
            totalStr: String,
        }
    },
    created() {
        const storage = localStorage.getItem('cart');
        this.itens = JSON.parse(storage);
        this.itens.forEach(el => {
            let perfume = PerfumesServices.getById(el.id);
            this.carrinho.push(perfume);
        });
        this.totalCalculate();
    },
    methods: {
        removeItem(id) {
            let toRemove = this.itens.findIndex(item => item.id === id);
            if (toRemove != -1) {
                this.carrinho.splice(toRemove, 1);
                this.itens.splice(toRemove, 1);
            }
            this.totalCalculate();
            this.saveCart();
        },
        updateQt(id, qt) {
            const item = this.itens.find(item => item.id === id);
            if (item !== undefined) {
                item.quantity = qt;
                this.saveCart();
                this.totalCalculate();
            }
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.itens));
        },
        totalCalculate() {
            this.total = 0;
            this.totalItens = 0;
            if (this.itens.length !== 0) {
                this.itens.forEach(el => {
                    let perfume = PerfumesServices.getById(el.id);
                    const format = parseFloat(perfume.price.replace(',', '.'));
                    this.totalItens += el.quantity;
                    sharedModule.itensInBag = this.totalItens;
                    this.total += format * el.quantity;
                    this.total = Number(this.total.toFixed(2));
                    this.totalStr = this.total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                })
            } else {
                sharedModule.itensInBag = 0;
                this.total = 0;
                this.totalStr = 0;
            }
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.contents{ display: contents;}
.bag {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
}

.left {
    width: 65%;
    margin-right: 10px;
}

.card-01 {
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 5px 5px 5px 0px rgba(204, 204, 204, 1);
}

.box-item-padding {
    width: 100%;
}

.box-item {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.link-product {
    color: black;
    text-decoration: none;
}

.link-product:hover {
    color: #00A470;
}

.product {
    display: flex;
    align-items: center;
}

.box-img {
    position: relative;
    height: 100px;
    width: 100px;
    min-width: 100px;
}

.link-product:hover .box-img::before {
    content: ' ';
    background: black;
    opacity: 0.2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.box-img img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}

.description {
    text-align: left;
}

.description span {
    display: block;
    font-size: 14px;
    width: 100%;
}

.value-box {
    /* background-color: #005e40; */
    width: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.number-itens {
    display: flex;
    flex-direction: column;
}

.number-itens select {
    font-size: 16px;
    color: #707070;
    padding: 5px 10px;
    outline: none;
    border: 1px solid #ccc;
}

.number-itens button {
    cursor: pointer;
    margin-top: 10px;
    padding: 5px;
    color: white;
    background-color: #00A470;
    border: 1px solid #00442F;
}

.number-itens button:hover {
    background-color: #00c284;
    border: 1px solid #007952;
}

.value-item {
    display: flex;
    flex-direction: column;
}

.max-price {
    color: #707070;
    font-size: 16px;
    text-decoration: line-through;
}

.price {
    font-size: 18px;
    color: black;
}

/* right*/
.right {
    width: 100%;
    max-width: 400px;
}

.inner-padding {
    width: 100%;
    padding: 10px;
}

.finaly {
    text-align: center;
    background-color: #00a470;
    border: none;
    border-radius: 10px;
    border-bottom: 2px solid #005e40;
    border-right: 2px solid #005e40;
    color: aliceblue;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    height: 50px;
    cursor: pointer;
}

.finaly:hover {
    background-color: #00c587;
}

.inner-cart {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;
    padding: 10px 0;
}

.number-itens span {
    font-size: 18px;
    color: #4b4b4b;
    font-family: sans-serif;
    font-weight: 600;
}

.total {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
}

.subtotal {
    color: black;
    font-size: 18px;
    font-weight: 600;
}

.final-value {
    font-weight: 600;
    color: black;
    font-size: 18px;
}

.cupom-discont {
    border: 1px solid #ccc;
    background-color: #ececec;
    padding: 10px;
    border-radius: 5px;
}

.cupom-discont h1 {
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0;
}

.cupom-apply {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.cupom-apply button {
    cursor: pointer;
    margin-left: 5%;
    padding: 5px 10px;
    color: #00442F;
    font-size: 18px;
    border: 3px solid #00442F;
    border-bottom: 4px solid #00442F;
    border-radius: 5px;
}

.cupom-apply button:hover {
    color: white;
    background-color: #00A470;
}

.cupom-apply input[type='text'] {
    width: 90%;
    outline-color: #00A470;
    padding-left: 10px;
    border: 1px solid #00442F;
    border-radius: 5px;
    height: 32px;
    font-size: 22px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
    .bag {
        display: block;
    }

    .left {
        width: 100%;
    }

    .right {
        margin-top: 20px;
        max-width: 100%;
    }
}

@media screen and (max-width: 1024px) {
    .box-item {
        display: block;
    }

    .number-itens {
        display: block;
        text-align: left;
        margin: 10px 0;
    }

    .number-itens select {
        margin-right: 50px;
    }

    .value-item {
        text-align: left;
    }

    .value-box {
        width: 100%;
        display: block;
    }
}
</style>