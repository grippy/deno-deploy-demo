Deno.serve((req: Request) => new Response(`Hello: ${Deno.env.get("HELLO")}`));
