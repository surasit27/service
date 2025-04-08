/** @type {import('tailwindcss').Config} */
const config = require('@repo/tailwind-config/tailwindConfig')

module.exports = {
  ...config,
  content: ['./stories/**/*.{tsx, ts}', '../../packages/ui/**/*.tsx'],
}
