import app from "./index.js";
import dotenv from "dotenv";
import { connect } from "./configs/database.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connect();
  console.log(`server is listening on port ${PORT}`);
});
