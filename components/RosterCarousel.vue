<template>
  <section id="latest-news" class="pb-6">
    <div class="container">
      <div class="title">
        2022 Player Roster
      </div>

      <b-carousel-list v-model="slide" :data="players" :items-to-show="4">
        <template #item="list">
          <div class="card">
            <div class="card-image">
              <div class="is-overlay is-size-1 m-4">
                #{{ list.num }}
              </div>
              <figure class="image is-4by3">
                <img
                  :src="`https://cdn.nba.com/headshots/nba/latest/1040x760/${list.pid}.png`"
                >
              </figure>
            </div>
            <div class="card-content">
              <div>{{ list.fn }}</div>
              <div class="is-size-4">
                {{ list.ln }}
              </div>
            </div>
            <div class="card-footer">
              <div>
                {{ list.pos }}, {{ list.ht }}" {{ list.wt }}lbs, drafted {{ list.draftYear }}<br>
                {{ list.hcc }}
              </div>
            </div>
          </div>
        </template>
      </b-carousel-list>
      <div class="has-text-right">
        <a href="#" class="is-size-5">Full Roster&rarr;</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    players: [],
    slide: 0
  }),
  async fetch () {
    await this.$axios.get('https://data.nba.com/data/v2022/json/mobile_teams/nba/2022/teams/bucks_roster.json')
      .then((r) => {
        this.players = r.data.data.t.pl
      })
  }
}

</script>
