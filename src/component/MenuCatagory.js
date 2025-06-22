import ItemList from "./ItemList";

const MenuCatogories = ({ category,showMenu , setShowIndex}) =>{
    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div className="menu-categories">
        
           
           <div key={category?.card?.card?.title}  className="w-6/12 m-2 h-auto mx-auto rounded-lg shadow-md">
           <div
                key={category?.card?.card?.title}
                className="category-header flex justify-between items-center cursor-pointer hover:bg-gray-100 p-8 rounded-lg "
                onClick={handleClick}
            >
               <span>{category?.card?.card?.title}({category?.card?.card?.itemCards.length} items)</span> 
              
               <span className="text-gray-500"> ⬇️</span>
                
               
            </div>
              {/* {category?.card?.card?.itemCards.map((item) => (
                <li key={item?.card?.info.id} className="mb-2">
                    <span className="font-bold">{item?.card?.info.name}</span> - 
                    <span className="text-gray-600"> {item?.card?.info.price / 100} ₹</span>
                </li>
                ))} */}
               { showMenu && <ItemList items={category?.card?.card?.itemCards} />}
            </div>

       
        </div>
    );
}
export default MenuCatogories;