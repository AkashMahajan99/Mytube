import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
})
// export default {
//   define: {
//     'process.env': {
//       VITE_API_KEY: JSON.stringify(import.meta.env.VITE_API_KEY),
//     },
//   },
// };