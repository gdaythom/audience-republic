import api from '../../api';

const eventsModule = {
  state: {
    events: [],
  },
  getters: {
    events: (state) => state.events,
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
  },
  actions: {
    fetchEvents({ commit }) {
      if (!this.getters.isLoading) {
        commit('SET_IS_LOADING', true);
      }
      api.events.fetchEvents()
        .then((response) => commit('SET_EVENTS', response))
        .finally(() => {
          if (this.getters.isLoading) {
            commit('SET_IS_LOADING', false);
          }
        });
    },
  },
};

export default eventsModule;
