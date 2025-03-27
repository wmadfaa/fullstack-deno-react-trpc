import { publicProcedure } from "#src/trpc.ts";

export const helloQuery = publicProcedure.query(async () => {
  return "Hello, world!";
});

export default helloQuery;
