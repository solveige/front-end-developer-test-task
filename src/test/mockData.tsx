import { IPrice } from '../types'

export const priceModel: IPrice[] = [
  {
    price: 500,
    type: 500,
    id: 1,
  },
  {
    price: 150,
    type: 100,
    id: 2,
  },
  {
    price: 90,
    type: 50,
    id: 3,
  },
]


const getLong = (number = 100000) => Math.floor(Math.random() * number)

export const priceModelWithLongNumber: IPrice[] = [
  {
    price: getLong(),
    type: getLong(),
    id: 1,
  },
  {
    price: getLong(),
    type: getLong(),
    id: 2,
  },
  {
    price: getLong(),
    type: getLong(),
    id: 3,
  },
]