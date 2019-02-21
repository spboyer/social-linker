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
        <input id="alias" name="alias" class="form-control" aria-describedby="alias-describe" type="text" v-model="boundAlias" v-on:input="setAlias">
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

      <div class="row">
        <div class="col-2">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="shortener">Provider</label>
            </div>
            <select class="custom-select" id="shortener" v-on:change="setShortenerProvider" v-model="shortenerProvider">
              <option>none</option>
              <option>bit.ly</option>
              <option>cda.ms</option>
            </select>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "settings",
  data: function() {
    return {
      boundAlias: this.getAlias(),
      shortenerProvider: this.getShortenerProvider()
    }
  },
  components: {},
  methods: {
    getAlias: function() {
      var val = this.$localStorage.get("alias");
      return val;
    },
    setAlias: function() {
      this.$localStorage.set("alias", this.boundAlias);
    },
    getShortenerProvider: function(){
      var val = this.$localStorage.get("shortProvider", "none");
      return val;
    },
    setShortenerProvider: function(){
      this.$localStorage.set("shortProvider", this.shortenerProvider);
    }
  }
};
</script>
