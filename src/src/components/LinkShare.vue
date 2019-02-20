<template>
  <div>
    <div class="container-fluid">
      <div class="=row">
        <div class="col-md-auto">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="urlToShare-describe">url</span>
            </div>
            <input
              id="urlToShare"
              name="urlToShare"
              class="form-control"
              aria-describedby="urlToShare-describe"
              type="text"
              v-model="urlToShare"
              placeholder="What would you like to share?"
            >
          </div>
        </div>
      </div>
    </div>

    <p class="socialLinks">
      <a
        v-bind:href="TwitterLink"
        v-on:click.prevent
        v-clipboard:success="handleSuccess"
        v-clipboard:copy="TwitterLink"
        class="twitter"
      >
        <font-awesome-icon :icon="['fab', 'twitter-square']"/>
      </a>
      <a
        v-bind:href="LinkedInLink"
        v-on:click.prevent
        v-clipboard:success="handleSuccess"
        v-clipboard:copy="LinkedInLink"
        class="linkedin"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <a
        v-bind:href="RedditLink"
        v-on:click.prevent
        v-clipboard:success="handleSuccess"
        v-clipboard:copy="RedditLink"
        class="reddit"
      >
        <font-awesome-icon :icon="['fab', 'reddit-square']"/>
      </a>
    </p>

    <h2>Link copied to clipboard</h2>
    <p>
      <a :href="TwitterLink" style="font-weight: bold">{{ TwitterLink }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "LinkShare",
  data: function() {
    return { urlToShare: "", boundAlias: this.$localStorage.get("alias") };
  },
  methods: {
    handleSuccess: function() {
      this.$toasted.show("Copied to clipboard", {
        theme: "outline",
        position: "top-center",
        duration: 2000
      });
    }
  },
  computed: {
    TwitterLink: function() {
      return addTracking(this.urlToShare, "twitter", "social", this.boundAlias);
    },
    LinkedInLink: function() {
      return addTracking(
        this.urlToShare,
        "linkedin",
        "social",
        this.boundAlias
      );
    },
    RedditLink: function() {
      return addTracking(this.urlToShare, "reddit", "social", this.boundAlias);
    }
  }
};

function addTracking(url, event, channel, alias) {
  var baseUrl = url || "";

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
  return appendTrackingInfo(config, baseUrl);
}

function appendTrackingInfo(config, link) {
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.parameters {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.parameters input {
  margin-bottom: 12pt;
}

.parameters input.wideInput {
  width: 45em;
}
p.socialLinks {
  margin: 25pt 0 35pt 0;
}
p.socialLinks a {
  padding: 12pt;
  font-size: 36pt;
}
p.socialLinks .reddit {
  color: #ff4301;
}
p.socialLinks .linkedin {
  color: #0077b5;
}
p.socialLinks .twitter {
  color: #38a1f3;
}
</style>
