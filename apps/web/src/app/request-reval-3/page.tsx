import { getCountry } from '~/web/graphql';

const RequestReval3Page = async () => {
  const country = await getCountry({ code: 'US', next: { revalidate: 3 } });

  return (
    <div>
      <h1>Request Revalidate Every 3 Seconds</h1>
      <pre>{JSON.stringify(country, null, 2)}</pre>
    </div>
  );
};

export default RequestReval3Page;
