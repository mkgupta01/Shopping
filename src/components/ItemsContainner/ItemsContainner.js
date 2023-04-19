import Itemcards from "../Itemcards/Itemcards";
import "./ItemsContainner.css";

function ItemsContainner(props) {
  const lists = props.items;
  return (
    <div className="main">
      {lists.map((e) => {
        return (
          <Itemcards 
            img={e.img} 
            title={e.title} 
            price={e.price}
            />
        );
      })}
    </div>
  );
}

export default ItemsContainner;
