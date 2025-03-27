import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";

import app from "./src/app.ts";

const server = createHTTPServer({
  router: app,
  middleware: cors(),
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
