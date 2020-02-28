const app = new Vue({
    //1
    el: '#app',
    //2
    data: {
        titulo: 'Hola mundo con Vue',
        nombres: ['Pedro','Juan','Pancho'],
        autos:[{marca:'Audi',modelo:'KJH23'},{marca:'Tesla',modelo:'T3'}]
    },
    nuevo_auto: '',
    //3
    methods:{
        agregarAuto(){
            console.log("Click!")
            this.autos.push({
                marca: this.nuevo_auto, modelo: "Nuevo"
            })
        }
    }
})