/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Badge from '@material-ui/core/Badge'
import Divider from '@material-ui/core/Divider'
import MuiDrawer from '@material-ui/core/Drawer'
import Grid from '@material-ui/core/Grid'
import { Theme as MaterialUITheme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { FC } from 'react'
import { CartRobot, Robot } from '../types'
import { priceFormat } from '../utils'
import CartList from './CartList'

export const drawerWidth = 320

const drawerStyled = (theme: MaterialUITheme) => css`
  .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }

  .shopping-cart {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .summary-container {
    margin: ${theme.spacing(2)}px 0;
  }

  .amount {
    color: var(--cornflower-blue);
  }

  .amount-container {
    display: flex;
    justify-content: center;
  }

  .MuiTypography-body1 {
    &:not(:last-child) {
      margin-right: ${theme.spacing(1)}px;
    }
  }
`

interface DrawerProps {
  open: boolean
  robots: CartRobot[]
  robotsCount: number
  addToCart: (robot: Robot, index: number) => void
  removeFromCart: (robot: Robot, index: number) => void
  totalPrice: number
}

const Drawer: FC<DrawerProps> = (props) => {
  const {
    open,
    robots,
    addToCart,
    removeFromCart,
    robotsCount,
    totalPrice,
  } = props

  return (
    <MuiDrawer
      anchor="right"
      css={drawerStyled}
      open={open}
      variant="persistent"
    >
      <Grid container className="summary-container" justify="space-between">
        <Grid item className="shopping-cart" xs={4}>
          <Badge
            badgeContent={robotsCount}
            color="primary"
            data-testid="robotsCount"
          >
            <ShoppingCartIcon />
          </Badge>
        </Grid>
        <Grid item className="amount-container" xs={8}>
          <Typography display="inline">Total:</Typography>
          <Typography
            className="amount"
            data-testid="totalPrice"
            display="inline"
          >
            {priceFormat(totalPrice)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      {robots.map((robot) => (
        <CartList
          key={robot.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          robot={robot}
        />
      ))}
    </MuiDrawer>
  )
}

export default Drawer
