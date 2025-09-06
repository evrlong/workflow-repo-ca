export function renderVenue(container, venue) {
  container.innerHTML = '';
  const img = document.createElement('img');
  img.src = venue.media[0];
  img.alt = venue.name;
  container.append(img);
}
