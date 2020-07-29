<template>
  <div class="lvp-interest">
    <h2>Події/Цікаве</h2>
    <div class="lvp-img__content">
      <div class="lvp-sea">
        <img :src="img.first" alt="photo" />
        <h3>Хай живуть канікули!</h3>
        <p>
          Дорогі Автори, Читачі, Покупці!
          Наразі нам не пишіть і не дзвоніть.
          Ми будемо поза межами і поза зонами.
        </p>
      </div>
      <div class="lvp-books">
        <img :src="img.second" alt="photo" />
        <h3>Двадцять найкращих книжок століття, перекладених українською</h3>
        <p>
          Дорогі Автори, Читачі, Покупці!
          Наразі нам не пишіть і не дзвоніть.
          Ми будемо поза межами і поза зонами.
        </p>
      </div>
      <div class="lvp-book">
        <img :src="img.third" alt="photo" />
        <h3>28 червня – День Конституції України</h3>
        <p>Держава починається з мене.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lvp-interest",
  data() {
    return {
      img: {
        first: "./img/photo.jpg",
        second: "./img/photo2.jpg",
        third: "./img/photo3.jpg",
      },
    };
  },
};
</script>

<style lang="scss">
.lvp-interest {
  max-width: 1176px;
  margin: 0 auto;
  padding: 100px 0;
  color: #110601;

  h2 {
    font-family: Philosopher;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 40px;
    margin: 0px 0 50px 56px;
    &:after {
      // content: "";
      width: 450px;
      height: 0.5px;
      position: absolute;
      background: #110601;
      bottom: -24%;
      left: 19%;
    }
  }
  .lvp-img__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      max-width: 296px;
      margin-left: 30px;
    }
    h3 {
      font-family: Forum;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 29px;
      margin: 0;
    }
    p {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>