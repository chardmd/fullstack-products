/** This configuration will be useful once we decided
 * to go for Service Oriented Architecture approach */

const dev = {
  SERVER_URL: "http://localhost:3001",
};

const prod = {
  SERVER_URL: "http://localhost:3001",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  ...config,
};
