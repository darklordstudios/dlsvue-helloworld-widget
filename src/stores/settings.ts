import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const instanceid = ref('')
  const siteurl = ref('')
  const weburl = ref('')
  const fullcontrol = ref(false)
  const displayname = ref('')
  const loginname = ref('')
  const email = ref('')
  const siteadmin = ref(false)

  return {
    instanceid,
    siteurl,
    weburl,
    fullcontrol,
    displayname,
    loginname,
    email,
    siteadmin
  }
})
