<template>
    <div>
        <produtos :produtos="item" v-for="item in produto" :key="item.id"/>
    </div>  
</template>

<script>
import produtos from '../components/Produtos.vue'
export default {
  components: { produtos },
    mounted:function(){
            this.load()
        },
        methods: {
            load: function() {
                axios.get('cardapiotcc-backend.herokuapp.com/listarProduto')
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