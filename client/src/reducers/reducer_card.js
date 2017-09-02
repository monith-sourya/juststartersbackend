export default function (state = null, action) {
  switch (action.type) {
    case 'CARD_SELECTED':
      console.log("Reducer: Card Selected")
      return action.payload
  }
  return state
}