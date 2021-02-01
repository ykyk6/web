<template>
  <div id="Howtocard" class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-img
          class="col-5"
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        />
      </q-card-section>
    </q-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.my-card{
  width: 30%;
  max-width: 350px
  }
</style>
