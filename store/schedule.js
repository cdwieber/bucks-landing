import axios from 'axios'

export const state = () => ({
  schedule: [],
  loading: false
})

export const actions = {
  async remoteFetchSchedule ({ state }) {
    state.loading = true
    await axios.get('https://data.nba.com/data/v2022/json/mobile_teams/nba/2022/teams/bucks_schedule.json')
      .then((r) => {
        state.schedule = r.data
        state.loading = false
      }).catch((e) => {
        state.loading = false
      })
  }
}
