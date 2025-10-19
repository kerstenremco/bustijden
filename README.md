# Bustijden for Home Assistant

## Installation

- Add repo to hacs
- Download hacs
- Add config

```
sensor:
  - platform: bustijden
    stop_ids: '3390096,3390097,3430629,3430630,3470439,3470440'
    stop_name: 'Rembrand van Rijnstraat'
    stop_amount: 8
```

- Dashboard add /local/card.js

```
type: custom:lit-card
entity: sensor.bus_stop_simba_2
```
