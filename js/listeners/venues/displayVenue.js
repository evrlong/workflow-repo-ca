import { getVenue } from '../../api/venues/getVenue.js';
import { displayMessage } from '../../ui/common/displayMessage.js';
import { updateMainHeading } from '../../ui/common/updateMainHeading.js';
import { updateTitle } from '../../ui/common/updateTitle.js';
import { renderVenue } from '../../ui/venues/renderVenue.js';
import { getQueryParam } from '../../utils/getQueryParam.js';

export async function displayVenue() {
  const id = getQueryParam('id');

  if (!id) {
    window.location.href = '/';
  }
  const container = document.querySelector('#venue-container');

  try {
    const venue = await getVenue(id);
    const { name } = venue;
    updateMainHeading(name);
    updateTitle(name);
    renderVenue(container, venue);
  } catch (error) {
    console.log(error);
    displayMessage(container, 'error', error.message);
  }
}
