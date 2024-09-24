import { nanoid } from "nanoid";

export const initialState = {
  images: [
    {
      id: nanoid(4),
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprod-ripcut-delivery.disney-plus.net%2Fv1%2Fvariant%2Fdisney%2F9B368B465A4DC909CDB6E799ACB64899B54E731B6D894FA5B080D75DB2F30533%2Fscale%3FaspectRatio%3D1.78%26format%3Djpeg&f=1&nofb=1&ipt=35d9e1255b07ecf6f7eb29d45468fb608cac254e456fe1029e5b52e13198a24f&ipo=images",
    },
    {
      id: nanoid(4),
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2028100.jpg&f=1&nofb=1&ipt=cd114614b5ae74a0edb4de0a9624abd8a449b5ac827f4c04cf7eacf05ca7daa3&ipo=images",
    },
    {
      id: nanoid(4),
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1869540.jpg&f=1&nofb=1&ipt=c552cf2cc82340eb59dc6a5ae69a90bbb228143ef22fbad3511e32a0081abfc7&ipo=images",
    },
    {
      id: nanoid(4),
      src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F470281.jpg&f=1&nofb=1&ipt=1fd9683da464011e71c29a0e64fb9424c0efc62260392fc1ec639c463048e527&ipo=images",
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
