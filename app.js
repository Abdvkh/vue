const app = Vue.createApp({
    data(){
        return {
            title: "The Final Empire",
            author: "Brandon Sanderson",
            age: 45
        }
    },

    methods: {
        changeTitle(){
            // this.title = 'Words of Randiance'
            this.title = prompt("Enter title of the book")
        }
    }
})

app.mount('#app')
