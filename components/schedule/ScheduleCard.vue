<template>
  <div class="card is-shadowless">
    <div class="card-content has-text-centered">
      <p class="is-size-4">
        {{ game.v.ta }} @ {{ game.h.ta }}
      </p>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <span class="is-size-7">{{ prettyDate(game.etm) }}</span>
      </div>
      <div class="card-footer-item">
        <span class="is-size-7">{{ prettyTime(game.etm) }}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { DateTime as dt } from 'luxon'

export default {
  props: {
    game: {
      type: Object,
      default: () => { return {} }
    }
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
