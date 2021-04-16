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
        href: 'https://app.fufu.farm/#/swap?outputCurrency=0x1a7f0b3af6e9e9953f4b61ecb2791e55dc7dcb19',
      },
      {
        label: 'Liquidity',
        href: 'http://app.fufu.farm/#/pool',
      },
    ],
  },
  {
    label: 'FuFu Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
  label: 'Wild Pools',
     icon: 'PoolIcon',
    href: '/pools',
  },
   {
     label: 'FuFu NFT (coming in 24h)',
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
        href: 'https://fufu.financial/',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/hijayjay',
      },
   {
      label: 'Medium',
       href: 'https://fufufarm.medium.com/',
    },
     {
        label: 'Telegram',
        href: 'https://t.me/fufufarm',
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
