Vue.component('emit', {
    data () {
        return {
            cardBrand: 'Toyota'
        }
    },
    template: `
        <div>
            <h2>Emitir eventos con Vuejs 2</h2>
            <p @click="$emit('show_car_brand', cardBrand)">
                Pulsa aqui para emiitir un evento a la instancia del Root de Vuejs
            </p>
        </div>
    `
})