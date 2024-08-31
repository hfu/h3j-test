(async () => {
  const maplibregl = await import('https://unpkg.com/maplibre-gl/dist/maplibre-gl.js');
  await import('https://hfu.github.io/h3j-test/h3j_h3t.js');
  export default maplibregl.default;
})();
