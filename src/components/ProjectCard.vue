<template>
  <div v-if="!ShowInfo" @click="ShowInfo=true" class="project-card">
    <img :src="getImageURL(Details.Image)">
    <h1>{{ Details.Name }}</h1>
  </div>
  <div v-if="ShowInfo" class="project-info-card" id="FlyeChatInfoCard">
    <div class="flex flex-row justify-between">
        <h1>{{ Details.Name }}</h1>
        <i class="fa-solid fa-x" @click="ShowInfo=false"></i>
    </div>
    <p v-for="text in Details.Info" :key="text" v-html="text"></p>
    <!-- <p>{{ Details.Details }}</p> -->
  </div>
</template>

<script>
export default {
  props: ['Details'],
  data () {
    return {
      ShowInfo: false
    }
  },
  methods: {
    getImageURL (pic) {
      return require('@/assets/img/' + pic)
    }
  }
}
</script>
