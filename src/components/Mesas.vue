<template>
    <div v-show="show">
            
                <v-card class="mx-auto" width="500" >

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

                <v-card-actions>
                    <v-btn color="error" @click="fechaConta">Fecha Conta</v-btn>
                </v-card-actions>
                </v-card>
            
    </div>
</template>

<script>
const Swal = require('sweetalert2')
const axios = require('axios').default;
export default {
    name: 'Mesas',

    props: {
        mesas: {type: Object[Array], required: true},
    },
    data: () => {
        return {
            show: true
        }

    },
    methods: {
        fechaConta: function(){
            Swal.fire({
            title: 'Voce quer mesmo finalizar a conta?',
            text:'apos finalizar não tera como voltar.',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: `Sim`,
            denyButtonText: `Não`,
            }).then((result) => {
            if (result.isConfirmed) {
                axios
                .post('http://localhost:8080/deletaPedido/' + this.mesas.id)
                Swal.fire({
                    title: 'Finalizado!',
                    text: 'O pedido foi finalizado com sucesso', 
                    icon: 'success',
                
                }).then((saveResult)=> {
                    if (saveResult.isConfirmed){
                        this.show = false
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('O pedido não foi excluido', '', 'info')
            }
            })
        }
    }

}
</script>

<style>

</style>