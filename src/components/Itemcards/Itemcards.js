import './Itemcards.css';

function Itemcards(props) {
  return (
    <div className="itemplacecard">
      <img className="item_img" src= {props.img} alt="" />
      <div className="item_title">{props.title}</div>
      <div className="item_price">Rs {props.price}</div>
    </div>
  );
}

export default Itemcards;
