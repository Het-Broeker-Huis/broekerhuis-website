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
    to: "/trouwen-feesten/trouwen",
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
    to: "/contact-parkeren",
  },
  {
    form: "/info.htm",
    to: "/contact-parkeren",
  },
  {
    form: "/broek-in-waterland",
    to: "broek-in-waterland/dagje-uit-vlakbij-amsterdam/",
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
