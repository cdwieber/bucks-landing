import axios from 'axios'
import { DateTime } from 'luxon'

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

export const getters = {
  // Get the games that are upcoming or currently ongoing.
  upcomingGames (state) {
    return state.schedule.filter(game => DateTime.fromISO(game.htm) >= DateTime.now()).slice(0, 6)
  },
  // Get games that have already happened.
  pastGames (state) {
    return state.schedule.filter(game => DateTime.fromISO(game.htm) < DateTime.now())
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
