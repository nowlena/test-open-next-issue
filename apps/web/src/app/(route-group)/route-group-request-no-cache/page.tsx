import { getCountry } from '~/web/graphql';

const RouteGroupNoCachePage = async () => {
  const country = await getCountry({ code: 'US', next: { revalidate: 0 } });

  return (
    <div>
      <h1>Route Group: Request No Cache</h1>
      <pre>{JSON.stringify(country, null, 2)}</pre>
    </div>
  );
};

export default RouteGroupNoCachePage;
