import { useDispatch } from "react-redux"
import { bagSliceActions } from "../store/bagSlice";
import { useSelector } from "react-redux";

export default function HomeItem({item}){
 const bagItems= useSelector((store)=>store.bag);
 const elementsFound=bagItems.indexOf(item.id)>=0;
 console.log(item.id,elementsFound);
  const dispatch=  useDispatch();

    const handleAddItem=()=>{
        dispatch(bagSliceActions.addToBag(item.id));
    }
    const handleRemoveItem=()=>{
        dispatch(bagSliceActions.removeFromBag(item.id));
    }
    return<>
     <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
     
      
      {elementsFound ?  ( <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleRemoveItem}
        >
           Remove from bag
        </button>): (<button className="btn-add-bag" onClick={handleAddItem}>Add to Bag</button>)}
    
    </div>`
  </>
}
