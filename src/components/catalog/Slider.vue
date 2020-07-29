<template>
  <div class="vlp-new">
    <div class="vlp-container--small">
      <h2 class="vlp-new__title">{{main.title}}</h2>
    </div>
    <div class="vlp-continer">
      <div class="vlp-new__slider">
        <VueSlickCarousel v-bind="settings" ref="carousel" v-if="this.books && this.books.length">
          <div class="vlp-card" v-for="(book, i) in this.books" :key="i">
            <img v-bind:src="book.img" :alt="book.author" />
            <div class="vlp-card__content" :style="{backgroundColor: `${book.color}`}">
              <h3 class="vlp-card__title">{{book.name}}</h3>
              <cite class="vlp-card__author">{{book.author}}</cite>
              <p class="vlp-card__price">
                {{book.price}}
                <span>грн</span>
              </p>
            </div>
          </div>
        </VueSlickCarousel>
        <button @click="this.showPrev" class="vlp-slider-btn" data-works-left>
          <svg width="32" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.8 31.2L29 59.5c.7.7 1.7.7 2.4 0s.7-1.7 0-2.4L4.4 30 31.5 2.9c.7-.7.7-1.7 0-2.4-.3-.3-.8-.5-1.2-.5-.4 0-.9.2-1.2.5L.8 28.8c-.7.7-.7 1.7 0 2.4z"
              fill="#7F7979"
            />
          </svg>
        </button>
        <button @click="this.showNext" class="vlp-slider-btn" data-works-right>
          <svg width="32" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M31.2 28.8L3 .5C2.2-.2 1.2-.2.5.5s-.7 1.7 0 2.4L27.6 30 .5 57.1c-.7.7-.7 1.7 0 2.4.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l28.3-28.3c.7-.7.7-1.7 0-2.4z"
              fill="#7F7979"
            />
          </svg>
        </button>
      </div>
      <!-- /.vlp-new__slider -->
      <a class="vlp-new__link" href="/catalog">{{main.link}}</a>
    </div>
    <!-- /.vlp-container -->
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  props: ["books"],
  name: "Slider",
  data() {
    return {
      main: {
        title: "Нове",
        link: "переглянути усе >>",
      },
      settings: {
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              //   rows: 2,
              slidesToShow: 1,
              //   slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
        //   cssEase: "linear",
      },
    };
  },
  components: {
    VueSlickCarousel,
  },

  methods: {
    showNext() {
      this.$refs.carousel.next();
    },
    showPrev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style scoped lang="scss" scoped>
.vlp-new {
  position: relative;
  padding: 100px 0;
  &__link {
    font: 700 16px/1.5 "Philosopher";
    line-height: 18px;
    position: absolute;
    right: 27px;
    bottom: 30px;
  }
  &__title {
    position: relative;
    margin-bottom: 43px;
    font: 400 36px/1.5 "Philosopher";
    line-height: 40px;
	 text-align: left;
	 &:after {
      content: "";
      width: 325px;
      height: 0.5px;
      position: absolute;
      background: #110601;
      bottom: -12%;
      left: -3%;
    }
    @media screen and (min-width: 640px) {
      &:after {
        content: "";
        width: 450px;
        height: 0.5px;
        position: absolute;
        background: #110601;
        bottom: -12%;
        left: -3%;
      }
    }
  }
  .slick-dots li > button:before {
    font-family: "slick";
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.25;
    color: red;
  }
  //   .slick-slide {
  //     & > div + div {
  //       margin: 15px;
  //     }
  //   }
  .vlp-slider-btn {
    display: none;
    @media screen and (min-width: 640px) {
      position: absolute;
      top: 50%;
      text-decoration: none;
      border: none;
      background: transparent;
      outline: transparent;
      cursor: pointer;
    }
    //  transform: translate(-50%, -50%);
  }
  [data-works-left] {
    left: 0;
  }
  [data-works-right] {
    right: 0;
  }
  &__slider {
    @media screen and (min-width: 640px) {
      padding: 0 90px;
    }
  }
}
.vlp-card {
  display: flex !important;
  text-align: left;
  height: 240px;
  margin: 15px 0;
  img {
    //  max-width: 245px;
    //  width: 100%;
    object-fit: contain;
  }
  &__content {
    display: flex;
    flex-direction: column;
    max-width: 330px;
    padding: 36px 45px 20px;
    flex-grow: 1; //   margin: 15px;
  }
  &__title {
    font: 400 22px/1.222 "Forum", sans-serif;
    color: #110601;
    margin: 0;
    height: 118px;
    overflow: hidden;
  }
  &__author {
    font-family: Ubuntu;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.714;
    height: 46px;
    overflow: hidden;
  }
  &__price {
    font-size: 36px;
    margin: 0;
    margin-top: auto;
    span {
      font-size: 18px;
    }
  }
}
</style>