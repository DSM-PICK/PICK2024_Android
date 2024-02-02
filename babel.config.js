module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./app"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@": "./app",
            "@components": "./app/components",
            "@screens": "./app/screens",
            "@assets": "./app/assets",
            "@icons": "./app/assets/icons",
          },
        },
      ],
    ],
  };
};
