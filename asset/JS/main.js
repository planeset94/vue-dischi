const app = new Vue(
    {

        el: '#root',


        data: {
            url: "https://flynn.boolean.careers/exercises/api/array/music",

        },



        methods: {

        },



        mounted() {
            axios
                .get(this.url)
                .then(response => {
                    console.log(response.data);
                }).catch(e => {
                    console.error(e);
                })

        }







    },


);