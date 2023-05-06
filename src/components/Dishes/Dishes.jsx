import React, { useState } from "react";
import { Button, Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../state";

const Dishes = (props) => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    // const [cartCount, setCartCount] = useState(0)
    const cartItems = useSelector((state) => state.itemIndex)

    const dispatch = useDispatch()

    const addItemHandler = (item) => {
        dispatch(addItem(item));
        setCount((prevCount) => prevCount + 1);
      };
      
      const removeItemHandler = (item) => {
        dispatch(removeItem(item));
        setCount((prevCount) => prevCount - 1);
        setText("Customizations available");
      };
    console.log(count);

    return (
        <Box sx={{ width: "100%" }}>
            {/* {console.log("dd",dishes)} */}
            {props.dishes === undefined
                ? ""
                : props.dishes.map((item, index) => {
                    return (
                        <Container mx="auto" sx={{ display: "flex", justifyContent: "space-between", marginTop: "4rem", borderBottom: '1px solid #ccc' }} key={index}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <Typography
                                    variant="h5"
                                    sx={{ mb: 1 }}
                                >
                                    {item?.dish_name}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {item?.dish_currency} {item?.dish_price}
                                </Typography>
                                <Typography variant="body1" color="grey" sx={{ alignItems: 'flex-start' }}>
                                    {item?.dish_description}
                                </Typography>
                                {item.dish_Availability ? (
                                    <Box>
                                        <Box sx={{
                                            display: 'flex',
                                            backgroundColor: 'green',
                                            borderRadius: '1.6rem',
                                            my: 3
                                        }}>
                                            <Button
                                                sx={{ color: 'white', '&:hover': { backgroundColor: "#66bb6a", borderRadius: '1.6rem' } }}
                                                onClick={() => removeItemHandler(item)}
                                            >
                                                -
                                            </Button>
                                            {/* <Box sx={{ color: 'white', textAlign: 'center', marginTop: "10px" }}>{item.count}</Box> */}
                                            <Box sx={{ color: 'white', textAlign: 'center', marginTop: "10px" }}>{count}</Box>
                                            <Button
                                                sx={{ color: 'white', '&:hover': { backgroundColor: "#66bb6a", borderRadius: '1.6rem' } }}
                                                onClick={() => addItemHandler(item)}
                                            >
                                                +
                                            </Button>
                                        </Box>
                                        {item.dish_Availability ? (
                                            <Typography variant="body1" sx={{ color: 'red', fontFamily: 'serif', my: '3' }}>{text}</Typography>
                                        ) : (
                                            ''
                                        )}
                                    </Box>
                                ) : (
                                    <Typography
                                        variant="body1"
                                        color="error"
                                        sx={{ mt: 1, fontWeight: "bold" }}
                                    >
                                        Not Available
                                    </Typography>
                                )}
                            </Box>
                            <Box sx={{ display: "flex" }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ mx: 2, marginTop: "2.5rem", marginRight: "4rem" }}
                                >
                                    {item?.dish_calories} Calories
                                </Typography>
                                <Box>
                                    <img width="100px" height="100px" src={item?.dish_image} alt={item?.dish_name} style={{ borderRadius: "0.5rem" }} />
                                </Box>
                            </Box>

                        </Container>
                    );
                })}

        </Box>
    );
};

export default Dishes


