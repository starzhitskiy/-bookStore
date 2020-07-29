<template>
  <section class="vlp-section">
		<div class="vlp-catalog">
			<div class="vlp-container-small">
     			<h2 class="vlp-catalog__title">{{main.title}}</h2>
      		<div class="vlp-catalog__content">
        			<div class="vlp-catalog__column">
          			<h3>{{books.title}}</h3>
          			<ul class="vlp-catalog__list vlp-catalog__list-small">
            			<li>
              				<a href="#">Монографії</a>
            			</li>
            			<li>
              				<a href="#">Навчально-методичні видання</a>
            			</li>
            			<li>
              				<a href="#">Навчальні посібники</a>
            			</li>
            			<li>
              				<a href="#">Підручники</a>
            			</li>
           				<li>
              				<a href="#">Тези доповідей</a>
            			</li>
          			</ul>
          			<h3>{{magazines.title}}</h3>
          			<ul class="vlp-catalog__list">
            			<li>
              				<a href="#">
                				Вісник
                				<br />Національного університету “Львівська політехніка”
              				</a>
            			</li>
            			<li>
              				<a href="#">Міжвідомчі науково-технічні збірники</a>
            			</li>
            			<li>
              				<a href="#">Наукові журнали</a>
            			</li>
          			</ul>
        			</div>
        			<div class="vlp-catalog__list--glow">
          			<h3>{{rubrics.title}}</h3>
          			<ul class="vlp-catalog__list">
            		<li>
              			<a href="#">Автоматика, радіоелектроніка, телекомунікації</a>
            		</li>
            		<li>
              			<a href="#">Архітектура, містобудування</a>
            		</li>
            		<li>
              			<a href="#">Біологія, валеологія</a>
            		</li>
            		<li>
              			<a href="#">Будівництво</a>
            		</li>
            		<li>
              			<a href="#">Геодезія, картографія</a>
            		</li>
            		<li>
              			<a href="#">Економіка</a>
            		</li>
            		<li>
              			<a href="#">Електроенергетика, електромеханіка</a>
            		</li>
            		<li>
              			<a href="#">Загальнотехнічні науки</a>
            		</li>
            		<li>
              			<a href="#">Збірники тестових завдань</a>
            		</li>
            		<li>
              		<a href="#">Історія</a>
            		</li>
            		<li>
              			<a href="#">ІТ, комп'ютери</a>
            		</li>
            		<li>
             		<a href="#">Математика</a>
            		</li>
            		<li>
              			<a href="#">Мовознавство</a>
            		</li>
            		<li>
              			<a href="#">Політика, право</a>
            		</li>
            		<li>
              			<a href="#">Приладо-, машинобудування, транспорт</a>
            		</li>
            		<li>
              			<a href="#">Словники, енциклопедії, довідники</a>
            		</li>
            		<li>
              			<a href="#">Фізика</a>
            		</li>
           			<li>
              			<a href="#">Філософія, психологія, педагогіка</a>
            		</li>
            		<li>
              			<a href="#">Хімія, хімічна технологія</a>
            		</li>
            		<li>
              			<a href="#">Художня література</a>
            		</li>
          			</ul>
          		<a class="vlp-catalog__btn" href="/catalog">дивитись усі >></a>
        			</div>
				</div>
			</div>
		</div>
		<div class="vlp-catalog--mob">
			
		</div>
  </section>
	
	
</template>


<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
</script>
<script>
export default {
	data() {
		return{
			main : {
				title: "Каталог видань"
			},
			books : {
				title: "Книги",
				menu: "null"
			},
			magazines : {
				title: "Журнали",
				menu: "null"
			},
			rubrics : {
				title: "За рубриками",
				title2: "Рубрики",
				menu: "null"
			}
		}
	}
};
</script>

<style scoped lang="scss">
body {
  
  line-height: 22px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #110601;
  margin: 0;
  &:hover {
    color: hotpink;
  }
}
.vlp-catalog {
  background: url("~@/assets/catalog_bg.jpg") no-repeat top center;
  background-size: cover;
  text-align: left;
  padding: 50px 0;
  @media screen and (max-width:639px){
	  display: none;
  }
  
  &__title {
    position: relative;
    margin-bottom: 43px;
    font: 400 36px/1.5 "Philosopher";
    line-height: 40px;

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
  &__content {
    background: #fff;
    padding: 20px 25px;
    display: flex;
    justify-content: space-between;
    max-height: 527px;
    position: relative;

    & h3 {
      font: 400 30px/1.5 "Forum";
      line-height: 33px;
      margin-bottom: 8px;
    }
  }
  &__list {
	font: 300 16px/1.5 "Ubuntu";
	margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
	max-height: 440px;

   	& li {
   		max-width: 270px;
      	margin-right: 55px;
      	margin-top: 11px;
   	} 
  	}

  &__btn {
    font: 700 16px/1.5 "Philosopher";
    line-height: 18px;
    position: absolute;
    right: 27px;
    bottom: 20px;
  }
}

.vlp-catalog__list-small{
	margin-bottom: 39px;
}
.vlp-catalog__list--glow {
  flex-grow: 2;
}

.vlp-container-small {
  max-width: 970px;

  margin: 0 auto;
}
</style>
