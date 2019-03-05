export function pruneLocations(locations) {
  return locations.filter((location) => {
    return !location.name.includes('A5C')
      && !location.name.includes('Q5');
  });
}
