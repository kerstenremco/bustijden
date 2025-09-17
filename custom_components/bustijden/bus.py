import aiohttp


class Bus:
    def __init__(self, stop_id, stop_name):
        self.stop_id = stop_id
        self.stop_name = stop_name

    async def get_next_buses(self):
        # Placeholder method to simulate fetching bus data
        async with aiohttp.ClientSession() as session:
            async with session.get(f"http://v0.ovapi.nl/stopareacode/{self.stop_id}/") as response:
                data = await response.json()
                stop = data.get(self.stop_id, {})
                upcoming_buses = []
                for location in stop:
                    passes = stop[location]['Passes']
                    for buspass in passes:
                        upcoming_buses.append({
                            "name": passes[buspass]['LineName'],
                            "number": passes[buspass]['LinePublicNumber'],
                            "expected_departure": passes[buspass]['ExpectedDepartureTime'],
                            "destination": passes[buspass]['DestinationName50']
                        })
                return upcoming_buses
