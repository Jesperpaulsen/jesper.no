export const state = () => ({
  event: {}
})

export const mutations = {
  updateMousePosition(state, payload) {
    state.event = payload
  }
}

export const getters = {
  event(state) {
    return state.event
  }
}
