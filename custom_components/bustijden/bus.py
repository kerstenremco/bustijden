import aiohttp


class Bus:
    def __init__(self, stop_id, stop_name):
        self.stop_id = stop_id
        self.stop_name = stop_name

    async def get_next_buses(self):
        # Placeholder method to simulate fetching bus data
        async with aiohttp.ClientSession() as session:
            async with session.get("http://gtfsapi.internal.remcokersten.nl:3000/stop-times/stop?date=20251014&ids=3390096,3390097,3430629,3430630,stoparea:526384") as response:
                data = await response.json()
                return data
