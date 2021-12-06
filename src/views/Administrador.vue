<template>
    <div>
        <mesas :mesas="item" v-for="item in mesa" :key="item.id" />
    </div>
</template>

<script>
import mesas from '../components/Mesas';
const axios = require('axios').default;

export default {
    name: 'administrador',

    components: {
        mesas
    },

    data: () => {
        return {
            mesa: []
        }

    },
    mounted:function(){
        this.load()
    },

    methods: {
        load: function(){
            axios.get('http://localhost:8080/#/listarMesa')
            .then((response) => (this.mesa = response.data))
        }

    }
}
</script>

<style>

</style>