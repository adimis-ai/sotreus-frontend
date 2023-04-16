Okay so now using above postman collection I provided and following api documentation of sotreus api can you create typescript functions for each endpoint inside [./src/modules/api.ts] file.

And please remember to following react and typescript best practices and write clean code.

BASE_URL = http://localhost:9080

## GET STATUS (getStatus):
- **Request:** GET {BASE_URL}/api/v1.0/server/status
- **Response:**
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

## GET CLIENTS (getClients):
- **Request:** GET {BASE_URL}/api/v1.0/client
- **Response:**
```json
{
    "status": 200,
    "sucess": true,
    "message": "clients details",
    "clients": [
        {
            "UUID": "2abb0ffe-4df6-4c34-83c9-dfabb2bc5dd4",
            "Name": "Sachin-iPhone",
            "Tags": [
                "mobile"
            ],
            "Email": "shachindra.spidey@gmail.com",
            "Enable": true,
            "PresharedKey": "Lx6yxrwaZLJp1tFwwfeGPrcfogkm0/4oMOlrVE8BsrE=",
            "AllowedIPs": [
                "0.0.0.0/0",
                "::/0"
            ],
            "Address": [
                "10.0.0.2/32"
            ],
            "PrivateKey": "cBsIPe/rrMGNZhX5YyFEhCd75eYUWvaSkhLaYowRqGk=",
            "PublicKey": "jXqzpK1EeHRvpJVRv9E9OKWbY48IilrhHTsTqlakh04=",
            "CreatedBy": "shachindra.spidey@gmail.com",
            "Created": 1680844771166,
            "Updated": 1680844771166
        },
        {
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
        },
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
        },
        {
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
        },
        {
            "UUID": "072156be-d08c-47ae-8e6b-2392ccb66b83",
            "Name": "adi-android",
            "Tags": [
                "mobile"
            ],
            "Email": "adimis.ai.001@gmail.com",
            "Enable": true,
            "PresharedKey": "gymtSnAijLgvS3JS2S/jxUGGKISGmc5fpHk2lIcFxTk=",
            "AllowedIPs": [
                "0.0.0.0/0",
                "::/0"
            ],
            "Address": [
                "10.0.0.7/32"
            ],
            "PrivateKey": "sDrFtWmFY+tjHTsdVjnvqAYzyYwDkGsA441HuQgsi3E=",
            "PublicKey": "RfHLUZ7bcgVMt3ZXWjQFPSzKzMwxbzSHod7+LHHnxFQ=",
            "CreatedBy": "adimis.ai.001@gmail.com",
            "Created": 1681360039005,
            "Updated": 1681360039005
        }
    ]
}
```

## GET CLIENT INFORMATION (getClientInfo):
- **Request:** GET {BASE_URL}/api/v1.0/client/:id
- **Response:**
```json
{
    "status": 200,
    "sucess": true,
    "message": "client details",
    "client": {
        "UUID": "2abb0ffe-4df6-4c34-83c9-dfabb2bc5dd4",
        "Name": "Sachin-iPhone",
        "Tags": [
            "mobile"
        ],
        "Email": "shachindra.spidey@gmail.com",
        "Enable": true,
        "PresharedKey": "Lx6yxrwaZLJp1tFwwfeGPrcfogkm0/4oMOlrVE8BsrE=",
        "AllowedIPs": [
            "0.0.0.0/0",
            "::/0"
        ],
        "Address": [
            "10.0.0.2/32"
        ],
        "PrivateKey": "cBsIPe/rrMGNZhX5YyFEhCd75eYUWvaSkhLaYowRqGk=",
        "PublicKey": "jXqzpK1EeHRvpJVRv9E9OKWbY48IilrhHTsTqlakh04=",
        "CreatedBy": "shachindra.spidey@gmail.com",
        "Created": 1680844771166,
        "Updated": 1680844771166
    }
}
```

## GET CLIENT CONFIGRATION FILE (getClientConfig):
- **Request:** GET {BASE_URL}/api/v1.0/client/:id/config
- **Response:**
```text
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

## GET CLIENT CONFIGRATION QRCODE (getClientConfigQrcode):
- **Request:** GET {BASE_URL}/api/v1.0/client/:id/config?qrcode=true
- **Response:**
A qrcode is returned.

## EMAIL CLIENT CONFIGRATION FILE (emailClientConfig):
- **Request:** GET {BASE_URL}/api/v1.0/client/:id/email
- **Response:**
```json
{
    "status": 200,
    "sucess": true,
    "message": "client configuration emailed"
}
```

## CREATE CLIENT (createClient):
- **Request:** POST {BASE_URL}/api/v1.0/client/
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
- **Response:**
```json
{
    "status": 201,
    "sucess": true,
    "message": "client created",
    "client": {
        "UUID": "4f0b24e3-ea32-4ae1-a0b3-657caa421f93",
        "Name": "adi-android",
        "Tags": [
            "mobile"
        ],
        "Email": "adimis.ai.001@gmail.com",
        "Enable": true,
        "PresharedKey": "YLm+z5wZWKJGMZKjSq28oNwVakYH5xdpRHpUKDhIPOI=",
        "AllowedIPs": [
            "0.0.0.0/0",
            "::/0"
        ],
        "Address": [
            "10.0.0.8/32"
        ],
        "PrivateKey": "0ODS+KL1ms+/fTRBLQzckTTxQ0hVEpkKlTRgMSX1um4=",
        "PublicKey": "P4BWWKlV5EhhvMotVCj7R6geCLnlaUlBX9FhBm+SMDQ=",
        "CreatedBy": "adimis.ai.001@gmail.com",
        "Created": 1681632547776,
        "Updated": 1681632547776
    }
}
```

## UPDATE CLIENT (updateClient):
- **Request:** PATCH {BASE_URL}/api/v1.0.1/client/:id
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
- **Response:**
```json
{
  "status": "success",
  "data": {
    "message": "Client updated successfully"
  }
}
```

## DELETE CLIENT (deleteClient):
- **Request:** DELETE {BASE_URL}/api/v1.0/client/:id
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
- **Response:**
```json
{
    "status": 200,
    "sucess": true,
    "message": "client deleted"
}
```

## GET SERVER INFORMATION (getServerInfo):
- **Request:** GET {BASE_URL}/api/v1.0/server
- **Response:**
```json
{
    "status": 200,
    "sucess": true,
    "message": "server details",
    "server": {
        "Address": [
            "fd9f:0000::10:0:0:1/64",
            "10.0.0.1/24"
        ],
        "ListenPort": 51820,
        "PrivateKey": "GDNjzUiv6GnKh4UxNBxFZo7PFUwZONCao7T53QKuEG0=",
        "PublicKey": "LgVsF427A+vV97ieULFixf6zHfP37JoegKD0AUIECwU=",
        "Endpoint": "parentingchat-vpn.sotreus.com",
        "PersistentKeepalive": 16,
        "DNS": [
            "172.18.0.2"
        ],
        "AllowedIPs": [
            "0.0.0.0/0",
            "::/0"
        ],
        "PreUp": "echo WireGuard PreUp",
        "PostUp": "iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE",
        "PreDown": "echo WireGuard PreDown",
        "PostDown": "iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE",
        "Created": 34645647,
        "Updated": 34645647
    }
}
```

## GET SERVER CONFIGRATION (getServerConfig):
- **Request:** GET {BASE_URL}/api/v1.0/server/config
- **Response:**
```text
# Updated: 34645647 / Created: 34645647
[Interface]
Address = fd9f:0000::10:0:0:1/64
Address = 10.0.0.1/24
ListenPort = 51820
PrivateKey = GDNjzUiv6GnKh4UxNBxFZo7PFUwZONCao7T53QKuEG0=

PreUp = echo WireGuard PreUp
PostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -A FORWARD -o %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
PreDown = echo WireGuard PreDown
PostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -D FORWARD -o %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE
# Aditya-Android / adimis.dev@gmail.com / Updated: 1681228754934 / Created: 1681228754934
# friendly_name = Aditya-Android
[Peer]
PublicKey = 9dwJ//VnJxiWh8wuNM6TJDD6qLkKxCDQN5gigH7RD0w=
PresharedKey = 3tanLj/uZBsT+FEuf7oNvaZKwQrx4Y3FB5QXb1yKlag=
AllowedIPs = 10.0.0.3/32

# Soumalya-Android / soumalyapaul04@gmail.com / Updated: 1681229127854 / Created: 1681229127854
# friendly_name = Soumalya-Android
[Peer]
PublicKey = PuYSiKjqTasya16v5dfqdfptGZoswGJL51kMs8bAkGo=
PresharedKey = okEX1Htc+a/DSsTAVgHRK4fc1lj3mLLcAmuE+12KTZw=
AllowedIPs = 10.0.0.4/32

# aditya-android / adimis.ai.001@gmail.com / Updated: 1681241529677 / Created: 1681241529677
# friendly_name = aditya-android
[Peer]
PublicKey = qQWPNLOQS3VqoGYihribp102odmxTHKvGkcdsMd7ESE=
PresharedKey = dYbvCZg6GxJS18ohPMbgfgT3kNfczhcuOUzo+kqlavg=
AllowedIPs = 10.0.0.5/32

# adi-android / adimis.ai.001@gmail.com / Updated: 1681294983309 / Created: 1681294983309
# friendly_name = adi-android
[Peer]
PublicKey = LamMRMQwxSRiBoqVUwDbFGDiAkjRDYOGb7vnYO5aADY=
PresharedKey = DCXzR/U84eI8Msr4sB2vzefQVHbc8RBondEFXN6nJK4=
AllowedIPs = 10.0.0.6/32

# adi-android / adimis.ai.001@gmail.com / Updated: 1681360039005 / Created: 1681360039005
# friendly_name = adi-android
[Peer]
PublicKey = RfHLUZ7bcgVMt3ZXWjQFPSzKzMwxbzSHod7+LHHnxFQ=
PresharedKey = gymtSnAijLgvS3JS2S/jxUGGKISGmc5fpHk2lIcFxTk=
AllowedIPs = 10.0.0.7/32

# adi-android / adimis.ai.001@gmail.com / Updated: 1681632547776 / Created: 1681632547776
# friendly_name = adi-android
[Peer]
PublicKey = P4BWWKlV5EhhvMotVCj7R6geCLnlaUlBX9FhBm+SMDQ=
PresharedKey = YLm+z5wZWKJGMZKjSq28oNwVakYH5xdpRHpUKDhIPOI=
AllowedIPs = 10.0.0.8/32
```

## UPDATE SERVER (updateServer):
- **Request:** PATCH {BASE_URL}/api/v1.0/server
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
- **Response:**
```json

```