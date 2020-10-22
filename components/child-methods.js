Vue.component('child-methods', {
    data () {
        return {
            cmpName: 'Child Methods Cmp'
        }
    },
    methods: {
        showCmpName () {
            console.log("llamada al metodo showCmpName", this.cmpName)
        }
    },

    template: `
        <div>
            <h2>Acceso a methods del cmp hijo desde el cmp padre</h2>
        </div>
    `
})