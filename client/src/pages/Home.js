import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Home = () => {

  const documentWidth = document.body.clientWidth;
  const documentWidthString = documentWidth.toString() + 'px';
  const fullWidth = {
    width: '3000px'
  }

  return (
    <div className="container border border-success mx-0 px-0 justify-content-left home-box" style={fullWidth}>
      {/*interior divs can be moved into componants at a later date */}
      {/* <CategoryMenu />
      <ProductList />
      <Cart /> */}
      <div className="row mx-0 px-0">
        <div className="col-lg-3 border border-warning text-white">
          <h1>left column {documentWidthString}</h1>
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
