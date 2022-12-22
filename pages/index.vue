<template>
  <div id="index">
    <HomeHero />
    <ScheduleCarousel />
    <NewsCarousel />
    <RosterCarousel />
    <FullFooter />
  </div>
</template>

<script>
import NewsCarousel from '../components/NewsCarousel.vue'
import RosterCarousel from '../components/RosterCarousel.vue'
import ScheduleCarousel from '../components/schedule/ScheduleCarousel.vue'

export default {
  name: 'IndexPage',
  components: { ScheduleCarousel, NewsCarousel, RosterCarousel },
  mounted () {
    this.$store.dispatch('schedule/remoteFetchSchedule')
  }
}
</script>
