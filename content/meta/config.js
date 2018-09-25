const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Nate Carroll Portfolio Site", // <title>
  shortSiteTitle: "Nate Carroll Portfolio Site", // <title> ending for posts and pages
  siteDescription: "My name is Nate Carroll, and this is my personal website for blogging and showing off some of my projects.",
  siteUrl: "https://gatsby-starter-personal-blog.natecarroll.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "nate carroll",
  authorTwitterAccount: "natecarroll",
  // info
  infoTitle: "nate carroll",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "ntc238@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/nathancarroll" },
    { name: "twitter", url: "https://twitter.com/natecarroll" },
    { name: "facebook", url: "http://facebook.com/nathantcarroll" }
  ]
};
