<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <q-btn label="Bad" @click="badDialog"/>
    <q-btn label="Good" @click="goodDialog"/>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import CustomDialog from 'components/CustomDialog.vue'
import {useQuasar} from 'quasar';

export default defineComponent({
  name: 'PageIndex',
  components: {
    CustomDialog,
  },
  setup() {
    const $q = useQuasar()

    function badDialog() {
      $q.dialog({component: 'CustomDialog'})
    }

    function goodDialog() {
      $q.dialog({component: CustomDialog})
    }

    return {
      badDialog,
      goodDialog,
    }
  }
})
</script>
