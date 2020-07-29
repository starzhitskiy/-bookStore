<template>
  <div class="vlp-search">
    <form action="#" method="post" class="vlp-search__field">
      <input type="search" name="query" placeholder />
      <button type="submit" class="vlp-search__button">
        <svg width="29" height="30">
          <path
            d="M28.728 29.041l-8.416-8.753a11.857 11.857 0 003.477-8.394C23.789 5.335 18.453 0 11.894 0 5.335 0 0 5.335 0 11.894c0 6.56 5.335 11.895 11.894 11.895a11.84 11.84 0 007.581-2.737l8.437 8.774a.562.562 0 00.8.016.567.567 0 00.016-.8zm-16.834-6.385c-5.934 0-10.761-4.827-10.761-10.762 0-5.934 4.827-10.761 10.761-10.761 5.935 0 10.762 4.827 10.762 10.761 0 5.935-4.828 10.762-10.762 10.762z"
            fill="currentColor"
          />
        </svg>
        Пошук
      </button>
      <p class="vlp-search__text">Знаходь потрібні статті, посібники та видання</p>
    </form>
  </div>
  <!-- /.vlp-menu -->
</template>

<script>
export default {
  name: "Search"
};
</script>

<style lang="scss">
.vlp-search {
  font: 400 18px/1.1 Philosopher, sans-serif;
	padding: 29px 0;
  &__field {
    margin: 20px auto 0;
    position: relative;
    max-width: 721px;
  }
  &__text {
    color: #999999;
  }
  [type="search"] {
    width: 100%;
    box-sizing: border-box;
    font: 400 16px/1.125 "Ubuntu", sans-serif;
    height: 46px;
    border: 1px solid #dfdfdf;
    color: rgb(125, 124, 129);
    outline: none;
    &:focus {
      box-shadow: 0px 0px 22px 0px rgba(255, 179, 32, 0.94);
    }
    &:focus::placeholder {
      color: rgba(255, 255, 255, 0);
    }
  }
  @media screen and (min-width: 640px) {
    [type="search"] {
      font-size: 20px;
    }
    [type="search"]::placeholder {
      font-size: 22px;
    }
  }
  @media screen and (min-width: 1024px) {
    [type="search"] {
      font-size: 24px;
    }
    [type="search"]::placeholder {
      font-size: 24px;
    }
  }
  &__button {
    width: 127px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    padding: 0;
    border: 1px solid #636262;
    color: #8a748f;
    position: absolute;
	 top: 0px;
	 right: 0px;
    outline: none;
    &:hover {
      border: 1px solid currentColor;
		color: rgba(255, 179, 32, 0.94);
		
		svg{
			fill: currentColor;
		}
    }
  }
}
</style>