import { toCapital } from "./helpers/toCapital";
import Item from "./Item";


const ItemList = ({ productos,titulo }) => {
    console.log(productos);
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            <h1 className="w-full text-center mb-4">{toCapital(titulo)}</h1>
            {productos.map((prod) => (
                <Item producto={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default ItemList;
