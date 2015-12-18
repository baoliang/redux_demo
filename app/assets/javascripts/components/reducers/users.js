import { REG_USER, LOGIN_USER} from '../constants/ActionTypes'


let RegUser = ({email, password}) => {

  return {
    email: email
  }
}

let LoginUser = ({email, password}, state) => {
  let date = new Date()
  return state.map(item =>
      item.id === id ?
        Object.assign({}, item, other, {
          updateTime: date.getTime(),
          displayTime: date.toLocaleString()
        }) :
        item
  )
}



export default (state = [], action) => {
  switch (action.type) {
    case REG_USER:
      return [RegUser(action), ...state]

    case LOGIN_USER:
      return [RegUser(action), ...state]


    default:
      return state
  }
}