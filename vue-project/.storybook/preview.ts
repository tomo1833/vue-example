import { type Preview, setup }  from '@storybook/vue3';

import '../src/style.css';
import router from '../src/router'
import { createPinia } from 'pinia';

import { type App } from 'vue';

const pinia = createPinia();

setup((app: App) => {
    app.use(pinia);
    app.use(router);
});


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview

