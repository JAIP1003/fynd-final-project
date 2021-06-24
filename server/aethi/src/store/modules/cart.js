function updateLocalStorage( cart ) {
    localStorage.setItem( 'cart' , JSON.stringify( cart ))
}

const kart = {
    state:{
        cart: []
    },
    getters: {
        productQuantity: state => product => {
            const item = state.cart.find( i => i._id === product._id )

            if( item ) return item.quantity;
            else return null
        },
        cartItems: state => {
            return state.cart;
        },
        cartSize: state => {
            return state.cart.length;
        },
        cartTotal: state => {
            return state.cart.reduce( (a, b) => a + ( b.price * b.quantity ), 0)
        }
    },
    mutations:{
        addToCart( state, product ){
            let item = state.cart.find( i => i._id === product._id );

            if( item ){
                item.quantity++;
            }
            else{
                state.cart.push( {...product, quantity: 1 } );
            }
            updateLocalStorage(state.cart);
        },
        removeFromCart( state, product ) {
            let item = state.cart.find( i => i._id === product._id );

            if( item ) {
                if( item.quantity > 1 ){
                    item.quantity--;
                }
                else{
                    state.cart = state.cart.filter( i => i._id !== product._id )
                }
            }
            updateLocalStorage( state.cart );
        },
        makeCartEmpty(state) {
            while( state.cart.length ){
                state.cart.pop();
            }
        },
        updateCartFromLocalStorage( state ){
            const cart = localStorage.getItem( 'cart' )
            if( cart ){
                state.cart = JSON.parse( cart )
            }
        }
        
    },
    actions:{

    },
    modules:{
        
    }
}

export default kart;