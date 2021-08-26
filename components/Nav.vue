<template>
  <div
    class="
      px-4
      py-5
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
    "
  >
    <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Our product"
            class="
              font-medium
              tracking-wide
              text-gray-700
              transition-colors
              duration-200
              hover:text-deep-purple-accent-400
            "
            >Servicio</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Our product"
            class="
              font-medium
              tracking-wide
              text-gray-700
              transition-colors
              duration-200
              hover:text-deep-purple-accent-400
            "
            >Nosotros</a
          >
        </li>
        <li>
          <a
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            class="
              font-medium
              tracking-wide
              text-gray-700
              transition-colors
              duration-200
              hover:text-deep-purple-accent-400
            "
            >Precios</a
          >
        </li>
      </ul>
      <a
        href="/"
        aria-label="Cintatic"
        title="Cintatic"
        class="inline-flex items-center lg:mx-auto"
      >
        <span
          class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
          ><nuxt-img class="w-36" src="/title-icon.png" />
        </span>
      </a>
      <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
        <li>
          <a
            href="tel:5628348062"
            class="
              inline-flex
              items-center
              justify-center
              h-12
              px-3
              font-medium
              tracking-wide
              transition
            "
            aria-label="Sign up"
            title="Telefono"
          >
            <font-awesome-icon
              class="text-gray-700 hover:text-gray-400 text-2xl"
              :icon="['fas', 'phone']"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
            class="
              inline-flex
              items-center
              justify-center
              h-12
              px-3
              font-medium
              tracking-wide
              transition
            "
            aria-label="Sign up"
            title="Whatsapp"
          >
            <font-awesome-icon
              class="text-gray-700 hover:text-gray-400 text-3xl"
              :icon="['fab', 'whatsapp']"
            />
          </a>
        </li>
      </ul>
      <div class="ml-auto lg:hidden">
        <a
          href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
        >
          <font-awesome-icon
            class="text-3xl mr-2"
            :icon="['fab', 'facebook']"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
        >
          <font-awesome-icon
            class="text-3xl mr-2"
            :icon="['fab', 'instagram']"
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
        >
          <font-awesome-icon class="text-3xl" :icon="['fab', 'whatsapp']" />
        </a>
        <a href="tel:5628348062">
          <font-awesome-icon class="text-2xl mx-3" :icon="['fas', 'phone']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>
