import React from "react";
import useStyles from "./styles";
import CartItems from "./CartItems/CartItems";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant="subtitle1">
      No Items Yet
      <Link className={classes.link} to="/">
        , Click Here To Add
      </Link>{" "}
      !...........
    </Typography>
  );
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItems
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Total : {cart.subtotal.formatted_with_symbol}
        </Typography>

        <div>
          <Button
            className={classes.emptyButton}
            onClick={handleEmptyCart}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkout}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            CheckOut
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return "Loading.....";
  return (
    <Container>
      <div className={classes.toolbar}></div>
      <Typography className={classes.title} variant="h4" gutterBottom>
        Shopping Cart...
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
