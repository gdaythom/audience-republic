import Vue from 'vue';
import Vuex from 'vuex';
import eventsModule from './modules/events';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLoading: false,
	},
	getters: {
		isLoading: (state) => state.isLoading,
	},
	mutations: {
		SET_IS_LOADING(state, isLoading) {
			// eslint-disable-next-line no-param-reassign
			state.isLoading = isLoading;
		},
	},
	actions: {
	},
	modules: {
		eventsModule,
	},
});
