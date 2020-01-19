<template lang="html">
    <figure>
        <img :src="this.url">
        <figcaption class="photographer">Valokuvaaja: {{ photographer }}</figcaption>
    </figure>
</template>

<script>
export default {
    name: 'FinnaImage',
    props: {
        image: {
            type: Object,
            required: true
        },
    },
    data () {
        return {
        }
    },
    watch: {
    },
    computed: {
        url() {
            return this.$store.state.imgUrl + this.image.images[0];
        },
        photographer() {
            return this.image.nonPresenterAuthors[0].name;
        }
    }
}
</script>

<style scoped>
 figcaption {
     font-size: 0.9rem;
     padding-top: 0.3rem;
     margin-bottom: 2rem;
 }

</style>
