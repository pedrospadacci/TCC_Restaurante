<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
                <v-card
                
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                
                </template>                

                <v-card-title>{{ produtos.descricao }}</v-card-title>

                <v-card-text>
                <v-row
                    align="center"
                    class="mx-0"
                >        
                </v-row>

                

                
                </v-card-text>

                <v-divider class="mx-4"></v-divider>  
                
                
                
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Produtos',

    props: {
        produtos: {type: Object[Array], required: true}
    }
}
</script>

<style>

</style>