<template>
  <div id="app">
  <!-- HEADER  -->
      <div class="header">
        <div class="header_left">
          <!-- <p class="header_item header_item_name">GENESIS DEVELOPMENT</p> -->
          <img class="logo" src="./assets/images/logo.svg" alt="logo">
        </div>
        <div class="header_right">
          <p class="header_item header_item_main"><a class="links" href="#" v-scroll-to="'#welcomeBlock1'">Головна</a></p>
          <p class="header_item header_item_about"><a class="links" href="#" v-scroll-to="'#goodsBlock2'">Про нас</a></p>
          <p class="header_item header_item_service"><a class="links" href="#" v-scroll-to="'#target3'">Послуги</a></p>
          <p class="header_item header_item_contacts"><a class="links" href="#" v-scroll-to="'#footer6'">Контакти</a></p>
    
    
  
  



          <!-- this is burger menu  -->

            <input id="burger" type="checkbox" v-model="isTabActive">
            <label class="label" for="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>
            
            <nav>    
              <ul>
                <li @click="changeTab" class="nav_tab"><a class="nav_tab_item" href="#" v-scroll-to="'#welcomeBlock1'">Головна</a></li>
                <li @click="changeTab" class="nav_tab"><a class="nav_tab_item" href="#" v-scroll-to="'#goodsBlock2'">Про нас</a></li>
                <li @click="changeTab" class="nav_tab"><a class="nav_tab_item" href="#" v-scroll-to="'#target3'">Послуги</a></li>
                <li @click="changeTab" class="nav_tab"><a class="nav_tab_item" href="#" v-scroll-to="'#footer6'">Контакти</a></li>
              </ul>  
            </nav>

          <!-- this is the END burger menu  -->

        </div>
      </div>
  <!-- THE END OF HEADER  -->

<!-- FIRST WELCOME BLOCK  -->

      <div style="overflow: hidden;" class="welcome" id="welcomeBlock1">
        <p class="welcome__text welcome__title">Genesis Development —<br>ДНК вашого бізнесу</p>
        <p class="welcome__text welcome__subtitle">Створюємо унікальне web-обличчя для вашого проекту</p>
        <div class="welcome__wrapper">
          <button class="welcome__text welcome__button" v-scroll-to="'#input5'">Отримати консультацію</button>
        </div>
      </div>

<!-- THE END OF FIRST WELCOME BLOCK  -->

<!-- SECOND BLOCK  -->

    <div class="goodsBlock" id="goodsBlock2">
        <h3 class="goodsBlockTitle" id="goodsBlockTitle">Розробляємо складні та нестандартні сайти, сервіси та мобільні додатки</h3>
        <div class="goodsImage">
          <div class="good" v-for="(good,i) in goods" :key="i">
            <div class="goodContainer" :id="good.ID">
              <div class="goodImageContainer">
                <img :src="good.img" alt="Image" class="goodImage">
              </div>
              <p class="goodText">{{good.txt}}</p>
            </div>
          </div>
        </div>
      </div>

<!-- END OF THE SECOND BLOCK  -->

<!-- THIRD BLOCK ABOUT MAIN TARGET target_side OF GENESIS -->
  <div class="target" id="target3">
    <div class="target_side target_left">
      <div class="target_left_container">
        <img src="./assets/images/target.svg" alt="image">
      </div>
    </div>
    <div class="target_side target_right">
      <p class="target_right_text">ЗВЕРТАЮЧИСЬ ДО<br>НАС, ВИ ОТРИМУЄТЕ<br>РІШЕННЯ<br>МАРКЕТИНГОВИХ І<br>БІЗНЕС-ЗАДАЧ:<br>ФІНАНСОВИХ ТА<br>НЕФІНАНСОВИХ</p>
    </div>
  </div>
<!-- THE END OF THIRD BLOCK ABOUT MAIN TARGET OF GENESIS -->


<!-- FOURTH BLOCK WITH ALL STEPS THAT PROVIDE GENESIS COMPANY  -->
    <div class="steps">
      <h2 class="steps_title">Для цього ми проведемо вас по всіх<br>етапах створення кращого веб-продукту:</h2>
      <div class="steps_schema">
        <div class="steps_schema_picture">
          <div class="line">
            <div class="steps_schema_picture_element"></div>
            <div class="steps_schema_picture_element"></div>
            <div class="steps_schema_picture_element"></div>
            <div class="steps_schema_picture_element"></div>
          </div>
            <div class="steps_schema_card steps_schema_card_first">
              <img class="card_image card_image_first" src="./assets/images/third1.svg" alt="card's image">
              <p class="card_title card_title_first">Дизайн Мислення</p>
              <p class="card_text card_text_first">Знаємо, як у короткі терміни<br>вивести новий продукт на ринок</p>
            </div>
            <div class="steps_schema_card steps_schema_card_second">
              <img class="card_image card_image_second" src="./assets/images/third2.svg" alt="card's image">
              <p class="card_title card_title_second">Технічна Стратегія</p>
              <p class="card_text card_text_second">Розбираємо вашу технічну задачу<br>та підбираємо оптимальний стек<br>технологій</p>
            </div>
            <div class="steps_schema_card steps_schema_card_third">
              <img class="card_image card_image_third" src="./assets/images/third3.svg" alt="card's image">
              <p class="card_title card_title_third">UX Аудит</p>
              <p class="card_text card_text_third">Аналізуємо шлях клієнта та досвід<br>його взаємодії з вами, усуваємо<br>слабкі місця</p>
            </div>
            <div class="steps_schema_card steps_schema_card_fourth">
              <img class="card_image card_image_fourth" src="./assets/images/third4.svg" alt="card's image">
              <p class="card_title card_title_fourth">Тестування Якості</p>
              <p class="card_text card_text_fourth">Допоможемо знайти всі баги та<br>недоліки в продукті перед його<br>запуском</p>
            </div>
        </div>

      </div>
    </div>

<!-- THE END OF FOURTH BLOCK WITH ALL STEPS THAT PROVIDE GENESIS COMPANY  -->

<!-- FIVTH BLOCK WITH INPUT  -->
      <div class="block-input" id="input5">
        <h2 class="block-input-title">З'явилися запитання? Залиште заявку і ми оперативно вас проконсультуємо.</h2>
        <div class="inputContainer" v-if="!isData"> 
          <input type="text" class="field input-field" placeholder="Ім’я:" v-model="name">
          <input type="number" class="field input-field" placeholder="Телефон:" v-model.number="phone">
          <button class="field button-field anim" @click="sendData()">Хочу консультацію</button>
        </div>
        <button v-if="isData" class="isDataButton">Дякуємо! Дані успішно відправлені!</button>
        <button v-if="noData" class="noDataButton">Заповніть усі поля</button>
      </div>
<!-- THE END FIVTH BLOCK WITH INPUT  -->

<!-- SIXTH BLOCK FOOTER  -->
    
      <div class="footer" id="footer6">
        <div class="leftSide">
          <div class="leftSide-Container">
            <h3 class="contacts">Контакти</h3>
            <a href="mailto:contact@genesisdevelop.com" class="email">contact@genesisdevelop.com</a>
            <p class="adresText city">Україна, місто Вінниця</p>
            <p class="adresText street">вулиця Магістратська, 156А, прим. №6</p>
            <p class="adresText street">&copy; 2019 Genesys Development. Усі права захищено.</p>
          </div>
        </div>
        <div class="map">
            <img src="./assets/images/maps.png" alt="map" class="map-image">
        </div>
      </div>
    
<!-- THE END SIXTH BLOCK FOOTER  -->


  </div>
</template>

<script>
import img1 from './assets/images/1-01.svg'
import img2 from './assets/images/1-02.svg'
import img3 from './assets/images/1-03.svg'
import img4 from './assets/images/1-04.svg'
import img5 from './assets/images/1-05.svg'
import img6 from './assets/images/1-06.svg'
import img7 from './assets/images/1-07.svg'
import img8 from './assets/images/1-08.svg'
import img9 from './assets/images/1-09.svg'
import { log } from 'util'

export default {
  name: 'app',
  // el: "#app",
  data(){
    return{
      isTabActive: false,
      // animations variables 
        // second block 

        // end of second block 


      stepsTitle: null, 
      positionStepsTitle: 0,

      // image
        stepsImageFirst: null, 
        stepsImageSecond: null, 
        stepsImageThird: null, 
        stepsImageFourth: null, 
        positionStepsImageFirst: 0, 
        positionStepsImageSecond: 0, 
        positionStepsImageThird: 0, 
        positionStepsImageFourth: 0, 
      // end of image

      // card's titles 
        stepsCardsTitleFirst: null, 
        stepsCardsTitleSecond: null, 
        stepsCardsTitleThird: null, 
        stepsCardsTitleFourth: null, 
        positionStepsCardsTitleFirst: 0, 
        positionStepsCardsTitleSecond: 0, 
        positionStepsCardsTitleThird: 0, 
        positionStepsCardsTitleFourth: 0, 
      // end of card's titles 



      // card's text
        stepsCardsTextFirst: null, 
        stepsCardsTextSecond: null, 
        stepsCardsTextThird: null, 
        stepsCardsTextFourth: null, 
        positionStepsCardsTextFirst: 0, 
        positionStepsCardsTextSecond: 0, 
        positionStepsCardsTextThird: 0, 
        positionStepsCardsTextFourth: 0,
      // end of card's text
      // third block 
        targetLeft: null, 
        targetRight: null, 
      // end of third block 



    
      //the end of animations variables 


      isVisible: false,
      name: '',
      phone: '',
      isData: false,
      noData: false,
      goods: [
        {
          img: img4,
          txt: 'Фінансові проекти',
          ID: 'elem1'
        },
        {
          img: img2,
          txt: 'Криптовалютні біржі',
          ID: 'elem2'
        },
        {
          img: img7,
          txt: 'Корпоративні додатки',
          ID: 'elem3'
        },
        {
          img: img1,
          txt: 'Портали нерухомості',
          ID: 'elem4'
        },
        {
          img: img6,
          txt: 'Новинні портали',
          ID: 'elem5'
        },
        {
          img: img3,
          txt: 'Інтернет-магазини',
          ID: 'elem6'
        },
        {
          img: img8,
          txt: 'Дошки оголошень',
          ID: 'elem7'
        },
        {
          img: img9,
          txt: 'Сервіси знайомств',
          ID: 'elem8'
        },
        {
          img: img5,
          txt: 'Соціальні мережі',
          ID: 'elem9'
        }
      ],
    }
  }, 
  methods:{
    sendData() {
      if(this.name.trim().length == 0 || this.phone.length == 0 ) {
        this.noData = true
      } else {
        this.noData = false
        this.isData = true
      }
    },
    changeTab(){
      this.isTabActive = !this.isTabActive;
    },
    handleScroll () {

      // ANIMATION FOR SECOND BLOCK 
          if(document.querySelector('#goodsBlockTitle').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#goodsBlockTitle').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem1').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem1').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem2').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem2').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem3').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem3').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem4').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem4').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem5').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem5').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem6').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem6').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem7').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem7').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem8').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem8').style = 'opacity: 1;animation-name: goodsanim'
          }
          if(document.querySelector('#elem9').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('#elem9').style = 'opacity: 1;animation-name: goodsanim'
          }
      
      // ANIMATIONS FOR STEPS (FOURTH BLOCK)
          // FOR TITLE 
              this.stepsTitle = this.$el.querySelector(".steps_title").getBoundingClientRect();
                  if(this.stepsTitle.top < window.innerHeight && this.stepsTitle.bottom >= 0) {
                      console.log('ZAGOLOVOK',this.stepsTitle);
                  }
          // THE END FOR TITLE 

          // FOR CARD'S IMAGES 
              this.stepsImageFirst = this.$el.querySelector(".card_image_first").getBoundingClientRect();
                    if(this.stepsImageFirst.top < window.innerHeight && this.stepsImageFirst.bottom >= 0) {
                        document.querySelector('.card_image_first').style = 'animation: card-image-left 1s ease-out forwards;';
                    }

              this.stepsImageSecond = this.$el.querySelector(".card_image_second").getBoundingClientRect();
                    if(this.stepsImageSecond.top < window.innerHeight && this.stepsImageSecond.bottom >= 0) {
                        document.querySelector('.card_image_second').style = 'animation: card-image-right 1s ease-out forwards;';

                    }


              this.stepsImageThird = this.$el.querySelector(".card_image_third").getBoundingClientRect();
                      if(this.stepsImageThird.top < window.innerHeight && this.stepsImageThird.bottom >= 0) {
                            document.querySelector('.card_image_third').style = 'animation: card-image-left 1s ease-out forwards;';
                          }

              this.stepsImageFourth = this.$el.querySelector(".card_image_fourth").getBoundingClientRect();
                      if(this.stepsImageFourth.top < window.innerHeight && this.stepsImageFourth.bottom >= 0) {
                              document.querySelector('.card_image_fourth').style = 'animation: card-image-right 1s ease-out forwards;';
                          }
          // THE END FOR CARD'S IMAGES 

          // FOR CARD'S TITLES 
              this.stepsCardsTitleFirst = this.$el.querySelector(".card_title_first").getBoundingClientRect();
                    if(this.stepsCardsTitleFirst.top < window.innerHeight && this.stepsCardsTitleFirst.bottom >= 0) {
                       document.querySelector('.card_title_first').style = 'animation: card-image-left 0.8s ease-out forwards;';
                    }

              this.stepsCardsTitleSecond = this.$el.querySelector(".card_title_second").getBoundingClientRect();
                    if(this.stepsCardsTitleSecond.top < window.innerHeight && this.stepsCardsTitleSecond.bottom >= 0) {
                        document.querySelector('.card_title_second').style = 'animation: card-title-right 0.8s ease-out forwards;';
                    }


              this.stepsCardsTitleThird = this.$el.querySelector(".card_title_third").getBoundingClientRect();
                      if(this.stepsCardsTitleThird.top < window.innerHeight && this.stepsCardsTitleThird.bottom >= 0) {
                            document.querySelector('.card_title_third').style = 'animation: card-image-left 0.8s ease-out forwards;';
                          }

              this.stepsCardsTitleFourth = this.$el.querySelector(".card_title_fourth").getBoundingClientRect();
                      if(this.stepsCardsTitleFourth.top < window.innerHeight && this.stepsCardsTitleFourth.bottom >= 0) {
                          document.querySelector('.card_title_fourth').style = 'animation: card-title-right 0.8s ease-out forwards;';
                        }
          // THE END FOR CARD'S TITLES 

          // FOR CARD'S TEXT 
               this.stepsCardsTextFirst = this.$el.querySelector(".card_text_first").getBoundingClientRect();
                    if(this.stepsCardsTextFirst.top < window.innerHeight && this.stepsCardsTextFirst.bottom >= 0) {
                      document.querySelector('.card_text_first').style = 'animation: card-image-left 0.8s ease-out forwards;';
                    }

              this.stepsCardsTextSecond = this.$el.querySelector(".card_text_second").getBoundingClientRect();
                    if(this.stepsCardsTextSecond.top < window.innerHeight && this.stepsCardsTextSecond.bottom >= 0) {
                      document.querySelector('.card_text_second').style = 'animation: card-title-right 0.8s ease-out forwards;';
                    }


              this.stepsCardsTextThird = this.$el.querySelector(".card_text_third").getBoundingClientRect();
                      if(this.stepsCardsTextThird.top < window.innerHeight && this.stepsCardsTextThird.bottom >= 0) {
                        document.querySelector('.card_text_third').style = 'animation: card-image-left 0.8s ease-out forwards;';
                          }

              this.stepsCardsTextFourth = this.$el.querySelector(".card_text_fourth").getBoundingClientRect();
                      if(this.stepsCardsTextFourth.top < window.innerHeight && this.stepsCardsTextFourth.bottom >= 0) {
                        document.querySelector('.card_text_fourth').style = 'animation: card-title-right 0.8s ease-out forwards;';
                      }
          // THE END FOR CARD'S TEXT 


        // THE END OF ANIMATIONS FOR STEPS (FOURTH BLOCK)




      // ANIMATIONS FOR TARGET (THIRD BLOCK)
              this.targetLeft = this.$el.querySelector(".target_left").getBoundingClientRect();
                      if(this.targetLeft.top < window.innerHeight && this.targetLeft.bottom >= 0) {
                            document.querySelector('.target_left').style = 'animation: targetLeft 1s ease-out forwards;';
                          }

              this.targetRight = this.$el.querySelector(".target_right").getBoundingClientRect();
                      if(this.targetRight.top < window.innerHeight && this.targetRight.bottom >= 0) {
                              document.querySelector('.target_right').style = 'animation: targetRight 1s ease-out forwards;';
                          }
      // ANIMATION FOR INPUTS (FIVTH BLOCK)
          if(document.querySelector('.inputContainer').getBoundingClientRect().top < window.innerHeight) {
            document.querySelector('.inputContainer').style = 'animation-name: inputscale'
          }
      // ANIMATIONS FOR FOOTER (SIXTH BLOCK)
       

    }
  },
  created () {
      window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" >
$blackColor: #000000;;

@import "./assets/fonts.css";
*{
  margin: 0; 
  padding: 0; 
  box-sizing: border-box;
  cursor: default;
}
body{
  max-width: 100vw; 
}
.logo{
  display: block;
  width: 150px;
  height: auto;
  margin-left: 10%;
}
// ALL ANIMATIONS

    @keyframes header-animation {
      0%{
        top: -90px;
      }
      100%{
        top: 0; 
      }
    }
    @keyframes header-items {
      0%{
        margin-top: -110px;
      }
      100%{
        margin-top: 0px;
      }
    }
    @keyframes welcome-title{
      0%{
        opacity: 0;
        margin-left: -100%;
      }
      100%{
        opacity: 1;
        margin-left: 0;
      }
    }
    @keyframes welcome-subtitle{
      0%{
        top: 150%;
        opacity: 0;
      }
      100%{
        top: 57.7%;
        opacity: 1;
      }
    }
    @keyframes welcome-button{
      0%{
        top: 150%;
        opacity: 0;
      }
      100%{
        top: 67%;
        opacity: 1;
      }
    }
// THE END OF ANIMATION'S LIST   

/* STYLES FOR HEADER  */

  .header{
    position: fixed; 
    top: -90px; 
    width: 100vw;
    height: 90px;  
    display: flex;
    background:  #000000;; 
    color: #ffffff;; 
    border: solid  #000000;; 
    animation: header-animation 1s  ease-out forwards; 
    z-index: 9999;
  }
  .header_left{
    width: 50%;
    display: flex; 
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
    margin-top: -110px;
    animation: header-items 1s ease-out forwards;
  }
  .header_item{
    margin-right: 35px;
    font-family: 'Avantgard', Arial, Helvetica, sans-serif; 
    font-size: 17px; 
    font-weight: 700;
  }
  .header_item_name{
    font-family: 'Avantgard', Arial, Helvetica, sans-serif; 
    font-size: 26px; 
    font-weight: 900;
    margin: 0;
    margin-left: 27px;
  }
  .header_right{
    width: 50%; 
    display: flex; 
    justify-content: flex-end;
    align-items: center;
    margin-right: 10%;
    z-index: 2;
    margin-top: -110px;
    animation: header-items 1s ease-out forwards;
  }

  // THE BURGER STYLING 

      #burger{
        visibility: hidden;
        display: none;
      }
      .label{
        display: none;
      }
      body {
      background-color: #ed5050;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      h1 {
        > span {
          text-transform: none;
          opacity: .5;
          font-weight: 300;
          font-size: 12px;
        }
      }
        input + label {
          position: fixed;
          // top: 35px;
          animation: burger-big 1s ease-out forwards;
          right: 40px;
          height: 20px;
          width: 15px; 
          z-index: 2;
          span {
            position: absolute;
            width: 100%;
            height: 2px;
            top: 50%;
            margin-top: -1px;
            left: 0;
            display: block;
            background: #ffffff;;
            transition: .5s;
          }
          span:first-child {
            top: 3px; 
          }
          span:last-child {
            top: 16px; 
          }      
        }
        label:hover {
          cursor: pointer;
        }
        input:checked + label { 
          span {
            opacity: 0;
            top: 50%;
          }
          span:first-child {
            opacity: 1;
            transform: rotate(405deg);
          }
          span:last-child {
            opacity: 1;
            transform: rotate(-405deg);
          }
        }
        input ~ nav {
          background:  #000000;;
          position: fixed;
          top: 0px;
          left: 0;
          width: 100%;
          height: 0px;
          z-index: 1;
          transition: .5s;
          transition-delay: .5s;
          overflow: hidden;
          > ul {
            text-align: center;
            position: absolute;
            // top: 35%;
            // left: 20%;
            // right: 20%;
                margin: auto;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: fit-content;
            > li {
              opacity: 0;
              transition: .5s;
              transition-delay: 0s;
              list-style-type: none;
              > a {
                text-decoration: none;
                text-transform: uppercase;
                color: #ffffff;;
                font-family: 'Avantgard', Arial, Helvetica, sans-serif; 
                font-size: 17px; 
                font-weight: 700;
                font-weight: 700;
                display: block;
                padding: 30px;
              }
            }
          }
        }
        input:checked ~ nav { 
          height: 100%;
          transition-delay: 0s;
          > ul {
            > li {
              opacity: 1;
              transition-delay: .5s;
            }
          }
        }
    }

  // END OF THE BURGER STYLING 

  /* header media requirements    */
      @media (max-height: 400px) {
        .header{
          height: 70px;
        }
        .header_left{
          justify-content: flex-start;
        }
        .welcome{
          padding-top: 70px;
        }
      }

      @media (max-width: 1066px) {
        .header_right{
          padding: 0; 
        }
        .header_item_contacts{
          margin: 0; 
        }
        .nav_tab_item{
          padding: 15px;
        }
      }
      @media (max-width: 871px) {
        .header_right{
          width: 100%;
        }
        .header_left{
          width: 50%;
        }
      }
       @media (max-width: 840px) {
        .header_item{
          display: none; 
        }
        .header_item_name{
          display: block; 
        }
        .header_right{
          width: 25%;
        }
        .header_left{
          width: 75%;
          justify-content: flex-start; 
        }
        .label{
          display: block; 
        }
      }
       @media (max-width: 424px) {
        .header_item_name{
          font-size: 20px;
        }
         .label{
          // top: 36px;
          animation: burger-medium 1s ease-out forwards; 
        }
      }
       @media (max-width: 395px) {
        .header_item_name{
          font-size: 20px;
        }
      }
      @media (max-width: 336px) {
        .header{
           height: 70px;
         }
        .welcome{
          padding: 70px 0;
        }
        .header_item_name{
          font-size: 18px;
        }
        .label{
          // top: 26px;
          animation: burger-small 1s ease-out forwards; 
        }
        .logo{
          width: 100px;
        }
      }
       @media (max-width: 307px) {
         .header{
           height: 70px;
         }
        .header_item_name{
          font-size: 16px;
        }
        .label{
          top: 26px;
        }
      }
         /* @media (max-width: 368px) {
        .header_item_name{
          font-size: 12px;
        }
      } */

/*END OF STYLES FOR HEADER  */

// STYLES FOR FIRST WELCOME BLOCK 

  .welcome{
    width: 100%;
    height: 100vh;
    min-height: 277px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; 
    overflow: hidden;
  }
  .welcome__text{
    text-align: center; 
    font-family: 'SF', Arial, Helvetica, sans-serif; 
    color: #ffffff;; 
    margin: 20px 0; 
  }
  .welcome__title{
    font-family: 'Avantgard', Arial, Helvetica, sans-serif; 
    font-size: 80px;
    margin-left: -10400px;
    opacity: 0;
    animation: welcome-title 1s ease-out forwards;
    line-height: 1.1;
    margin-bottom: 138px;
  }
  .welcome__subtitle{
    font-size: 22px;
    font-weight: 300; 
    position: absolute; 
    margin: auto;
    left: 0; 
    right: 0; 
    top: -150%;
    animation: welcome-subtitle 1s ease-in-out forwards;
  }
  .welcome__wrapper{
    width: 100%;
    text-align: center;
    position: absolute; 
    margin: auto;
    left: 0; 
    right: 0; 
    top: 150%;
    animation: welcome-button 1.1s ease-in-out forwards;
  }
  .welcome__button{
    width: 17%;
    min-width: 230px;
    height: 54px;
    padding: 0 20px;
    background:  #000000;; 
    border: 1px solid transparent; 
    border-radius: 30px;
    line-height: 1.55;
    font-weight: 300; 
    font-size: 17px;
  }

  // media requirements of welcome block 
  @media (max-width: 1030px) {
        .welcome__title{
          font-size: 80px; 
        }
        .welcome__subtitle{
          font-size: 22px; 
        }
        .welcome__button{
          font-size: 17px; 
        }
  }
  @media (max-width: 980px) {
        .welcome__title{
          font-size: 60px; 
        }
        .welcome__subtitle{
          font-size: 17px; 
        }
        .welcome__button{
          font-size: 17px; 
        }
  }
  @media (max-width: 745px) {
        .welcome__title{
          font-size: 50px; 
        }
        .welcome__subtitle{
          font-size: 15px; 
        }
        .welcome__button{
          font-size: 12px; 
        }
  }
  @media (max-width: 630px) {
        .welcome__title{
          font-size: 40px; 
        }
        .welcome__subtitle{
          font-size: 14px; 
        }
        .welcome__button{
          font-size: 12px; 
        }
  }
  @media (max-width: 510px) {
        .welcome__title{
          font-size: 30px; 
          margin-bottom: 20%;
        }
        .welcome__subtitle{
          width: 187px;
          font-size: 14px; 
        }
        .welcome__button{
          font-size: 12px; 
        }
  }
  @media (max-width: 370px) {
        .welcome__title{
          font-size: 25px; 
          margin: 0; 
          display: block;
          margin-top: 30%;
        }
        .welcome__subtitle{
          font-size: 12px; 
          position: static; 
          animation: none; 
          display: block;
          margin: 20px auto;
        }
        .welcome__wrapper{
          position: static; 
          animation: none; 
          display: block;
          margin: 0 auto 20px auto;
        }
        .welcome__button{
          font-size: 12px; 
          margin: 0;
        }
  }
  @media (max-width: 337px) {
    .welcome__title{
          font-size: 20px; 
          width: 100%;
        }
  }
      // for iPad Pro 

        @media only screen 
          and (min-width: 1024px) 
          and (max-height: 1366px) 
          and (-webkit-min-device-pixel-ratio: 1.5) {
            .welcome__title{
              font-size: 77px; 
              width: 100%;
            }
            .welcome__subtitle{
              font-size: 29px;
              // margin-top: -65px; 
            }
            .welcome__button{
              font-size: 27px; 
              min-width: 40%;
              max-width: 40%; 
              height: 76px;
              border-radius: 50px;
              margin: 0;
            }
        }

        /* Portrait */
        @media only screen 
          and (min-width: 1024px) 
          and (max-height: 1366px) 
          and (orientation: portrait) 
          and (-webkit-min-device-pixel-ratio: 1.5) {

        }

        /* Landscape */
        @media only screen 
          and (min-width: 1024px) 
          and (max-height: 1366px) 
          and (orientation: landscape) 
          and (-webkit-min-device-pixel-ratio: 1.5) {
            
        }

      // end requirements for iPad Pro 


  // END OF media requirements of welcome block 


//END OF STYLES FOR FIRST WELCOME BLOCK 

// STYLING FOR SECOND BLOCK 

      #goodsBlockTitle {
        animation-duration: 0.5s;
        animation-delay: 0;
        animation-timing-function: ease-in-out;
        transition: all 0.5s;
        animation-fill-mode: backwards;
      }
      #elem1 {
        animation-duration: 0.5s;
        animation-delay: 0;
        animation-timing-function: ease-in;
        transition: all 0.5s;
        animation-fill-mode: backwards;
      }
      #elem2 {
        transition: all 0.5s;
        animation-duration: 0.5s;
        animation-delay: 0.1s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      #elem3 {
        animation-duration: 0.5s;
        transition: all 0.2s;
        animation-timing-function: ease-in;
        animation-delay: 0.5s;
        animation-fill-mode: backwards;
      }
      #elem4 {
        animation-duration: 0.5s;
        transition: all 0.5s;
        animation-delay: 0.3s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      #elem5 {
        animation-duration: 0.5s;
        transition: all 0.5s;
        animation-delay: 0.4s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      #elem6 {
        animation-duration: 0.5s;
        transition: all 0.5s;
        animation-delay: 0.5s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      #elem7 {
        animation-duration: 0.5s;
        transition: all 0.5s;
        animation-delay: 0.6s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      #elem8 {
        animation-duration: 0.5s;
        transition: all 0.5s;
        animation-delay: 0.7s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      #elem9 {
        animation-duration: 0.5s;
        transition: all 0.5s;
        animation-delay: 0.8s;
        animation-timing-function: ease-in;
        animation-fill-mode: backwards;
      }
      .goodsBlock {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-content: center;
        align-items: center;
      }
      .goodsBlockTitle {
        font-family: 'Avantgard', Arial, Helvetica, sans-serif;
        font-size: 42px;
        color: #fff;
        margin-bottom: 90px;
        max-width: 980px;
        width: 80%;
      }
      .goodsImage {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        max-width: 1199px;
        justify-content: space-between;
      }
      .goodImage {
        width: 160px;
      }
      .goodContainer {
        width: 300px;
      }
      .good {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        margin-bottom: 120px;
      }
      .goodImageContainer {
        height: 200px;
      }
      .goodText {
        font-family: 'Avantgard', Arial, Helvetica, sans-serif;
        font-size: 20px;
        color: #fff;
      }

    // media requirements second block 

      @media screen and (max-width: 1140px) {
        .goodsImage {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .good {
          margin-bottom: 60px;
        }
      }
      @media (max-width: 945px){
        .goodsBlockTitle{
          font-size: 33px
        }
      }
      @media (max-width: 745px){
        .goodsBlockTitle{
          margin: 0;
          margin: 50px 0 30px 0;
          font-size: 30px;
        }
        .goodText{
          font-size: 23px;
        }
      }
      @media (max-width: 589px){
        .goodsBlockTitle{
          font-size: 26px;
        }
        .goodText{
          font-size: 23px;
        }
      }
      @media (max-width: 400px){
        .goodsBlockTitle{
          font-size: 23px;
        }
        .goodText{
          font-size: 23px;
        }
      }

    // END OF THE media requirements second block 


// END OF STYLING FOR SECOND BLOCK 


// STYLES FOR THIRD BLOCK 

    .target{ 
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .target_left{
      width: 560px;
      height: 560px;
      max-width: 560px;
      max-height: 560px;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.20);
    }
    .target_right{
      width: 560px;
      height: 560px; 
      display: flex;
      flex-direction: column;
      justify-content: center; 
      align-content: flex-start; 
      align-items: center;
    }
    .target_right_text{
        color: #ffffff;
        width: fit-content;
        font-size: 42px; 
        font-family: 'Avantgard', Arial, Helvetica, sans-serif; 
        font-weight: 900; 
    }

    // MEDIA REQUIREMENTS FOR THIRD BLOCK 
      @media (max-width: 1300px){
        .target{
          max-width: 985px;
          min-width: 985px;
        }
        .target_left{
          width: 460px;
          height: 460px;
        }
        .target_right {
          width: 460px;
          height: 460px;
            }
      }
       @media (max-width: 1050px){
        .target{
          max-width: fit-content;
          min-width: fit-content;
          height: fit-content;
          flex-direction: column;
          align-items: center;
        }
        .target_left{
          width: 600px;
          height: 600px;
        }
        .target_right {
          width: 100vw;
          text-align: center;
        }
      }
      @media (max-width: 1200px){
        .target_left{
          width: 460px;
          height: 460px;
        }
      }
       @media (max-width: 491px){
        .target_left{
          width: 90%;
          height: auto;
        }
        .target_right{
          height: fit-content;
          margin-top: 10%;
        }
        .target_right_text{
          font-size: 30px;
        }
      }
      @media (max-width: 330px){
        .target_right_text{
          font-size: 24px;
        }
      }

    // THE END MEDIA REQUIREMENTS FOR THIRD BLOCK 
    

// THE END OF STYLES FOR THIRD BLOCK 


// STYLES FOR FOURTH BLOCK 

  .steps{
    height: fit-content;
    width: 100%; 
    display: block;
  }
  .steps_title{
    width: 100%;
    height: fit-content;
    font-size: 45px;
    color: #ffffff;;
    font-family: 'Avantgard';
    font-weight: bold; 
    text-align: center;
    margin: 100px 0;
  }
    .steps_schema_picture{
      height: 1262px;
      position: relative; 
      display: flex; 
      flex-direction: column; 
      justify-content: center;
      align-items: center; 
    }
  // styling for picture of checkpiont line 

    .line{
      height: 830px;
      width: 0; 
      background: #ffffff;
      border: 1px solid #ffffff;
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0; 
      display: flex; 
      flex-direction: column; 
      justify-content: space-between;
      align-items: center;
    }
    .steps_schema_picture_element{
        height: 25px;
        width: 25px;
        border: 5px solid #ffffff;; 
        border-radius: 50%;
        background: #000000;
    }
    .steps_schema_picture_element:first-child{
      margin-top: -3px;
    }
    .steps_schema_picture_element:last-child{
      margin-bottom: -3px;
    }

  // End styling for picture of checkpiont line 


  // styles for cards 
    .card_title{
      font-size: 29px;
      font-family: 'Avantgard';
      font-weight: bold;
      color: #ffffff; 
      width: 100%;
      height: fit-content;
      margin: 10px 0; 
    }
    .card_text{
      font-size: 15px;
      font-family: 'SF',Arial,sans-serif;
      line-height: 1.55;
      font-weight: 600;
      color: #000000; 
    }
    .steps_schema .steps_schema_card .card_image{
      width: 120px;
      height: 120px;
    }
    .steps_schema_card{
      width: 272px;
      height: fit-content;
      text-align: center;
      position: absolute;
      margin: auto; 
      top: 0;
      right: 0;
      bottom: 0;
      left: 0; 
    }
    .steps_schema_card:nth-child(2n){
      align-self: flex-end;
    }
    .steps_schema_card_first{
      margin-top: 0px;
      top: 71px;
      right: 400px;
    }
    .steps_schema_card_second{
       margin-top: 0px;
       left: 400px;
       top: 343px;
    }
    .steps_schema_card_third{
      margin-top: 0px;
      right: 400px;
      top: 611px;
    }
    .steps_schema_card_fourth{
      margin-top: 0px;
         left: 400px;
      top: 883px; 
    }

  // THE END  of styles for cards 

    // media requirements of third block 

      @media (max-width: 945px){
        .steps_title{
          margin: 50px 0 30px 0;
          font-size: 33px
        }
      }
      @media (max-width: 745px){
        .steps_title{
          margin: 50px 0 30px 0;
          font-size: 30px
        }
        .steps_schema_picture{
          position: static;
        }
        .line{
          display: none;
        }
        .steps_schema_card{
          position: static;
          margin: 0; 
          margin: 30px 0; 
        }
        .steps_schema_card:nth-child(2n){
          align-self: center;
        }
      }
      @media (max-width: 685px){
        .steps_title{
          font-size: 28px;
        }
      }
      @media (max-width: 625px){
        .steps_title{
          font-size: 26px;
          width: 80%;
          margin: 0 auto;
          margin-top: 120px;
        }
      }
      @media (max-width: 400px){
        .steps_title{
          font-size: 23px;
        }
        .card_title{
          font-size: 23px;
        }
      }

    // media requirements of third block 

// THE END OF STYLES FOR FOURTH BLOCK 

// STYLES FOR FIVTH BLOCK WITH INPUT 
    .block-input {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-bottom: 120px;
      text-align: center;
      padding-top: 120px;
    }
    .block-input-title {
      color: #fff;
      font-family: 'Avantgard', Arial, Helvetica, sans-serif;
      font-size: 40px;
      line-height: 47px;
      font-weight: 600;
      max-width: 1200px;
      width: 80%;
      margin-bottom: 120px;
    }
    .inputContainer {
      display: flex;
      justify-content: space-between;
      width: 80%;
      max-width: 1095px;
      margin-bottom: 20px;
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-timing-function: ease-out;
      transition: all 0.5s;
      animation-fill-mode: backwards;
    }
    .noDataButton {
      background-color: #F95D51;
      width: 80%;
      max-width: 1095px;
      height: 70px;
      border: none;
      color: #fff;
      font-family: 'SF', Arial, Helvetica, sans-serif;
      font-size: 26px;
      font-weight: 300;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .noDataButton, 
    .noDataButton:active, 
    .noDataButton:focus {
        outline: none;
    }
    .isDataButton {
      background-color: #62C584;
      width: 80%;
      max-width: 1095px;
      height: 70px;
      border: none;
      color: #fff;
      font-family: 'SF', Arial, Helvetica, sans-serif;
      font-size: 26px;
      font-weight: 300;
      margin-bottom: 20px;
      cursor: pointer;
    }
    .isDataButton, 
    .isDataButton:active, 
    .isDataButton:focus {
        outline: none;
    }
    input #editing-view-port>>>#spin {
      display: none !important;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    .field {
      width: 32%;
      max-width: 344px;
      height: 60px;
      border: solid 1px black;
    }
    .field, 
    .field:active, 
    .field:focus {
        outline: none;
    }
    .input-field {
      background-color: white;
      font-family: 'SF', Arial, Helvetica, sans-serif;
      font-size: 20px;
      padding-left: 20px;
    }
    .button-field {
      background-color: black;
      color: white;
      font-family: 'Avantgard', Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 18px;
      position: relative;
    }
    .button-field, 
    .button-field:active, 
    .button-field:focus {
        outline: none;
    }
    .anim {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      text-transform: uppercase;
      cursor: pointer;
      overflow: hidden;
      -webkit-transition: ease 0.3s;
      transition: ease 0.3s;
    }
    .anim::before {
      position: absolute;
        bottom: -350%;
      left: -35%;
        z-index: 2;
        display: block;
        content: '';
        width: 0;
      height: 0;
      // border: solid 1px white;
      box-shadow: 0 0 10px rgba(255,255,255,0.9);
        background: rgba(255,255,255,0.5);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      -webkit-animation-duration: 5s;
      animation-duration: 5s;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      -webkit-transition: all 0.1s;
      transition: all 0.1s;
      -webkit-animation-name: circle;
      animation-name: circle;
      -webkit-animation-iteration-count: infinite;
      animation-iteration-count: infinite;
    }

    @keyframes circle {
        0% {
            opacity: .5;
        background: rgba(255,255,255,.2);
        }
        20% {
            opacity: 1;
        background: rgba(255,255,255,.5);
      }
      40% {
        opacity: 0.2;
      }
      60% {
        opacity: 0;
        width: 480%;
            height: 600%;
      }
        100% {
            width: 480%;
            height: 600%;
            opacity: 0;
        }
    }
    @keyframes inputscale {
      0% {
        transform: scale(0.9);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
   
// THE END STYLES FOR FIVTH BLOCK WITH INPUT 

// STYLES FOR SIXTH BLOCK FOOTER
    #app .footer {
        display: flex;
        height: 100%;
        max-height: 775px;
        width: 100%;
        background-color: #ed5050;
        position: relative;
        padding-bottom: 0px;
      }
    .leftSide {
        display: flex;
        width: 50%;
        max-width: 100%;
        height: 100%;
      }
      .leftSide-Container {
        display: flex;
        flex-direction: column;
        margin: 20%;
        height: 60%;
        width: 60%;
        text-align: left;
      }
      .contacts {
        font-family: 'Avantgard', Arial, Helvetica, sans-serif;
        font-size: 30px;
        color: #fff;
        margin-bottom: 45px;
      }
      .email {
        color: rgb(122, 0, 0);
        text-decoration: none;
        font-family: 'Avantgard', Arial, Helvetica, sans-serif;
        font-size: 24px;
        margin-bottom: 30px;
        font-weight: 300;
      }
      .email:active {
        color: rgb(122, 0, 0);
        text-decoration: none;
      } 
      .adresText {
        color: #fff;
        font-family: 'Avantgard', Arial, Helvetica, sans-serif;
        font-size: 18px;
      }
      .city {
        margin-bottom: 34px;
      }
      .street {
        margin-bottom: 45px;
      }
      .map {
        width: 50%;
        height: 100%;
        display: flex;
      }
      .map-image {
        width: 100%;
        height: 100%;
      }
      @media screen and (max-width: 700px) {
        .leftSide-Container {
          width: 100%;
          margin-left: 10%;
          height: 60%;
        }
        .email {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .contacts {
          margin-bottom: 20px;
        }
        .city {
          margin-bottom: 20px;
        }
        .street {
          margin-bottom: 20px;
        }
      }
      @media screen and (max-width: 1030px) {
      #app .footer {
        flex-direction: column;
      }
      .leftSide {
        width: 100%;
      }
      .leftSide-Container {
        height: 70%;
        margin-left: 10%;
        margin-bottom: 5%;
        margin-top: 5%;
      }
      .icons {
        margin-top: 0px;
      }
      .map {
        width: 100%;
        padding: 10%;
        padding-top: 0%;
        padding-bottom: 5%;
      }
      .map-image {
        background-position-y:center;
      }
      .inputContainer {
        flex-direction: column;
        justify-content: space-between;
        height: 240px;
      }
      .field {
        width: 100%;
        max-width: 100%;
      }
    }
      
        // MEDIA REQUIREMENTS FOR INPUTS TO FIX THE BUGS 
                  @media (max-width: 764px){
                    .block-input-title{
                      font-size: 40px;
                      margin-bottom: 70px;
                      margin-bottom: 60px;
                      margin-top: 95px;
                    }
                  }
                  @media (max-width: 746px){
                    .block-input{
                      margin-bottom: 80px;
                    }
                  }
                  @media (max-width: 450px){
                    .block-input-title{
                      font-size: 30px;
                      margin-top: 40px;
                      margin-bottom: 70px;
                    }
                  }
                  @media (max-width: 401px){
                    .block-input-title{
                      font-size: 25px;
                    }
                  }
                   @media (max-width: 335px){
                     .block-input{
                       margin-bottom: 70px;
                     }
                    .block-input-title{
                      font-size: 26px;
                      text-align: left;
                      margin-bottom: 50px;
                    }
                  }

// THE END STYLES FOR SIXTH BLOCK FOOTER 







// PLEASE 
/// PAY ATTENTION 

// !!!ATENTION!!! THIS IS ANIMATION SETTINGS

    // THIS IS FOR SECOND BLOCK 

          #goodsBlockTitle {
            animation-duration: 0.5s;
            animation-delay: 0;
            animation-timing-function: ease-in-out;
            transition: all 0.5s;
            animation-fill-mode: backwards;
          }
          #elem1 {
            animation-duration: 0.5s;
            animation-delay: 0;
            animation-timing-function: ease-in;
            transition: all 0.5s;
            animation-fill-mode: backwards;
          }
          #elem2 {
            transition: all 0.5s;
            animation-duration: 0.5s;
            animation-delay: 0.1s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          #elem3 {
            animation-duration: 0.5s;
            transition: all 0.2s;
            animation-timing-function: ease-in;
            animation-delay: 0.5s;
            animation-fill-mode: backwards;
          }
          #elem4 {
            animation-duration: 0.5s;
            transition: all 0.5s;
            animation-delay: 0.3s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          #elem5 {
            animation-duration: 0.5s;
            transition: all 0.5s;
            animation-delay: 0.4s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          #elem6 {
            animation-duration: 0.5s;
            transition: all 0.5s;
            animation-delay: 0.5s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          #elem7 {
            animation-duration: 0.5s;
            transition: all 0.5s;
            animation-delay: 0.6s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          #elem8 {
            animation-duration: 0.5s;
            transition: all 0.5s;
            animation-delay: 0.7s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          #elem9 {
            animation-duration: 0.5s;
            transition: all 0.5s;
            animation-delay: 0.8s;
            animation-timing-function: ease-in;
            animation-fill-mode: backwards;
          }
          @keyframes goodsanim {
            0% {
              opacity: 0;
              margin-left: 300px;
            }
            100% {
              opacity: 1;
              margin-left: 0px;
            }
          }
          @media screen and (max-width: 1140px) {
            .goodsImage {
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100%;
            }
            .good {
              margin-bottom: 60px;
            }
            #elem1 {
              animation-duration: 1s;
              animation-delay: 0;
              animation-timing-function: ease-in-out;
              transition: all 0.5s;
              animation-fill-mode: backwards;
            }
            #elem2 {
              transition: all 0.5s;
              animation-duration: 1s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
            #elem3 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-timing-function: ease-in-out;
              animation-delay: 0s;
              animation-fill-mode: backwards;
            }
            #elem4 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
            #elem5 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
            #elem6 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
            #elem7 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
            #elem8 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
            #elem9 {
              animation-duration: 1s;
              transition: all 0.5s;
              animation-delay: 0s;
              animation-timing-function: ease-in-out;
              animation-fill-mode: backwards;
            }
          }

    // THIS IS FOR SECOND BLOCK 


    // THIS IS FOR THIRD BLOCK 
        @keyframes targetLeft{
          0%{
            opacity: 0;
            margin-right: -10%;
          }
          100%{
            opacity: 1;
            margin-right:2%;
          }
        }
        .target_left{
          margin-right: -200px;
          z-index: 1;
        }
        .target_right{
          margin-left: -10%;
          opacity: 0;
          z-index: 0;
        }
        @keyframes targetRight{
          0%{
            opacity: 0;
            margin-left: -15%;
          }
          50%{
            opacity: 0;
          }
          100%{
            opacity: 1;
            margin-left:2%; 
          }
        }
        @media (max-width:1051px){
          .target_left{
            margin-top: 100px;
          }
          .target_side{
            margin: 0; 
          }
              @keyframes targetLeft{
                0%{
                  opacity: 0;
                  margin-right: -15%;
                }
                100%{
                  opacity: 1;
                  margin-right:0;
                }
              }
              @keyframes targetRight{
                0%{
                  opacity: 0;
                  margin-left: -10%;
                }
                50%{
                  opacity: 0;
                }
                100%{
                  opacity: 1;
                  margin-left:0; 
                }
              }
        }

    // THIS IS FOR THIRD BLOCK 

    // THIS IS FOR FOURTH BLOCK 

        @keyframes card-image-left{
          0%{
            opacity: 0;
            margin-left: -650px;
          }
          100%{
            opacity: 1;
            margin-left: 0;
          }
        }
        @keyframes card-image-right{
          0%{
            opacity: 0;
            margin-right: -650px;
          }
          100%{
            opacity: 1;
            margin-right: 0;
          }
        }

        @keyframes card-title-right{
          0%{
            opacity: 0;
            margin-left: 400px;
          }
          100%{
            opacity: 1;
            margin-left:0px;
          }
        }
        .card_text{
          width: 272px;
        }
    // THIS IS FOR FOURTH BLOCK 

    // THIS IS FIVTH BLOCK WITH INPUT 


    // THIS IS FIVTH BLOCK WITH INPUT 


// !!!ATENTION!!! THIS IS ANIMATION SETTINGS 
  .goodsBlock{
    max-width: 100vw;
    overflow: hidden;
  }
  .goodsBlockTitle{
    margin-top: 100px;
  }
  .steps{
    max-width: 100vw;
    overflow: hidden;
  }
  // STYLES FOR WEB_ANCHORS
      .links {
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
    .links:active {
      color: white;
      text-decoration: none;
    }
    .links:visited {
      color: white;
      text-decoration: none;
    }
  // STYLES FOR WEB_ANCHORS


    @media (max-width:337px){
      .leftSide{
        margin-top: 100px;
      }
      .block-input{
        margin-bottom: 0;
        margin-top: 0;
      }
      .block-input-title{
        margin-top: 0px;
      }
      .target{
        margin-top: 100px;
      }
      .steps_title{
        margin-top: 100px;
      }
      .target_right_text{
        margin-top: 30px;
        font-size: 23px;
      }
      .goodText{
        font-size: 23px;
      }
      .goodImage{
        width: 135px;
      }
      .goodImageContainer {
          height: 160px;
        } 
    }
    @media (max-width: 491px){
      .target_right_text{
          height: fit-content;
          margin-top: 10%;
        }
    }
    @media (max-width:1051px){
          .target_left{
            margin-top: 100px;
          }
    }
    @media (max-width:1031px){
          .leftSide{
            margin-top: 100px;
          }
    }
    .welcome__button, 
    .welcome__button:active, 
    .welcome__button:focus {
        outline: none;
        cursor: pointer;
    }

    @keyframes burger-big{
      0%{
        top: -110px;
      }
      100%{
        top: 35px;
      }
    }
    @keyframes burger-medium{
      0%{
        top: -110px;
      }
      100%{
        top: 36px;
      }
    }
    @keyframes burger-small{
      0%{
        top: -110px;
      }
      100%{
        top: 26px;
      }
    }

    @media (max-width:762px){
      .header_item_name{
        display: none; 
      }
      .logo{
        display: block;
        width: 150px;
        height: auto;
        margin-left: 30px;
      }
    }
    @media (max-width: 336px){
      .logo{
          width: 100px;
        }
    }
</style>