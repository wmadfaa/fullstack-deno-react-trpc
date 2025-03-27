import { router } from "#src/trpc.ts";
import helloQuery from "#src/procedures/hello.query.ts";

const appRouter = router({
  hello: helloQuery,
});

export type AppRouter = typeof appRouter;

export default appRouter;
