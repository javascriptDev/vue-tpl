export default {
    namespaced: true,
    state: {
        age: 0
    },
    mutations: {
        addAge (state) {
            state.age++
        }
    },
    actions: {
        addAge ({ state, commit, rootState }) {
            commit('addAge')
        }
    }
}
