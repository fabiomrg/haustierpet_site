<template>
  
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      :height="barHeight"
      >
        <home-menu/>

         <v-container>
        
          <v-row justify="center">
            <v-col cols="10">
                <v-img  
                  class="mx-auto" 
                  :max-height="imageHeight"
                  :width="imageWidth"
                  :src="require('@/assets/logo.png')"
                
                />
              
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12" class="text-center">
        
            </v-col>
          </v-row>
        </v-container>
          
         
         
           
        
    </v-app-bar>
 
</template>

<script>
  export default {
    name: 'HomeAppBar',

    data: () => ({
      drawer: null,
      items: [
        'Home',
        'Pro',
      ],
    }),

    components: {
      
      HomeMenu: () => import('@/layouts/home/menu'),
    },
    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '100px'
          case 'sm': return '200px'
          case 'md': return '100px'
          case 'lg': return '80px'
          case 'xl': return '100px'
        }
      },
      imageWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '168px'
          case 'sm': return '200px'
          case 'md': return '200px'
          case 'lg': return '200px'
          case 'xl': return '200px'
        }
      },
      barHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '90px'
          case 'sm': return '100px'
          case 'md': return '100px'
          case 'lg': return '100px'
          case 'xl': return '100px'
        }
      },
    }
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 2 auto

    .v-tab
      &::before
        display: none
</style>
