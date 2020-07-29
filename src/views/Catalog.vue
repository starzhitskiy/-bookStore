<template>
  <div class="vlp-catalog">
    <h3 class="vlp-path">Головна/Каталог</h3>
    <div class="vlp-container--small">
      <div class="vlp-catalog__content">
        <h2 class="vlp-catalog__title">Усі видання</h2>
        <div class="vlp-catalog__nav">
          <div class="vlp-catalog__sort">
            <p>сортувати за...</p>
            <select name="sort" id="sort" v-on:change="sortBooks">
              <option style="display:none" selected></option>
              <option value="stock">популярністю</option>
              <option value="lowerPrice">ціною вгору</option>
              <option value="highetPrice">ціною вниз</option>
            </select>
          </div>
          <!-- /.vlp-catalog__sort -->
          <div class="vlp-catalog__pag">
            <button
              v-for="(p, i) in this.pagLength"
              :key="i"
              :class="btnValue == i ? 'active': '' "
              type="button"
              :value="i"
              v-on:click="pagItemCreate($event)"
            >{{ p }}</button>
          </div>
          <!-- /.vlp-catalog__pag -->
        </div>
        <div class="vlp-catalog__list">
          <Card v-for="(book, i) in this.pagBooks" v-bind:book="book" :key="i" />
        </div>
        <div class="vlp-catalog__nav">
          <div class="vlp-catalog__sort">
            <p>показано {{renderItems}} результатів з {{books.length}}</p>
          </div>
          <!-- /.vlp-catalog__sort -->
          <div class="vlp-catalog__pag">
            <button
              v-for="(p, i) in this.pagLength"
              :key="i"
              :class="btnValue == i ? 'active': '' "
              type="button"
              :value="i"
              v-on:click="pagItemCreate($event)"
            >{{ p }}</button>
          </div>
          <!-- /.vlp-catalog__pag -->
        </div>
      </div>
      <!-- /.vlp-catalog__content -->
    </div>
    <!-- /.vlp-container -->
    <v-cataloge />
    <Slider :books="this.books" />
  </div>
</template>


<script>
import Card from "@/components/catalog/Card.vue";
import Slider from "@/components/catalog/Slider.vue";
import Cataloge from "@/components/home/Cataloge.vue";

export default {
  name: "Catalog",
  components: {
    Card,
    Slider,
    "v-cataloge": Cataloge,
  },
  data() {
    return {
      books: [],
      copyBooks: [],
      pagBooks: [],
      renderItems: 20,
      pagLength: 0,
      btnValue: 0,
    };
  },
  created() {
    fetch("data/books_data.json")
      .then((result) => result.json())
      .then((data) => {
        this.books = [...data["books-list"]];
        this.copyBooks = [...data["books-list"]];
        this.listCount();
        this.pagItemCreate();
      });
  },
  methods: {
    sortBooks() {
      let newBooks = [...this.books];
      let oldBooks = [...this.books];
      let select = document.getElementById("sort");
      if (select.value === "lowerPrice") {
        this.books = newBooks.sort((a, b) => a.price - b.price);
        this.pagItemCreate();
      } else if (select.value === "highetPrice") {
        this.books = newBooks.sort((a, b) => b.price - a.price);
        this.pagItemCreate();
      } else if (select.value === "stock") {
        this.books = this.copyBooks;
        this.pagItemCreate();
      }
    },
    listCount() {
      let booksLength = this.books.length;
      this.pagLength = Math.ceil(booksLength / this.renderItems);
    },
    pagItemCreate(arg) {
      if (arg) {
        this.btnValue = arg.target.value;
      }
      let start = this.btnValue * this.renderItems;
      let end = start + this.renderItems;
      this.pagBooks = this.books.slice(start, end);
    },
  },
};
</script>

<style lang="scss" scoped>
.vlp-catalog {
  //   display: flex;
  text-align: center;
  font-family: Philosopher;
  font-size: 18px;
  line-height: 1.1;
  padding-bottom: 100px;

  .vlp-path {
    margin: 97px 0 0 93px;
  }
  &__content {
    padding-bottom: 100px;
  }
  &__sort {
    display: flex;
    align-items: center;
    > p {
      margin: 0 5px;
    }
    select {
      font-family: Philosopher;
      font-size: 18px;
      line-height: 1.1;
      position: relative;
      outline: none;
      border: 1px solid transparent;

      &::after {
        position: absolute;
        content: "";
        z-index: 1;
        width: 10px;
        height: 10px;
        border: 6px solid transparent;
        border-color: #ffd177;
      }
    }
  }
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #110601;
    padding-bottom: 2px;
    margin-top: 63px;
  }
  &__pag {
    button + button {
      margin-left: 1px;
    }

    > button {
      border: 1px solid transparent;
      background: transparent;
      outline: none;

      border-radius: 2px;
      height: 29px;
      width: 29px;

      &:active,
      &:hover,
      &:focus,
      &.active {
        background: #f8d39b;
        border: 1px solid transparent;
      }
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    .vlp-card {
      width: 100%;
    }
    @media screen and (min-width: 640px) {
      flex-wrap: wrap;
      flex-direction: row;

      .vlp-card {
        width: calc(50% - 30px);
      }
    }
    @media screen and (min-width: 1024px) {
      .vlp-card {
        width: calc(25% - 30px);
      }
    }
  }
  &__title {
    font: 400 36px/1.1 "Philosopher", sans-serif;
    position: relative;
    &::after {
      content: "";
      height: 1px;
      position: absolute;
      width: 373px;
      left: calc(50% - 373px / 2 + 0.5px);
      top: 46px;
      background: #110601;
    }
  }
}
</style>