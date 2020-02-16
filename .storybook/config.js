import { configure } from '@storybook/react';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/scss/style.scss'
import '../public/responsive.css'
import '../public/vendors/linericon/style.css'

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.js$/), module);
