// настройка слайдера (http://https.github.io/slick/://kenwheeler)
$(function(){
    // верхний слайдер
    $('.top__slider').slick({
        // убераем стрелки дале и назад
        arrows:false,
        // показуеп точки
        dots: true,
        // включаем авто перелистувания
        // autoplay:true,
        // включаем ефект тускнения при изменении картинки
        // fade: true,
        
        // если ширина екрана менше 1200px то убераем дотцы
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                dots: false
              }
            },
          ]
    });

    // нижний слайдер
    $('.reviews__slider').slick({
        // убераем стрелки дале и назад
        arrows:false,
        // показуеп точки
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        responsive: [
            // если ширина екрана менше 1141px то устанавлюваем 3 слайда
            {
              breakpoint: 1141,
              settings: {
                slidesToShow: 3
              }
            },
            // если ширина екрана менше 850px то устанавлюваем 2 слайда
            {
                breakpoint: 850,
                settings: {
                  slidesToShow: 2
                }
              },
            // если ширина екрана менше 580px то устанавлюваем 1 слайд
            {
                breakpoint: 580,
                settings: {
                  slidesToShow: 1
                }
            },
          ]
    });

    // добавляем удаляем класс "menu__list--active" при клики на гамбургер
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });
});