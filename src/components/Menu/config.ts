import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://cats.exchange/#/swap?outputCurrency=0x1a7f0b3af6e9e9953f4b61ecb2791e55dc7dcb19',
      },
      {
        label: 'Liquidity',
        href: 'http://cats.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Cats Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
  label: 'Wild Pools',
     icon: 'PoolIcon',
    href: '/pools',
  },
   {
     label: 'Casino (coming in 24h)',
     icon: 'PoolIcon',
     href: '/casino',
   },
   {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  /// },
  // {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: '/lottery',
   },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Cats info',
        href: 'https://catsswap.info/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/CatsFinance',
      },
   {
      label: 'Medium',
       href: 'https://catexchange.medium.com/',
    },
     {
        label: 'Telegram',
        href: 'https://t.me/CatsExchange',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'More',
  //   icon: 'MoreIcon',
  //   items: [
  //     // {
  //     //   label: 'Voting',
  //     //   href: 'https://voting.pancakeswap.finance',
  //     // },
  //     {
  //       label: 'Github',
  //       href: 'https://github.com/goosedefi/',
  //     },
  //     {
  //       label: 'Docs',
  //       href: 'https://goosedefi.gitbook.io/goose-finance/',
  //     },
  //     {
  //       label: 'Blog',
  //       href: 'https://goosefinance.medium.com/',
  //     },
  //   ],
  // },
]

export default config
