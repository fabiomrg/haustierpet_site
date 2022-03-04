<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require('@/assets/light.jpg')"
      class="white--text"
      gradient="to bottom, rgba(255, 172, 182, .2), rgba(255,172,182,.3)"
    >
      <v-container class="px-2 py-0">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="50%"
          max-width="800"
          width="90%"
        >
        <br/><br/><br/>
        <v-card class="rounded-xl" color="#331a1b9D">
          <br/><br/>
          <v-row class="mx-6" align="center">
            <base-subheading
            size="text-h5"
            weight="regular"
            title="COLARES PROTETORES PARA SONDA ESOFÁGICA EM CÃES E GATOS"  
            />
            <base-body >
              <p class="text-white">Ele foi criado para garantir mais conforto, segurança e beleza para o animal com implante da sonda esofágica.</p>
              <p class="text-white">O diferencial do colar da HaustierPet para os demais, é que a sonda não fica exposta, e pode ser guardada em um bolso, evitando sua contaminação,  e evitando que se enrosque por acidente, ou seja puxada pelo animal. </p> 
              <p class="text-white">Tem formato anatômico, e 12 tamanhos, para garantir o conforto, além de fechamento por velcro, permitindo ajuste perfeito ao pescoço do animal.</p>
              <p class="text-white">A graça e beleza dos tecidos utilizados nos colares, além de diminuirem a resistência do tutor na adoção do procedimento,  amenizam o impacto negativo da aparência do curativo convencional.</p>
              <p class="text-white">Sim, nós da HaustierPet acreditamos que a confiança do tutor no procedimento é fundamental para a recuperação do animal.</p>
            </base-body>
          </v-row>
        </v-card>
        <br/><br/><br/><br/>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '50vh' : '25vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
<style type="text/css">
  rounded-card{
      border-radius:60;
  }
  p{
      color:white;
  }

</style>
