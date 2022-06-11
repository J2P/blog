import blog, { ga } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  author: "J2P",
  title: "My Blog",
  description: "The blog description.",
  avatar: "avatar.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:jjp5023@gmail.com" },
    { title: "GitHub", url: "https://github.com/J2P" },
    { title: "Twitter", url: "https://twitter.com/J2P_" },
  ],
  middlewares: [
    ga("UA-158793596-1"),
  ],
});
