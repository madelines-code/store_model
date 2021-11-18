import React from "react";

const Stores = (props) => {
  const render_store = () =>{
    
    return props.stores.map((store) => {
      return (
        <div>
          <p>
            {store.name}
          </p>
          
          <button href={`/stores/${store.id}` className = "buttons"}>View Store</button>
          {/* COULDN'T USE THE CODE BLOCK BELOW WITH PROPS.STORE.ID instead of store.id BECAUSE IT'S ALREADY INSIDE THE FUNCTION WHERE PROPS IS CALLED */}
          <button href = {`/stores/${store.id}`} data-method = "delete">Delete Store</button>
        </div>
      )
    });
  };

  return (
    <div>
      <a href="/stores/new">Add New Store</a>
      {render_store()}
    </div>
  );
};

export default Stores;