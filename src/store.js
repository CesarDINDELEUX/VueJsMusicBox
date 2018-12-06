import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)
export default new Vuex.Store({
  state: {
    musics: []
  },
  mutations: {
    SET_MUSICS (state, musics) {
      state.musics = musics
    },
    ADD_MUSIC (state, payload) {
      console.log('Mutation : ')
      let newMusic = payload.key1
      console.log(newMusic)
      var song = {
        id: state.musics.length + 1,
        artist: newMusic.artist,
        songName: newMusic.songName,
        albumName: newMusic.albumName,
        pathImage: newMusic.pathImage
      }
      console.log(state.musics)
      state.musics.push(song)
      console.log(state.musics)
    }
  },
  actions: {
    loadMusics ({ commit }) {
      this.state.musics = null
      axios
        .get('http://localhost:4000/results')
        .then(r => r.data)
        .then(musics => {
        commit('SET_MUSICS', musics)
        })
    },
    addNew ({ commit }, payload) {
      console.log('Action : ')
      console.log(payload)
      commit('ADD_MUSIC', payload)
    },
    deleteMusic ({ commit, dispatch }, payload) {
      console.log('action')
      let id = payload.key1
      console.log(payload)
    axios.delete('http://localhost:4000/results/' + id + '/')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
});   
    dispatch('loadMusics');
    }
  }
})
