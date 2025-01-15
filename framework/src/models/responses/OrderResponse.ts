import { OrderStatus } from "../request/OrderModel";

export interface OrderResponse {
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: OrderStatus;
    complete: boolean;
}
