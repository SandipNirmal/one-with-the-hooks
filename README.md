# One with the Hooks

Experiments with new [React Hooks](https://reactjs.org/docs/hooks-intro.html) API.

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
