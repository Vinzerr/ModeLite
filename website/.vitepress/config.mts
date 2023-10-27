import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "telegram.js",
  description: "A powerful and flexible framework for your Telegram bot.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' },
      { text: 'Guide', link: '/guide/' }
    ],

    sidebar: {
      '/documentation/': [
        {
          text: 'Client',
          items: [
            { text: 'Client', link: '/documentation/client/Client'}
          ]
        },{
          text: 'Managers',
          items: [
            { text: 'CachedManager', link: '/documentation/managers/CachedManager'},
            { text: 'ChatsManager', link: '/documentation/managers/ChatsManager' },
            { text: 'MembersManager', link: '/documentation/managers/MembersManager' }
          ]
        },{
          text: 'Structures',
          items: [
            { text: 'Chat', link: '/documentation/structures/Chat',
            items: [
              { text: 'PrivateChat', link: '/documentation/structures/PrivateChat'},
              { text: 'GroupChat', link: '/documentation/structures/GroupChat'},
              { text: 'SuperGroupChat', link: '/documentation/structures/SuperGroupChat'},
              { text: 'ChannelChat', link: '/documentation/structures/ChannelChat'}
            ]},
            { text: 'ChatMember', link: '/documentation/structures/ChatMember'},
            { text: 'Message', link: '/documentation/structures/Message'}
          ]
        },{
          text: 'Types',
          items: [
            { text: 'MessagePayload', link: '/documentation/types/MessagePayload'},
            { text: 'MessagePayloadMethod', link: '/documentation/types/MessagePayloadMethod'},
            { text: 'User', link: '/documentation/types/User'}
          ]
        }
      ]
    },
      
      // {
      //   text: 'Examples',
      //   items: [
      //     { 
      //       text: 'Client',
      //       items: [
      //         { text: 'Client', link: '/documentation/clent'}
      //       ]
      //     },
      //     { 
      //       text: 'Guide',
      //       items: [
      //         { text: 'Introduction', link: '/guide/'}
      //       ]
      //     },
      //   ]
      // }

    socialLinks: [
      { icon: 'github', link: '' }
    ]

  }
})
