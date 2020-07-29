<template>
  <section class="vlp-section">
		<div class="vlp-catalog-mob">
			<div class="vlp-catalog-mob__tabs">
				<ul class="vlp-catalog-mob__general-list">
					<li @click="swithTab(title.id)" v-for="title in tabTitles" :key="title.id" :class="{'active' : activeTab == title.id}" class="vlp-catalog-mob__link">
						<h3>{{title.title}}</h3>
					</li>
				</ul>
				<div class="vlp-catalog-mob__content tab-1 vlp-active-tab">
					<ul v-for="(tab, index) in tabToShow" :key="index" class="vlp-catalog-mob__list">
            			<li>
              				<a :href="tab.link">{{tab.title}}</a>
            			</li>
            			
          			</ul>
				</div>
				
			</div>
		</div>
  </section>
	
	
</template>



<script>


export default {
	components: {},
	data() {
		return{
			
			tabTitles: [
				{
					title: "Книги",
					id: 1
				},
				{
					title: "Журнали",
					id: 2
				},
				{
					title: "Рубрики",
					id: 3
				}
			],
			tabsContent: [
				{
					tabId: 1,
					content: [
						{
						title: 'Монографії',
						link: '#'
					},{
						title: 'Навчально-методичні видання	',
						link: '#'
					},
					{
						title: 'Навчальні посібники',
						link: '#'
					},
					{
						title: 'Підручники',
						link: '#'
					},
					{
						title: 'Тези доповідей',
						link: '#'
					},
					]
				},
				{
					tabId: 2,
					content: [
						{
						title: 'Вісник Національного університету “Львівська політехніка”',
						link: '#'
					},{
						title: 'Міжвідомчі науково-технічні збірники',
						link: '#'
					},
					{
						title: 'Наукові журнали',
						link: '#'
					},
					
					]
				},
				{
					tabId: 3,
					content: [
						{
						title: 'Автоматика, радіоелектроніка, телекомунікації',
						link: '#'
					},{
						title: 'Архітектура, містобудування',
						link: '#'
					},
					{
						title: 'Біологія, валеологія',
						link: '#'
					},
					{
						title: 'Будівництво',
						link: '#'
					},
					{
						title: 'Геодезія, картографія',
						link: '#'
					},
					{
						title: 'Економіка',
						link: '#'
					},
					{
						title: 'Електроенергетика, електромеханіка',
						link: '#'
					},
					{
						title: 'Загальнотехнічні науки',
						link: '#'
					},
					{
						title: 'Збірники тестових завдань',
						link: '#'
					},
					{
						title: 'Історія',
						link: '#'
					},
					{
						title: 'ІТ, комп\'ютери',
						link: '#'
					},
					{
						title: 'Математика',
						link: '#'
					},
					{
						title: 'Мовознавство',
						link: '#'
					},
					{
						title: 'Політика, право',
						link: '#'
					},
					{
						title: 'Приладо-, машинобудування, транспорт',
						link: '#'
					},
					{
						title: 'Словники, енциклопедії, довідники',
						link: '#'
					},
					{
						title: 'Фізика',
						link: '#'
					},
					{
						title: 'Філософія, психологія, педагогіка',
						link: '#'
					},
					{
						title: 'Хімія, хімічна технологія',
						link: '#'
					},
					{
						title: 'Художня література',
						link: '#'
					}
					]
				},

			],
			activeTab: 1,
			tabId: 1,
			
		}
	},
	methods:{
		swithTab(tab){
			this.activeTab = tab;
			
		}
	},
	computed:{
		tabToShow(){
			let id = this.activeTab;
			let current = [];
			this.tabsContent.forEach(myObject => {
				if(myObject.tabId == id){
					current = myObject.content;
				}
			});
			return current;
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

.vlp-catalog-mob {
  @media screen and (min-width:640px){
	  display: none;
  }
  
  &__title {
   

  }
  &__content {
   
  }
  &__link{
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		padding: 7px 12px 11px 12px;
		background: #fff;
		margin-bottom: 12px;

	  &.active{
		  font-size: 24px;
		  padding: 10px 12px 10px 14px;
		  margin-bottom: 0;
			box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
	  }
  }

  &__general-list {
	font: 400 16px/1.5 "Philosopher";
	margin: 0;
   list-style: none;
	display: flex;
	justify-content: space-around;
	background: #F3F1F1;
	padding: 12px 10px 0 10px;
		
  }
  &__list{
		list-style: none;
		font: 400 16px/1.5 "Ubuntu";

		li + li {
			margin-top: 20px;
		}
	}
}
.vlp-active-tab{
	display: block;
}
</style>
