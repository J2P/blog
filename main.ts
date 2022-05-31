import blog, { ga, redirects } from "https://deno.land/x/blog@0.1.0/blog.tsx";

blog({
  title: "J2P blog",
  author: "J2P",
  header: "J2P blog",
  style: "body { padding: 32px 0; background-color: #f0f0f0; }",

  // middlewares: [
    
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
