Vue.component('vmodel-checkboxes',  {
    data () {
        return {
            frameworks:[]
        }
    },
    template: `
        <div>
            <h2>Vmodel con arrays</h2>
            <input type="checkbox" id="vuejs 2" value="Vuejs 2" v-model="frameworks" />
            <label for="vuejs 2">Vuejs 2</label>
            <input type="checkbox" id="reactjs" value="React JS" v-model="frameworks" />
            <label for="reactjs">React Js</label>
            <input type="checkbox" id="angular" value="Angular" v-model="frameworks" />
            <label for="angular">Angular</label>
            <p>Frameworks seleccionados: {{ frameworks }}</p>
        </div>
    `
})