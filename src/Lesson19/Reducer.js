import { ADD, ADDAGE, ADDDEV, CHANGEUSER, SHUFFLE } from "./actiontypes"


const reducer = (state, action) => {

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }


    switch (action.type) {
        case ADD:
            return {
                arr: [...state.arr, +action.payload],
                developers: [...state.developers],
                user: state.user.age ? {
                    id: state.user.id,
                    name: state.user.name,
                    age: state.user.age
                } : {
                    id: state.user.id,
                    name: state.user.name,
                }
            };
        case SHUFFLE:
            return {
                arr: [...shuffle(state.arr)],
                developers: [...state.developers],
                user: state.user.age ? {
                    id: state.user.id,
                    name: state.user.name,
                    age: state.user.age
                } : {
                    id: state.user.id,
                    name: state.user.name,
                }
            }
        case ADDDEV:

            if (+action.payload) {
                return {
                    arr: [...state.arr],
                    developers: [...state.developers],
                    user: state.user.age ? {
                        id: state.user.id,
                        name: state.user.name,
                        age: state.user.age
                    } : {
                        id: state.user.id,
                        name: state.user.name,
                    }
                }
            } else {
                return {
                    arr: [...state.arr],
                    developers: [...state.developers, action.payload],
                    user: state.user.age ? {
                        id: state.user.id,
                        name: state.user.name,
                        age: state.user.age
                    } : {
                        id: state.user.id,
                        name: state.user.name,
                    }
                }
            }

        case CHANGEUSER:
            return {
                arr: [...state.arr],
                developers: [...state.developers],
                user: state.user.age ? {
                    id: state.user.id,
                    name: action.payload,
                    age: state.user.age
                } : {
                    id: state.user.id,
                    name: action.payload,
                }
            }

        case ADDAGE:
            return {
                arr: [...state.arr],
                developers: [...state.developers],
                user: {
                    id: state.user.id,
                    name: state.user.name,
                    age: action.payload
                }
            }


    }

}

export const initalvalue = {
    arr: [15, 3856, 89, 8],
    developers: [],
    user: {
        id: 1,
        name: 'Armen'
    }
}

export default reducer