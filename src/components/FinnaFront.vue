<template>
  <div class="finna">
      <div class="sidebar">
          <aside>
              <h1>Hae kuvia Finnasta</h1>
              <input type="text" v-model="term" @keyup.enter="search">
              <button @click="search">Etsi, niin löydät sen!</button>
              <button class="secondary" @click="empty">Tyhjennä?</button>
              <div class="info">
                  <p v-if="searching">Haetaan</p>
                  <p v-else>Tulosten määrä: {{ results }}</p>
              </div>
          </aside>
          <footer>
              <p>Tehnyt: Heikki Ketoharju 2020</p>
          </footer>
      </div>
      <ImageList class=".imageList"></ImageList>
  </div>
</template>

<script>
import ImageList from './ImageList.vue'
import { mapActions } from 'vuex'

export default {
    name: 'FinnaFront',
    components: {
        ImageList
    },
    props: {
        msg: String
    },
    data() {
        return {
            term: '',
        }
    },
    computed: {
        searching() {
            if(this.$store.state.searching) {
                return true;
            }

            return false;
        },
        results() {
            return this.$store.state.count;
        }
    },
    methods: {
        empty() {
            this.term = '';
            this.emptyImages();
        },
        search() {
            this.searchImages(this.term);
        },
        ...mapActions([
            'searchImages',
            'emptyImages'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .sidebar {
     position: fixed;
 }
 aside {
     width: 20rem;
 }
 .info {
     clear: both;
     padding: 1rem;
 }
 footer {
     position: fixed;
     bottom:0;
     font-size: 0.9rem;
 }
 h1 {
     font-size: 3em;
     margin-bottom: 1rem;
     background-color: transparent;
     margin-left: 1.2rem;
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
 } input {
     border: 1px solid #2c3e50;
     font-size: 1.2rem;
     padding: 0.3rem;
     height: 1.4rem;
     width: 18rem;
     float: right;
 }
 button {
     height: 2.1rem;
     border: 1px solid #2c3e50;
     background: #2c3e50;
     color: #fff;
     vertical-align: middle;
     margin-top: 0.3rem;
     padding: 0.5rem;
     float: right;
     display: table-cell;

 }

 button.secondary {
     clear: both;
     background: #ccc;
     border: 1px solid #ccc;
 }

 button:hover {
     border-color: #63F8A6;
     background: #63F8A6;
 }

</style>
