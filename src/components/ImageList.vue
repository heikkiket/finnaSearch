<template lang="html">
    <div class="imageList">
        <FinnaImage v-bind:key="image.id" v-for="image in images" :image="image" />
        <div class="label">
            <p v-if="noImages" >Kirjoita hakusana hakukenttään ja paina hakunappia...</p>
        </div>
    </div>
</template>

<script>
import FinnaImage from './FinnaImage.vue'

export default {
    name: 'ImageList',
    components: {
        FinnaImage
    },
    props: {
    },
    data () {
        return {
        }
    },
    watch: {
    },
    computed: {
        noImages() {
            if(this.images.length < 1) {
                return true;
            }
            return false;
        },
        images() {
            return this.$store.state.images
        }
    },
    methods: {
    }
}
</script>

<style scoped>
 .imageList {
     margin-left: 22rem;
 }
 .label {
     font-size: 2.5rem;
     color: #ccc;
     padding: 5rem;
     padding-top: 10rem;
 }
 figure {
     margin: 0;
 }
</style>
