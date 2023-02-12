import { port } from "./config/index.js";
// port = 3232;

import { server } from "./api/server.js";

server.listen(port, () => console.log(`Listening on port ${port}`));
