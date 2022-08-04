<template>
  <app-topbar/>
  <router-view/>
</template>

<script>
import AppTopbar from "@/components/Topbar.vue"
import { actionTypes } from "@/store/modules/auth"
export default {
  name: "App",
  components: {
    AppTopbar
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>
