
<template>
  <div class="vlp-card_big">
    <img v-bind:src="book.img" :alt="book.author" />
    <h3 class="vlp-card__title">{{book.name}}</h3>
    <cite class="vlp-card__author">{{book.author}}</cite>
    <p class="vlp-card__price">{{book.price}} грн</p>
  </div>
</template>

<script>
export default {
  props: ["book"],
  name: "Card"
};
// console.log(book)
</script>

<style scoped lang="scss" scoped>
.vlp-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px 15px 0;
  img {
    max-width: 185px;
    width: 100%;
  }
  p,
  cite {
    margin: 0 0 15px;
  }
  &__title {
    font: 400 18px/1.222 "Forum", sans-serif;
    color: #110601;
  }
  &__author {
    font: 300 12px/1.416 "Ubuntu", sans-serif;
    font-style: italic;
    color: #7f7979;
  }
  &__price {
    font: 400 24px/1.125 "Philosopher", sans-serif;
    color: #110601;
  }
}
</style>
