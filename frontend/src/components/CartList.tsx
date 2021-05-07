/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import { Theme as MaterialUITheme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { FC } from 'react'
import { CartRobot, Robot } from '../types'
import { priceFormat } from '../utils'

const cartStyled = (theme: MaterialUITheme) => css`
  .MuiListItemAvatar-root {
    min-width: 0;
  }

  .MuiListItemText-root {
    margin-left: ${theme.spacing(2)}px;
    margin-right: ${theme.spacing(2)}px;
  }

  .MuiTypography-body1:not(:last-child) {
    margin-right: 0;
  }

  .name {
    font-size: 0.75rem;
  }
`

interface CartListProps {
  robot: CartRobot
  addToCart: (robot: Robot, index: number) => void
  removeFromCart: (robot: Robot, index: number) => void
}

const CartList: FC<CartListProps> = (props) => {
  const { robot, addToCart, removeFromCart } = props
  const { index, isOutOfStock, ...rest } = robot

  return (
    <List css={cartStyled}>
      <ListItem>
        <ListItemAvatar>
          <Badge badgeContent={robot.stock} color="primary" overlap="circle">
            <Avatar src={robot.image} />
          </Badge>
        </ListItemAvatar>
        <ListItemText
          primary={
            <>
              <Typography align="center" className="name">
                {robot.name}
              </Typography>
              <Typography align="center">{priceFormat(robot.price)}</Typography>
            </>
          }
        />
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => removeFromCart({ ...rest }, index ?? -1)}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            data-testid="increase"
            disabled={isOutOfStock}
            onClick={() => addToCart({ ...rest }, index ?? -1)}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </ListItem>
    </List>
  )
}

export default CartList
