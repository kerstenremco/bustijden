import logging
import voluptuous as vol
from homeassistant.components.sensor import PLATFORM_SCHEMA
import homeassistant.helpers.config_validation as cv
from homeassistant.helpers.entity import Entity
from .const import CONF_STOP_NAME, CONF_STOP_ID
from datetime import timedelta
from .bus import Bus

_LOGGER = logging.getLogger(__name__)
SCAN_INTERVAL = timedelta(minutes=1)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_STOP_ID): cv.string,
    vol.Required(CONF_STOP_NAME): cv.string
})


async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    # Add sensors here
    sensors = []
    bus = Bus(config[CONF_STOP_ID], config[CONF_STOP_NAME])
    sensors.append(StopSensor(bus))
    async_add_entities(sensors, update_before_add=True)


class StopSensor(Entity):
    def __init__(self, bus: Bus):
        super().__init__()
        self._bus = bus
        self._state = 0
        self._stops = []
        self._available = True

    @property
    def name(self):
        return f"Bus Stop {self._bus.stop_name}"

    @property
    def unique_id(self):
        return f"bus_stop_{self._bus.stop_id}"

    @property
    def available(self):
        return self._available

    @property
    def state(self):
        return self._state

    @property
    def extra_state_attributes(self):
        return {
            "stops": self._stops
        }

    async def async_update(self):
        # Fetch new state data for the sensor
        stops = await self._bus.get_next_buses()
        self._state = stops[0]['minutesUntil'] if stops else 0
        self._stops = stops
        self._available = True
