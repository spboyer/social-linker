<template>
  <div class="home">
    <LinkShare />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LinkShare from '@/components/LinkShare.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    LinkShare
  }
}
</script>
