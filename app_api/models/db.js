var mongoose = require('mongoose');

var gracefulShutdown;

var dbURI = 'mongodb://localhost/meanbyexample';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + mgs);
    callback();
  });
};

// перезапуск nodemon
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// завершение приложения
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

// завершение приложения Heroku
process.on('SIGTERM', function () {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});

require('./locations');
