import { AddwishlistRealdb, removewishlitRealdb } from "./realDB";


// use local storage to manage cart data
/* const addToDb = (id) => {
  const shoppingCart = getStoredCart();

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}; */

// Minimize the code
const addToDb = (id) => {
  const shoppingCart = getStoredCart();

  // if quantity available increase otherwise add 1 minimum

  if (shoppingCart[id]) {
    shoppingCart[id]++;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

/**
 * Get the stored cart
 * If quantity is true then reduce by one
 * If quantity is false remove the cart from storage
 * Upload the updated cart
 * */
const reduceQuantityFromDb = (id) => {
  const shoppingCart = getStoredCart();

  // reduce quantity
  if (shoppingCart[id]) {
    shoppingCart[id]--;
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
  if (shoppingCart[id] === 0) {
    removeFromDb(id);
  }
};

/* const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
}; */

const removeFromDb = (id) => {
  const shoppingCart = getStoredCart();

  // Check if the id is in the shopping cart then delete the id and upload the updated cart into storage
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  return shoppingCart;
};

/***************************************************************** *
Local Storage for wishlist
***************************************************************** */

const addToWishlistDb = (id, user) => {
  const wishlistCart = getStoredWishlist();

  // if quantity available increase otherwise add 1 minimum

  if (!wishlistCart[id]) {
    wishlistCart[id] = 1;
  }
  localStorage.setItem("wishlist-cart", JSON.stringify(wishlistCart));
  AddwishlistRealdb(wishlistCart, user)
};

/**
 * Get the stored cart
 * If quantity is true then reduce by one
 * If quantity is false remove the cart from storage
 * Upload the updated cart
 * */
const reduceQuantityFromWishlistDb = (id) => {
  const wishlistCart = getStoredWishlist();

  // reduce quantity
  if (wishlistCart[id]) {
    wishlistCart[id]--;
    localStorage.setItem("wishlist-cart", JSON.stringify(wishlistCart));
  }
  if (wishlistCart[id] === 0) {
    removeFromWishlistDb(id);
  }
};

const removeFromWishlistDb = (id, user) => {
  const wishlistCart = getStoredWishlist();

  // Check if the id is in the shopping cart then delete the id and upload the updated cart into storage
  if (id in wishlistCart) {
    delete wishlistCart[id];
    localStorage.setItem("wishlist-cart", JSON.stringify(wishlistCart));
    removewishlitRealdb(wishlistCart, user)
  }
};

const deleteWishlistCart = () => {
  localStorage.removeItem("wishlist-cart");
};

const getStoredWishlist = () => {
  let wishlistCart = {};
  const storedCart = localStorage.getItem("wishlist-cart");
  if (storedCart) {
    wishlistCart = JSON.parse(storedCart);
  }

  return wishlistCart;
};
/********************************************************
 Local storage for Crystal
 ********************************************************/

const addToCrystalDb = (id) => {
  const CrystalCart = getStoredCrystalCart();

  // if quantity available increase otherwise add 1 minimum

  if (CrystalCart[id]) {
    CrystalCart[id]++;
  } else {
    CrystalCart[id] = 1;
  }
  localStorage.setItem("crystal-cart", JSON.stringify(CrystalCart));
};

const addNewCrystalDb = (id) => {
  var CrystalCart = getStoredCrystalCart();
  // if quantity available increase otherwise add 1 minimum
  if (CrystalCart) {
    deleteCrystalCart();
    CrystalCart = getStoredCrystalCart();
    CrystalCart[id] = 1;
  } else {
    CrystalCart[id] = 1;
  }
  localStorage.setItem("crystal-cart", JSON.stringify(CrystalCart));
};

const reduceQuantityFromCrystalDb = (id) => {
  const CrystalCart = getStoredCrystalCart();

  // reduce quantity
  if (CrystalCart[id]) {
    CrystalCart[id]--;
    localStorage.setItem("crystal-cart", JSON.stringify(CrystalCart));
  }
  if (CrystalCart[id] === 0) {
    removeFromCrystalDb(id);
  }
};

const removeFromCrystalDb = (id) => {
  const CrystalCart = getStoredCrystalCart();

  // Check if the id is in the shopping cart then delete the id and upload the updated cart into storage
  if (id in CrystalCart) {
    delete CrystalCart[id];
    localStorage.setItem("crystal-cart", JSON.stringify(CrystalCart));
  }
};

const deleteCrystalCart = () => {
  localStorage.removeItem("crystal-cart");
};

const getStoredCrystalCart = () => {
  let CrystalCart = {};
  const storedCrystal = localStorage.getItem("crystal-cart");
  if (storedCrystal) {
    CrystalCart = JSON.parse(storedCrystal);
  }

  return CrystalCart;
};

export {
  addToDb,
  removeFromDb,
  deleteShoppingCart,
  getStoredCart,
  reduceQuantityFromDb,
  addToWishlistDb,
  deleteWishlistCart,
  getStoredWishlist,
  reduceQuantityFromWishlistDb,
  removeFromWishlistDb,
  addToCrystalDb,
  reduceQuantityFromCrystalDb,
  removeFromCrystalDb,
  deleteCrystalCart,
  getStoredCrystalCart,
  addNewCrystalDb
};
