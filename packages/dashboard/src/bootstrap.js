import { createApp } from "vue";
import DashBoard from "./components/Dashboard.vue";

const mount = (el) => {
  const app = createApp(DashBoard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_dashboard-dev-root");
  if (el) {
    mount(el);
  }
}

export { mount };
