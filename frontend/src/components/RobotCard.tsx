/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { Theme as MaterialUITheme } from '@material-ui/core/styles/createMuiTheme'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Robot } from '../types'
import { priceFormat } from '../utils'

const materialColor: Record<string, string> = {
  wooden: '--burlywood',
  steel: '--cadet-gray',
  fresh: '--pistachio',
  concrete: '--battle-ship-gray',
  granite: '--dodger-blue',
  cotton: '--fresh-rose',
  soft: '--frangipani',
  rubber: '--tree-poppy',
  metal: '--dim-gray',
  frozen: '--denim-blue',
}

const robotCardStyled = (theme: MaterialUITheme, material: string) => css`
  background-color: transparent;

  .MuiGrid-container {
    margin-top: -${theme.spacing(2)}px;
    position: relative;
    color: white;
    font-weight: 700;
    background: var(${materialColor[material] || '--dove-gray'});
    text-transform: uppercase;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  .stat,
  .stat-value {
    position: relative;
    font-size: 16px;
    margin-bottom: ${theme.spacing(1)}px;
    font-weight: 400;
  }

  .MuiGrid-item {
    padding: ${theme.spacing(1)}px;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid white;
    }
  }

  .stat {
    font-weight: 700;
  }

  .MuiCardContent-root {
    text-align: center;
    background: white;
  }

  .MuiCardMedia-root {
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
  }

  .MuiCardMedia-img {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(4px);
    box-shadow: 21px 20px 25px rgb(0 0 0 / 20%);
    border: 2px solid rgba(255, 255, 255, 0.06);
  }

  .MuiCardActions-root {
    display: flex;
    justify-content: center;
    background-color: white;
  }

  .MuiButton-label {
    font-weight: 700;
  }

  .MuiButton-textSizeLarge {
    font-size: 1rem;
  }
`

interface RobotCardProps {
  handleAddToCart: (robot: Robot) => void
  robot: Robot
}

const RobotCard = (props: RobotCardProps): JSX.Element => {
  const { robot, handleAddToCart } = props
  const { name, createdAt, image, material, price, stock } = robot

  return (
    <Card css={(theme) => robotCardStyled(theme, material)}>
      <CardMedia component="img" height="230" image={image} title={name} />
      <Grid container>
        <Grid item xs={4}>
          <Typography className="stat">{priceFormat(price)}</Typography>
          <Typography className="stat-value">price</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="stat">{stock}</Typography>
          <Typography className="stat-value">stock</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className="stat">{material}</Typography>
          <Typography className="stat-value">material</Typography>
        </Grid>
      </Grid>
      <CardContent>
        <div>
          <Typography gutterBottom component="h2" variant="h5">
            {name}
          </Typography>
          <Typography color="textSecondary" component="h3" variant="h6">
            Create At: {createdAt}
          </Typography>
          <Typography color="textSecondary" component="p" variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            tellus quam, lobortis vitae metus sed, faucibus posuere lacus.
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          data-testid="addToCart"
          disabled={robot.stock === 0}
          size="large"
          onClick={() => handleAddToCart(robot)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default RobotCard
