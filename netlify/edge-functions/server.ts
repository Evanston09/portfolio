export default () =>
  new Response(
    JSON.stringify({
      "m.server": "matrix.evankim.me:443",
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );

export const config = { path: "/.well-known/matrix/server" };
