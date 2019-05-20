# One with the Hooks

Experiments with new [React Hooks](https://reactjs.org/docs/hooks-intro.html) API.

I also have written article about the same, you can read it over [here](https://medium.com/@MiSandipNirmal/getting-started-with-react-hooks-f0b5c1e3e0e7)

## Use Effect in Nutshell

1. Run `useEffect` on every state change.

```
useEffect(() => ... )
```

2. Watch Nothing (Run `useEffect` just once.) This acts more like `componentDidMount`.

```
useEffect(() => ..., [] )
```

3. Run `useEffect` on side effect of changes of Watched value (state)

```
useEffect(() => ..., [state])
```
