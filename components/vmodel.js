Vue.component("vmodel", {
  data() {
    return {
      framework: "Vuejs 2",
    };
  },
  template: `
    <div>
        <h2>Ejercicio Vmodel</h2>
        <input v-model="framework" />
        <p>El framework escogido es: {{ framework }}</p>
    </div>
    `,
});
