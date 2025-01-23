export enum OrderStatus {
    Placed = "placed",
    Approved = "approved",
    Delivered = "delivered",
    Invalid = "invalid"
}

export interface OrderModel {
    id: number | undefined;
    petId: number | undefined;
    quantity: number | string | undefined; // This should be a number, but we are testing for invalid data
    shipDate: string | undefined;
    status: OrderStatus | undefined;
    complete: boolean | undefined;
}