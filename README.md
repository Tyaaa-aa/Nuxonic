

# Nuxonic

### An Ionic Nuxt starter template, minimal yet feature rich 
[![Features](https://skillicons.dev/icons?i=nuxt,pinia,typescript,tailwind,npm)](https://skillicons.dev)
## Features 

-   **📱 Ionic Capacitor:** Create cross-platform iOS, Android, and Progressive Web Apps.
-   **🍍 Pinia Store:** Lightweight state management solution. 
-   **⌨️ TypeScript:** Enables type safety and improved development experience.
-   **💨 Tailwind:** Provides a utility-first CSS framework for rapid styling.
-   **🎬 AutoAnimate:** Drop-in animation utility that adds smooth transitions to your web app.

## Getting Started

This starter template provides a clean foundation for your Nuxt 3 Ionic projects. Because of Nuxt's modularity you can remove any unwanted features and customize it to fit your specific needs.

[Nuxt 3 docs](https://nuxt.com/docs/getting-started/introduction) to learn more about Nuxt 3 and its features.
[Ionic docs](https://ionicframework.com/docs/components) to see the ionic components you can and should use

>Ionic components look like this `<ion-component>` however Nuxt auto importing lets you use them like `<IonComponent>` both are valid and it's your preference. 

***You will need [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) depending on which platform you are building for, Android or iOS***
*The [Ionic VSCode Extension](https://ionicframework.com/docs/intro/vscode-extension) is very handy as well*

**Here's a quick guide to get you started:**

1.  **Clone the repository:** Clone this repository or download the zip file.
2.  **Install dependencies:** Run the appropriate installation command based on your package manager (npm, pnpm, yarn, or bun*) 
3.  **Start the development server:** Run the development server command to start the application locally on `http://localhost:3000`
4.  **Customize and develop:** Remove any unwanted features or components and start building your application using Nuxt 3 and Ionic
>*Bun was giving me some issues running so I would stick with NPM for now

**Remember:** This is a minimal starter template. Feel free to add additional features and functionalities as needed for your project.

## Setup

Make sure to install the dependencies:

```
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```
npm run dev
```

## Production

### Build the application for production:

**Generate your Nuxt app static files**
```
npm run generate
```
**Add Android  or ios to your project**
```
npx cap add android
```
```
npx cap add ios
```
**Sync Capacitor project**
```
npx cap sync
```

**Open the project in Android Studio (for Android) or Xcode (for iOS)**:

```
npx cap open android
```

```
npx cap open ios
```
*Alternatively you can use the provided scripts below to run them together conveniently (You need to add android or ios first before running thesm)*
```
npm run android
```
```
npm run ios
```
Once the project is open in Android Studio or Xcode, you can proceed to build and run your application on your chosen platform.

> Remember to run `npx cap sync` after every new build to ensure your Android and/or iOS project is up-to-date.

>If you are having trouble running the app in your emulator try deleting the ```android``` or ```ios``` folder and running ```npx cap add android``` or ```npx cap add ios``` and then try running it again. (Renaming the project can sometimes cause this)

Check out the [Nuxt Capacitor Docs](https://ionic.nuxtjs.org/get-started/enabling-capacitor) for more information on deploying your application.

I hope you enjoy using Nuxonic! If you have any feedback open an issue and I'll take a look.