import React from "react";

const Stores = (props) => {
  const render_store = () =>{
    
    return props.stores.map((store) => {
      return (
        <div className = 'store_container'>
          <h1>{store.name}</h1>
          <p>Store ID: {store.id}</p>
          
          <a href={`/stores/${store.id}`}>View Store</a>
          {/* COULDN'T USE THE CODE BLOCK BELOW WITH PROPS.STORE.ID instead of store.id BECAUSE IT'S ALREADY INSIDE THE FUNCTION WHERE PROPS IS CALLED */}
          {/* when I tried to change a tag to button the button didn't work. why?*/}
          {/* <button href = {`/stores/${store.id}`} data-method = "delete">Delete Store</button> */}
          <a href={`/stores/${store.id}/items`}>What Can I Buy?</a>
          <a href={`/stores/${store.id}/edit`}>Edit</a>
          <a href = {`/stores/${store.id}`} data-method = "delete">Delete Store</a>
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