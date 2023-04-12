# Sotreus API Documentation

Sotreus API allows you to interact with the WireGuard server and client configurations. This API can be used to manage the WireGuard VPN service, clients, and their configurations.

## Base URL

- `Initial:` parentingchat-vpn.sotreus.com
- `Current:` parentingchat-vpn.sotreus.com

`https://us01-vpn.sotreus.com`

# Endpoints

## Get Status
- `Endpoint:` GET /api/v1.0/server/status
- `Description:` Get the current version of the wg-control service.

## Get Clients
- `Endpoint:` GET /api/v1.0/client
- `Description:` Get all the clients' information configured with the WireGuard VPN server.
- `Response (JSON):`
```json
{
  "status": "success",
  "data": [
    {
      "id": "f70e69e0-a3c9-454d-9082-529c42d59c91",
      "name": "ClientName",
      "tags": ["mobile", "laptop"],
      "email": "client@example.com",
      "enabled": true,
      "allowedIPs": ["0.0.0.0/0", "::/0"],
      "address": ["10.0.0.1/24"],
      "createdBy": "admin@example.com"
    }
  ]
}
```

## Get Client Information
- `Endpoint:` GET /api/v1.0/client/:client_id
- `Description:` Get the client information configured with the WireGuard VPN server based on the ID (UUID).
- `Response (JSON):`
```json
{
  "status": "success",
  "data": {
    "id": "f70e69e0-a3c9-454d-9082-529c42d59c91",
    "name": "ClientName",
    "tags": ["mobile", "laptop"],
    "email": "client@example.com",
    "enabled": true,
    "allowedIPs": ["0.0.0.0/0", "::/0"],
    "address": ["10.0.0.1/24"],
    "createdBy": "admin@example.com"
  }
}
```

## Get Client Configuration File
- `Endpoint:` GET /api/v1.0/client/:client_id/config
- `Description:` Get the client configuration file based on the ID (UUID).
- `Query Parameters:`
    - `qrcode:` (Optional) Set to true to get the QR code version of the configuration file.

## Email Client Configuration File
- `Endpoint:` GET /api/v1.0/client/:client_id/email
- `Description:` Send the client configuration file as an email attachment based on the ID (UUID).

## Create Client
- `Endpoint:` POST /api/v1.0/client
- `Description:` Create a client configuration to connect to the WireGuard VPN - network.
- `Request (JSON):`
```json
{
  "name": "NewClient",
  "tags": ["tablet", "home"],
  "email": "newclient@example.com",
  "enabled": true,
  "allowedIPs": ["0.0.0.0/0", "::/0"],
  "address": ["10.0.0.2/24"],
  "createdBy": "admin@example.com"
}
```
- `Response (JSON):`
```json
{
  "status": "success",
  "data": {
    "id": "1ab93e35-02af-4d71-a6cd-0ddc7d9e9d6e",
    "message": "Client added successfully"
  }
}
```

## Update Client
- `Endpoint:` PATCH /api/v1.0.1/client/:client_id
- `Description:` Update a client configuration to connect with the WireGuard VPN network based on the client ID (UUID).
- `Request (JSON):` 
```json
{
    "id": "e3dece98-7fd8-4357-ae24-10e70c527570",
    "name": "Android1",
    "type": "mobile",
    "email": "shachindra.spidey@gmail.com",
    "enable": true,
    "ignorePersistentKeepalive": false,
    "presharedKey": "Dj0kmT394WfBGwAdh21z+na2bsoD1N0wvpq/Q4prz7s=",
    "allowedIPs": [
        "0.0.0.0/0",
        "::/0"
    ],
    "address": [
        "10.0.0.2/32"
    ],
    "privateKey": "CBPbj1foVOtv15nnKZdbHBwGPkeHO1uh/Ud0PM28B1g=",
    "publicKey": "pHvmAbcwhP/e1f0s4z3XvnlWEeolSRXKrL7A4/8Dh1I=",
    "createdBy": "shachindra.spidey@gmail.com",
    "updatedBy": "shachindra.spidey@gmail.com",
    "created": "2020-08-09T06:17:37.182597213Z",
    "updated": "2020-08-09T06:17:37.182597213Z"
}
```
- `Response (JSON):`
```json
{
  "status": "success",
  "data": {
    "message": "Client updated successfully"
  }
}
```

## Delete Client
- `Endpoint:` DELETE /api/v1.0/client/:client_id
- `Description:` Delete a client configured to connect to the WireGuard VPN network based on the UUID (ID).

## Get Server Information
- `Endpoint:` GET /api/v1.0/server
- `Description:` Get server information hosting the WireGuard VPN service.

## Get Server Configuration
- `Endpoint:` GET /api/v1.0/server/config
- `Description:` Get the server configuration file running the WireGuard VPN service.

## Update Server
- `Endpoint:` PATCH /api/v1.0/server
- `Description:` Update the server configuration file running the WireGuard VPN service.
- `Request (JSON):`
```json
{
    "address": [
        "10.0.0.1/24"
    ],
    "listenPort": 51820,
    "mtu": 0,
    "privateKey": "4Brz+b90sQr5D3Dnv/ZRFntdMkM/pXF6lBRzwNzc9ls=",
    "publicKey": "a09nj5vZMCc7D3jut4FmKC8tBQyABt/fLVwh3lXze0M=",
    "endpoint": "sg01.lazarus.network:51820",
    "persistentKeepalive": 16,
    "dns": [
        "1.1.1.1"
    ],
    "preUp": "echo WireGuard PreUp",
    "postUp": "iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE",
    "preDown": "echo WireGuard PreDown",
    "postDown": "iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE",
    "SaveConfig": false,
    "created": "2020-04-15T00:28:38.228754474Z",
    "updated": "2020-04-15T20:40:01.810224871Z"
}
```

## Errors
Errors are returned as an object with the following properties:
- `code:` An integer error code.
- `message:` A string description of the error.