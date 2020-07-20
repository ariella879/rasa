export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Rasa Open Source",
      "logo": {
        "alt": "Rasa",
        "src": "https://rasa.com/static/60e441f8eadef13bea0cc790c8cf188b/rasa-logo.svg"
      },
      "links": [
        {
          "label": "Docs",
          "to": "/",
          "position": "left",
          "items": [
            {
              "label": "Master/Unreleased",
              "to": "/",
              "activeBaseRegex": "/"
            }
          ]
        },
        {
          "href": "https://github.com/rasahq/rasa",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Rasa Technologies GmbH"
    }
  },
  "title": "Rasa Open Source Documentation",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "RasaHQ",
  "projectName": "rasa",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "index",
          "routeBasePath": "/",
          "sidebarPath": "/Users/max/Sources/rasa/newdocs/sidebars.js",
          "editUrl": "https://github.com/rasahq/rasa/edit/master/docs/",
          "remarkPlugins": [
            [
              null,
              {
                "test": ""
              }
            ],
            null
          ]
        },
        "theme": {
          "customCss": "/Users/max/Sources/rasa/newdocs/src/css/custom.css"
        }
      }
    ]
  ]
};