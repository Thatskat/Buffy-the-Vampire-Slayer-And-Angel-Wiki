export const pageView = (url) => {
    window.gtag("config", process.env.GA_ID, { path_url: url });
  };