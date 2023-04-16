import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = 'http://localhost:9080';

export interface UpdateClientPayload {
  id: string;
  name: string;
  type: string;
  email: string;
  enable: boolean;
  ignorePersistentKeepalive: boolean;
  presharedKey: string;
  allowedIPs: string[];
  address: string[];
  privateKey: string;
  publicKey: string;
  createdBy: string;
  updatedBy: string;
  created: string;
  updated: string;
}

export interface CreateClientPayload {
  name: string;
  tags: string[];
  email: string;
  enable: boolean;
  allowedIPs: string[];
  address: string[];
  createdBy: string;
}
interface ClientResponse {
  status: number;
  success?: boolean; 
  sucess?: boolean; 
  message: string;
  clients: any[];
}

// ========================================( DASHBOARD APIs )==================================================== //

async function callSotreusAPI(
  endpoint: string,
  method: 'GET' | 'POST' | 'DELETE' | 'PATCH',
  payload?: CreateClientPayload | UpdateClientPayload | null,
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

// NOT WORKING

export async function emailClientConfig(clientId: string): Promise<AxiosResponse<any>> {
  return axios.get(`${baseURL}/api/v1.0/client/${clientId}/email`)
}

export const updateServer = async (updatedConfig: any) => {
  const response = await axios.patch(`${baseURL}/api/v1.0/server`, updatedConfig);
  console.log("Server config updated:", response.data)
  return response.data;
};

// WORKING
export async function getClientInfo(clientId: string): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id', 'GET', null, clientId);
}

export async function createClient(payload: CreateClientPayload): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client', 'POST', payload);
}

export async function updateClient(clientId: string, payload: UpdateClientPayload): Promise<AxiosResponse<any>> {
  return axios.patch(`${baseURL}/api/v1.0/client/${clientId}`,payload)
}

export async function getClients(): Promise<ClientResponse> {
  const url = `${baseURL}/api/v1.0/client`
  const response = await axios.get<ClientResponse>(url);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error(`Request failed with status: ${response.status}`);
  }
}

export async function deleteClient(clientId: string): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id', 'DELETE', null, clientId);
}

export async function getClientConfig(clientId: string, qrcode?: boolean): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id/config', 'GET', null, clientId, qrcode);
}

// =============================================( SERVER APIs )=================================================== //

export const getStatus = async () => {
    const response = await axios.get(`${baseURL}/api/v1.0/server/status`);
    return response.data;
};

export const getServerInfo = async () => {
  const response = await axios.get(`${baseURL}/api/v1.0/server`);
  return response.data;
};

export const getServerConfig = async () => {
    const response = await axios.get(`${baseURL}/api/v1.0/server/config`);
    return response.data;
};
    
    