<template>
  <div>
    <v-card xs10 offset-xs1 class="card">
      <v-card-title primary-title>
        <h1 class="headline">My Settings</h1>
      </v-card-title>
      <v-card-title>
        <h3 class="grey--text">Your Microsoft alias</h3>
      </v-card-title>
      <v-flex md6 offset-md3>
        <v-alert outline :value="true" type="success" v-show="alias">Alias successfully set!</v-alert>
      </v-flex>
      <v-form>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                id="alias"
                name="alias"
                aria-describedby="alias-describe"
                type="text"
                v-model="alias"
                v-on:input="setAlias"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card>
    <v-card xs10 offset-xs1 class="card">
      <v-card-title primary-title>
        <h1 class="headline">Url Shortener Options</h1>
      </v-card-title>
      <v-card-title>
        <h3 class="grey--text">Choose which Url shortener to use</h3>
      </v-card-title>
      <v-container id="dropdown-example" grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-overflow-btn
              v-on:change="setShortenerProvider"
              v-model="shortenerProvider"
              :items="urldropdown"
              label="None"
              target="#urldropdown"
            ></v-overflow-btn>
          </v-flex>
        </v-layout>
        <v-layout column v-if="hideConfig('bit.ly')">
          <v-form>
            <v-text-field
              id="bitly-api-key"
              name="bitly-api-key"
              aria-describedby="bitly-api-key-describe"
              type="password"
              label="bit.ly API Key"
              v-model="shortApiKey"
              v-on:input="setShortApiKey"
            ></v-text-field>

            <v-text-field
              id="bitly-username"
              name="bitly-username"
              aria-describedby="bitly-username-describe"
              label="bit.ly Username"
              v-model="shortUsername"
              v-on:input="setShortUsername"
            ></v-text-field>
          </v-form>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable no-console */
import storage from "../modules/storage";

export default {
  name: "settings",
  data() {
    return {
      alias: "",
      shortenerProvider: "",
      shortApiKey: "",
      shortUsername: "",
      urldropdown: ["bit.ly", "cda.ms"]
    };
  },
  mounted() {
    this.getAlias();
    this.getShortUsername(), this.getShortApiKey(), this.getShortenerProvider();
  },
  methods: {
    getAlias() {
      return storage.getters
        .alias()
        .then(result => (this.alias = result))
        .catch(err => console.log(err));
    },
    getShortUsername() {
      return storage.getters
        .shortUsername()
        .then(result => (this.shortUsername = result))
        .catch(err => console.log(err));
    },
    getShortApiKey() {
      return storage.getters
        .shortApiKey()
        .then(result => (this.shortApiKey = result))
        .catch(err => console.log(err));
    },
    getShortenerProvider() {
      return storage.getters
        .shortenerProvider()
        .then(result => (this.shortenerProvider = result));
    },
    hideConfig(option) {
      return option === this.shortenerProvider;
    },
    setAlias() {
      storage.actions.saveAlias(this.alias);
    },
    setShortenerProvider() {
      storage.actions.saveShortProvider(this.shortenerProvider);
      console.log(this.shortenerProvider);
    },
    setShortApiKey() {
      storage.actions.saveShortApiKey(this.shortApiKey);
    },
    setShortUsername() {
      storage.actions.saveShortUsername(this.shortUsername);
    }
  }
};
</script>
