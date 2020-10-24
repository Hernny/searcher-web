<template>
  <div class="default-layout">
    <div style="position:relative; height:100%; overflow-y:auto">
      <SiteContent />
    </div>
  </div>
</template>

<script>
import SiteContent from "@/components/layout/siteContent.vue";
export default {
    name: "DefaultLayout",
    components: {
      SiteContent
    }
}
</script>
<style lang="scss" scoped>
.default-layout {
  background-image: url(../assets/primavera2.jpg);
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>