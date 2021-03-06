import React from "react";
//REDUX
import store from "../redux/store";
import { deleteProduct, carrito } from "../redux/shop/actions";

//COMP
import CartTotal from "./cartTotal"

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: "left",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 10,
    width: 10,
  },
}));


export default function Cart() {
    //REDUX
    const { cart } = store.getState().shopReducer;
    //MUI 
    const classes = useStyles();


    return (
        
      <div className="cart">
        {cart.map((element, index) => {
          return (
            <Card key={index} className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {element.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {element.price}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton
                  onClick={() => store.dispatch(deleteProduct(element.id))}>
                    -
                  </IconButton>
                  <IconButton>
                    {element.quantity}
                  </IconButton>
                  <IconButton
                  onClick={() => store.dispatch(carrito(element.id))}>
                     + 
                  </IconButton>
                </div>
              </div>
              <CardMedia
                className={classes.cover}
                image={element.imgUrl}
                title="Live from space album cover"
              />
            </Card>
            //<div key={element.id}>
            //  <img src={element.imgUrl} alt={element.name} />
            //  <span>{element.name}</span>
            //  <span>{element.quantity}</span>
            //  <span onClick={() => store.dispatch(deleteProduct(index))}>x</span>
            //</div>
          );
        })}
        <div>
            {cart.length === 0 ? 
            "Tu carrito esta vacio " : 
            <CartTotal cart={cart}/>
            }
        </div>
      </div>
    );
}
