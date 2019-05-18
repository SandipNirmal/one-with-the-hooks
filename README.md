# One with the Hooks

Experiments with new [React Hooks](https://reactjs.org/docs/hooks-intro.html) API.

## Use Effect in Nutshell

1. Watch every change

```
useEffect(() => ... )
```

2. Watch Nothing

```
useEffect(() => ..., [] )
```

3. Watch specific value (state)

```
useEffect(() => ..., [state])
```
