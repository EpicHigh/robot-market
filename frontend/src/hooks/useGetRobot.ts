import produce from 'immer'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import getApi from '../api/config'
import GET_ROBOT_ENDPOINT from '../api/endpoints'
import { useCart } from '../provider/CartProvider'
import { useDialog } from '../provider/DialogProvider'
import { Robot, RobotResponse, UseRobot } from '../types'
import { dateFormat } from '../utils'
import useMaterial from './useMaterial'

const useRobot = (): UseRobot => {
  const [robots, setRobot] = useState<Robot[]>([])
  const [materials, { add }] = useMaterial<string>(new Set(['']))
  const { addRobot, removeRobot } = useCart()
  const { openDialog } = useDialog()

  const getRobot = async () => {
    try {
      const response = await getApi<RobotResponse>(GET_ROBOT_ENDPOINT)
      if (typeof response !== 'string') {
        const transformResponse = response.data.map((item) => {
          const material = item.material.toLowerCase()
          add(material)
          return {
            ...item,
            id: v4(),
            material,
            stock: +item.stock,
            createdAt: dateFormat(new Date(item.createdAt)),
            price: +item.price,
          }
        })
        console.log(transformResponse)
        setRobot(transformResponse)
      } else {
        openDialog(response)
      }
    } catch (e) {
      openDialog(e.message)
    }
  }

  const addToCart = (robot: Robot, index: number) => {
    if (index !== -1) {
      const nextState = produce(robots, (draftState) => {
        draftState[index].stock -= 1
      })
      addRobot({ ...robot, index, isOutOfStock: nextState[index].stock === 0 })
      setRobot(nextState)
    }
  }

  const removeFromCart = (robot: Robot, index: number) => {
    if (index !== -1) {
      const nextState = produce(robots, (draftState) => {
        draftState[index].stock += 1
      })
      removeRobot({
        ...robot,
        index,
        isOutOfStock: nextState[index].stock === 0,
      })
      setRobot(nextState)
    }
  }

  useEffect(() => {
    void getRobot()
  }, [])

  return { robots, materials, addToCart, removeFromCart }
}

export default useRobot
