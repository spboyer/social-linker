/* eslint-disable no-console */
import axios from 'axios'

export function addTracking(url, event, channel, alias, shortener) {
  var baseUrl = url || "";
  if (baseUrl === "")
    return;

  var defaultDomains = [
    /(.*\.)?microsoft\.com$/,
    /(.*\.)?msdn\.com$/,
    /(.*\.)?visualstudio\.com$/,
    "www.microsoftevents.com"
  ];

  var config = {
    event: event,
    channel: channel,
    alias: alias
  };

  var domains = config.domains;
  if (domains || Array.isArray(domains)) {
    domains = domains.concat(defaultDomains);
  } else {
    domains = defaultDomains;
  }

  config.domains = domains;

  var shareUrl = appendTrackingInfo(config, baseUrl);

  if (shortener.provider !== "none") {
    switch (shortener.provider) {
      case "bit.ly":
        //var tinyUrl = bitlyMe(shareUrl, shortener);
        var tinyUrl = 'bit.ly';
        return tinyUrl;
      case "cda.ms":
        return shareUrl;
    }
  }

  return shareUrl;
}

export function appendTrackingInfo(config, link) {
  var tracking =
    "WT.mc_id=" + config.event + "-" + config.channel + "-" + config.alias;

  //respect or ignore currect query string
  var separator = link.indexOf("?") > 0 ? "&" : "?";

  //respect or ignore hash
  var hash = "";
  var hasHash = link.indexOf("#");
  if (hasHash != -1) {
    hash = link.substr(hasHash);
    link = link.replace(hash, "");
  }

  return link + separator + tracking + hash;
}

export function bitlyMe(url, shortner) {
  var bitly = '';
  var longUrl = '';

  axios
    .get("https://api-ssl.bitly.com/v3/shorten?", {
      params: {
        format: "json",
        apiKey: shortner.apiKey,
        login: shortner.username,
        longUrl: url
      }
    })
    .then(function(response) {
      if (response.status == 200) {
        longUrl = response.data.data.long_url;
        bitly = response.data.data.url;

        console.log(longUrl);
        console.log(bitly);


        return bitly;
      } else {
        console.log("Yikes ERROR, status code != 200 :( ");
      }
    })
    .catch(function(error) {
      console.log("Error! " + error);
    });
}