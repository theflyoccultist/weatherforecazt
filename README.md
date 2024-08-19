

# Weather Forecast Project

## Overview
This Weather Forecast Project provides real-time weather data visualizations using data fetched from an external weather API. The project uses parameters obtained from a CSV file to fetch weather data, which is then displayed on a web page using HTML and CSS for presentation. This setup uses Node.js and Express for the backend and plain HTML and JavaScript for the frontend.

## Features
- **Data Fetching**: Retrieves parameters from a locally stored CSV file.
- **Weather API Integration**: Fetches weather forecasts from an external API using the parameters from the CSV.
- **Data Display**: Processes and displays weather data in a user-friendly web interface.
- **Simple Frontend**: Utilizes plain HTML and JavaScript to keep the frontend lightweight and straightforward.
- **Styled with CSS**: Enhances user interface with custom CSS styling for better user experience.

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (normally comes with Node.js)

## Installation
Follow these steps to get your development environment running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/weather-forecast-project.git
   cd weather-forecast-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

## Usage
After starting the server, navigate to `http://localhost:3000` in your web browser to view the weather forecast data.

## Structure
- **`/public`**: Contains the frontend HTML, CSS, Images and JavaScript files.
- **`/js`**: Contains the JavaScript file to work with .csv files.
- **`server.js`**: Main server file where the Express app is configured.

## API Reference
The external weather forecast API used can be found here: [Weather API](http://www.7timer.info/doc.php). This API provides detailed weather forecasts based on specific parameters like latitude and longitude.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your new features or fixes.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.


> Written with [StackEdit](https://stackedit.io/).
