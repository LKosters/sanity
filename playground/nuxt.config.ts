export default defineNuxtConfig({
  app: {
    head: {
      script: [{ src: 'https://unpkg.com/tailwindcss-jit-cdn' }],
    },
  },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    globalHelper: true,
    apiVersion: '2021-03-25',
    additionalClients: {
      another: {},
    },
    visualEditing: {
      token: 'sk4QlpaiInoEFwkoU3KmzWWh2Nyyp8Vgby99KIeQidJQCSp3MeqCgXz5FQPk5FfTLoQ6DtVibboITQMoHTwjPQ1KKTiufHjhE7Gi06ON5sEjErAetch63xj7778OAaU7wbz8EIPYBOhh3Jdg7VWBJvwZeFjamCgrsy8JnV7grM4e6FDCoBu6',
      studioUrl: 'http://localhost:3333',
    },
  },
})
