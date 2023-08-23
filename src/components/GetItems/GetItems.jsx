
import './GetItems.css';

function GetItems({ list, toggleItem, removeItem }) {

    return (
        <div>
            {list.map(item => (
                <div key={item.id} className="item-container">
                    <div className="item-info">
                        <p>{item.name}</p>
                        <p>
                            {item.quantity} {item.unit}
                        </p>
                        {item.purchased ? (
                            <p>Bought</p>
                        ) : (
                            <button onClick={(e) => toggleItem(item.id)}>Buy</button>
                        )}
                        {/* <button onClick={() => toggleItem(item.id)}>{JSON.stringify(item.purchased)}</button> */}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetItems;