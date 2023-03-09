import * as dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3234;
const SECRET = process.env.SECRET || "No one can ever know my secrets!";

export { port, SECRET };
