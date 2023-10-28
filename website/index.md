---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ModuLite"
  text: "A powerful and flexible framework for your Telegram bot."
  tagline: Simplicity at its finest.
  actions:
    - theme: brand
      text: Documentaion
      link: /documentation/
    - theme: alt
      text: Guide
      link: /guide/

features:
  - title: Modern
    details: Equiped with the latest versions, simplicity at its finest.
  - title: Customizable
    details: Make your bot your own, fully customizable with limitless innovations.
  - title: Quick and easy
    details: Import, configure, and compile, as easy as that!
---

<script setup>
    import { VPTeamMembers } from 'vitepress/theme'
    const members = [
        {
            avatar: 'https://www.github.com/Vinzerr.png',
            name: 'Simplicity',
            title: 'Creator',
            links: [
            { icon: 'github', link: 'https://github.com/Vinzerr' },
            ]
        },
    ]
</script>
.
<VPTeamMembers size="small" :members="members"/>