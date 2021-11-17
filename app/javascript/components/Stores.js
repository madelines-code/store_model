import React from "react";

const Stores = (props) => {
  const render_store = () =>{
    return props.stores.map((store) => {
      return (
        <div>
          <p>
            {store.name}
          </p>
        </div>
      )
    });
  };

  return (
    <div>
      {render_store()}
    </div>
  );
};

export default Stores;