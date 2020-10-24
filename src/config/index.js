const CONFIG = {
  ENV: process.env.NODE_ENV,
  isDev() {
    return CONFIG.ENV == "development";
  },
  isProd() {
    return CONFIG.ENV == "production";
  },
  isStaging() {
    return CONFIG.ENV == "staging";
  },
  baseURL() {
    if (CONFIG.isDev()) {
      // Change me for development url
      return "http://localhost:3000/api/v1";
    } else if (CONFIG.isProd()) {
      // Change me for production url
      return "http://localhost:3000/api/v1";
    } else if (CONFIG.isStaging()) {
      // Change me for staging url
      return "http://localhost:3000/api/v1";
    }
  }
};

export default CONFIG;
