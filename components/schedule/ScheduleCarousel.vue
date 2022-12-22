<template>
  <section id="upcoming-games" class="is-light container pt-6">
    <div class="title">
      Upcoming Games
    </div>

    <div v-if="upcomingGames.length" id="game-display" class="level is-clipped is-mobile">
      <div v-for="game in upcomingGames" :key="game.id" class="level-item">
        <ScheduleCard :game="game" />
      </div>
    </div>

    <div class="has-text-right">
      <a href="#" class="is-size-5">Full Schedule &rarr;</a>
    </div>
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

<style scoped>
#game-display {
  overflow-x: scroll !important;
}
</style>
