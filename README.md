<img src="https://cdn.oneshop.cloud/autox480/EDC26E30-0190-4F3C-845B-9C92875835DC.png" width="50%"/>

# Getting Start
This is the default theme of Oneshop's Website Sales Channel. Powered by [The Oneshop API](https://doc.oneshop.dev), website with this theme allows visitors to read content and shop, admins/merchant can manage the shop with ease by using [The Oneshop Center](https://center.oneshop.host).

The design of os-theme is highly modulized and easy to maintain by yourself, this repository will keep update. 

Please check regulary to make sure you won miss any updates in the future especially you have cloned/forked this to your GitHub account😁



### `Non-developer`
If you are good with the default settings and the theme style with the os-theme, you can simply update the settings in [The Oneshop Center](https://center.oneshop.host).


### `Developer`
1. Clone/Fork the project as your own repository.
2. Edit package.json file, replace the value of `proxy` from `https://starter.oneshop.host/` to your shop's domain
3. In terminal, cd into your project and type `npm start` to start your development.

# Configuration
1. Edit src/config.js to alter theme's settings.
2. Edit Json files in src/helpers/locales for theme multilingualism.

# Deployment
1. Login to [Oneshop Center](https://center.oneshop.cloud)
2. Click on your shop and click `Themes` at the top menu
3. Follow the instruction to setup your theme
4. Edit the repo URL to your repo url.
5. Specify the branch of the theme will use
6. The path of the build folder (For ReactJS, the path is /build typically)
4. Bear in mind that run `yarn build` or `npm build` before you commit when you want changes you made reveals on the site immediately.


### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
