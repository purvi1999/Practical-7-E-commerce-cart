const { useState } = React;
function Student() {
  const items = [
    {
      id: 1,
      product: "Stethoscope Heart Mobile Cover",
      img:
        "https://cdn.shopify.com/s/files/1/2488/9568/products/WWHC3759_800x.jpg?v=1631883526",
      qty: 0,
      price: 100
    },
    {
      id: 2,
      product: "Water Multicolor Abstarct Design Iphone 11 Mobile Covers",
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTDZo2j4Wcw17xE5Y-p72OlDocZl0PJqSIC-QtTrxMlNg7WJX7d2iV-sedaux64Eu3Hx30-QF_7wYTkvjOoo0BfVZ8jPbJzFbWZe84V7e5iqqCtyXTKDdPa&usqp=CAE",
      qty: 0,
      price: 140
    },
    {
      id: 3,
      product: "Pastel Botanical Mobile Cover For Samsung A50",
      img: "https://zapvi.in/wp-content/uploads/2021/05/SAMSUNGGALAXYA02S1164-247x371.jpg",
      qty: 0,
      price: 140
    },
    {
      id: 4,
      product: "Paint Style Mobile Cover Shades of brown",
      img: "https://zapvi.in/wp-content/uploads/2021/05/SAMSUNGGALAXYA02S2640.jpg",
      qty: 0,
      price: 200
    },
    {
      id: 5,
      product: "Vivo U1|Mobile Cover",
      img: "https://cdn.shopify.com/s/files/1/2488/9568/products/WWHC3759_800x.jpg?v=1631883526",
      qty: 0,
      price: 290
    }
  ];

  const [Counter, setCounter] = useState([...items]);
  const [TotalQty, setTotalQty] = useState(0);
  const [TotalPrice, setTotalPrice] = useState(0);

  //Add Product in Cart
  var increment = (index) => {
    const newItems = [...Counter];
    newItems[index - 1].qty++;
    setCounter(newItems);
    TotalQtyCal();
    TotalPriceCal();
  };
  //Remove Product From Cart
  var decrement = (index) => {
    const newItems = [...Counter];
    if (newItems[index - 1].qty != 0) {
      newItems[index - 1].qty--;
    }
    setCounter(newItems);
    TotalQtyCal();
    TotalPriceCal();
  };
  //Calcalate Total Qty of Product In Cart
  var TotalQtyCal = () => {
    const temp = Counter.reduce((total_qty, item) => {
      return total_qty + item.qty;
    }, 0);

    setTotalQty(temp);
  };

  //Calcalate Total Price of Product In Cart
  var TotalPriceCal = () => {
    const totalItemPrice = Counter.reduce((total, item) => {
      return total + item.qty * item.price;
    }, 0);

    setTotalPrice(totalItemPrice);
  };

  return (
    <div>
      <div class="header">
        <h2>Mobile Cover Shopping</h2>
      </div>

      {Counter.map((e) => (
        <div className="card-effect">
          <div>
            <h1 className="product_heading">{e.product}</h1>
          </div>
          <img src={e.img} width="100px" height="120px" className="img" />
          <div>
            <h4>
              &nbsp;&nbsp; Price: <span>{e.price}</span>
            </h4>
            <h4>
              &nbsp;&nbsp; Qty : <span>{e.qty}</span>
            </h4>
          </div>

          <button className="btn_add" onClick={() => increment(e.id)}>
            Add to Cart
          </button>
          <button className="btn_remove" onClick={() => decrement(e.id)}>
            Remove From Cart
          </button>
        </div>
      ))}
      <div className="clear"></div>
      <div className="header">
        <h2>
          Total Qty : <span>{TotalQty}</span> &nbsp; &nbsp;Total Price :{" "}
          <span>{TotalPrice}</span>
        </h2>
      </div>
    </div>
  );
}
ReactDOM.render(<Student />, document.getElementById("root"));
