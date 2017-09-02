export function selectCard(card) {
  console.log(card)
  return ({
    type: 'CARD_SELECTED',
    payload: card
  })
}

export function addToCart(card) {
  console.log(card)
  return ({
    type: 'ADD_TO_CART',
    payload: card
  })
}