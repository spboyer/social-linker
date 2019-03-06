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
          <button type="button" class="btn btn-primary" v-on:click="create">Create Link</button>
        </div>
      </div>

      <div class="row">
        <div class="col-8  text-left">
          <blockquote>tracking link format follows: event-channel-alias</blockquote>
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
                  href="#"
                  v-on:click.prevent

                  class="twitter"
                  title="Twitter"
                >
                  <font-awesome-icon :icon="['fab', 'twitter-square']" @click="twitter"/>
                </a>
                <a
                  href="#"
                  v-on:click.prevent

                  class="linkedin"
                  title="LinkedIn"
                >
                  <font-awesome-icon :icon="['fab', 'linkedin']" @click="linkedin"/>
                </a>
                <a
                  href="#"
                  v-on:click.prevent

                  class="reddit"
                  title="Reddit"
                >
                  <font-awesome-icon :icon="['fab', 'reddit-square']" @click="reddit"/>
                </a>
                <a
                  href="#"
                  v-on:click.prevent

                  class="facebook"
                  title="Facebook"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    :style="{ color: '#3b5998' }" @click="facebook"
                  />
                </a>
                <a
                  href="#"
                  v-on:click.prevent

                  class="stackoverflow"
                  title="Stack Overflow"
                >
                  <font-awesome-icon
                    :icon="['fab', 'stack-overflow']"
                    :style="{ color: '#f48024' }" @click="stackoverflow"
                  />
                </a>
                <a
                  href="#"
                  v-on:click.prevent

                  class="hackernews"
                  title="Hacker News"
                >
                  <font-awesome-icon
                    :icon="['fab', 'hacker-news-square']"
                    :style="{ color: '#ff6600' }" @click="hackernews"
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
                  href="#"
                  v-on:click.prevent

                  class="azuremedium"
                  title="Azure Medium Blog"
                >
                  <font-awesome-icon :icon="['fab', 'medium']" :style="{ color: '#336699' }" @click="azuremedium"/>
                </a>

                <a
                  href="#"
                  v-on:click.prevent

                  class="medium"
                  title="Medium Blog"
                >
                  <font-awesome-icon :icon="['fab', 'medium']" :style="{ color: '#000000' }" @click="medium"/>
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
                  href="#"
                  v-on:click.prevent
                  class="youtube"
                  title="YouTube"
                >
                  <font-awesome-icon :icon="['fab', 'youtube-square']" :style="{ color: 'red' }" @click="youtube"/>
                </a>

                <a
                  href="#"
                  v-on:click.prevent
                  class="github"
                  title="github"
                >
                  <font-awesome-icon :icon="['fab', 'github']" :style="{ color: '#000000' }" @click="github"/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-auto text-right">
          <a v-clipboard:copy="longLink" v-clipboard:success="handleSuccess">
            <font-awesome-icon icon="copy"/>
          </a>
        </div>
        <div class="col-auto text-left">{{ longLink }}</div>
      </div>

      <div class="row">
        <div class="col-auto text-right">
          <a v-clipboard:copy="shortLink" v-clipboard:success="handleSuccess">
            <font-awesome-icon icon="copy"/>
          </a>
        </div>
        <div class="col-auto text-left">{{ shortLink }}</div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import storage from "../modules/storage";
import service from "../modules/services";
import tracking from "../modules/tracking";

export default {
  name: "LinkShare",
  data: () => ({
    copied: "",
    event: "social",
    channel: "",
    urlToShare: "",
    longLink: "",
    shortLink: "",
    shortenerProvider: "",
    shortApiKey: "",
    shortUsername: "",
    alias: ""
  }),
  mounted() {
    this.getAlias();
    this.getShortUsername(), this.getShortApiKey(), this.getShortenerProvider();
  },
  methods: {
    onCopy(e) {
      alert("You just copied: " + e.text);
    },
    handleSuccess() {
      this.$toasted.show("Copied to clipboard", {
        theme: "outline",
        position: "top-center",
        duration: 2000
      });
    },
    getAlias() {
      return storage.getters
        .alias()
        .then(result => {
          this.alias = result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getShortUsername() {
      return storage.getters
        .shortUsername()
        .then(result => {
          this.shortUsername = result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getShortApiKey() {
      return storage.getters
        .shortApiKey()
        .then(result => {
          this.shortApiKey = result;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getShortenerProvider() {
      return storage.getters.shortenerProvider().then(result => {
        this.shortenerProvider = result;
      });
    },
    create() {
      this.longLink = tracking.addTracking(
        this.urlToShare,
        this.event,
        this.channel,
        this.alias
      );

      const short = { apiKey: this.shortApiKey, username: this.shortUsername };

      if (
        this.shortenerProvider &&
        this.shortenerProvider !== "none" &&
        this.shortenerProvider === "bit.ly"
      ) {
        service.bitly.shorten(this.longLink, short).then(response => {
          this.shortLink = response;
        });
      }
      if (
        this.shortenerProvider &&
        this.shortenerProvider !== "none" &&
        this.shortenerProvider === "cda.ms"
      ) {
        service.cda.shorten(this.longLink).then(response => {
          this.shortLink = response;
        });
      }
    },
    twitter() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "twitter",
        "social",
        this.alias
      );

      const short = { apiKey: this.shortApiKey, username: this.shortUsername };

      if (
        this.shortenerProvider &&
        this.shortenerProvider !== "none" &&
        this.shortenerProvider === "bit.ly"
      ) {
        service.bitly.shorten(this.longLink, short).then(response => {
          this.shortLink = response;
        });
      }
      if (
        this.shortenerProvider &&
        this.shortenerProvider !== "none" &&
        this.shortenerProvider === "cda.ms"
      ) {
        service.cda.shorten(this.longLink).then(response => {
          this.shortLink = response;
        });
      }
    },
    linkedin() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "linkedin",
        "social",
        this.alias
      );
    },
    reddit() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "reddit",
        "social",
        this.alias
      );
    },
    facebook() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "facebook",
        "social",
        this.alias
      );
    },
    stackoverflow() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "stackoverflow",
        "social",
        this.alias
      );
    },
    hackernews() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "hackernews",
        "social",
        this.alias
      );
    },
    azuremedium() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "azuremedium",
        "blog",
        this.alias
      );
    },
    medium() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        "medium",
        "blog",
        this.alias
      );
    },
    youtube() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        this.event,
        "youtube",
        this.alias
      );
    },
    github() {
      this.shortLink = "";
      this.longLink = tracking.addTracking(
        this.urlToShare,
        this.event,
        "github",
        this.alias
      );
    }
  },
  computed: {}
};
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
