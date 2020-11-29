new Vue({
    el: '#desafio',
    data: {
        valor: 'Teste'
    },
    methods:{
        alerta(){
            alert("DANGEROUS")
        },
        pegaValor(e){
            this.valor = e.target.value;
        }
    }
})