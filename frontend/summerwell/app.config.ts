// app.config.ts
import "dotenv/config";
import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: "summerwell",
  slug: "summerwell",
  ...config,
  ios: {
    ...config.ios,
    config: {
      ...config.ios?.config,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
  },
  android: {
    ...config.android,
    config: {
      ...config.android?.config,
      googleMaps: {
        ...config.android?.config?.googleMaps,
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
  },
});