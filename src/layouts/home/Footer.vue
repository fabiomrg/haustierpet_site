<template>
  <v-footer
    id="home-footer"
    color="#c83737"
    dark
    min-height="72"
  >
    <v-container>
     

        <v-col
          class="text-center"
         
        >
          Copyright &copy; {{ new Date().getFullYear() }} HaustierPet
        </v-col>
      
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
       
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
