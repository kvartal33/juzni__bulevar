var APP_DATA = {
  "scenes": [
    {
      "id": "0-dnevni-borovak",
      "name": "Dnevni borovak",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.7570827726517697,
        "pitch": 0.054026750750674424,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 0.46575105275002393,
          "pitch": -0.012821959927821425,
          "rotation": 0,
          "target": "2-soba"
        },
        {
          "yaw": 1.436099776032366,
          "pitch": 0.007155185654866614,
          "rotation": 0,
          "target": "1-kupatilo"
        },
        {
          "yaw": 2.0232141671153183,
          "pitch": 0.05194967986930621,
          "rotation": 0,
          "target": "3-kuhinja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kupatilo",
      "name": "Kupatilo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.4634409680324119,
        "pitch": 0.16065370457926242,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.8568647926666717,
          "pitch": 0.03974225251915264,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-soba",
      "name": "Soba",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.588862235905303,
        "pitch": 0.02467574035567388,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 0.6385510357178905,
          "pitch": 0.005078205398401536,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -2.505677697881996,
        "pitch": 0.03343970788775685,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 3.0863498193131678,
          "pitch": 0.18493918413179777,
          "rotation": 0,
          "target": "0-dnevni-borovak"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
