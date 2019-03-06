<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6 text-left">
        <h2>Settings</h2>
        <div class="border-top my-3"></div>
      </div>
    </div>
    <!-- alias -->
    <div class="row">
      <div class="col-auto">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="alias-describe">Microsoft Alias</span>
          </div>
          <input
            id="alias"
            name="alias"
            class="form-control"
            aria-describedby="alias-describe"
            type="text"
            v-model="alias"
            v-on:input="setAlias"
          >
        </div>
      </div>
    </div>
    <!-- shortner stuff -->
    <div class="row">
      <div class="col-6 text-left">
        <h3>Url Shortner Options</h3>
        <div class="border-top my-3"></div>
      </div>
    </div>

    <!-- select provider -->
    <div class="row">
      <div class="col-2">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label class="input-group-text" for="shortener">Provider</label>
          </div>
          <select
            class="custom-select"
            id="shortener"
            v-on:change="setShortenerProvider"
            v-model="shortenerProvider"
          >
            <option>none</option>
            <option>bit.ly</option>
            <option>cda.ms</option>
          </select>
        </div>
      </div>

      <!-- provider settings -->
      <!-- bit.ly -->
      <div class="col-3" v-if="hideConfig('bit.ly')">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="bitly-api-key-describe">API Key</span>
          </div>
          <input
            id="bitly-api-key"
            name="bitly-api-key"
            class="form-control"
            aria-describedby="bitly-api-key-describe"
            type="password"
            v-model="shortApiKey"
            v-on:input="setShortApiKey"
          >
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="bitly-username-describe">Username</span>
          </div>
          <input
            id="bitly-username"
            name="bitly-username"
            class="form-control"
            aria-describedby="bitly-username-describe"
            type="text"
            v-model="shortUsername"
            v-on:input="setShortUsername"
          >
        </div>

      </div>
    </div>
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
      shortUsername: ""
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
