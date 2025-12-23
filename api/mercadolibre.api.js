import { API_CONFIG } from '../config/api.config';

export class MercadoLibreAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = API_CONFIG.mercadolibre.baseUrl;
  }

  async getDepartments() {
    return await this.request.get(
      `${this.baseUrl}/menu/departments`
    );
  }
}

