import axios from 'axios'

export const state = () => ({
  schedule: [],
  loading: false
})

export const mutations = {
  updateSchedule (state, schedule) {
    state.schedule = schedule
  },
  toggleLoading (state) {
    state.loading = !state.loading
  }
}

export const actions = {
  async remoteFetchSchedule ({ commit }) {
    commit('toggleLoading')
    await axios.get('https://data.nba.com/data/v2022/json/mobile_teams/nba/2022/teams/bucks_schedule.json')
      .then((r) => {
        commit('updateSchedule', r.data.data.gscd.g)
        commit('toggleLoading')
      }).catch((e) => {
        commit('toggleLoading')
      })
  }
}
