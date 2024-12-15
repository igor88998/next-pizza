export enum ApiRoutes {
    SEARCH_PRODUCTS = 'products/search',
    INGREDIENTS = 'ingredients',
    CART = 'cart',
}

export const getUpdateCartRoute = (itemId: string | number): string => {
    return `/cart/` + itemId;
}

export const getRemoveCartRoute = (itemId: string | number): string => {
    return `/cart/` + itemId;
}

