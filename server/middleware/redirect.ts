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
    to: "/contact-parkeren",
  },
  {
    from: "/contact",
    to: "/contact-parkeren",
  },
  {
    from: "/info.htm",
    to: "/contact-parkeren",
  },
  {
    from: "/broek-in-waterland",
    to: "broek-in-waterland/dagje-uit-vlakbij-amsterdam",
  },
  {
    from: "/visit/things-to-do-amsterdam-countryside",
    to: "/visit/things-to-do-countryside-amsterdam",
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
