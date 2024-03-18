import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer btzYHsKkJuns6viPfbuMBet5dwAqoTQPCoR2SiAe9nqMlkgDZbQl_Aeo06KJ8-eV-m8rLJCGPhRREVkFtDahTEkXPIp9yT3al-40mG7HhO3tJ6u8QQ0TvPVyGjn2ZXYx",
  },
});
