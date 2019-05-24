<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 offset-xs3>
        <v-layout v-bind="layoutAttributes">
          <v-card>
            <v-card-title>
              <h1>Credits</h1>
            </v-card-title>
            <v-btn
              flat
              round
              href="https://developer.microsoft.com/en-us/advocates/index.html"
              target="_blank"
            >Built with ♥️ by Microsoft's Amazing Team of Cloud Developer Advocates</v-btn>
            <div>
              Social icons made by
              <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from
              <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
              >CC 3.0 BY</a>
            </div>
            <div>
              Copy icon made by
              <a
                href="https://www.flaticon.com/authors/gregor-cresnar"
                title="Gregor Cresnar"
              >Gregor Cresnar</a> from
              <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
              <a
                href="http://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
              >CC 3.0 BY</a>
            </div>
          </v-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
