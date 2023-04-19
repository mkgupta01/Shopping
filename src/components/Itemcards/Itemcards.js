import Itemview from '../Itemview/Itemview';
import './Itemcards.css';



function Itemcards(props) {

  function clickHandler(){
    return (
      <Itemview />
    )
  }

  return (
    <div className="itemplacecard" onClick={ clickHandler } key= {props.id}>
      <img className="item_img" src= {props.img} alt="" />
      <div className="item_title">{props.title}</div>
      <div className="item_price">Rs {props.price}</div>
    </div>
  );
}

export default Itemcards;
