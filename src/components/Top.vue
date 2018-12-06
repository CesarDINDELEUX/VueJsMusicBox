<template>
  <div class="hello">
  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">MusicBox</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item><router-link to="/about">Nouvel Import</router-link></b-nav-item>
    </b-navbar-nav>

    <a href="https://vuejs.org">
    <img src="../assets/logo.png" width="60" height="60" alt="">
    </a>
    <a href="https://swagger.io">
    <img src="../assets/swagger.png" width="60" height="60" alt="" href="">
    </a>
    <a href="https://www.python.org">
    <img src="../assets/python.png" width="60" height="60" alt="" href="">
    </a>
    <a href="https://nodejs.org/en/">
    <img src="../assets/node.png" width="75" height="60" alt="" href="">
    </a>
    <a href="https://www.sqlite.org/index.html">
    <img src="../assets/sqlite.png" width="75" height="60" alt="" href="">
    </a>
    

  </b-collapse>
</b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
