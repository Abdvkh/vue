const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            books: [
                {
                    title: "The Final Empire",
                    author: "Brandon Sanderson",
                    age: 45
                },
                {
                    title: "The Way of Kings",
                    author: "Tim Anderson",
                    age: 34
                },
                {
                    title: "The Name of winds",
                    author: "Jake Mordan",
                    age: 65
                },
            ],
        };
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')
