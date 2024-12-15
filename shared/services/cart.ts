import { ApiRoutes, getRemoveCartRoute, getUpdateCartRoute } from "./constants";
import { axiosInstance } from "./axios-instance";
import { CartDTO, CreateCartItemValues } from "./dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
    return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
}

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
    return (await axiosInstance.patch<CartDTO>(getUpdateCartRoute(itemId), { quantity })).data;
}

export const removeCartItem = async (itemId: number): Promise<CartDTO> => {
    return (await axiosInstance.delete<CartDTO>(getRemoveCartRoute(itemId))).data;
}

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
    return (await axiosInstance.post<CartDTO>('/cart', values)).data;
}