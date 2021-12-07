<template>
    <div>
            
                <v-card class="mx-auto" width="500">

                <v-card-title class="teal lighten-3">
                    <span class="text-h6 font-weight-light">{{ mesas.mesa.nome }}
                    </span>
                    </v-card-title>

                <v-divider></v-divider>  

                <v-timeline align-top dense>
                    <v-timeline-item small>
                        <div>
                            <div class="font-weight-normal">
                                <strong>{{ mesas.mesa.nome }}</strong>
                            </div>
                            <div>{{ mesas.mesa.restaurante.nome }}</div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
                <v-divider/>

                <v-card-text class="text-h6">R${{ mesas.conta}} </v-card-text>


                </v-card>
            
    </div>
</template>

<script>
export default {
    name: 'Mesas',

    props: {
        mesas: {type: Object[Array], required: true},
    }

}
</script>

<style>

</style>