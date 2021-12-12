![](icon.png)

# Create

## Run

```bash
npm init @me5on
```

## Cleanup before run

In case you have an earlier version stored in the NPX cache. To remove all that cache on *nix (
delete `%LocalAppData%/npm-cache/_npx` on win):

```bash
rm -rf ~/.npm/_npx
```

You can find where the NPM cache is with:

```bash
npm config get cache
```
