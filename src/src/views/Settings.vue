<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 text-left">
        <h2>Settings</h2>
        <div class="border-top my-3"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-auto">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="alias-describe">Microsoft Alias</span>
          </div>
        <input id="alias" name="alias" class="form-control" aria-describedby="alias-describe" type="text" v-model="boundAlias" v-on:input="setAlias">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "settings",
  props: {
    //   boundAlias: String
  },
  data: function() {
    return { boundAlias: this.getAlias() };
  },
  components: {},
  methods: {
    getAlias: function() {
      return this.$localStorage.get("alias");
    },
    setAlias: function() {
      console.log(this.boundAlias);
      this.$localStorage.set("alias", this.boundAlias);
    }
  }
};
</script>
