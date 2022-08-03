<template>
  <app-topbar/>
  <router-view/>
</template>

<script>
import AppTopbar from "@/components/Topbar.vue"
export default {
  name: "App",
  components: {
    AppTopbar
  }
}
</script>
