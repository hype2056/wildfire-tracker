# Wildfire Tracker

Real-time map of active wildfires in California pulled from NASA FIRMS satellite data.

## Features
- Live fire detections updated daily from NASA FIRMS VIIRS sensors
- Interactive map with clickable fire markers showing brightness and date
- Brightness filter to surface high-intensity fire detections

## Tech
Next.js, Leaflet.js, NASA FIRMS API

## Run Locally
1. Clone the repo
2. Add your NASA FIRMS API key to `.env.local` as `NASA_FIRMS_API_KEY`
3. Run `npm install` then `npm run dev`
