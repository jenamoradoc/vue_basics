Vue.component('computed-properties', {
    data () {
        return {
            name: 'David',
            surname: 'Enamorado'
        }
    },
    computed: {
        fullName () {
            return `${this.name} ${this.surname}`;
        }
    },
    template: `
        <div>
        <h2>Computed Propierties</h2>
        <p>{{ fullName }}</p>
        </div>
    `
});