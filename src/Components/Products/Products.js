import React from "react";
import { Grid } from "@material-ui/core";

import LinearProgress from "@material-ui/core/LinearProgress";

import useStyles from "./styles";

import Product from "./Product/Product";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.length > 1 ? (
          products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))
        ) : (
          <>
            <img
              src="https://media1.tenor.com/images/3a0c9909b542717ce9f651d07c4d4592/tenor.gif?itemid=8985245"
              className={classes.loading}
            />
          </>
        )}
      </Grid>
    </main>
  );
};

export default Products;
