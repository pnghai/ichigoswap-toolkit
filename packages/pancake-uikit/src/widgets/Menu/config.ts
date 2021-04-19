import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.strawberryswap.link",
      },
      {
        label: "Liquidity",
        href: "https://exchange.strawberryswap.link/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  // {
  //   label: "Team Battle",
  //   icon: "TeamBattleIcon",
  //   href: "/competition",
  //   status: status.SOON,
  // },
  // {
  //   label: "Profile & Teams",
  //   icon: "GroupsIcon",
  //   items: [
  //     {
  //       label: "Leaderboard",
  //       href: "/teams",
  //       status: status.NEW,
  //     },
  //     {
  //       label: "YourProfile",
  //       href: "/",
  //     },
  //   ],
  //   calloutClass: "rainbow",
  // },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://info.strawberryswap.link",
      },
      {
        label: "Tokens",
        href: "https://info.strawberryswap.link/tokens",
      },
      {
        label: "Pairs",
        href: "https://info.strawberryswap.link/pairs",
      },
      {
        label: "Accounts",
        href: "https://info.strawberryswap.link/accounts",
      },
    ],
  },
  // {
  //   label: "IFO",
  //   icon: "IfoIcon",
  //   items: [
  //     {
  //       label: "Next",
  //       href: "/ifo",
  //     },
  //     {
  //       label: "History",
  //       href: "/ifo/history",
  //     },
  //   ],
  // },
  // {
  //   label: "More",
  //   icon: "MoreIcon",
  //   items: [
  //     {
  //       label: "Voting",
  //       href: "https://voting.pancakeswap.finance",
  //     },
  //     {
  //       label: "Github",
  //       href: "https://github.com/pancakeswap",
  //     },
  //     {
  //       label: "Docs",
  //       href: "https://docs.pancakeswap.finance",
  //     },
  //     {
  //       label: "Blog",
  //       href: "https://pancakeswap.medium.com",
  //     },
  //   ],
  // },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      // {
      //   label: "English",
      //   href: "#",
      // },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "#",
      // },
      // {
      //   label: "中文",
      //   href: "#",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "#",
      // },
      // {
      //   label: "Italiano",
      //   href: "#",
      // },
      // {
      //   label: "русский",
      //   href: "#",
      // },
      // {
      //   label: "Türkiye",
      //   href: "#",
      // },
      // {
      //   label: "Português",
      //   href: "#",
      // },
      // {
      //   label: "Español",
      //   href: "#",
      // },
      // {
      //   label: "日本語",
      //   href: "#",
      // },
      // {
      //   label: "Français",
      //   href: "#",
      // },
      {
        label: "Announcements",
        href: "#",
      },
      // {
      //   label: "Whale Alert",
      //   href: "#",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "#",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
