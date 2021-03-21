<template>
  <div id="app">
    <div id="nav">
      <a href='/'><img src='@/assets/logo.png' style='width:65px'></a>
      <router-link class='nav-link' to='/'>Request</router-link>
      <router-link class='nav-link' to='/database'>Database</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  background-color: #1f1f1f
}
h1 {
  margin-top: 20px;
}
h2 {
  margin-top: 50px;
}
input {
  background-color:#eeeeee;
  margin-top: 20px;
  font-size: 20px;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dadada;
  
}
#nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
}
#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #dadada;
}
#nav a.router-link-exact-active {
  color: #c24e4e;
}
.nav-link {
  margin-left: 15px;
}
</style>
