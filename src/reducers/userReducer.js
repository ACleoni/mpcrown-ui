import {SIGN_UP, 
        SIGN_IN, 
        RENDER_SET_ITEM, 
        RENDER_ALL_ITEMS, 
        RENDER_FILTERED_ITEMS, 
        ADD_TO_CART, 
        REMOVE_FROM_CART, 
        STORE_GRAND_TOTAL, 
        USER_INFO,
        CHANGE_ITEM_COLOR} from '../actions/types';

const initialState = {
    grandTotal: null,
    newAccount: {},
    existingAccount: {},
    renderItem: false,
    cartItem: {},
    cartContainer: [],
    item: [],
    colorMatch: [],
    renderedColor: [],
    userInfo: [],
	items: [
            {
                id: 0,
                name: './images/mpcrownhoodie.png',
                description: 'MP Crown Hoodie',
                price: 34.99,
                colors: [
                            [{
                            'color': 'white',
                            'img': './images/mpcrownhoodie.png',
                            }],
                            [{
                            'color': 'red',
                            'img': './images/mpcrownhoodiered.png',
                            }],
                        ],
                gender: ['M', 'F', 'A'],
            },
            {
                id: 1,
                name: './images/cfihoodie.png',
                description: 'CFI Hoodie',
                price: 34.99,
                gender: ['M', 'F', 'A']
            }, 
            {
                id: 2,
                name: './images/mpcrownmenstee.png',
                description: 'MP Crown Mens Tee',
                price: 19.99,
                gender: ['M', 'A']
            },
            {
                id: 3,
                name: './images/cfimenstee.png',
                description: 'CFI Mens Tee',
                price: 19.99,
                gender: ['M', 'A']
            }, 
            {
                id: 4,
                name: './images/mpcrownvneck.png',
                description: 'MP Crown V-Neck',
                price: 19.99,
                gender: ['F', 'A']
            },
            {
                id: 5,
                name: './images/mpcrownkidstee.png',
                description: 'MP Crown Kids Tee',
                price: 12.99,
                gender: ['K', 'A']
            }, 
            {
                id: 6,
                name: './images/cfikidstee.png',
                price: 12.99,
                description: 'CFI Kids Tee',
                gender: ['K', 'A']
            },
            {
                id: 7,
                name: './images/cfivneck.png',
                price: 19.99,
                description: 'CFI V-Neck',
                gender: ['M', 'F', 'A']
            },
            {
                id: 8,
                name: './images/cfitank.png',
                price: 14.99,
                description: 'CFI Tank-Top',
                gender: ['M', 'A']
            },
            {
                id: 9,
                name: './images/cfiwomenstank.png',
                price: 14.99,
                description: 'CFI Womens Tank-Top',
                gender: ['F', 'A']
            },
            {
                id: 10,
                name: './images/mpcrownwomenstee.png',
                price: 17.99,
                description: 'MP Crown Womens Tee',
                gender: ['F', 'A']
            },
            {
                id: 11,
                name: './images/mpcrownwomenstank.png',
                description: 'MP Crown Womens Tank-Top',
                price: 14.99,
                gender: ['F', 'A']
            }, 
            {
                id: 12,
                name: './images/cfiwomensshirt.png',
                price: 17.99,
                description: 'CFI Womens Shirt',
                gender: ['F', 'A']
            },
            {
                id: 13,
                name: './images/mpcrowntank.png',
                price: 14.99,
                description: 'MP Crown Tank Top',
                gender: ['M', 'A']
            },
            {
                id: 14,
                name: './images/mpcrownlongsleevetee.png',
                price: 19.99,
                description: 'MP Crown Longsleeve Tee',
                gender: ['M', 'A']
            },
            {
                id: 15,
                name: './images/mpcrownsweater.png',
                price: 29.99,
                description: 'MP Crown Sweatshirt',
                gender: ['M', 'A']
            },
            {
                id: 16,
                name: './images/cfisweatshirt.png',
                price: 29.99,
                description: 'CFI Sweatshirt',
                gender: ['M', 'A']
            },
            {
                id: 17,
                name: './images/cfilongsleeve.png',
                price: 19.99,
                description: 'CFI Longsleeve Tee',
                gender: ['M', 'A']
            },  
        ],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
        return {
            ...state,
            newAccount: action.payload,
        }
        case SIGN_IN:
        return {
            ...state,
            existingAccount: action.payload
        }
        case RENDER_SET_ITEM:
        return {
            ...state,
            item: action.payload,
            renderItem: true
        }
        case RENDER_ALL_ITEMS: 
        return {
            ...state,
            item: [],
            renderItem: false
        }
        case RENDER_FILTERED_ITEMS: 
        return {
            ...state,
            items: initialState.items.filter(item => item.gender.includes(action.payload))
        }
        case ADD_TO_CART: 
        return {
            ...state,
            cartItem: action.payload
        }
        case REMOVE_FROM_CART: 
        return {
            ...state
        }
        case STORE_GRAND_TOTAL: 
        return {
            ...state,
            grandTotal: action.payload
        }
        case USER_INFO:
        return {
            ...state,
            userInfo: action.payload
        }
        case CHANGE_ITEM_COLOR:
        return {
            ...state,
            colorMatch: action.payload.itemColor.color,
            renderedColor: initialState.items.find((item) => {
                return item.id === action.payload.itemColor.id
            })
        }
        default:
        return state;
    }
};