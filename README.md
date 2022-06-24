# Stock-Metrics
> Mobile web app which allows the user to look for real-time information on the stock market like ask-Price, close-price, and much more. The user can filter the available stocks for their category in the field, which could be Service technology or electronic technology. The user can select the stock and go to the details page where all the information available about the selected stock is displayed.

## :ledger: Index

- [About](#beginner-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Development](#wrench-development)
  - [Pre-Requisites](#notebook-pre-requisites)
  - [Developmen Environment](#nut_and_bolt-development-environment)
  - [File Structure](#file_folder-file-structure)
  - [Build](#hammer-build)  
  - [Deployment](#rocket-deployment)  
- [Community](#cherry_blossom-community)
  - [Contribution](#fire-contribution)
  - [Branches](#cactus-branches)
  - [Guideline](#exclamation-guideline)  
- [FAQ](#question-faq)
- [Resources](#page_facing_up-resources)
- [Gallery](#camera-gallery)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

##  :beginner: Important note about the app

Consider that this web app works with real Stocks market data, so keep the following in mind: <strong>Regular hours for the New York Stock Exchange and the Nasdaq go from 9:30 a.m. to 4 p.m. ET from Monday to Friday.</strong> So the majority of data won't be available outside regular hours.

###  :nut_and_bolt: Development Environment
Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.
```shell
# Clone the repo
git clone https://github.com/wandergithub/Stock-Metrics
# Change directory
cd Stock-Metrics
# Install dependencies
npm i
# Start local server
npm start
```


###  :file_folder: File Structure


```
.
├── src
│   ├── __tests__
│   │   
│   ├── assets
│   │   ├── appscreenshots
│   │   │   ├── mobile2.png
│   │   │   └── mobile1.png
│   │   ├── icon.png
│   │   └── arrow-1.psd
│   ├── Components
│   │   └── Component.js
│   ├── modules
│   │   └── module.js
│   ├── redux
│   │   └── config.js
│   ├── App.js
│   ├── index.css
│   └── index.js
│       
├── .eslintrc.json
├── .gitignore
├── LICENSE
└── README.md
```


 ###  :fire: Contribution

 Your contributions are always welcome and appreciated. Following are the things you can do to contribute to this project.

 1. **Report a bug** <br>
 If you think you have encountered a bug, and I should know about it, feel free to report it [here]() and I will take care of it.

 2. **Request a feature** <br>
 You can also request for a feature [here](), and if it will viable, it will be picked for development.  

 3. **Create a pull request** <br>
 It can't get better then this, your pull request will be appreciated by the community. You can get started by picking up any open issues from [here]() and make a pull request.

 > If you are new to open-source, make sure to check read more about it [here](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) and learn more about creating a pull request [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github).


 ### :cactus: Branches

 I use an agile continuous integration methodology, so the version is frequently updated and development is really fast.

1. **`dev`** is the development branch.

2. **`main`** is the production branch.

3. No other permanent branches should be created in the main repository, you can create feature branches but they should get merged with the master.

**Steps to work with feature branch**

1. To start working on a new feature, create a new branch prefixed with `feat` and followed by feature name. (ie. `feat-FEATURE-NAME`)
2. Once you are done with your changes, you can raise PR.

**Steps to create a pull request**

1. Make a PR to `stage` branch.
2. Comply with the best practices and guidelines e.g. where the PR concerns visual elements it should have an image showing the effect.
3. It must pass all continuous integration checks and get positive reviews.

After this, changes will be merged.

##  :camera: Gallery
<img src="src\assets\appScreenshots\mobile3.png" style="width:50%; margin: 10px;">
<img src="src\assets\appScreenshots\mobile-2.png" style="width:50%; margin: 10px;">
<img src="src\assets\appScreenshots\mobile-1.png" style="width:50%; margin: 10px;">


## :star2: Credit/Acknowledgment
- <a href="https://iexcloud.io">IEX Cloud</a>
- <a href='https://.pngtree.com/so/Gráfico'>Gráfico png de .pngtree.com/</a>
- <a href='https://www.behance.net/sakwadesignstudio'>Original design idea by Nelson Sakwa on Behance.</a>

##  :lock: License
This project is [MIT](./LICENSE) licensed.
