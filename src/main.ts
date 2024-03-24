import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'v-calendar/style.css';
import {setupCalendar} from "v-calendar";
import {router} from "./shared/router.ts";

const app = createApp(App);
app.use(setupCalendar, {})
app.use(router);
app.mount('#app')
