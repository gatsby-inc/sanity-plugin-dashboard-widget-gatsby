# Sanity Dashboard Widget: Gatsby

Sanity Studio Dashboard Widget for triggering Gatsby Cloud instances.

## Installing

### Install the dashboard plugin

To get dashboard support in Sanity Studio in general:

`sanity install @sanity/dashboard`

### Install the Gatsby widget plugin

`sanity install dashboard-widget-gatsby`

## Configuring

1. Implement your own dashboardConfig. In your `sanity.json` file, append the following line to the `parts` array:

```json
{
  "implements": "part:@sanity/dashboard/config",
  "path": "src/dashboardConfig.js"
}
```

2. Create the file `src/dashboardConfig.js` and inlcude the `gatsby` widget config like this:

```js
export default {
  widgets: [
    {
      name: 'gatsby',
      options: {
        instances: [
          {
            name: '<previewInstanceName>',
          }
        ]
      }
    }
  ]
}
```

### Widget options

- `name` - The Gatsby Cloud instance name (top-level domain of your Gatsby Cloud instance URL)

## Developing on this module

To simulate using your development version as a real module inside a studio, you can do the following:

- Run `npm install && npm link` from the root of this repository.
- Run `npm run watch` to start developing and build the module when changes are made.

#### Displaying your development version inside a studio

**With the mono-repo's `test-studio`:**

- Bootstrap the monorepo: `npm run bootstrap`
- Add `sanity-plugin-dashboard-widget-gatsby` with the current version number to `package.json` in the `test-studio` root folder (but don't run `npm install` afterwards)
- Run `npm link sanity-plugin-dashboard-widget-gatsby` inside the mono-repo's root.
- Restart the `test-studio`

**With a regular Sanity Studio:**

- Run `npm install`
- Add `sanity-plugin-dashboard-widget-gatsby` with the current version number to `package.json`.
- Run `npm link sanity-plugin-dashboard-widget-gatsby`
- Start the studio

When you are done and have published your new version, you can run `npm unlink` inside this repo, and `npm unlink sanity-plugin-dashboard-widget-gatsby` inside the mono-repo or studio to get back to the normal state. Then run `npm run bootstrap` for the mono-repo or `npm install` inside the regular studio to use the published version.
