import { useQuery } from "+/@tanstack/react-query.ts";

import trpc from "#/clients/trpc.ts";

function App() {
  const q = useQuery(trpc.hello.queryOptions());
  return <h1 className="text-3xl font-bold underline">{q.data}</h1>;
}

export default App;
