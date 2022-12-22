<template>
  <section id="latest-news">
    <div class="container">
      <div class="is-size-1">
        Latest News
      </div>

      <b-carousel-list v-model="slide" :data="items" :items-to-show="3">
        <template #item="list">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="list.featuredImage.src || '/Milwaukee_Bucks_logo.svg'"
                  :alt="list.featuredImage.alt"
                >
              </figure>
            </div>
            <div class="card-content">
              {{ list.title }}
            </div>
          </div>
        </template>
      </b-carousel-list>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  data: () => ({
    items: [],
    slide: 0
  }),
  async fetch () {
    await this.$axios.get('https://content-api-dev.nba.com/public/1/teams/1610612749/content?types=article&count=10')
      .then((r) => {
        this.items = r.data.results.items
      })
  }
}

</script>
