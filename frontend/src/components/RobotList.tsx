/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Grid, Theme } from '@material-ui/core'
import { FC } from 'react'
import { Robot } from '../types'
import RobotCard from './RobotCard'

const robotListStyled = (theme: Theme) => css`
  margin-top: ${theme.spacing(4)}px;
`

interface RobotListProps {
  robots: Robot[]
  handleAddToCart: (index: number) => (robot: Robot) => void
}

const RobotList: FC<RobotListProps> = (props) => {
  const { robots, handleAddToCart } = props

  return (
    <Grid container css={robotListStyled} spacing={3}>
      {robots.map((robot, index) => (
        <Grid key={robot.id} item lg={3} md={4} sm={6} xs={12}>
          <RobotCard handleAddToCart={handleAddToCart(index)} robot={robot} />
        </Grid>
      ))}
    </Grid>
  )
}

export default RobotList
