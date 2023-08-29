class CorsService {
  origin(origin, callback) {
    const whiteList =
      process.env.WHITE_LIST == null
        ? '*'
        : process.env.WHITE_LIST.trim().split(',');

    let corsOptions;

    if (whiteList.indexOf(origin.header('Origin')) !== -1) {
      corsOptions = { origin: true };
    } else {
      corsOptions = { origin: false };
    }
    callback(null, corsOptions);
  }
}

module.exports = new CorsService();
