const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  // SET UP OF PHASES
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev} isProd:${isProd}`);

  // 1ST VARIABLE - REACT STRICT MODE
  const reactStrictMode = true;
  // 2ND VARIABLE - SET IMAGE SECURITY
  const images = {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  };
  // 3RD VARIABLE - ENV VARIABLES NEEDED BY OUR APP
  const env = {
    SERVER_NAME: (() => {
      if(isDev) return 'http://localhost:3000/';
      if(isProd) return 'https://buffy-the-vampire-slayer-and-angel-wiki.vercel.app/'
    })(),
  
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  }

  return {
    reactStrictMode,
    images,
    env,
  };
};
