<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 text-left">
          <h2>Link to share</h2>
          <div class="border-top my-3"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
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

      <div class="row">
        <div class="col-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="event-code-describe">event</span>
            </div>
            <input
              id="event-code"
              name="event-code"
              class="form-control"
              aria-describedby="event-code-describe"
              type="text"
              v-model="event"
            >
          </div>
        </div>

        <div class="col-3">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="channel-code-describe">channel</span>
            </div>
            <input
              id="channel-code"
              name="channel-code"
              class="form-control"
              aria-describedby="channel-code-describe"
              type="text"
              v-model="channel"
            >
          </div>
        </div>

        <div class="col-2">
          <button
            type="button"
            class="btn btn-primary"
            v-on:click.prevent
            v-bind:click="CreateLink"
            v-clipboard:success="handleSuccess"
            v-clipboard:copy="CreateLink"
          >Create Link</button>
        </div>
      </div>

      <div class="row">
        <div class="col-auto">
          <div class="card">
            <div class="card-header">Social Presets</div>
            <div class="card-body">
              <p class="card-text">
                Channel is set to
                <b>social</b> for the associated platform.
                <br>i.e.
                <em>?WT.mc_id=twitter-social-myalias</em>
              </p>
              <p class="socialLinks">
                <a
                  v-bind:href="TwitterLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="TwitterLink"
                  class="twitter"
                  title="Twitter"
                >
                  <font-awesome-icon :icon="['fab', 'twitter-square']"/>
                </a>
                <a
                  v-bind:href="LinkedInLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="LinkedInLink"
                  class="linkedin"
                  title="LinkedIn"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']"/>
                </a>
                <a
                  v-bind:href="RedditLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="RedditLink"
                  class="reddit"
                  title="Reddit"
                >
                  <font-awesome-icon :icon="['fab', 'reddit-square']"/>
                </a>
                <a
                  v-bind:href="FacebookLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="FacebookLink"
                  class="facebook"
                  title="Facebook"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    :style="{ color: '#3b5998' }"
                  />
                </a>
                <a
                  v-bind:href="StackOverFlowLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="StackOverFlowLink"
                  class="stackoverflow"
                  title="Stack Overflow"
                >
                  <font-awesome-icon
                    :icon="['fab', 'stack-overflow']"
                    :style="{ color: '#f48024' }"
                  />
                </a>
                <a
                  v-bind:href="HackerNewsLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="HackerNewsLink"
                  class="hackernews"
                  title="Hacker News"
                >
                  <font-awesome-icon
                    :icon="['fab', 'hacker-news-square']"
                    :style="{ color: '#ff6600' }"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="card">
            <div class="card-header">Blog Presets</div>
            <div class="card-body">
              <p class="card-text">
                Channel is set to
                <b>blog</b> for the associated platform.
                <br>i.e.
                <em>?WT.mc_id=azuremedium-blog-myalias</em>
              </p>
              <p class="socialLinks">
                <a
                  v-bind:href="AzureMediumLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="AzureMediumLink"
                  class="azuremedium"
                  title="Azure Medium Blog"
                >
                  <font-awesome-icon :icon="['fab', 'medium']" :style="{ color: '#336699' }"/>
                </a>

                <a
                  v-bind:href="MediumLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="MediumLink"
                  class="medium"
                  title="Medium Blog"
                >
                  <font-awesome-icon :icon="['fab', 'medium']" :style="{ color: '#000000' }"/>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col-auto">
          <div class="card">
            <div class="card-header">Other Presets</div>
            <div class="card-body">
              <p class="card-text">
                Various quick links to set channel.
                <br>Uses the
                value from
                <b>event</b>.
              </p>
              <p class="socialLinks">
                <a
                  v-bind:href="YouTubeLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="YouTubeLink"
                  class="youtube"
                  title="YouTube"
                >
                  <font-awesome-icon :icon="['fab', 'youtube-square']" :style="{ color: 'red' }"/>
                </a>

                <a
                  v-bind:href="GitHubLink"
                  v-on:click.prevent
                  v-clipboard:success="handleSuccess"
                  v-clipboard:copy="GitHubLink"
                  class="github"
                  title="github"
                >
                  <font-awesome-icon :icon="['fab', 'github']" :style="{ color: '#000000' }"/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-auto">Created Link: {{CreateLink}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinkShare",
  data: function() {
    return {
      copied: "",
      event: "social",
      channel: "",
      urlToShare: "",
      boundAlias: this.$localStorage.get("alias")
    };
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
    CreateLink: function() {
      return addTracking(
        this.urlToShare,
        this.event,
        this.channel,
        this.boundAlias
      );
    },
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
    },
    FacebookLink: function() {
      return addTracking(
        this.urlToShare,
        "facebook",
        "social",
        this.boundAlias
      );
    },
    StackOverFlowLink: function() {
      return addTracking(
        this.urlToShare,
        "stackoverflow",
        "social",
        this.boundAlias
      );
    },
    HackerNewsLink: function() {
      return addTracking(
        this.urlToShare,
        "hackernews",
        "social",
        this.boundAlias
      );
    },
    AzureMediumLink: function() {
      return addTracking(
        this.urlToShare,
        "azuremedium",
        "blog",
        this.boundAlias
      );
    },
    MediumLink: function() {
      return addTracking(this.urlToShare, "medium", "blog", this.boundAlias);
    },
    YouTubeLink: function() {

      return addTracking(
        this.urlToShare,
        this.event,
        "youtube",
        this.boundAlias
      );
    },
    GitHubLink: function() {

      return addTracking(
        this.urlToShare,
        this.event,
        "github",
        this.boundAlias
      );
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
  let shouldAddTrackingInfo = false;

  if(baseUrl){
    var uri = new URL(baseUrl);

    for(let i = 0; i < config.domains.length; i++){
      let domain = config.domains[i];
      if(uri.host.match(domain)) {
        shouldAddTrackingInfo = true;        
        break;
      }
    }
    
    if(shouldAddTrackingInfo) {
      //remove locale
      var localeRegex = /^\/\w{2}-\w{2}/g;
      uri.pathname = uri.pathname.replace(localeRegex, '');
      
      baseUrl = uri.toString();   
    } 
  }

  if(shouldAddTrackingInfo) {
    return appendTrackingInfo(config, baseUrl);
  }

  return baseUrl;
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
p.socialLinks .facebook {
  color: #3b5998;
}
p.socialLnks .stackoverflow {
  color: #f48024;
}
p.socialLnks .hackernews {
  color: #ff6600;
}
p.socialLnks .azuremedium {
  color: #336688;
}
p.socialLnks .medium {
  color: #000000;
}
p.socialLnks .github {
  color: #000000;
}
p.socialLnks .youtube {
  color: #ff4301;
}
</style>
