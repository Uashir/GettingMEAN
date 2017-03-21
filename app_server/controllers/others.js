module.exports.about = function (req, res) {
  var data = {
    title: 'Перекусончик',
    pageHeader: {
      title: 'О нас'
    },
    about: 'Перекусончик создан для того, чтобы помочь найти вам места для хорошего перекуса <br><br> Мы вам всегда рады!'
  };
  res.render('generic-text', data);
};
