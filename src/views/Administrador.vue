<template>
        <div>
            <mesas  :pedidos="item" v-for="item in pedido" :key="item.id"/>
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
            pedido: []
        
        }

    },
    mounted:function(){
        this.load()
    },

    methods: {
        load: function(){
            axios
            .get('http://localhost:8080/listarPedido')
            .then((response) => (this.pedido = response.data))
        }

    }
}
</script>

<style>

</style>