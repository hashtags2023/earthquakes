import * as vl from 'vega-lite-api';
import embed from 'vega-embed';
import mag6plusearthquakes_190020132 from './data/Mag6PlusEarthquakes_1900-2013@2.json';

// Define the earthquake chart
const earthquakeChart = vl.markCircle({tooltip: true})
  .data(mag6plusearthquakes_190020132)
  .encode(
    vl.x().fieldT('time').title('Date'),
    vl.y().fieldQ('mag').title('Magnitude'),
    vl.color().fieldN('place').title('Location'),
    vl.tooltip(['time', 'latitude', 'longitude', 'depth', 'mag', 'place'])
  )
  .width(700)
  .height(400)
  .render();

// Embed the chart into the div with id 'old-chart'
earthquakeChart.then(chart => {
  document.getElementById('old-chart').appendChild(chart);
});
