<template>
  <section id="landing-hero" class="hero is-primary is-medium">
    <div class="hero-head">
      <b-navbar>
        <template #brand>
          <a class="navbar-item">
            <figure class="image is-128x128">
              <img src="/Milwaukee_Bucks_logo.svg" style="max-height: 100% !important" alt="Logo">
            </figure>
          </a>
        </template>

        <template #end>
          <div v-for="item in menu.primary.items" :key="item.id">
            <b-navbar-item v-if="item.children.length === 0" :href="item.url">
              {{ item.title }}
            </b-navbar-item>
            <b-navbar-dropdown v-else hoverable right arrowless :label="item.title">
              <b-navbar-item v-for="child in item.children" :key="child.id">
                {{ child.title }}
              </b-navbar-item>
            </b-navbar-dropdown>
          </div>
        </template>
      </b-navbar>
    </div>

    <div class="hero-body" />

    <div class="hero-foot">
      <nav class="tabs is-boxed is-full-width">
        <div class="container">
          <ul>
            <li class="is-active">
              <a href="/">Home</a>
            </li>
            <li v-for="item in menu.secondary.items" :key="item.id">
              <a :href="item.url" class="has-background-dark">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    menu: []
  }),
  async fetch () {
    await this.$axios.get('https://content-api-dev.nba.com/public/1/teams/1610612749/site/layout/nav')
      .then((r) => {
        this.menu = r.data.results
      })
  }
}
</script>

<style scoped>
#landing-hero {
    background-image: url('/giannis.webp');
    background-image: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
