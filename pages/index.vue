<template>
  <div id="index">
    <HomeHero />
    <ScheduleCarousel />
    <NewsCarousel />
  </div>
</template>

<script>
import NewsCarousel from '../components/NewsCarousel.vue'
import ScheduleCarousel from '../components/schedule/ScheduleCarousel.vue'

export default {
  name: 'IndexPage',
  components: { ScheduleCarousel, NewsCarousel },
  mounted () {
    this.$store.dispatch('schedule/remoteFetchSchedule')
  }
}
</script>
