## Getting Started

comes with a starter skeleton admin dashboard for all official projects.
Here are some rules we want you to follow:

- Write clean code
- Have a strong organization of files & folders
- All extra required plugins/libraries will be provided by our team
- ✨ Magic ✨


## Project is based on Next.js 13

Visit [https://nextjs.org/docs](https://nextjs.org/docs) to view the full documentation.\
Next.js 13 docs: https://beta.nextjs.org/docs \
Or join the [Next.js Discord](https://nextjs.org/discord). \



## 🏠 Architecture

Folder & Files architecture
```jsx
- src
    - admin (all pages relative to /admin url)
    - utils
        - api (folder - contains all api files with all actions)
    - shared (folder - contains all components shared between the app)
        - components 
            - dashboard
            - settings
            - users 
            - orders
            - ...and so on... Every folder must have ```kebab``` style name
- assets
    - styles (we use .scss, so all)
        - components (folder - contains all style files for every custom class component)
            - _sidebar.scss
            - _topnav.scss
        - pages (folder - contains all style files for every custom class page)
            - _dashboard.scss
            - _settings.scss
        index.scss (root index files to import scss styling)
    - fonts (not required - folder contains custom fonts or icons .woff)
    - images (folder - contains all static images required)
- public (logo & favicon.ico)
- data (folder - contains static data .json - example options checkboxes, etc... this avoid make other api requests)
```

## 📦 Installation

Project requires [Node.js](https://nodejs.org/) v16.8+ to run.

1. Make sure you have git, node, and npm installed.
2. Clone this repository locally.
3. Execute ``` npm i ``` and then ``` npm run dev ``` from the root directory of the repository.
4. Open ``` localhost:3000 ``` in your browser.

## 🖌️ Theming
Each customer has his own logo and colors, so we created a file named  ``` theme.js ``` where you can play & edit all theme variables. \
Usually ``` theme.js ``` will be provided by our team. \
Read more on theme customization: https://ant.design/docs/react/customize-theme \
Generate a theme online: https://ant-design.github.io/antd-token-previewer/~demos/docs-theme-editor-simple \

## 🤖 Development
We suggest to develop locally backend & frontend, then when all jobs are done (99,9%) we can proceeed with deployment.
```sh
.env.local
.env.development
.env.production
```

## 📦 REST API Intergration
For rest api integrattion we use Axios (https://axios-http.com/docs/intro) \
Or you can use graphql, your choice! \
We setuped an istance in axios inside the ``` /app/utils/api/api.js ```, then it can be imported & used it in every file. \


## 💊 Libraries inside the box
Our dashboard uses the following libraries: 

| Name | Link | Installed |
| ------ | ------ | ------ |
| Next JS 13+ | https://nextjs.org/docs | ✅
| Ant Design | https://ant.design/docs/react/introduce | ✅
| Axios | https://axios-http.com/docs/intro | ✅
| State Management | https://axios-http.com/docs/intro | pending
| Charts & Reports | https://recharts.org/en-US/ | 
| Time | https://momentjs.com | ✅


#### Deployment

Deployment will be done by team.

## Who is using Next.js?

Next.js is used by the world's leading companies. \
Check out the [Next.js Showcase](https://nextjs.org/showcase) to learn more.

## Community

The Next.js community can be found on [GitHub Discussions](https://github.com/vercel/next.js/discussions), where you can ask questions, voice ideas, and share your projects.

## Authors & Support
For any questions & support, please contact: 
- Vitali ([@vitali-duckma](https://github.com/vitali-duckma))
- Carlo ([@CarloDuckMa](https://github.com/CarloDuckMa))

