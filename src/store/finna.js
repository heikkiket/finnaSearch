import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        apiUrl: 'https://api.finna.fi/api/v1',
        imgUrl: 'https://api.finna.fi',
        count: 0,
        term: '',
        images: [],
        searching: false
    },
    mutations: {
        setCount (state, payload) {
            state.count = payload.count;
        },
        setImages(state, payload) {
            state.images = payload.images.filter((image) => image.images.length > 0);
        },
        setTerm(state, payload) {
            state.term = payload.term;
        },
        startSearch(state) {
            state.searching = true;
        },
        endSearch(state) {
            state.searching = false;
        }
    },
    actions: {
        searchImages({state, commit}, term) {
            commit('setTerm', { term });
            commit('startSearch');
            let endpoint = '/search';
            let q = '?lookfor=' + state.term;
            let type = '&type=AllFields';
            let fields = '&field[]=nonPresenterAuthors&field[]=images&field[]=id';
            let limit = '&limit=20';
            let query = endpoint + q + type + fields + limit;

            let headers = new Headers();
            // headers.append('Origin', 'https://localhost:8080');

            console.log("ApiURL:" + state.apiUrl);
            console.log(query);
            fetch(state.apiUrl + query, {
                Headers: headers
            })
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    commit('setCount', {count: response.resultCount});
                    commit('setImages', {images: response.records});
                    commit('endSearch');
                })
                .catch((error) => {
                    commit('endSearch');
                    console.log("Error: ");
                    console.log(error);
                });
        },
        emptyImages({state}) {
            state.count = 0;
            state.images = [];
            state.term = '';
        }
    }
})
