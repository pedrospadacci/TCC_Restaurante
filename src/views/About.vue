<template>
<div>
  <v-card id="bebidas"
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="..\..\Images\Sodas.png"
    ></v-img>

    <v-card-title><a href="../Home.vue">Bebidas</a></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >        
      </v-row>

      

      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>  
    
      
    
  </v-card>

  <v-card id="entradas"
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="..\..\Images\Petiscos.png"
    ></v-img>

    <v-card-title>Entradas</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >        
      </v-row>

      

      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>  
    
      
    
  </v-card>

  <v-card id="entradas"
    :loading="loading"
    class="mx-auto my-12"
    max-width="274"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="150"
      src="..\..\Images\Pizzas salgadas.png"
    ></v-img>

    <v-card-title>Pizzas</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >        
      </v-row>

      

      
    </v-card-text>

    <v-divider class="mx-4"></v-divider>  
    
      
    
  </v-card>

  
</div>
</template>

<style scoped>

#bebidas{
  margin-left: 2500px;
  background-color: white;
}

</style>
<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),
    
  }
</script>