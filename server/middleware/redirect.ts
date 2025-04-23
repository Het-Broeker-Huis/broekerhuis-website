import { getRequestURL, sendRedirect } from "h3";

const redirects = [
  {
    from: "/historie",
    to: "/het-broeker-huis",
  },
  {
    from: "/pand",
    to: "/het-broeker-huis",
  },
  {
    from: "/trouwen",
    to: "/trouwen-and-feesten/trouwen",
  },
  {
    from: "/eten-en-drinken",
    to: "/restaurant",
  },
  {
    from: "/nieuwsbrief",
    to: "/voor-broekers",
  },
  {
    from: "/contact",
    to: "/het-broeker-huis",
  },
  {
    form: "/info.htm",
    to: "/het-broeker-huis",
  },
];

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  const redirect = redirects.find(
    (redirect) => url.pathname.toLowerCase() === redirect.from,
  );

  if (redirect) {
    return await sendRedirect(event, redirect.to, 301);
  }
});
