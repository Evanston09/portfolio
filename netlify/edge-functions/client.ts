export default () =>
  new Response(
    JSON.stringify({
      "m.homeserver": {
        base_url: "https://matrix.evankim.me:443",
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );

export const config = { path: "/.well-known/matrix/client" };
