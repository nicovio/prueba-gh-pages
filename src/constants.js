
export const isProduction = process.env.isProd

export const API_URL = isProduction ? `https://www.thesportsdb.com/api/v1/json/1` : ''