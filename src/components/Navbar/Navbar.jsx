import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const Navbar = () => {

    const cartItems = useSelector((state)=> state.cart)
    const cartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

    return (
        <AppBar sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }} position='fixed' >
            <StyledToolbar>
                <Typography variant='h4'>
                    UNI Resto Cafe
                </Typography>

                <Box sx={{display:"flex"}}>
                    <Typography sx={{marginTop:"10px"}}>My Orders</Typography>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartCount} color="secondary">
                        <ShoppingCartIcon sx={{color:"white"}} />
                    </StyledBadge>
                </IconButton>
                </Box>
            </StyledToolbar>

        </AppBar>
    );
};

export default Navbar;
