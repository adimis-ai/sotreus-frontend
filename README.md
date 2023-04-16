# TODO:
- Fix the following function if required for updating clients and emailing clients:
```typescript
export async function updateClient(clientId: string, payload: UpdateClientPayload): Promise<AxiosResponse<any>> {
  return axios.patch(`${baseURL}/api/v1.0.1/client/${clientId}`,payload)
}

export async function emailClientConfig(clientId: string): Promise<AxiosResponse<any>> {
  return axios.get(`${baseURL}/api/v1.0/client/${clientId}/email`)
}
```
- Fix the Email Client, Disable/Enable Client button in [clientCard.tsx] and [clientList.tsx]
- Fix the [clientEdit.tsx] to update client config accurately.
- Fix the [ServerEdit.tsx] to update server config accurately,
- Add loader in dashboard card buttons.