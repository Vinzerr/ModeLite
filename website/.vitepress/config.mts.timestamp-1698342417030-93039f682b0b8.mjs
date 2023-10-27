// website/.vitepress/config.mts
import { defineConfig } from "file:///C:/Users/vince/Desktop/telegram.js/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "telegram.js",
  description: "A powerful and flexible framework for your Telegram bot.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/documentation/" },
      { text: "Guide", link: "/guide/" }
    ],
    sidebar: {
      "/documentation/": [
        {
          text: "Client",
          items: [
            { text: "Client", link: "/documentation/client/Client" }
          ]
        },
        {
          text: "Managers",
          items: [
            { text: "ChatsManager", link: "/documentation/managers/ChatsManager" },
            { text: "Logger", link: "/documentation/managers/Logger" }
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
      { icon: "github", link: "" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsid2Vic2l0ZS8udml0ZXByZXNzL2NvbmZpZy5tdHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2aW5jZVxcXFxEZXNrdG9wXFxcXHRlbGVncmFtLmpzXFxcXHdlYnNpdGVcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdmluY2VcXFxcRGVza3RvcFxcXFx0ZWxlZ3JhbS5qc1xcXFx3ZWJzaXRlXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdmluY2UvRGVza3RvcC90ZWxlZ3JhbS5qcy93ZWJzaXRlLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6IFwidGVsZWdyYW0uanNcIixcbiAgZGVzY3JpcHRpb246IFwiQSBwb3dlcmZ1bCBhbmQgZmxleGlibGUgZnJhbWV3b3JrIGZvciB5b3VyIFRlbGVncmFtIGJvdC5cIixcbiAgdGhlbWVDb25maWc6IHtcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gICAgICB7IHRleHQ6ICdEb2N1bWVudGF0aW9uJywgbGluazogJy9kb2N1bWVudGF0aW9uLycgfSxcbiAgICAgIHsgdGV4dDogJ0d1aWRlJywgbGluazogJy9ndWlkZS8nIH1cbiAgICBdLFxuXG4gICAgc2lkZWJhcjoge1xuICAgICAgJy9kb2N1bWVudGF0aW9uLyc6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDbGllbnQnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdDbGllbnQnLCBsaW5rOiAnL2RvY3VtZW50YXRpb24vY2xpZW50L0NsaWVudCd9XG4gICAgICAgICAgXVxuICAgICAgICB9LHtcbiAgICAgICAgICB0ZXh0OiAnTWFuYWdlcnMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdDaGF0c01hbmFnZXInLCBsaW5rOiAnL2RvY3VtZW50YXRpb24vbWFuYWdlcnMvQ2hhdHNNYW5hZ2VyJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnTG9nZ2VyJywgbGluazogJy9kb2N1bWVudGF0aW9uL21hbmFnZXJzL0xvZ2dlcid9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICAgIFxuICAgICAgLy8ge1xuICAgICAgLy8gICB0ZXh0OiAnRXhhbXBsZXMnLFxuICAgICAgLy8gICBpdGVtczogW1xuICAgICAgLy8gICAgIHsgXG4gICAgICAvLyAgICAgICB0ZXh0OiAnQ2xpZW50JyxcbiAgICAgIC8vICAgICAgIGl0ZW1zOiBbXG4gICAgICAvLyAgICAgICAgIHsgdGV4dDogJ0NsaWVudCcsIGxpbms6ICcvZG9jdW1lbnRhdGlvbi9jbGVudCd9XG4gICAgICAvLyAgICAgICBdXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICB7IFxuICAgICAgLy8gICAgICAgdGV4dDogJ0d1aWRlJyxcbiAgICAgIC8vICAgICAgIGl0ZW1zOiBbXG4gICAgICAvLyAgICAgICAgIHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvZ3VpZGUvJ31cbiAgICAgIC8vICAgICAgIF1cbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICBdXG4gICAgICAvLyB9XG5cbiAgICBzb2NpYWxMaW5rczogW1xuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJycgfVxuICAgIF1cblxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLG9CQUFvQjtBQUdwWCxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUE7QUFBQSxJQUVYLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBLE1BQzFCLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSxrQkFBa0I7QUFBQSxNQUNqRCxFQUFFLE1BQU0sU0FBUyxNQUFNLFVBQVU7QUFBQSxJQUNuQztBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsbUJBQW1CO0FBQUEsUUFDakI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE9BQU87QUFBQSxZQUNMLEVBQUUsTUFBTSxVQUFVLE1BQU0sK0JBQThCO0FBQUEsVUFDeEQ7QUFBQSxRQUNGO0FBQUEsUUFBRTtBQUFBLFVBQ0EsTUFBTTtBQUFBLFVBQ04sT0FBTztBQUFBLFlBQ0wsRUFBRSxNQUFNLGdCQUFnQixNQUFNLHVDQUF1QztBQUFBLFlBQ3JFLEVBQUUsTUFBTSxVQUFVLE1BQU0saUNBQWdDO0FBQUEsVUFDMUQ7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFvQkEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxHQUFHO0FBQUEsSUFDN0I7QUFBQSxFQUVGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
