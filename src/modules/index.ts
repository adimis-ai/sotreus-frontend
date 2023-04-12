import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'https://us01-vpn.sotreus.com';

export interface CreateClientPayload {
  name: string;
  tags: string[];
  email: string;
  enable: boolean;
  allowedIPs: string[];
  address: string[];
  createdBy: string;
}

async function callSotreusAPI(
    endpoint: string,
    method: 'GET' | 'POST' | 'DELETE',
    payload?: CreateClientPayload | null,
    clientId?: string,
    qrcode?: boolean
  ): Promise<AxiosResponse<any>> {
    const axiosInstance = axios.create({
      baseURL,
    });
  
    const config: AxiosRequestConfig = {
      method,
      url: clientId ? endpoint.replace(':client_id', clientId) : endpoint,
    };
  
    if (qrcode) {
      config.params = { qrcode: true };
    }
  
    if (payload) {
      config.data = payload;
    }
  
    return axiosInstance(config);
}  

export async function createClient(payload: CreateClientPayload): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client', 'POST', payload);
}

export async function getClientConfig(clientId: string, qrcode?: boolean): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id/config', 'GET', null, clientId, qrcode);
}

export async function getStatus(): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/server/status', 'GET');
}

export async function getClients(): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client', 'GET');
}

export async function getClientInfo(clientId: string): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id', 'GET', null, clientId);
}

export async function emailClientConfig(clientId: string): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id/email', 'GET', null, clientId);
}

export async function deleteClient(clientId: string): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id', 'DELETE', null, clientId);
}

export async function getServerInfo(): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/server', 'GET');
}

export async function getServerConfig(): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/server/config', 'GET');
}
