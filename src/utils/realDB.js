/*
store, remove and get wishlist from mogodb
respect to the user
*/
import axios from "../AxiosInstance/AxiosInstance";

const getwishlistRealdb = (user) => {
    if (user) {
        try {
            axios
                .post(`/getWishlist?email=${user}`, { user: user })
                .then((res) => {
                    if (res) {
                        console.log(res.data)
                        const result = res.data
                        if (result?.user === user) {
                            localStorage.setItem("wishlist-cart", JSON.stringify(result.wishlistCart));
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    return;
                });
        } catch (error) {
            console.error(error);
        }
    }
}

const AddwishlistRealdb = (wishlistCart, user) => {
    if (user) {
        try {
            axios
                .post(`/addWishlist?email=${user?.email}`, { wishlistCart, user: user?.email })
                .then((res) => {
                    if (res) {
                        return;
                    }
                })
                .catch((err) => {
                    console.error(err);
                    return;
                });
        } catch (error) {
            console.error(error);
        }
    }
}

const removewishlitRealdb = (wishlistCart, user) => {
    if (user) {
        try {
            axios
                .post(`/removeWishlist?email=${user?.email}`, { wishlistCart, user: user?.email })
                .then((res) => {
                    if (res) {
                        return;
                    }
                })
                .catch((err) => {
                    console.error(err);
                    return;
                });
        } catch (error) {
            console.error(error);
        }
    }
}

export {
    getwishlistRealdb,
    AddwishlistRealdb,
    removewishlitRealdb
}