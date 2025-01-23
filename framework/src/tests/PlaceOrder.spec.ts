import * as chai from "chai";
//import * as sinon from "sinon";
import { OrderModel, OrderStatus } from "../models/request/OrderModel.js";
import { StoreService } from "../models/services/StoreService.js";
import { OrderResponse } from "../models/responses/OrderResponse.js";

chai.should();

describe("Positive and Negative scenarios for POST /store/order", () => {
  const storeService = new StoreService();

  function validateResponseFieldsOrderCreation(response: OrderResponse, 
    orderSent: OrderModel, 
    formattedShipDate: string
  ): void {
    response.id.should.be.above(0); 
    response.petId.should.be.above(0); 
    response.quantity.should.be.above(0); 
    response.quantity.should.equal(orderSent.quantity); 
    formattedShipDate.should.equal(orderSent.shipDate); 
    response.status.should.equal(orderSent.status); 
    response.complete.should.equal(orderSent.complete);  
  }
 
  it("@Smoke - Place Order correctly with valid values and Status = Placed", async () => {
    const order: OrderModel = {
      id: 2,
      petId: 3,
      quantity: 6500,
      shipDate: "2035-01-15",
      status: OrderStatus.Placed,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    const orderResponse: OrderResponse = response.data;
    response.status.should.equal(200, JSON.stringify(response.data));
    validateResponseFieldsOrderCreation(orderResponse,order,formattedShipDate);
  });

  it("@Smoke - Place Order correctly with valid values and Status = Delivered", async () => {
    const order: OrderModel = {
      id: 2,
      petId: 3,
      quantity: 6500,
      shipDate: "2035-01-15",
      status: OrderStatus.Delivered,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    const orderResponse: OrderResponse = response.data;
    response.status.should.equal(200, JSON.stringify(response.data));
    validateResponseFieldsOrderCreation(orderResponse,order,formattedShipDate);
  });

  // Additional positive valid scenarios
  it("Place Order correctly with valid values and Status = Approved", async () => {
    const order: OrderModel = {
      id: 3,
      petId: 4,
      quantity: 100,
      shipDate: "2025-12-01",
      status: OrderStatus.Approved,
      complete: false,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    const orderResponse: OrderResponse = response.data;
    response.status.should.equal(200, JSON.stringify(response.data));
    validateResponseFieldsOrderCreation(orderResponse, order, formattedShipDate);
  });

  it("should place order with complete = false", async () => {
    const order: OrderModel = {
      id: 4,
      petId: 5,
      quantity: 200,
      shipDate: "2026-06-15",
      status: OrderStatus.Placed,
      complete: false,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    const orderResponse: OrderResponse = response.data;
    response.status.should.equal(200, JSON.stringify(response.data));
    validateResponseFieldsOrderCreation(orderResponse, order, formattedShipDate);
  });

  it("should place order with future ship date", async () => {
    const order: OrderModel = {
      id: 5,
      petId: 6,
      quantity: 300,
      shipDate: "2040-01-01",
      status: OrderStatus.Placed,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    const orderResponse: OrderResponse = response.data;
    response.status.should.equal(200, JSON.stringify(response.data));
    validateResponseFieldsOrderCreation(orderResponse, order, formattedShipDate);
  });

  it("should place order with past ship date", async () => {
    const order: OrderModel = {
      id: 5,
      petId: 6,
      quantity: 300,
      shipDate: "2000-01-01",
      status: OrderStatus.Placed,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(order);
    const formattedShipDate = response.data.shipDate.toString().split('T')[0];
    if (!formattedShipDate) throw new Error("Ship Date is not defined");
    const orderResponse: OrderResponse = response.data;
    response.status.should.equal(200, JSON.stringify(response.data));
    validateResponseFieldsOrderCreation(orderResponse, order, formattedShipDate);
  });

  

  it("@Regression - should return 500 error for invalid date", async () => {
    const invalidDate: OrderModel = {
      id: 2,
      petId: 3,
      quantity: -1, 
      shipDate: "k",
      status: OrderStatus.Placed,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(invalidDate);
    response.status.should.equal(500, JSON.stringify(response.data));  
  });

  it("@Regression - should return 500 error for invalid Quantity", async () => {
    const invalidOrder: OrderModel = {
      id: 2,
      petId: 3,
      quantity: "k", 
      shipDate: "2025-01-15",
      status: OrderStatus.Placed,
      complete: true,
    };

    const response = await storeService.placeOrder<OrderResponse>(invalidOrder);
    response.status.should.equal(500, JSON.stringify(response.data));
  });

  /*it("@Regression - should return 404 for non-existent petId", async () => {
    let mockedService = sinon.stub();
    const order: OrderModel = {
      id: 2,
      petId: 9999, 
      quantity: 1,
      shipDate: "2025-01-15",
      status: OrderStatus.Placed,
      complete: true,
    };
    mockedService = sinon.stub(storeService, 'placeOrder').throws({ response: { status: 404 } });

    try {
      await storeService.placeOrder<OrderResponse>(order);
    } catch (error: any) {
      error.response.status.should.equal(404);
    } finally {
      mockedService.restore();
    }
  });*/
});
