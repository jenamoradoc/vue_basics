Vue.component('method', {
    
    data () {
        return {
            name: 'Nicolas',
            surname: 'Enamorado'
        }
    },
    computed: {
        fullName () {
            return `${this.name} ${this.surname}`;
        }
    },
    methods: {
        hello () {
            alert(this.fullName);
        }
    },

    template: `
    <div>
        <h2>Ejecutar metodos con VueJs</h2>
        <p @click="hello">Click aqui para ejecutar el metodo hello</p>
    </div>
    `
});