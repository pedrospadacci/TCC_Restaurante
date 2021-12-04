<template id="telaIn">
<div >
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Itens
          </v-list-item-title>
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"          
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Restaurante</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
  
</div>
</template>
<style scoped>
#telaIn{
  background-color: #B22222;
}
</style>
<script>
  export default {
    data: () => ({ drawer: null,
      items: [
          { title: 'Início', to: '/about'},
          { title: 'Bebidas', to: '/home'},
          { title: 'Entradas', to:'/entradas' },
          { title: 'Pizzas', to:'/pizzas' },          
        ],
     }),
  }
</script>