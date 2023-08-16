# Installation and configuration:

- Install node and npm: npm install -g npm
- Create a new react project: npx create-react-app app-name
- run npm run dev and navigate to localhost:3000 to ensure everything is working correctly
- make sure you have a .babelrc file in the root of your directory with the following in it:

```
{
  "presets": ["next/babel"],
  "plugins": []
}
```

- and update eslint:
- "extends": ["next/babel","next/core-web-vitals"]
