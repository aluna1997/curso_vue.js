const app = new Vue({
    //1
    el: '#app',
    //2
    data: {
        titulo: 'Hola mundo con Vue',
        nombres: ['Pedro','Juan','Pancho'],
        autos:[{marca:'Audi',modelo:1},{marca:'Tesla',modelo:3}],
        nuevo_auto: '',
        total: 0
    },
    //3
    methods:{
        agregarAuto(){
            console.log("Click!")
            this.autos.push({
                marca: this.nuevo_auto, modelo: 0
            });
            this.nuevo_auto = ''
        }
    },
    computed:{
        sumarModelos(){
            this.total = 0;
            for(autos in this.autos){
                this.total = this.total + autos.modelo
            }
        }
    }
})