<template>
  <router-link to="/" class="absolute m-7 text-lg"><i class="fa-solid fa-chevron-left text-3xl text-primary"></i></router-link>

    <div class="flex flex-col items-center">

        <h1 class="text-primary text-5xl my-5 russo-one">Projects</h1>

        <div class="flex flex-row flex-wrap w-screen justify-center mb-5">

            <ProjectCard v-for="project in Projects" :key="project.Name" :Details="project"/>

        </div>

    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
import projects from '@/projects.json'

export default {
  data () {
    return {
      Projects: projects
    }
  },
  components: {
    ProjectCard
  }
}
</script>
