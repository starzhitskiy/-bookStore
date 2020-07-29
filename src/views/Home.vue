<template>
  <div class="vlp-home">
    <Search />
    <v-cataloge />
    <Slider :books="this.books" />
    <Interest />
    <Events />
    <CatalogeMob />
    <!-- <Footer /> -->
  </div>
  <!-- /.vlp-home -->
</template>


<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/home/Search.vue";
import Cataloge from "@/components/home/Cataloge.vue";
import Interest from "@/components/home/Interest.vue";
import Events from "@/components/home/Events.vue";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/catalog/Slider.vue";

import CatalogeMob from "@/components/home/CatalogeMob.vue";

export default {
  name: "Home",
  components: {
    Header,
    Search,
    Slider,
    Interest,
    Events,
    Footer,
    "v-cataloge": Cataloge,
    CatalogeMob,
  },
  data() {
    return {
      books: [],
    };
  },
  created() {
    fetch("data/books_data.json")
      .then((result) => result.json())
      .then((data) => {
        this.books = [...data["books-list"]];
      });
  },
};
</script>
<style lang="scss">
</style>
