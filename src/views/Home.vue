<template>
  <div>
    <h1>Request something!</h1>
    <h2>Enter in the following information, and I'll throw it on the server!</h2>
    <div class='main-container'>
      <div class='container'>
        <h2>Title</h2>
        <input type='text' id='title' v-model='title'>
        <h2>Language</h2>
        <input type='text' v-model='language'>
        <h2>Subtitles</h2>
        <div>
          <input type='checkbox' v-model='subtitles'>
          <input :class='{hidden: !subtitles}' id='subsInput' type='text' v-model='subtitleLanguage'>
        </div>
        <div class='button-container'>
          <button class='typeButton' @click='type = "Movie"' :class='{active: movie}'>Movie</button>
          <button class='typeButton' @click='type = "TV"' :class='{active: !movie}'>TV</button>
        </div>
        <button id='submitButton' @click='submitTicket'>Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: "",
      language: "",
      type: "Movie",
      subtitles: false,
      subtitleLanguage: "English",
    }
  },
  computed: {
    movie() {
      if (this.type === 'Movie') return true;
      else return false;
    }
  },
  methods: {
    submitTicket() {
      if (this.title === "") {
        console.log("EMPTY");
        return;
      } 
      else {
        let newMedia = {
          id: this.$root.$data.media.length,
          title: this.title,
          language: this.language,
          type: this.type,
          status: 'REQUESTED',
          revokeable: true
        }
        if (newMedia.language === "") newMedia.language = 'English';
        if (this.subtitles) newMedia.subs = this.subtitleLanguage;
        this.$root.$data.media.push(newMedia);
        this.$router.push('/confirmation');
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  padding: 20px;
}
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.typeButton {
  background-color: #2b2b2b;
  color: #dadada;
  outline: none;
  font-size: 20px;
}
.active {
  background-color: #c24e4e;
  color: #dadada;
}
#title {
  width: 50%;
}
#notes {
  height: 150px;
  width: 50%;
}
.hidden {
  visibility: hidden;
}
#submitButton {
  align-self: center;
  font-size: 20px;
  margin-top: 10px;
}
</style>
