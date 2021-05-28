const app = new Vue(
    {

        el: '#root',


        data: {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            posters: [],
            arrayGenre: ['All'],
            genereUtente: '',

        },



        methods: {
            genreSelection(genereUtente) {
                this.posters.forEach(card => {

                    if (genereUtente === 'All') {
                        card.visible = true

                    } else if (card.genre.includes(genereUtente)) {
                        card.visible = true

                    } else {
                        card.visible = false
                    }
                    console.log(card);


                });



            },





        },



        mounted() {

            axios
                .get(this.url)
                .then(response => {
                    // console.log(response.data);

                    this.posters = response.data.response
                    this.posters.forEach(el => {
                        el.visible = true
                        // console.log(el);

                        // Alimento la matrice dei generi musicali senza cloni 
                        if (this.arrayGenre.includes(el.genre)) {
                            console.log('non fare nulla');
                        } else {
                            this.arrayGenre.push(el.genre);

                        }
                    })
                    // console.log(this.posters);
                }).catch(e => {
                    console.error(e);
                })

        },







    },


);