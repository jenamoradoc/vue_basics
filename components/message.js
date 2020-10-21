Vue.component('message', { 
    data () {
        return {
            message: 'Hola Mundo desde el componente'
        }
    },
    template: `
        <div>
            <h2>Componente Menssage it's alive </h2>
            <p>{{ message }} </p>
        </div>
    `
});