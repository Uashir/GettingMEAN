module.exports.homelist = function (req, res) {
  var data = {
    title: 'Перекусончик',
    pageHeader: {
      title: 'Перекусончик',
      strapline: 'Вжууууух! И ты накормлен!'
    },
    locations: [
      {
        name: 'Беляши от Аванеса',
        address: 'Волынская, дом 77',
        rating: 4,
        facilities: ['Выпечка', 'Национальная кухня'],
        distance: '100м'
      }, {
        name: 'Мармеладница',
        address: 'Сретенский бульвар, дом 12/3',
        rating: 5,
        facilities: ['Десерты', 'Прохладительные напитки'],
        distance: '1400м'
      }, {
        name: 'Крошка-пончик',
        address: 'Краснополянская, дом 40',
        rating: 4,
        facilities: ['Пончики', 'Горячие напитки', 'Десерты'],
        distance: '200м'
      }
    ],
    sidebar: 'Самый горячо любимый сервис, чтобы вкусно, а самое главное - качественно перекусить в своем городе!'
  };

  res.render('locations-list', data);
};

module.exports.locationInfo = function (req, res) {
  var data = {
    title: 'Перекусончик',
    pageHeader: {
      title: 'Беляши от Аванеса',
      openingHours: 'Время работы',
      facilities: 'Особенности',
      location: 'Местоположение',
      closed: 'закрыто',
      review: 'Отзывы посетителей',
      addReview: 'Добавить отзыв'
    },
    sidebar: {
      context: 'Мы рады найти для вас места для перекуса.',
      callToAction: 'Если вам понравилось или не понравилось это место. Оставьте свой отзыв, чтобы помочь другим.'
    },
    location: {
      name: 'Беляши от Аванеса',
      address: 'Московская набережная, строение 42',
      rating: 4,
      facilities: ['Национальная кухня', 'Выпечка', 'Быстрый wifi'],
      coords: {
        lat: 55.751244,
        lng: 37.618423
      },
      openingTimes: [{
        days: 'Понедельник - Пятница',
        opening: '7:00',
        closing: '20:00',
        closed: false
      }, {
        days: 'Суббота',
        opening: '10:00',
        closing: '22:00',
        closed: false
      }, {
        days: 'Воскресенье',
        closed: true
      }],
      reviews: [{
        author: 'Никитин Владими',
        rating: 5,
        timestamp: '16 Июля 2016',
        reviewText: 'Отличное место! Одни из самых вкусных беляшей в Москве.'
      }, {
        author: 'Мария Иванова',
        rating: 3,
        timestamp: '22 мая 2016',
        reviewText: 'Вкусная кухня, но официант, который обслуживал меня, совсем не говорил по русски.'
      }]
    }
  };
  res.render('location-info', data);
};

module.exports.addReview = function (req, res) {
  var data = {
    title: 'Перекусончик',
    pageHeader: {
      title: 'Оставить отзыв'
    },
    formHeaders: {
      name: 'Имя',
      rating: 'Рейтинг',
      review: 'Отзыв',
      buttonText: 'Добавить новый отзыв'
    }
  };
  res.render('location-review-form', data);
};