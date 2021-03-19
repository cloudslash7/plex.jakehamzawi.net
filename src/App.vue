<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/database">Database</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: #2b2b2b
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dadada;
  
}

#nav {
  margin: 0px;
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #dadada;
}

#nav a.router-link-exact-active {
  color: #c24e4e;
}
</style>
