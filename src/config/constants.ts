
// Other app-wide constants
export const API_TIMEOUT = 5000; // in milliseconds

// Environment-based constants (optional)
export const ENVIRONMENT = process.env.NODE_ENV || "development";
export const IS_PRODUCTION = ENVIRONMENT === "production";

// General constants
export const BASE_URL = IS_PRODUCTION ? "https://api.example.com": "http://localhost:7000/";
export const API_VERSION = "/api/1.0";