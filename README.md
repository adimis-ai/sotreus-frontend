# Sotreus API Documentation

Sotreus API allows you to interact with the WireGuard server and client configurations. This API can be used to manage the WireGuard VPN service, clients, and their configurations.

## Base URL

- `Initial:` parentingchat-vpn.sotreus.com
- `Current:` parentingchat-vpn.sotreus.com

`https://us01-vpn.sotreus.com`

# Endpoints
## Create Client
- `Endpoint:` POST /api/v1.0/client
- `Description:` Create a client configuration to connect to the WireGuard VPN - network.
- `Request (JSON):`
```json
{
    "name": "adi-android",
    "tags": [
        "mobile"
    ],
    "email":"adimis.ai.001@gmail.com",
    "enable": true,
    "allowedIPs": [
        "0.0.0.0/0",
        "::/0"
    ],
    "address": [
        "10.0.0.1/24"
    ],
    "createdBy": "adimis.ai.001@gmail.com"
}
```
- `Response (JSON):`
```json
{
    "status": 201,
    "sucess": true,
    "message": "client created",
    "client": {
        "UUID": "4ac12aa5-c9d6-47f4-b0b2-e9d482723e87",
        "Name": "adi-android",
        "Tags": [
            "mobile"
        ],
        "Email": "adimis.ai.001@gmail.com",
        "Enable": true,
        "PresharedKey": "DCXzR/U84eI8Msr4sB2vzefQVHbc8RBondEFXN6nJK4=",
        "AllowedIPs": [
            "0.0.0.0/0",
            "::/0"
        ],
        "Address": [
            "10.0.0.6/32"
        ],
        "PrivateKey": "wHfWnjWKxl6iwkc5eMPravaHft+XH5e6Zu5Vpf2aVmA=",
        "PublicKey": "LamMRMQwxSRiBoqVUwDbFGDiAkjRDYOGb7vnYO5aADY=",
        "CreatedBy": "adimis.ai.001@gmail.com",
        "Created": 1681294983309,
        "Updated": 1681294983309
    }
}
```
## Get Status
- `Endpoint:` GET /api/v1.0/server/status
- `Description:` Get the current version of the wg-control service.
- `Response (JSON):`
```json
{
    "Version": "1.0",
    "Hostname": "parentingchat-sotreus.local",
    "Domain": "parentingchat",
    "PublicIP": "18.220.147.81",
    "gRPCPort": "9091",
    "PrivateIP": "172.18.0.3,",
    "HttpPort": "9081",
    "Region": "us01",
    "VPNPort": "51820"
}
```

## Get Clients
- `Endpoint:` GET /api/v1.0/client
- `Description:` Get all the clients' information configured with the WireGuard VPN server.
- `Response (JSON):`
```json
{
    "status": 200,
    "sucess": true,
    "message": "clients details",
    "clients": [
        {
            "UUID": "bd438ac6-b043-49b4-939c-b9250c31c798",
            "Name": "Soumalya-Android",
            "Tags": [
                "mobile"
            ],
            "Email": "soumalyapaul04@gmail.com",
            "Enable": true,
            "PresharedKey": "okEX1Htc+a/DSsTAVgHRK4fc1lj3mLLcAmuE+12KTZw=",
            "AllowedIPs": [
                "0.0.0.0/0",
                "::/0"
            ],
            "Address": [
                "10.0.0.4/32"
            ],
            "PrivateKey": "iNL0JOynTmWvPMYwG/Zyg92HJ07DsoX6uv90exskelg=",
            "PublicKey": "PuYSiKjqTasya16v5dfqdfptGZoswGJL51kMs8bAkGo=",
            "CreatedBy": "shachindra.spidey@gmail.com",
            "Created": 1681229127854,
            "Updated": 1681229127854
        },
        {
            "UUID": "ef5bb67e-7df3-4c6f-a0e9-6240b3f0c503",
            "Name": "aditya-android",
            "Tags": [
                "mobile"
            ],
            "Email": "adimis.ai.001@gmail.com",
            "Enable": true,
            "PresharedKey": "dYbvCZg6GxJS18ohPMbgfgT3kNfczhcuOUzo+kqlavg=",
            "AllowedIPs": [
                "0.0.0.0/0",
                "::/0"
            ],
            "Address": [
                "10.0.0.5/32"
            ],
            "PrivateKey": "4JEn6MmqCRTP7a0GpunJUJnYVBQnPz73BdiwTOvirWM=",
            "PublicKey": "qQWPNLOQS3VqoGYihribp102odmxTHKvGkcdsMd7ESE=",
            "CreatedBy": "adimis.ai.001@gmail.com",
            "Created": 1681241529677,
            "Updated": 1681241529677
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
    "status": 200,
    "sucess": true,
    "message": "client details",
    "client": {
        "UUID": "85ebdf4e-630c-4026-b51c-f7fe9abb73d8",
        "Name": "Aditya-Android",
        "Tags": [
            "mobile"
        ],
        "Email": "adimis.dev@gmail.com",
        "Enable": true,
        "PresharedKey": "3tanLj/uZBsT+FEuf7oNvaZKwQrx4Y3FB5QXb1yKlag=",
        "AllowedIPs": [
            "0.0.0.0/0",
            "::/0"
        ],
        "Address": [
            "10.0.0.3/32"
        ],
        "PrivateKey": "wCwAPD3HVARqk/U9ytfRAbxlmcUCD7unzurbi25wl1Q=",
        "PublicKey": "9dwJ//VnJxiWh8wuNM6TJDD6qLkKxCDQN5gigH7RD0w=",
        "CreatedBy": "shachindra.spidey@gmail.com",
        "Created": 1681228754934,
        "Updated": 1681228754934
    }
}
```

## Get Client Configuration File
- `Endpoint:` GET /api/v1.0/client/:client_id/config
- `Description:` Get the client configuration file based on the ID (UUID).
- `Query Parameters:`
    - `qrcode:` (Optional) Set to true to get the QR code version of the configuration file.
- `Response (TEXT):`
```
[Interface]
Address = 10.0.0.3/32
PrivateKey = wCwAPD3HVARqk/U9ytfRAbxlmcUCD7unzurbi25wl1Q=
DNS = 172.18.0.2

[Peer]
PublicKey = LgVsF427A+vV97ieULFixf6zHfP37JoegKD0AUIECwU=
PresharedKey = 3tanLj/uZBsT+FEuf7oNvaZKwQrx4Y3FB5QXb1yKlag=
AllowedIPs = 0.0.0.0/0, ::/0
Endpoint = parentingchat-vpn.sotreus.com:51820
PersistentKeepalive = 16
```
## Email Client Configuration File
- `Endpoint:` GET /api/v1.0/client/:client_id/email
- `Description:` Send the client configuration file as an email attachment based on the ID (UUID).
- `Response (JSON):`
```json
{
    "status": 200,
    "sucess": true,
    "message": "client configuration emailed"
}
```
## Delete Client
- `Endpoint:` DELETE /api/v1.0/client/:client_id
- `Description:` Delete a client configured to connect to the WireGuard VPN network based on the UUID (ID).


## ========================= { SERVER PAGE } ============================ #

## Get Server Information
- `Endpoint:` GET /api/v1.0/server
- `Description:` Get server information hosting the WireGuard VPN service.
## Get Server Configuration
- `Endpoint:` GET /api/v1.0/server/config
- `Description:` Get the server configuration file running the WireGuard VPN service.

# ======================================================================== #
# ISSUES:
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
## Update Client
- `Endpoint:` PATCH /api/v1.0.1/client/:client_id
- `Description:` Update a client configuration to connect with the WireGuard VPN network based on the client ID (UUID).
- `Request (JSON):` 
```json
{
    "id": "4ac12aa5-c9d6-47f4-b0b2-e9d482723e87",
    "name": "adi-android",
    "type": "mobile",
    "email": "adimis.ai.001@gmail.com",
    "enable": true,
    "ignorePersistentKeepalive": false,
    "presharedKey": "DCXzR/U84eI8Msr4sB2vzefQVHbc8RBondEFXN6nJK4=",
    "allowedIPs": [
        "0.0.0.0/0",
        "::/0"
    ],
    "address": [
        "10.0.0.6/32"
    ],
    "privateKey": "wHfWnjWKxl6iwkc5eMPravaHft+XH5e6Zu5Vpf2aVmA=",
    "publicKey": "LamMRMQwxSRiBoqVUwDbFGDiAkjRDYOGb7vnYO5aADY=",
    "createdBy": "adimis.ai.001@gmail.com",
    "updatedBy": "adimis.ai.001@gmail.com",
    "created": "2023-12-04T0:17:37.1681294983309",
    "updated": "2020-08-09T06:17:37.1681294983309"
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
# ======================================================================== #
