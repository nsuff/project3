import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container-fluid border border-success">
      {/*interior divs can be moved into componants at a later date */}
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
      <div>
        <div className="col-lg-3 border border-warning text-white">
          <h1>left column</h1>
        </div>
        <div className="col-lg-6 border border-danger text-white">
          <h1>middle column</h1>
        </div>
        <div className="col-lg-3 border border-warning text-white">
          <h1>right column</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
