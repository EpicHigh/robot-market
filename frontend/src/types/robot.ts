export interface Robot {
  id: string
  name: string
  image: string
  price: number
  stock: number
  createdAt: string
  material: string
}

export interface Response {
  id: string
  name: string
  image: string
  price: string
  stock: string
  createdAt: string
  material: string
}

export interface RobotResponse {
  data: Response[]
}

export interface UseRobot {
  robots: Robot[]
  materials: Set<string>
  addToCart: (robot: Robot, index: number) => void
  removeFromCart: (robot: Robot, index: number) => void
}
