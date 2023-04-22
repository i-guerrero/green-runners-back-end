// DEPENDENCIES
const app = require("./app");

// CONFIG
require("dotenv").config();
const PORT = process.env.PORT || "8080";

// LISTEN
// app.listen(PORT, () => {
//   console.log(`Listening on PORT ${PORT}`);
// });
// For deployment
app.listen({ port: process.env.PORT, host: "0.0.0.0" });
