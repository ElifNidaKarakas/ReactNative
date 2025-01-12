import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer fArZk-i4lJNsonUob4h0y6LydsmJGsORcL7e8RysLBpUNSAWmmdK7TNAKz5oCXBLdtuHrfn-0MYDx_OF4ZXiibdpLkv9kKE9SNUfpRersfsasQIR8Eo3LH2fpoGCZ3Yx',
  },
});
