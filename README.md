# Bustijden for Home Assistant

## Installation

```
sensor:
  - platform: bustijden
    stop_id: 'gngrem'
    stop_name: 'simba'
```

- Dashboard add /local/card.js

```
type: custom:lit-card
entity: sensor.bus_stop_simba_2
```
