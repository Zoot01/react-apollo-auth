<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Zoot01/react-apollo-auth">
    <img src="images/logo.png" alt="Logo"  >
  </a>

<h3 align="center">react-apollo-auth</h3>

  <p align="center">
     Authentication Boilerplate with Create React App and Apollo GraphQL built with typescript and MongoDB. Making use of Jwt access and refresh tokens and the powerful Apollo Context API. 
    <br />
    <a href="https://github.com/Zoot01/react-apollo-auth/issues">Report Bug</a>
    ·
    <a href="https://github.com/Zoot01/react-apollo-auth/issues">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![profile-screenshot]
![login-screenshot]
![signup-screenshot]

This is a blank boilerplate template for anyone looking to use Create React App and Apollo GraphQL, with authentication. This template uses Cookies for more secure authentication and authorization. This authentication Boilerplate with Create React App and Apollo GraphQL built with typescript and MongoDB. Making use of Jwt access and refresh tokens and the powerful Apollo Context API.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][react.js]][react-url]
- [![MongoDB][mongodb]][mongodb-url]
- [![Typescript][typescript]][typescript-url]
- [![Apollo GraphQL][graphql]][graphql-url]
- [![Expressjs][express]][express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Please follow the simple steps below to get the project running on your local machine.

### Prerequisites

You will need a local instance of MongoDB or a MongoDB atlas connection, along with NodeJS and NPM.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Zoot01/react-apollo-auth.git
   ```
2. Install NPM packages for the client
   ```sh
   cd client
   npm install
   ```
3. In a new terminal install NPM packages for the server

   ```sh
   cd server
   npm install
   ```

4. Enter environment variables by chaning `.env.example` to `.env` and entering variables

   ```js
   DATABASE_URL = "mongodb://localhost:27017/react-apollo-auth";
   JWT_ACCESS_SECRET = "somereallylongsecretkey";
   JWT_REFRESH_SECRET = "somereallylongsecretkey";
   ```

5. Start the client

   ```sh
   cd client
   npm run start
   ```

6. Start the server

   ```sh
   cd server
   npm run dev
   ```

7. Vist application and explore
   ```sh
    Local:            http://localhost:3000
    On Your Network:  http://192.168.1.153:3000
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Register a user and login to see all the the applications features. This is just a starting point, explore, add, contribute, critique. Remember this is a bolierplate so features are minimal. The goal is to keep this a barebones as possible.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [✅] Jwt Access Token Cookie - Short lived 30 seconds
- [✅] Jwt Refresh Token Cookie - Long lived 7 days
  - [📛] Add use authorization roles
- [✅] User Profile Dropdown
- [✅] React Context API
- [✅] GraphQL Codegen

See the [open issues](https://github.com/Zoot01/react-apollo-auth/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make things better. Please contribute!

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Discord: Zoot#7045

Project Link: [https://github.com/Zoot01/react-apollo-auth](https://github.com/Zoot01/react-apollo-auth)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Zoot01/react-apollo-auth.svg?style=for-the-badge
[contributors-url]: https://github.com/Zoot01/react-apollo-auth/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Zoot01/react-apollo-auth.svg?style=for-the-badge
[forks-url]: https://github.com/Zoot01/react-apollo-auth/network/members
[stars-shield]: https://img.shields.io/github/stars/Zoot01/react-apollo-auth.svg?style=for-the-badge
[stars-url]: https://github.com/Zoot01/react-apollo-auth/stargazers
[issues-shield]: https://img.shields.io/github/issues/Zoot01/react-apollo-auth.svg?style=for-the-badge
[issues-url]: https://github.com/Zoot01/react-apollo-auth/issues
[license-shield]: https://img.shields.io/github/license/Zoot01/react-apollo-auth.svg?style=for-the-badge
[license-url]: https://github.com/Zoot01/react-apollo-auth/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[dropdown-screenshot]: images/dropdown.png
[login-screenshot]: images/login.png
[profile-screenshot]: images/profile.png
[protected-screenshot]: images/protected.png
[signup-screenshot]: images/signup.png
[next.js]: https://img.shields.io/badge/next.js-4A4A55?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-4A4A55?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://github.com/facebook/react
[mongodb]: https://img.shields.io/badge/mongodb-4A4A55?style=for-the-badge&logo=mongodb&logoColor=green
[mongodb-url]: https://github.com/mongodb/mongo
[typescript]: https://img.shields.io/badge/typescript-4A4A55?style=for-the-badge&logo=typescript&logoColor=blue
[typescript-url]: https://github.com/microsoft/TypeScript
[graphql]: https://img.shields.io/badge/graphql-4A4A55?style=for-the-badge&logo=graphql&logoColor=pink
[graphql-url]: https://github.com/apollographql
[express]: https://img.shields.io/badge/express-4A4A55?style=for-the-badge&logo=express&logoColor=yellow
[express-url]: https://github.com/expressjs/express
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
