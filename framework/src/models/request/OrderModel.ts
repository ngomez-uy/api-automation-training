export enum OrderStatus {
    Placed = "placed",
    Approved = "approved",
    Delivered = "delivered"
}

export interface OrderModel {
    id: number | undefined;
    petId: number | undefined;
    quantity: number | undefined;
    shipDate: string | undefined;
    status: OrderStatus | undefined;
    complete: boolean | undefined;
}