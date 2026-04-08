const fetch = require("node-fetch");

const API_KEY = "7942de9dedde4973acfd9cd4aed05ec1";

const getGamesFromRAWG = async ({ search = "", page = 1, pageSize = 20 } = {}) => {
  try {
    const params = new URLSearchParams({
      key: API_KEY,
      page: String(page),
      page_size: String(pageSize),
    });

    if (search) {
      params.append("search", search);
    }

    const response = await fetch(`https://api.rawg.io/api/games?${params.toString()}`);
    const data = await response.json();

    return {
      results: data.results || [],
      count: data.count || 0,
      next: data.next,
      previous: data.previous,
    };
  } catch (error) {
    console.error("RAWG API error:", error);
    throw error;
  }
};

module.exports = {
  getGamesFromRAWG,
};