<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      A quick way to get up and running with Vue3, Electron, and PrimeVue.
    </p>
    <br />
    <ul>
      <li>
        <a href="https://v3.vuejs.org/">
          Vue 3 Documentation
        </a>
      </li>
      <li>
        <a href="https://nklayman.github.io/vue-cli-plugin-electron-builder/">
          Vue CLI Plugin Electron Builder
        </a>
      </li>
      <li>
        <a href="https://www.primefaces.org/primevue/">
          Prime Vue Component Library
        </a>
      </li>
    </ul>
    <br /><br />
    <Button
      label="Example Button/Dialog Component"
      icon="pi pi-external-link"
      @click="openBasic"
    />
    <Dialog
      v-model:visible="displayBasic"
      header="Header"
      :style="{ width: '50vw' }"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <template #footer>
        <Button
          label="Close"
          icon="pi pi-times"
          class="p-button-text"
          @click="closeBasic"
        />
        <Button
          label="Close"
          icon="pi pi-check"
          autofocus
          @click="closeBasic"
        />
      </template>
    </Dialog>
    <br /><br />
  </div>
</template>

<script>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
export default {
  name: "HelloWorld",
  components: {
    Dialog,
    Button,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      displayBasic: false,
      position: "center",
    };
  },
  methods: {
    openBasic() {
      this.displayBasic = true;
    },
    closeBasic() {
      this.displayBasic = false;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}
a {
  color: $globalScssVariable;
}
p {
  margin: 0;
}
.p-button {
  margin: 0 0.5rem 0 0;
  min-width: 10rem;
}
.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.p-dialog .p-button {
  min-width: 6rem;
}
</style>
