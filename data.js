var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate",
      "name": "Gate",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.006907635561983483,
        "pitch": -0.0010162033452978392,
        "fov": 1.1391639500791555
      },
      "linkHotspots": [
        {
          "yaw": -0.022668655879956034,
          "pitch": -0.043710843187737325,
          "rotation": 0,
          "target": "1-courtyard"
        },
        {
          "yaw": -0.7290260046041244,
          "pitch": -0.03318758989347259,
          "rotation": 0,
          "target": "2-playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-courtyard",
      "name": "Courtyard",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.5481718749947557,
        "pitch": 0.09107650063342376,
        "fov": 1.1391639500791555
      },
      "linkHotspots": [
        {
          "yaw": -1.101497780382621,
          "pitch": 0.04449360271861025,
          "rotation": 0,
          "target": "2-playground"
        },
        {
          "yaw": -3.112767765460232,
          "pitch": -0.022020095185915523,
          "rotation": 0,
          "target": "0-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-playground",
      "name": "Playground",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4243506012019402,
          "pitch": -0.006235621237506095,
          "rotation": 0,
          "target": "1-courtyard"
        },
        {
          "yaw": 2.594965956097619,
          "pitch": -0.010375413978854553,
          "rotation": 0,
          "target": "0-gate"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "HAIS Tour Demo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
