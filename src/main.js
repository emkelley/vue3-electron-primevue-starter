import { createApp } from "vue";
import { reactive } from "vue";
import App from "./App.vue";
import store from "./store";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.config.globalProperties.$appState = reactive({ inputStyle: "outlined" });
app.config.globalProperties.$primevue = reactive({ ripple: true });

app.use(store);

app.component("Dialog", Dialog);
app.component("Button", Button);

app.mount("#app");
