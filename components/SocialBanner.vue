<template>
  <div class="flex">
    <div class="mx-auto">
      <a href="tel:5628348062">
        <font-awesome-icon class="text-4xl mx-3" :icon="['fas', 'phone']" />
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
      >
        <font-awesome-icon class="text-5xl mx-3" :icon="['fab', 'whatsapp']" />
      </a>

      <a v-if="ios" href="fb://profile/106070931823082">
        <font-awesome-icon class="text-5xl mx-3" :icon="['fab', 'facebook']" />
      </a>
      <a v-else-if="android" href="fb://page/106070931823082">
        <font-awesome-icon class="text-5xl mx-3" :icon="['fab', 'facebook']" />
      </a>
      <a v-else href="https://facebook.com/cintaticmx">
        <font-awesome-icon class="text-5xl mx-3" :icon="['fab', 'facebook']" />
      </a>

      <a href="https://instagram.com/cintaticmx">
        <font-awesome-icon class="text-5xl mx-3" :icon="['fab', 'instagram']" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ios: null,
      android: null,
    }
  },
  mounted() {
    if (navigator.userAgent.toLowerCase().includes('iphone')) this.ios = true
    if (navigator.userAgent.toLowerCase().includes('android'))
      this.android = true
  },
}
</script>
