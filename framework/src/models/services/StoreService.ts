import { ServiceBase } from "../../base/ServiceBase.js";
import { Response } from "../responses/Response.js";
import { OrderModel } from "../request/OrderModel.js";


export class StoreService extends ServiceBase {
    constructor() {
        super('/store');
    }

    async getInventory<T>(
        params: URLSearchParams = new URLSearchParams(),
        config = this.defaultConfig,
      ): Promise<Response<T>> {
        config.params = params;
        return await this.get<T>(`${this.url}/inventory`, config);
      }

    async placeOrder<T>(
        order: OrderModel,
        config = this.defaultConfig,
    ): Promise<Response<T>> {
        return await this.post<T>(`${this.url}/order`, order, config);
    }

    async getOrderById<T>(
        id: number,
        config = this.defaultConfig,
    ): Promise<Response<T>> {
        return await this.get<T>(`${this.url}/order/${id}`, config);
    }

    async deleteOrder<T>(
        id: number,
        config = this.defaultConfig,
    ): Promise<Response<T>> {
        return await this.delete<T>(`${this.url}/order/${id}`, config);
    }



      
}