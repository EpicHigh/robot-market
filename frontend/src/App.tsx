/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Container, Theme } from '@material-ui/core'
import { useMemo, useState } from 'react'
import {
  SearchBar,
  AlertDialog,
  Drawer,
  Options,
  drawerWidth,
  RobotList,
} from './components'
import useRobot from './hooks/useGetRobot'
import { useCart } from './provider/CartProvider'
import { useDialog } from './provider/DialogProvider'
import { Robot } from './types'

const appCss = (theme: Theme, isItemInCart: boolean) => css`
  height: 100vh;
  background-image: url('./bg.svg'),
    linear-gradient(rgb(26, 26, 26), rgb(26, 26, 26));
  background-size: cover, auto;
  overflow: auto;
  width: calc(100% - ${isItemInCart ? drawerWidth : 0}px);

  .MuiFormControl-root {
    margin-top: ${theme.spacing(2)}px;
    min-width: ${theme.spacing(20)}px;
  }
`

const App = (): JSX.Element => {
  const { robots, materials, addToCart, removeFromCart } = useRobot()
  const { items, robotsCount, totalPrice, isInCart } = useCart()
  const { openDialog, closeDialog, state } = useDialog()
  const [keyword, setKeyword] = useState<string>('')
  const [filtered, setFiltered] = useState<string>('')

  const filteredRobots = useMemo(
    () =>
      robots.filter((robot) => {
        if (keyword && filtered) {
          return robot.name.includes(keyword) && robot.material === filtered
        }
        if (keyword) {
          return robot.name.includes(keyword)
        }
        if (filtered) {
          return robot.material === filtered
        }
        return true
      }),
    [filtered, keyword, robots]
  )

  const handleAddToCart = (index: number) => (robot: Robot): void => {
    if (items.length === 5 && isInCart(robot.id)) {
      return addToCart(robot, index)
    }
    if (items.length === 5) {
      return openDialog('You can add only 5 different robots.')
    }
    return addToCart(robot, index)
  }

  return (
    <div css={(theme) => appCss(theme, items.length !== 0)}>
      <AlertDialog dialog={state} handleOnClose={closeDialog} />
      <Drawer
        addToCart={addToCart}
        open={items.length !== 0}
        removeFromCart={removeFromCart}
        robots={items}
        robotsCount={robotsCount}
        totalPrice={totalPrice}
      />
      <Container>
        <h1>Robot Market</h1>
        <SearchBar
          handleOnClear={() => setKeyword('')}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Options
          materials={[...materials]}
          value={filtered}
          onChange={(e) => setFiltered(e.target.value as string)}
        />
        <RobotList handleAddToCart={handleAddToCart} robots={filteredRobots} />
      </Container>
    </div>
  )
}

export default App
