import * as chai from "chai";

import { OrderModel, OrderStatus } from "../models/request/OrderModel.js";
import { StoreService } from "../models/services/StoreService.js";
import { OrderResponse } from "../models/responses/OrderResponse.js";

chai.should();

describe("Add Order", () => {
  const storeService = new StoreService();
  

  it("@Smoke - Place Order correctly", async () => {
    const order: OrderModel = {
      id: 2,
      petId: 3,
      quantity: 6500,
      shipDate: "2025-01-15",
      status: OrderStatus.Placed,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    

    response.status.should.equal(200, JSON.stringify(response.data));
    response.data.id.should.be.above(0); //to verify it is a valid id
    response.data.petId.should.be.above(0); //to verify it is a valid petId
    response.data.quantity.should.be.above(0); //to verify it is a valid quantity
    response.data.quantity.should.equal(order.quantity); //to verify it is the same quantity
    formattedShipDate.should.equal(order.shipDate); //to verify it is the same shipDate
    response.data.status.should.equal(order.status); //to verify it is the same status
    response.data.complete.should.equal(order.complete); //to verify it is the same complete
    console.log(formattedShipDate);
    
    
  
  });
  
});
