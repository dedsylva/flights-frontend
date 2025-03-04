
// Other app-wide constants
export const API_TIMEOUT = 5000; // in milliseconds

// Environment-based constants (optional)
export const ENVIRONMENT = process.env.NODE_ENV || "development";
export const IS_PRODUCTION = ENVIRONMENT === "production";

// General constants
export const BASE_URL = IS_PRODUCTION ? "https://api.example.com": "http://localhost:7001";
export const API_VERSION = "/api/v1.0";
export const PORT = 5173