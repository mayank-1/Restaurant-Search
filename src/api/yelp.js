import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer VT9pG9xn4nRMgVX5ysosMTI2TFOsrm60j3v3CZH9Y_sVjvDb2muxBzRsBMidl47ZDm9RsLbejRAP4yVOc4tF41CkSuK_ycIkUXTuPnfWylkErhuQHoBhgkJVETyHXnYx",
  },
});
