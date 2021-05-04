export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60917ecab5db4500a810ba23",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wzsk5j4s",
                  apiId: "57621cf5-3770-449e-ae27-2a5778e27ca7",
                },
                {
                  buildHookId: "60917eca14d5db00d8d77f4e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-oajnia4p",
                  apiId: "82ea7e38-2ecf-42ea-b32c-f0cb91c00864",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/davittgirogyan/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-oajnia4p.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
