<template>
<div>
  <h1>{{ msg }}</h1>

  <div class="parameters">
    <label for="alias">Alias</label>
    <input id="alias" name="alias" type="text" v-model="boundAlias" />
    <label for="urlToShare">URL to share</label>
    <input id="urlToShare" class="wideInput" name="urlToShare" type="text" v-model="urlToShare" />
  </div>

  <p class="socialLinks">
    <a v-bind:href="TwitterLink" v-on:click.prevent v-clipboard:success="handleSuccess" v-clipboard:copy="TwitterLink"
      class="twitter">
      <font-awesome-icon :icon="['fab', 'twitter-square']" /></a>
    <a v-bind:href="LinkedInLink" v-on:click.prevent v-clipboard:success="handleSuccess" v-clipboard:copy="LinkedInLink"
      class="linkedin">
      <font-awesome-icon :icon="['fab', 'linkedin']" /></a>
    <a v-bind:href="RedditLink" v-on:click.prevent v-clipboard:success="handleSuccess" v-clipboard:copy="RedditLink"
      class="reddit">
      <font-awesome-icon :icon="['fab', 'reddit-square']" /></a>
  </p>

  <h2>Link copied to clipboard</h2>
  <p>
    <a :href="TwitterLink" style="font-weight: bold">{{ TwitterLink }}</a>
  </p>
</div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data: function() {
    return {urlToShare: "", boundAlias: this.alias};
  },
  props: {
    msg: String,
    alias: String
  },
  methods: {
    handleSuccess: function(){
      this.$toasted.show("Copied to clipboard", { 
        theme: "outline", 
        position: "top-center", 
        duration : 2000
      });
    }
  },
  computed: {
    TwitterLink: function () {
      return addTracking(this.urlToShare, 'twitter', 'social', this.boundAlias);
    },
    LinkedInLink: function () {
      return addTracking(this.urlToShare, 'linkedin', 'social', this.boundAlias);
    },
    RedditLink: function () {
      return addTracking(this.urlToShare, 'reddit', 'social', this.boundAlias);
    }
  }
}

function addTracking(url, event, channel, alias){
  //Get current URL
  var baseUrl = url || "";
  
  //remove current locale for sharing
  const regex = /microsoft.com\/\w{2}-\w{2}\//g;
  const subst = 'microsoft.com/';
  baseUrl = baseUrl.replace(regex, subst);
  
  //respect or ignore currect query string
  var separator = baseUrl.indexOf('?') > 0 ? '&' : '?';
  
  //respect or ignore hash
  var hash = '';
  var hasHash = baseUrl.indexOf('#');
  if (hasHash != -1) {
    hash = baseUrl.substr(hasHash);
    baseUrl = baseUrl.replace(hash, '');
  }
  
  //build final URL
  return baseUrl + separator + 'WT.mc_id=' + event + '-' + channel + '-' + alias + hash;
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
p.socialLinks { margin: 25pt 0 35pt 0}
p.socialLinks a {
  padding: 12pt;
  font-size: 36pt;
}
p.socialLinks .reddit { color: #ff4301 }
p.socialLinks .linkedin { color: #0077B5}
p.socialLinks .twitter { color: #38A1F3}
</style>
