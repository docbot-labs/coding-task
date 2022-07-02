import { useQuery } from "urql";
import { DemoQueryDocument, DemoQueryQuery } from "../../lib/graphql/schema";

export default function Demo() {
  const [{ fetching, error, data }] = useQuery<DemoQueryQuery>({
    query: DemoQueryDocument,
  });

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return <div>{data?.demo.message}</div>;
}
