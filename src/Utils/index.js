import toast from "react-hot-toast";

//adding
const addCart = (detailsData) => {
    const cart = getCart()
    cart.push(detailsData)
    localStorage.setItem('cart', JSON.stringify(cart))
    // console.log(cart)
    toast.success('Successfully Added to Cart!');
}

const addWishlist = (detailsData) => {
  const wishlist = getWishlist()
  wishlist.push(detailsData)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
  toast.success('Successfully Added to Wishlist!');
}



//getting
const getCart = () => {
  const allCart = localStorage.getItem('cart')
  if(allCart) {
    const cart = JSON.parse(allCart)
    return cart
  }
  else {
    return []
  }
}

const getWishlist = () => {
  const allWishlist = localStorage.getItem('wishlist')
  if(allWishlist) {
    const wishlist = JSON.parse(allWishlist)
    return wishlist
  }
  else {
    return []
  }
}


//removing
const removingCart = (detailsDataId) => {
  const cart = getCart()
  const remainingCart = cart.filter(remaining => remaining.product_id != detailsDataId)
  localStorage.setItem('cart', JSON.stringify(remainingCart))
}

const removingWishlist = (detailsDataId) => {
  const wishlist = getWishlist()
  const remainingWishlist = wishlist.filter(removingWishlist => removingWishlist.product_id != detailsDataId)
  localStorage.setItem('wishlist', JSON.stringify(remainingWishlist))
}


//deleting data 
const deleting = () => {
  localStorage.removeItem('cart', 'wishlist')
  
}





export {addCart, getCart, addWishlist, getWishlist, removingCart, removingWishlist, deleting}