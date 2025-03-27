import { useQuery } from "+/@tanstack/react-query.ts";

import trpc from "#/clients/trpc.ts";

function App() {
  const q = useQuery(trpc.hello.queryOptions());
  return <>{q.data}</>;
}

export default App;
