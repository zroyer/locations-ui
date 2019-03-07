export function getFilteredLocations(locations, query) {
  return locations.filter((location) => {
    return (
      location.multi_car_display_name.toLowerCase().includes(query) ||
      location.description.toLowerCase().includes(query) ||
      (location.airport_code && location.airport_code.toLowerCase().includes(query))
    );
  });
}
