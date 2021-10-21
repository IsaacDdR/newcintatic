<template>
  <no-ssr placeholder="Loading...">
    <carousel :data="carouseldata"></carousel>
  </no-ssr>
</template>
<script>
export default {
  data() {
    return {
      carouseldata: [
        {
          id: 1,
          message: 'First message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: require('~/static/title-icon.png'),
              },
            })
          },
        },
        {
          id: 2,
          message: 'Any message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: require('~/static/title-icon.png'),
              },
            })
          },
        },
      ],
    }
  },
}
</script>
