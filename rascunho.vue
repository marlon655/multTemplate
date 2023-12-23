<template>
  <div>
    <button @click="adicionarItem({ id: 22, quantidade: 2 })">Adicionar Item 1</button>
    <button @click="adicionarItem({ id: 42, quantidade: 3 })">Adicionar Item 2</button>
    <div>
      <h2>Carrinho</h2>
      <ul>
        <li v-for="(item, index) in carrinho" :key="index">
          ID: {{ item.id }}, Quantidade: {{ item.quantidade }}
          <button @click="aumentarQuantidade(index)">Aumentar Quantidade</button>
          <button @click="diminuirQuantidade(index)">Diminuir Quantidade</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrinho: [],
    };
  },
  mounted() {
    // Recupera os itens do localStorage ao carregar o componente
    this.recuperarCarrinho();
  },
  methods: {
    adicionarItem(novoItem) {
      // Verifica se o item já existe no carrinho
      const itemExistente = this.carrinho.find(item => item.id === novoItem.id);

      if (itemExistente) {
        // Atualiza a quantidade se o item já existe
        itemExistente.quantidade += novoItem.quantidade;
      } else {
        // Adiciona um novo item se o item não existir
        this.carrinho.push(novoItem);
      }

      // Salva o carrinho no localStorage
      this.salvarCarrinho();
    },
    aumentarQuantidade(index) {
      // Aumenta a quantidade do item no índice especificado
      this.carrinho[index].quantidade++;

      // Salva o carrinho no localStorage
      this.salvarCarrinho();
    },
    diminuirQuantidade(index) {
      // Diminui a quantidade do item no índice especificado, mantendo-a no mínimo de 0
      this.carrinho[index].quantidade = Math.max(0, this.carrinho[index].quantidade - 1);

      // Salva o carrinho no localStorage
      this.salvarCarrinho();
    },
    salvarCarrinho() {
      // Converte o carrinho para uma string JSON e salva no localStorage
      localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
    },
    recuperarCarrinho() {
      // Recupera o carrinho do localStorage e converte de volta para um array JavaScript
      const carrinhoSalvo = localStorage.getItem('carrinho');
      if (carrinhoSalvo) {
        this.carrinho = JSON.parse(carrinhoSalvo);
      }
    },
  },
};
</script>
