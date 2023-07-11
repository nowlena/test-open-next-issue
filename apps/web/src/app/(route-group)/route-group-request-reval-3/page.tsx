import { getCountry } from '~/web/graphql';

const RouteGroupReval3Page = async () => {
  const country = await getCountry({ code: 'US', next: { revalidate: 3 } });

  return (
    <div>
      <h1>Route Group: Request Revalidate Every 3 Seconds</h1>
      <pre>{JSON.stringify(country, null, 2)}</pre>
    </div>
  );
};

export default RouteGroupReval3Page;
