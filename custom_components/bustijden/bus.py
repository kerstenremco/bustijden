import aiohttp
import datetime
from .const import API_URL


class Bus:
    def __init__(self, stop_ids, stop_name, amount):
        self.stop_ids = stop_ids
        self.stop_name = stop_name
        self.amount = amount

    async def get_next_buses(self):
        date = datetime.datetime.now().strftime("%Y%m%d")
        async with aiohttp.ClientSession() as session:
            async with session.get(f"{API_URL}/stop-times/stop?date={date}&ids={self.stop_ids}", ssl=False) as response:
                data = await response.json()
                stopTimes = list(data)[:self.amount]
                return stopTimes
