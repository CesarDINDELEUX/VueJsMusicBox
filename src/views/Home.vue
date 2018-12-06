<template>
  <div class="home">
    <Top msg="Welcome to Your Vue.js App"/>
    <div>

<div class="card-deck">
<div v-for="music of musics" :key="music.id" class="card mb-4">
  <div class="card" style="width: 18rem;">
  <!-- <img class="card-img-top" :src="getImgUrl(music.pathImage)" v-bind:alt="music.pathImage"> -->
  <img :src=music.pathImage v-bind:alt="music.pathImage">
  <div class="card-body">
  <h5 class="card-title">{{ music.artist }} - {{ music.songName }}</h5>
    <p class="card-text">
      Album : {{ music.albumName }} <br>
    </p>
    <a @click="deleteMusic(music.id)" class="btn btn-danger">SUPPRIMER</a>
    <b-btn v-b-modal.addMusicModal>EDITER</b-btn>
  </div>
  </div>
</div>
</div>
  <b-btn v-b-modal.addMusicModal>Ajouter un son</b-btn>
  <b-modal id="addMusicModal">
     <div>
    <b-form @submit="onSubmit()">
      <b-form-group id="artist"
                    label="Artiste :"
                    label-for="artist">
        <b-form-input id="artist"
                      type="text"
                      v-model="form.artist"
                      required
                      placeholder="Artiste">
        </b-form-input>
      </b-form-group>
      <b-form-group id="albumName"
                    label="Album :"
                    label-for="albumName">
        <b-form-input id="albumName"
                      type="text"
                      v-model="form.albumName"
                      required
                      placeholder="Album">
        </b-form-input>
      </b-form-group>
      <b-form-group id="songName"
                    label="Nom du son :"
                    label-for="songName">
        <b-form-input id="songName"
                      type="text"
                      v-model="form.songName"
                      required
                      placeholder="Son">
        </b-form-input>
      </b-form-group>
      <b-form-group id="pathImage"
                    label="Illustration URL :"
                    label-for="pathImage">
        <b-form-input id="pathImage"
                      type="url"
                      v-model="form.pathImage"
                      required
                      placeholder="illustration">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Son :">
      <b-form-file v-model="form.file" :state="Boolean(form.file)" placeholder=""></b-form-file>
      </b-form-group>
      <b-button type="submit" variant="primary">Sauvegarder</b-button>
    </b-form>
  </div>
  </b-modal>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from '@/components/Top.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',
  mounted() {
    this.$store.dispatch('loadMusics')

  },
  computed: mapState([
    'musics'
  ]),
  data () {
    return {
      form: {
        artist: '',
        albumName: '',
        songName: '',
        pathImage: '',
        file: null,
      },
    }
  },
  components: {
    Top
    
  },
  methods: {
    onSubmit(){
      let payload = {'key1': this.form}
      this.$store.dispatch('addNew', payload)
      console.log('Form :')
      console.log(this.form)
      this.axios.post('http://localhost:4000/results', {
      artist: this.form.artist,
      albumName: this.form.albumName,
      songName: this.form.songName,
      pathImage: this.form.pathImage
  })
  .then( response => {
    console.log(response.data);
  })
  .catch( error => {
    console.log(error);
  })
    },
    getImgUrl(pic) {
    return require(pic)
   },
    deleteMusic(id) {
    let payload = {'key1': id}
    this.$store.dispatch('deleteMusic', payload)
   },
  }
}
</script>

<style>
.card-group {
  padding-top: 100px;
  padding-left: 60px;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

.card-deck {
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap; 
  align-items: stretch;
}
.card-deck .card {
  display: block;
  flex-basis: 33.3%; /* change this value for each breakpoint*/
}

</style>
