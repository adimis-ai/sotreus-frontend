// Can you add a loader in Disable Client, Email Client, Download button and I don't have a loader component so make one for me.

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { customData } from './sampleData';

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
  success?: boolean; // Make this field optional
  sucess?: boolean; // Add this field to match the typo in the sample data
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

// NOT NEEDED
export async function getClientInfo(clientId: string): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client/:client_id', 'GET', null, clientId);
}

// NOT WORKING
export async function updateClient(clientId: string, payload: UpdateClientPayload): Promise<AxiosResponse<any>> {
  return axios.patch(`${baseURL}/api/v1.0/client/${clientId}`,payload)
}

export async function emailClientConfig(clientId: string): Promise<AxiosResponse<any>> {
  return axios.get(`${baseURL}/api/v1.0/client/${clientId}/email`)
}

export const updateServer = async (updatedConfig: any) => {
  try {
    const response = await axios.patch(`${baseURL}/api/v1.0/server`, updatedConfig);
    return response.data;
  } catch (error) {
    console.error("Error updating server config:", error);
    return customData.getServerConfig;
  }
};

// WORKING
export async function createClient(payload: CreateClientPayload): Promise<AxiosResponse<any>> {
  return callSotreusAPI('/api/v1.0/client', 'POST', payload);
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
  try {
    const response = await axios.get(`${baseURL}/api/v1.0/server/status`);
    return response.data;
  } catch (error) {
    console.error("Error fetching status data:", error);
    return customData.getStatus;
  }
};

export const getServerInfo = async () => {
  const response = await axios.get(`${baseURL}/api/v1.0/server`);
  return response
};

export const getServerConfig = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/v1.0/server/config`);
    return response.data;
  } catch (error) {
    console.error("Error fetching server config:", error);
    return customData.getServerConfig;
  }
};
    
    