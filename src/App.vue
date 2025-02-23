<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSettingsStore } from './stores/settings'

const appSettings = useSettingsStore()

onMounted(() => {
  // setup global variables in settings store
  if (globalThis.spcontext !== undefined) {
    appSettings.siteadmin = globalThis.spcontext.pageContext.legacyPageContext.isSiteAdmin
    // appSettings.fullcontrol = globalThis.hasManageWebPermissions
    appSettings.displayname = globalThis.spcontext.pageContext.user.displayName
    appSettings.loginname = globalThis.spcontext.pageContext.user.loginName
    appSettings.instanceid = globalThis.spcontext.instanceId
    appSettings.email = globalThis.spcontext.pageContext.user.email
    appSettings.siteurl = globalThis.spcontext.pageContext.site.absoluteUrl
    appSettings.weburl = globalThis.spcontext.pageContext.web.absoluteUrl
  }
})
</script>

<template>
  <div>HELLO WORLD</div>
</template>

<style scoped></style>
