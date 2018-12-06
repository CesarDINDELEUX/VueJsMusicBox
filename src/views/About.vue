<template>
  <div>
    <Top msg="Welcome to Your Vue.js App"/>
    <b-form v-on:submit.prevent="onSubmit" v-if="show">
      <b-form-group id="importMusic">
  <!-- Plain mode -->
          <b-form-file v-model="form.file" class="mt-3" plain></b-form-file>
          <div class="mt-3">Selected file: {{file && file.name}}</div>
          <b-form-checkbox-group>
          <b-form-checkbox v-model="form.echo" value="echo">Echo</b-form-checkbox>
          <b-form-checkbox v-model="form.reverb" value="reverb">Reverb</b-form-checkbox>
          </b-form-checkbox-group>
      </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button @click="getMessage">lol</b-button>
    </b-form>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
export default {
  components: {
    Top
  },
  data () {
    return {
      file: null,
      form: {
        file: null,
        reverb: true,
        echo : true,
      },
      show: true
    }
  },
  methods: {
    onSubmit () {
      this.axios.post('http://localhost:5000/addEffect', {
      file: this.form.file,
      echo: this.form.echo
  })
  .then( response => {
    console.log(response.data);
  })
  .catch( error => {
    console.log(error);
  })
  },
  getMessage() {
      const path = 'http://localhost:5000/ping';
      this.axios.get(path)
        .then((res) => {
          this.msg = res.data;
          console.log(res.data)
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
}
}
</script>

