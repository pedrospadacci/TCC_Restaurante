<template>
    <div>
        <produtos :produtos="item" v-for="item in produtos" :key="item.id"/>
    </div>  
</template>

<script>
const axios = require('axios').default;
import produtos from '../components/Produtos.vue'
export default {
  components: { produtos },
    mounted:function(){
            this.load()
        },
        methods: {
            load: function() {
                axios.get('http://localhost:8080/listarProduto')
                .then(response => (this.produtos = response.data))
                
            }
        },
        data: () => {
            return{
                produtos:[]
            }
                
    },
}

</script>

<style>

</style>