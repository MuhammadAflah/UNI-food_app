import React, { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Dishes from "../Dishes/Dishes";

const DishCategory = () => {
    const settings = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    focusOnSelect: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    focusOnSelect: true,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    focusOnSelect: true,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [menuList, setMenuList] = useState([]);
    const [dishes, setDishes] = useState([]);

    const handleClick = (cat, dishes) => {
        console.log(dishes);
        setDishes(dishes);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
                );
                setMenuList(response.data[0]?.table_menu_list);
                setDishes(response.data[0]?.table_menu_list[0]?.category_dishes);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        // <Box  sx={{ width: "100%", marginTop:"1rem" }}>
        //   <Box sx={{ maxWidth:"100%"}}>
        <Box elevation={3} sx={{ width: "100%", height: 10, marginTop:"5rem" }}>
            <Box sx={{ mx: "auto", px: { sm: 6, lg: 8 }, my: 5 }}>
                <Slider {...settings}>
                    {menuList.map((item, index) => (
                        <Box  key={index}>
                            <Typography
                                onClick={() =>
                                    handleClick(item.menu_category, item.category_dishes)
                                }
                                variant="h5"
                                sx={{
                                    borderBottom: item.category_dishes === dishes ? "2px solid red" : "",
                                    color: item.category_dishes === dishes ? "red" : "inherit"
                                }}
                            >
                                {item?.menu_category}
                            </Typography>
                        </Box>
                    ))}
                </Slider>
                <Divider />
                <Dishes dishes={dishes ? dishes : menuList} />
            </Box>
        </Box>
    );
};

export default DishCategory;