import { configure } from '@storybook/react';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/scss/style.scss'
import '../src/responsive.css'
import '../src/vendors/linericon/style.css'

// automatically import all files ending in *.stories.js
configure(require.context('../src/Components', true, /\.stories\.js$/), module);
