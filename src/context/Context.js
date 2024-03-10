import  { createContext ,useContext,useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer ,productReducer} from './Reducers';
import pcb from "./../assets/pcb_design.jpg";

const Cart = createContext();
const Context = ({children}) => {
    const products = [...Array(10)].map(()=>({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price({max:1000}),
        image: faker.image.avatar(),
        inStock: faker.number.int({max:5}),
        fastDelivery: faker.datatype.boolean(),
        material : faker.helpers.arrayElement(['FR4','FR3']),
        solderMask : faker.helpers.arrayElement(['sided','Black']),
        legendType: faker.helpers.arrayElement(['sided','Black']),
        surfaceFinish: faker.helpers.arrayElement(['ENIG','BNIG']),

    }));
    const quoteDetials = {
        quoteNo : "Q124323",
        part : "124-FDGDGD",
        date : "6/5/2024",
        layer :'4',
        minHole : '3',
        minTrace : '3',
        image : pcb,
    };
   const [state, dispatch] = useReducer(cartReducer,{
    products: products,
    quoteDetials: quoteDetials,
    cart:[]
   });
   const [productState, productDispatch] = useReducer(productReducer,{
    byStock:false,
    byFastDelivery: false,
    searchQuery:"",
    byMaterial :'',
    bySolderMask :'',
    byLegendType :'',
    bySurfaceFinish : '',
   })
  return <Cart.Provider value={{state, dispatch,productState,productDispatch}}>{children}</Cart.Provider>;
};


export const CartState =() =>{
    return useContext(Cart)
}
export default Context;

