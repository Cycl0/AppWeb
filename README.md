# Criação do ambiente de desenvolvimento (Avaliação contínua)

## Auto Refresh

```js
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: true, // Mude para `false` para desabllitar o auto-fresh
  }
})
```

## Pacotes

[Vite](https://vitejs.dev)
[Three.js](https://threejs.org/docs/)
