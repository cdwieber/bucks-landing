<template>
  <section>
    <div class="is-size-1 container">
      Upcoming Games
    </div>
    <b-carousel-list v-model="slide" :data="upcomingGames" :items-to-show="5">
      <template #item="list">
        <div class="card">
          <div class="card-content">
            <p class="title">
              {{ list.v.ta }} @ {{ list.h.ta }}
            </p>
          </div>
          <footer class="card-footer">
            <div class="card-footer-item">
              <span class="is-size-7">{{ prettyDate(list.etm) }}</span>
            </div>
            <div class="card-footer-item">
              <span class="is-size-7">{{ prettyTime(list.etm) }}</span>
            </div>
          </footer>
        </div>
      </template>
    </b-carousel-list>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { DateTime as dt } from 'luxon'

export default {
  data: () => ({
    slide: 0
  }),
  computed: {
    ...mapGetters({
      upcomingGames: 'schedule/upcomingGames'
    })
  },
  methods: {
    prettyDate (timestamp) {
      return dt.fromISO(timestamp).toLocaleString({ month: 'short', day: 'numeric' })
    },
    // @TODO: In a real-world scenario we'd typically pull the user's locale from the user-agent data for this operation
    prettyTime (timestamp) {
      // Get just the time in human format as well as shifting to central
      const etString = dt.fromISO(timestamp).toLocaleString(dt.TIME_SIMPLE)
      const ctString = dt.fromISO(timestamp).minus({ hours: 1 }).toLocaleString(dt.TIME_SIMPLE)
      return `${etString} ET | ${ctString} CT`
    }
  }
}
</script>
