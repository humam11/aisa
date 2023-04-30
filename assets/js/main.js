/**
* Template Name: Impact - v1.2.0
* Template URL: https://bootstrapmade.com/impact-bootstrap-business-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/




document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;
    var theImg = document.getElementById('logo-aisa');
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        theImg.height = 55;
        theImg.width = 55;
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        theImg.height = 65;
        theImg.width = 65;
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }

    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  let portfolionIsotope = document.querySelector('.portfolio-isotope');

  if (portfolionIsotope) {

    let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
    let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
    let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

    window.addEventListener('load', () => {
      let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
        itemSelector: '.portfolio-item',
        layoutMode: portfolioLayout,
        filter: portfolioFilter,
        sortBy: portfolioSort
      });

      let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
      menuFilters.forEach(function(el) {
        el.addEventListener('click', function() {
          document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        }, false);
      });

    });

  }

  
  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});



/* Countdown for 'Upcoming Events'*/
// Set the date we're counting down to

const countdowns = document.querySelectorAll('.countdown');

countdowns.forEach(countdown => {
  // console.log(countdown.parentNode.parentNode.parentNode.nextElementSibling)
  const endDate = new Date(countdown.getAttribute('datetime'));
  const daysElement = countdown.parentNode.parentNode.parentNode.nextElementSibling.querySelector('.days');
  const hoursElement = countdown.parentNode.parentNode.parentNode.nextElementSibling.querySelector('.hours');
  const minutesElement = countdown.parentNode.parentNode.parentNode.nextElementSibling.querySelector('.minutes');
  const secondsElement = countdown.parentNode.parentNode.parentNode.nextElementSibling.querySelector('.seconds');
  
  
  
  setInterval(() => {
    const currentDate = new Date();
    const timeLeft = endDate - currentDate;
    if (timeLeft <= 0) {
      daysElement.innerHTML = "0";
      hoursElement.innerHTML = "0";
      minutesElement.innerHTML = "0";
      secondsElement.innerHTML = "0";
        clearInterval();
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
        daysElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
    }
  }, 1000);
  })
  

class Translate {
  constructor(){
    document.getElementById("russian").addEventListener("click", ()=>{
        this.translate("russian");
    });
    document.getElementById("english").addEventListener("click", ()=>{
      this.translate("english");
    });
    this.translate();
  }
  translate(language) {
    if (language == "russian") {
      document.documentElement.setAttribute("lang", 'ru');
      document.getElementById("welcomeHeroTrans").style.fontSize = "40px";


      //title 
      document.title = "АИС";
      //nav
      document.getElementById("homeNav").innerHTML = "Главная";
      document.getElementById("aboutNav").innerHTML = "О Нас";
      document.getElementById("projectsNav").innerHTML = "Проекты";
      document.getElementById("teamNav").innerHTML = "Команда";
      document.getElementById("eventsNav").innerHTML = "Мероприятия";
      document.getElementById("contactNav").innerHTML = "Контакт";

      //hero 
      document.getElementById("welcomeHeroTrans").innerHTML = "Добро пожаловать в <span>АИС</span>";
      document.getElementById("paragraphHeroTrans").innerHTML = "Мы создаем пространство межкультурного диалога в нашем регионе и уже объединяем представителей 56 стран мира!";

      document.getElementById("button1Hero").innerHTML = "Подробнее";
      document.getElementById("button2Hero").innerHTML = '<i class="bi bi-calendar4-event"></i><span>Ближайшие мероприятия</span>';


      //about us
      document.getElementById("titleAboutTrans").innerHTML = "О Нас";
      document.getElementById("paragraphAboutTrans").innerHTML = "“Разнообразие наша сила, богатство и красота!”";

      document.getElementById("paragraphAboutTitleTrans").innerHTML = "Ассоциация иностранных студентов и выпускников ведет свою деятельность с 2013 года в г. Челябинске.";
      document.getElementById("aboutp1").innerHTML = "Это объединение иностранных обучающихся, основными задачами которого является помощь иностранным студентам в адаптации, в решении проблем и вопросов, связанных с обучением, проживанием и досугом, знакомство с особенностями русской культуры, развитие международной дружбы, содействие процессу продвижения русского языка и культуры.";
      document.getElementById("aboutp2").innerHTML = "На данный момент Ассоциация объединяет <strong>более 1000 человек</strong>, а актив включает в себя <strong>представителей</strong> более 30 стран и регионов, каждый из которых представляет интересы своих студентов. Также имеется команда <strong>волонтеров</strong>, которые оказывают всевозможную помощь при организации деятельности.";
      document.getElementById("aboutGoals").innerHTML = "Ассоциация иностранных студентов и выпускников - общероссийская студенческая организация, основными целями которой являются:";
      document.getElementById("aboutGoals1").innerHTML = '<i class="bi bi-check-circle-fill"></i> чтобы помочь в адаптации к новым студентам,';
      document.getElementById("aboutGoals2").innerHTML = '<i class="bi bi-check-circle-fill"></i> познакомить их с особенностями русской культуры,';
      document.getElementById("aboutGoals3").innerHTML = '<i class="bi bi-check-circle-fill"></i> чтобы актуализировать международных друзей.';
      document.getElementById("aboutEnd").innerHTML = "В настоящее время мы являемся <strong>Южно-Уральская ассоциация иностранных студентов и выпускников!</strong>";


      //stats
      document.getElementById("stats1item").innerHTML = "<strong>Участники</strong> кто заинтересован в нашей деятельности";
      document.getElementById("stats2item").innerHTML = "<strong>Волонтеры</strong> протянуть руку помощи";
      document.getElementById("stats3item").innerHTML = "<strong>Мероприятия</strong> из разных культур мира";

      //partners
      document.getElementById("partnerTitle").innerHTML = "Партнеры";


      //Projects

      document.getElementById("ourProjectTitle").innerHTML = "Наши Проекты";
      document.getElementById("ourProjectTitleParagraph").innerHTML = "Мы открыты для всех идей и предложений Давайте работать вместе, чтобы изменить окружающую среду к лучшему!";


      
      document.getElementById("project1item").innerHTML = "Правовая грамотность иностранных студентов в Челябинске";
      document.getElementById("project1itemPr").innerHTML = "Проект правовой грамотности для иностранного гражданина, направленный на улучшение знаний основных законов Российской Федерации.";
      document.getElementById("readmoreID1").innerHTML = 'Подробнее <i class="bi bi-arrow-right"></i>';
      
      document.getElementById("project2item").innerHTML = "Тьютор для иностранных студентов";
      document.getElementById("project2itemPr").innerHTML = "Тьютор - это волонтеры, которые помогают в адаптации иностранных студентов вузов Челябинска.";
      document.getElementById("readmoreID2").innerHTML = 'Подробнее <i class="bi bi-arrow-right"></i>';

      document.getElementById("project3item").innerHTML = 'Международный форум "Россия и Иран"';
      document.getElementById("project3itemPr").innerHTML = "Форум, направленный на развитие образовательного и научного потенциала России и Ирана.";
      document.getElementById("readmoreID3").innerHTML = 'Подробнее <i class="bi bi-arrow-right"></i>';

      document.getElementById("project4item").innerHTML = "Международная коммуникация";
      document.getElementById("project4itemPr").innerHTML = "Где кухня становится порталом к национальным культурам.";
      document.getElementById("readmoreID4").innerHTML = 'Подробнее <i class="bi bi-arrow-right"></i>';

      document.getElementById("project5item").innerHTML = 'Гастрономический марафон "Международная кухня"';
      document.getElementById("project5itemPr").innerHTML = "Создать пространство для межэтнического диалога с помощью кулинарных мастер-классов народов России и мира.";
      document.getElementById("readmoreID5").innerHTML = 'Подробнее <i class="bi bi-arrow-right"></i>';

      document.getElementById("project6item").innerHTML = "Английский разговорный клуб";
      document.getElementById("project6itemPr").innerHTML = "Проект способствует развитию разговорного английского языка и расширению словарного запаса студентов.";
      document.getElementById("readmoreID6").innerHTML = 'Подробнее <i class="bi bi-arrow-right"></i>';


      //our team
      document.getElementById("teamTitle").innerHTML = "Наша Команда";
      //document.getElementById("teamPr").innerHTML = "**************";


      document.getElementById("teamItem1Title").innerHTML = "Валерия Чачина";
      document.getElementById("teamItem1Special").innerHTML = "Руководитель";

      document.getElementById("teamItem2Title").innerHTML = "Ахмед Мохамед";
      document.getElementById("teamItem2Special").innerHTML = "Президент";

      document.getElementById("teamItem3Title").innerHTML = "Дилрабо Зуфаржоновна";
      document.getElementById("teamItem3Special").innerHTML = "Заместитель по работе с волонтерами";

      document.getElementById("teamItem4Title").innerHTML = "Ахмед Ваад";
      document.getElementById("teamItem4Special").innerHTML = "Заместитель по партнерам";


      //Asked Question
      document.getElementById("titleAsked").innerHTML = "Часто задаваемые <strong>Вопросы</strong>";
      document.getElementById("paragraphAsked").innerHTML = "Мы постарались собрать все часто задаваемые вопросы к сообществу";
       document.getElementById("firstQus").innerHTML = '<span class="num">1.</span>Как вступить в Ассоциацию и принять участие в мероприятиях?';
      document.getElementById("answerQusFirst").innerHTML = 'Очень просто! Подпишись на группу в социальной сети Вконтакте <a href="https://vk.com/aisa_southural">vk.com/aisa_southural</a> - здесь публикуем все актуальные события. Наши мероприятия открыты для посещения любого желающего! Также можешь войти в число волонтеров, написав руководителю <a href="https://vk.com/zufarjonovnad">vk.com/zufarjonovnad</a>. Волонтеры непосредственно принимают участие в организации мероприятий или сами реализуют свои идеи, а мы помогаем!';
      document.getElementById("secondQus").innerHTML = '<span class="num">2.</span>Мой друг хочет учиться в университете. Как поступить?';
      document.getElementById("answerQusSecond").innerHTML = 'В каждом университете есть международный отдел, куда можно обратиться по этому вопросу. Например, для поступления в ЮУрГУ нужно написать на почту <a href="mailto:applicant@susu.ru">applicant@susu.ru</a>';
      document.getElementById("thirdQus").innerHTML = '<span class="num">3.</span>Обязательно ли проходить медицинские обследования?';
      document.getElementById("answerQusThird").innerHTML = 'Да. Всем иностранным гражданам обязательно нужно иметь медицинскую страховку, проходить процедуры медицинского освидетельствования и дактилоскопии. Это требования не университетов, а законодательства России. Предупреждаем, что могут быть применены следующие санкции: административный штраф, сокращение срока пребывания (визы, регистрации)';


      //Events
      document.getElementById("eventTitle").innerHTML = "Наши Мероприятия";
      document.getElementById("eventParagrph").innerHTML = "Самые популярные мероприятия, которые мы проводим круглый год";

      document.getElementById("allItems").innerHTML = "Все";
      document.getElementById("meetingsItems").innerHTML = "Встречи";
      document.getElementById("sportItems").innerHTML = "Спорт";
      document.getElementById("holidayItems").innerHTML = "Праздники";
      document.getElementById("cultureItems").innerHTML = "Культура";



      //items
      document.getElementById("meetingInforTitle").innerHTML = "Информационный день";
     // document.getElementById("inforParagrpah").innerHTML = "Заместитель по партнерам";

      document.getElementById("meetingAluminiTitle").innerHTML = "Встреча выпускников";
     // document.getElementById("meetingAluminiParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("sportFutsalTitle").innerHTML = "Чемпионат по мини-футболу";
     // document.getElementById("sportFutsalParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("sportSkatingTitle").innerHTML = "Катание на сноуборде";
     // document.getElementById("sportSkatingParagraph").innerHTML = "Заместитель по партнерам";

     document.getElementById("sportSwimTitle").innerHTML = "Плавание";

      document.getElementById("sportVolleyballTitle").innerHTML = "Чемпионат по волейболу";
     // document.getElementById("sportVolleyballParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("sportBasketTitle").innerHTML = "Чемпионат по баскетболу";
     // document.getElementById("sportBasketParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("holidyNowruzTitle").innerHTML = "Навруз";
     // document.getElementById("holidyNowruzParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("holidyChNewYearTitle").innerHTML = "Китайский Новый год";
     // document.getElementById("holidyChNewYearParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("cultureArabDayTitle").innerHTML = "День Арабской культуры";
     // document.getElementById("cultureArabDayParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("cultureAfricanDayTitle").innerHTML = "День Африканской культуры";
     // document.getElementById("cultureAfricanDayParagraph").innerHTML = "Заместитель по партнерам";


      //recent

      document.getElementById("recentTitle").innerHTML = "Ближайшие Мероприятия";
          
      
      //item1
      document.getElementById("recent1itemCategory").innerHTML = "Спорт";
      document.getElementById("recent1itemTitle").innerHTML = "Чемпионат по мини-футболу";
      document.getElementById("recent1itemDate").innerHTML = "10 май в 12:00";
      document.getElementById("days1item").innerHTML = "ДНЕЙ";
      document.getElementById("hours1item").innerHTML = "ЧАС.";
      document.getElementById("mins1item").innerHTML = "МИН.";
      document.getElementById("secs1item").innerHTML = "СЕК.";

      //item2
      document.getElementById("recent2itemCategory").innerHTML = "Спорт";
      document.getElementById("recent2itemTitle").innerHTML = "Плавание";
      document.getElementById("recent2itemDate").innerHTML = "20 май в 15:00";
      document.getElementById("days2item").innerHTML = "ДНЕЙ";
      document.getElementById("hours2item").innerHTML = "ЧАС.";
      document.getElementById("mins2item").innerHTML = "МИН.";
      document.getElementById("secs2item").innerHTML = "СЕК.";

      //item3

      /*
      document.getElementById("recent3itemCategory").innerHTML = "Культура";
      document.getElementById("recent3itemTitle").innerHTML = "День Африканской культуры";
      document.getElementById("recent3itemDate").innerHTML = "20 марта в 13:00";
      */
      document.getElementById("days3item").innerHTML = "ДНЕЙ";
      document.getElementById("hours3item").innerHTML = "ЧАС.";
      document.getElementById("mins3item").innerHTML = "МИН.";
      document.getElementById("secs3item").innerHTML = "СЕК.";


      //footer
      document.getElementById("footerTitle").innerHTML = "АИС";
      document.getElementById("footerParagraph").innerHTML = "Мы создаем пространство межкультурного диалога в нашем регионе и уже объединяем представителей 56 стран мира!";

      document.getElementById("coulmnFooter1").innerHTML = "Полезные ссылки";
      
      document.getElementById("homeFooter").innerHTML = "Главная";
      document.getElementById("aboutFooter").innerHTML = "О Нас";
      document.getElementById("projectsFooter").innerHTML = "Проекты";
      document.getElementById("teamFooter").innerHTML = "Команда";

      document.getElementById("coulmnFooter2").innerHTML = "Обращаться к нам";
      document.getElementById("footerContoactInfor").innerHTML = '<i class="bi bi-geo-alt"></i><strong> Адрес:</strong> г. Челябинск, проспект Ленина, дом. 76,<br>каб. 019 и 353<br><i class="bi bi-phone flex-shrink-0"></i><strong> Телефон:</strong> +7 351 272 30 74<br><i class="bi bi-envelope flex-shrink-0"></i><strong> Почта:</strong> aisa.southural@gmail.com<br>';


    } else if(language == "english") {
      document.documentElement.setAttribute("lang", 'en');
      document.getElementById("welcomeHeroTrans").style.fontSize = "48px";

      //title 
      document.title = "AISA";
      //nav
      document.getElementById("homeNav").innerHTML = "Home";
      document.getElementById("aboutNav").innerHTML = "About";
      document.getElementById("projectsNav").innerHTML = "Projects";
      document.getElementById("teamNav").innerHTML = "Team";
      document.getElementById("eventsNav").innerHTML = "Events";
      document.getElementById("contactNav").innerHTML = "Contact";

      //hero 
      document.getElementById("welcomeHeroTrans").innerHTML = "Welcome to <span>AISA</span>";
      document.getElementById("paragraphHeroTrans").innerHTML = "We are creating a space of intercultural dialogue in our region and already unite representatives of 56 countries of the world!";

      document.getElementById("button1Hero").innerHTML = "Read More";
      document.getElementById("button2Hero").innerHTML = '<i class="bi bi-calendar4-event"></i><span>Upcoming Events</span>';


      //about us
      document.getElementById("titleAboutTrans").innerHTML = "About Us";
      document.getElementById("paragraphAboutTrans").innerHTML = "“Diversity is our strength, wealth and beauty!”";

      document.getElementById("paragraphAboutTitleTrans").innerHTML = "The Association of International Students and Alumni has been operating since 2013 in Chelyabinsk.";
      document.getElementById("aboutp1").innerHTML = "This is an association of foreign students, whose main objectives are to help foreign students in adapting, in solving problems and issues related to education, accommodation and leisure time, acquaintance with the characteristics of Russian culture, development of international friendship, assistance in the process of promotion of the Russian language and culture.";
      document.getElementById("aboutp2").innerHTML = "At the moment the Association unites <strong>more than 1000 people</strong>, and its activities include representatives of <strong>more than 30 countries and regions</strong>, each of which represents the interests of their students. There is also a team of <strong>volunteers</strong> who provide all kinds of assistance in organizing activities.";
      document.getElementById("aboutGoals").innerHTML = "The Association of International Students and Alumni is an All-Russian student organisation that main goals are:";
      document.getElementById("aboutGoals1").innerHTML = '<i class="bi bi-check-circle-fill"></i> to help in adapting to new students,</li>';
      document.getElementById("aboutGoals2").innerHTML = '<i class="bi bi-check-circle-fill"></i> to acquaint them with the features of Russian culture,</li>';
      document.getElementById("aboutGoals3").innerHTML = '<i class="bi bi-check-circle-fill"></i> to actualise international friends.</li>';
      document.getElementById("aboutEnd").innerHTML = "Nowadays we are the <strong>South Ural Association of International Students and Alumni!</strong>";


      //stats
      document.getElementById("stats1item").innerHTML = "<strong>Members</strong> who interested in our activities";
      document.getElementById("stats2item").innerHTML = "<strong>Volunteers</strong> to lend a helping hand";
      document.getElementById("stats3item").innerHTML = "<strong>Events</strong> from different cultures of the world";

      //partners
      document.getElementById("partnerTitle").innerHTML = "Partners";


      //Projects

      document.getElementById("ourProjectTitle").innerHTML = "Our Projects";
      document.getElementById("ourProjectTitleParagraph").innerHTML = "We are open to all ideas and suggestions Let's work together to change the environment for the better!";


      
      document.getElementById("project1item").innerHTML = "The legal literacy of foreign students in Chelyabinsk";
      document.getElementById("project1itemPr").innerHTML = "Legal literacy project for a foreign citizen citizen to improving knowledge of the basic laws of the Russian Federation.";
      document.getElementById("readmoreID1").innerHTML = 'Read more <i class="bi bi-arrow-right"></i>';
      
      document.getElementById("project2item").innerHTML = "International Student Tutor";
      document.getElementById("project2itemPr").innerHTML = "Tutors are volunteers who help in the adaptation of foreign students of universities in Chelyabinsk.";
      document.getElementById("readmoreID2").innerHTML = 'Read more <i class="bi bi-arrow-right"></i>';

      document.getElementById("project3item").innerHTML = 'International forum "Russia and Iran"';
      document.getElementById("project3itemPr").innerHTML = "Forum aimed at developing educational and scientific potential of Russia and Iran.";
      document.getElementById("readmoreID3").innerHTML = 'Read more <i class="bi bi-arrow-right"></i>';

      document.getElementById("project4item").innerHTML = "International communication";
      document.getElementById("project4itemPr").innerHTML = "Where cuisine becomes a portal to national cultures.";
      document.getElementById("readmoreID4").innerHTML = 'Read more <i class="bi bi-arrow-right"></i>';

      document.getElementById("project5item").innerHTML = 'Gastronomic marathon "International Cuisine"';
      document.getElementById("project5itemPr").innerHTML = "To create a space for inter-ethnic dialogue, with the help of culinary master classes of the peoples of Russia and the world.";
      document.getElementById("readmoreID5").innerHTML = 'Read more <i class="bi bi-arrow-right"></i>';

      document.getElementById("project6item").innerHTML = "English speaking club";
      document.getElementById("project6itemPr").innerHTML = "The project promotes the development of spoken English and expanding the vocabulary of students.";
      document.getElementById("readmoreID6").innerHTML = 'Read more <i class="bi bi-arrow-right"></i>';


      //our team
      document.getElementById("teamTitle").innerHTML = "Our Team";
      //document.getElementById("teamPr").innerHTML = "**************";


      document.getElementById("teamItem1Title").innerHTML = "Valeria Chachina";
      document.getElementById("teamItem1Special").innerHTML = "Head";

      document.getElementById("teamItem2Title").innerHTML = "Ahmed Mohamed";
      document.getElementById("teamItem2Special").innerHTML = "President";

      document.getElementById("teamItem3Title").innerHTML = "Dilrabo Tojikulova";
      document.getElementById("teamItem3Special").innerHTML = "Deputy for Work with Volunteers";

      document.getElementById("teamItem4Title").innerHTML = "Ahmed Waad";
      document.getElementById("teamItem4Special").innerHTML = "Deputy for Partners";


      //Asked Question
      document.getElementById("titleAsked").innerHTML = "Frequently Asked <strong>Questions</strong>";
      document.getElementById("paragraphAsked").innerHTML = "We tried to collect all frequently asked questions to the community";
       document.getElementById("firstQus").innerHTML = '<span class="num">1.</span> How to join the Association and take part in events?';
      document.getElementById("answerQusFirst").innerHTML = 'Very simple! Subscribe to the group on the social network Vkontakte <a href="https://vk.com/aisa_southural">vk.com/aisa_southural</a> - here we publish all current events. Our events are open to everyone! You can also become a volunteer by writing to the manager <a href="https://vk.com/zufarjonovnad">vk.com/zufarjonovnad</a>. Volunteers are directly involved in organizing events or implement their ideas themselves, and we help!';
      document.getElementById("secondQus").innerHTML = ' <span class="num">2.</span> My friend wants to study at the university. How to proceed?';
      document.getElementById("answerQusSecond").innerHTML = 'Each university has an international department where you can contact on this issue. For example, to enter SUSU, you need to write to <a href="mailto:applicant@susu.ru">applicant@susu.ru</a>';
      document.getElementById("thirdQus").innerHTML = ' <span class="num">3.</span> Is it necessary to undergo medical examinations?';
      document.getElementById("answerQusThird").innerHTML = 'Yes. All foreign citizens must have medical insurance, undergo medical examination and fingerprinting procedures. These are the requirements not of universities, but of Russian legislation. We warn you that the following sanctions may be applied: an administrative fine, a reduction in the period of stay (visas, registration)';


      //Events
      document.getElementById("eventTitle").innerHTML = "Our Events";
      document.getElementById("eventParagrph").innerHTML = "The most popular events we offer all year round";

      document.getElementById("allItems").innerHTML = "All";
      document.getElementById("meetingsItems").innerHTML = "Meetings";
      document.getElementById("sportItems").innerHTML = "Sport";
      document.getElementById("holidayItems").innerHTML = "Holidays";
      document.getElementById("cultureItems").innerHTML = "Сulture";



      //items
      document.getElementById("meetingInforTitle").innerHTML = "Information Day";
     // document.getElementById("inforParagrpah").innerHTML = "Заместитель по партнерам";

      document.getElementById("meetingAluminiTitle").innerHTML = "Alumni Meeting";
     // document.getElementById("meetingAluminiParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("sportFutsalTitle").innerHTML = "Futsal Championship";
     // document.getElementById("sportFutsalParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("sportSkatingTitle").innerHTML = "Ice Skating";
     // document.getElementById("sportSkatingParagraph").innerHTML = "Заместитель по партнерам";


     document.getElementById("sportSwimTitle").innerHTML = "Swim";


      document.getElementById("sportVolleyballTitle").innerHTML = "Volleyball Championship";
     // document.getElementById("sportVolleyballParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("sportBasketTitle").innerHTML = "Basketball Championship";
     // document.getElementById("sportBasketParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("holidyNowruzTitle").innerHTML = "Nowruz";
     // document.getElementById("holidyNowruzParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("holidyChNewYearTitle").innerHTML = "Chinese New Year";
     // document.getElementById("holidyChNewYearParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("cultureArabDayTitle").innerHTML = "Arab Culture Day";
     // document.getElementById("cultureArabDayParagraph").innerHTML = "Заместитель по партнерам";

      document.getElementById("cultureAfricanDayTitle").innerHTML = "African Culture Day";
     // document.getElementById("cultureAfricanDayParagraph").innerHTML = "Заместитель по партнерам";


      //recent

      document.getElementById("recentTitle").innerHTML = "Upcoming Events";
          
      
      //item1
      document.getElementById("recent1itemCategory").innerHTML = "Sport";
      document.getElementById("recent1itemTitle").innerHTML = "Futsal Championship";
      document.getElementById("recent1itemDate").innerHTML = "May 10 at 12:00";
      document.getElementById("days1item").innerHTML = "DAYS";
      document.getElementById("hours1item").innerHTML = "HOURS";
      document.getElementById("mins1item").innerHTML = "MINS";
      document.getElementById("secs1item").innerHTML = "SECS";

      //item2
      document.getElementById("recent2itemCategory").innerHTML = "Sport";
      document.getElementById("recent2itemTitle").innerHTML = "Swim";
      document.getElementById("recent2itemDate").innerHTML = "May 20 at 15:00";
      document.getElementById("days2item").innerHTML = "DAYS";
      document.getElementById("hours2item").innerHTML = "HOURS";
      document.getElementById("mins2item").innerHTML = "MINS";
      document.getElementById("secs2item").innerHTML = "SECS";

      //item3
      /*
      document.getElementById("recent3itemCategory").innerHTML = "Culture";
      document.getElementById("recent3itemTitle").innerHTML = "African Day";
      document.getElementById("recent3itemDate").innerHTML = "March 20 at 13:00";
      */
      document.getElementById("days3item").innerHTML = "DAYS";
      document.getElementById("hours3item").innerHTML = "HOURS";
      document.getElementById("mins3item").innerHTML = "MINS";
      document.getElementById("secs3item").innerHTML = "SECS";
      

      //footer
      document.getElementById("footerTitle").innerHTML = "AISA";
      document.getElementById("footerParagraph").innerHTML = "We are creating a space of intercultural dialogue in our region and already unite representatives of 56 countries of the world!";

      document.getElementById("coulmnFooter1").innerHTML = "Useful Links";
      
      document.getElementById("homeFooter").innerHTML = "Home";
      document.getElementById("aboutFooter").innerHTML = "About Us";
      document.getElementById("projectsFooter").innerHTML = "Projects";
      document.getElementById("teamFooter").innerHTML = "Our Team";

      document.getElementById("coulmnFooter2").innerHTML = "Contact Us";
      document.getElementById("footerContoactInfor").innerHTML = '<i class="bi bi-geo-alt"></i><strong> Address:</strong> Chelyabinsk,  Prospekt Lenina, 76,<br>сab. 019 и 353<br><i class="bi bi-phone flex-shrink-0"></i><strong> Phone:</strong> +7 351 272 30 74<br><i class="bi bi-envelope flex-shrink-0"></i><strong> Email:</strong> aisa.southural@gmail.com<br>';


    }

    var vifro = document.getElementById("video-blog");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  
  
      console.log("hello you are using phone");
      vifro.style.padding = 0;

  
     }
  
      var e = document.getElementById("textHero");
      //var c = document.getElementById("partnerOurProjects");
      
      
      if (window.screen.width > 768) {

        e.style.marginTop = "400px";
        e.style.marginLeft = "60px";
  
      }

  }
}
onload = new Translate();