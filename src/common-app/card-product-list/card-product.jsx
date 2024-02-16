import './card-product.styles.css';

export const CardProduct = ({item}) => {

    return (
      <div className="containerCard">
        <div className="contentCard">
          <h3 className="boxTxt">
            <span className="spanKey">Name:</span>
            <span className="spanValue">{item.name}</span>
          </h3>
          <h3 className="boxTxt">
            <span className="spanKey">Code:</span>
            <span className="spanValue">{item.name}</span>
          </h3>
          <h3 className="boxTxt">
            <span className="spanKey">Quantity:</span>
            <span className="spanValue">{item.name}</span>
          </h3>
          <h3 className="boxTxt">
            <span className="spanKey">Price:</span>
            <span className="spanValue">{item.name}</span>
          </h3>
          <h3 className="boxTxt">
            <span className="spanKey">Company:</span>
            <span className="spanValue">{item.company}</span>
          </h3>
          <div className="containerBtns">
            <div className="boxBtnUpdate">
              <button>Update</button>
            </div>
            <div className="boxBtnDelete">
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
}