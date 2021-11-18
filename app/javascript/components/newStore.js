import React from "react";

const newStore = (props) =>{
//   return (
//     /* add a home button that goes back to stores list (index)*/
// <div>
//   <nav>
//     <a href="/">Home</a>
//   </nav>
// </div>
//     <div>
// {/* create a form with name field*/}

//       <p>

//       </p>
//     </div>
//   );
// };
  return (
    // CAN I ONLY HAVE ONE DIV IN A RETURN?
    <div>
      <a href="/">Home</a>
      <a href="/">Back to Store List</a>
      <form action="/stores" method="post">
        <p>Store Name</p>
        <input name="store[name]" />
        <button type="submit">Add Store</button>
      </form>
    </div>
  );
};

export default newStore;