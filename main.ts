import blog, { ga } from "https://deno.land/x/blog/blog.tsx";

blog({
  title: "J2P blog",
  author: "J2P",
  header: "J2P blog",
  style: "body { padding: 32px 0; background-color: #f0f0f0; }",

  middlewares: [
    ga("UA-158793596-1"),
  ]
});
