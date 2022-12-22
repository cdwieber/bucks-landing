<template>
  <section class="footer">
    <div class="container flex has-text-centered">
      <div v-for="item in menu.accent.items" :key="item.id">
        <a :href="item.url">{{ item.title }}</a>
      </div>
      <div class="text-grey">
        &copy; 2022 Milwaukee Bucks
      </div>
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
