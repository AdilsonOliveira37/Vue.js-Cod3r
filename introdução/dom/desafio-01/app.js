new Vue ({
    el: '#desafio',
    data: {
        nome: 'Adilson Oliveira',
        idade: '22',
        img: 'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1'
    },
    methods: {
        aleatorio: function(){
            return Math.random(0,1)
        }
    }
})