const app = Vue.createApp({
    data(){
        return {
            url: "https://vakhid.digital",
            showBooks: true,
            books: [
                {
                    title: "The Final Empire",
                    author: "Brandon Sanderson",
                    img: 'assets/img.png',
                    isFav: true
                },
                {
                    title: "The Way of Kings",
                    author: "Tim Anderson",
                    img: 'assets/img.png',
                    isFav: false
                },
                {
                    title: "The Name of winds",
                    author: "Jake Mordan",
                    img: 'assets/img.png',
                    isFav: true
                },
            ],
        };
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        toggleIsFavourite(book){
            book.isFav = !book.isFav
        }
    },

    computed: {
        filterBooks(){
            return this.books.filter((book) => book.isFav )
        }
    }
})

app.mount('#app')
