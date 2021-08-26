<template>
  <div class="container md:w-1/2 md:mx-auto">
    <br />
    <NuxtLink
      class="mt-rounded-lg bg-gray-100 active:shadow ml-4 p-2"
      to="/blog"
    >
      <font-awesome-icon :icon="['fas', 'arrow-left']" />
      Regresar al blog
    </NuxtLink>
    <h1 class="text-4xl mt-8 md:mt-8 mx-8 text-left">
      {{ post.title }}
    </h1>
    <div class="ml-8 mt-4 text-left">
      <p>{{ formatDate(post.createdAt) }}</p>
    </div>
    <div class="mx-8 mt-4">
      <nuxt-content :document="post" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content(params.slug).fetch()
    return {
      post,
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('es', options)
    },
  },
}
</script>
