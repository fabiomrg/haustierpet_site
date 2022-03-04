<template>
  <v-theme-provider dark>
    <base-section
      id="contatos"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-card-account-phone
      </base-icon>

      <base-section-heading
        color="white"
        title="Contato"
      >
       <p> Será um prazer atendê-los! Estamos aguardando seu contato:</p>
      </base-section-heading>
        
        <v-icon right>
          mdi-phone
        </v-icon>
        <a href="tel:+55-11-93730-4944" style="color:#FFFFFF">(11) 93730-4944</a> <br/><br/>
        <v-icon left>
            mdi-mail
          </v-icon>
          contato@haustierpet.com
          <br/><br/>
      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://api.whatsapp.com/send/?phone=5511937304944&text=Olá! Gostaria de mais informações."
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Toque aqui para whatsapp

        <v-icon right>
          mdi-whatsapp
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
