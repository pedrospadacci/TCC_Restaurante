<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
                <v-card
                :loading="loading"
                class="mx-auto my-12"
                max-width="374"
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                :src="mesas.qrcode"
                ></v-img>

                <v-card-title>{{ mesas.nome }}</v-card-title>

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
    name: 'Mesas',

    props: {
        mesas: {type: Object[Array], required: true}
    }

}
</script>

<style>

</style>