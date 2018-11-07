<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
html, body {
  margin: 0;
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
</style>
