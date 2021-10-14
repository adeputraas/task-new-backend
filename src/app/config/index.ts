export default {
    app: {
      HOST: process.env.APP_HOST || "0.0.0.0",
      PORT: process.env.APP_PORT || 4444,
    },
    url: "http://api.sandbox.transfree.id",
    logger: {
      LOG_LEVEL: process.env.NODE_ENV === "prod" ? "info" : "trace",
    },
  };
  