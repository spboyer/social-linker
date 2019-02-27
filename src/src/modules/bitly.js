/* eslint-disable no-console */
import axios from 'axios'


const bitly = {
   shorten: (url, shortner) => {
    return axios
      .get("https://api-ssl.bitly.com/v3/shorten?", {
        params: {
          format: "json",
          apiKey: shortner.apiKey,
          login: shortner.username,
          longUrl: url
        }
      })
      .then(function (response) {
        if (response.status == 200) {
          var longUrl = response.data.data.long_url;
          var bitly = response.data.data.url;

          console.log(longUrl);
          console.log(bitly);


          return bitly;
        } else {
          console.log("Yikes ERROR, status code != 200 :( ");
        }
      })
      .catch(function (error) {
        console.log("Error! " + error);
      });
  }
}

export {bitly as default}