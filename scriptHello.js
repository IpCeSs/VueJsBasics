var app1 = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!"
    }
})
var app2 = new Vue({
    el: "#app-2",
    data: {
        message: Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})
var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: 'Yo' },
            { text: 'retedsg' },
            { text: 'boom!' }
        ]
    }
})

// sur ce messge5 sépare les caractères split(), 
//on les change de sens reverse()
//et on les joints à nouveau join()
var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "UpsideDownMe",
    },

    methods: {
        reverseMessage: function() {

            this.message = this.message.split('').reverse().join('');
        }
    }
})
var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Tiepo"
    }
})


/*un composant est 
essentiellement une instance de Vue avec des options prédéfinies
dasn le html on pourra utiliser ce template de liste
avec les balises <todo-item></<todo-item>
 mais un peu naze car 1 message fixe dans la liste
Vue.component('todo-item', {
    template: '<li>Ceci est une liste</li>'
})*/

Vue.component('todo-item', {
    // Le composant todo-item accepte maintenant une
    // « prop » qui est comme un attribut personnalisé.
    // Cette prop est appelée todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

/*données que l'on va utiliser dasn todo-item*/
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Frites' },
            { id: 1, text: 'Frites' },
            { id: 2, text: 'Tout ce que les humains sont supposés manger' },
            { id: 3, text: 'et des frites' }
        ]
    
    }
})