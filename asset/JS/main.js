const app = new Vue(
    {

        el: '#root',


        data: {
            url: "https://flynn.boolean.careers/exercises/api/array/music",
            posters: [],
        },



        methods: {

        },



        mounted() {
            axios
                .get(this.url)
                .then(response => {
                    // console.log(response.data);
                    this.posters = response.data.response
                    // console.log(this.posters);
                }).catch(e => {
                    console.error(e);
                })

        },







    },


);