# 9
Actions always have a type and usually a payload.

`dispatch()` X **CRUD-like methods**:
 1. Actions communicate to the store an event or a command;
 2. The store decides what to do with the action;
 3. Indirection. The component isn't tightly coupled with the rest of the application;

Convention for naming actions:

`"[source_of_action] event or command the action corresponds to"`

`props<T>()`

The dispatch of an `Action` by itself doesn't affect the `Store` state.

> An `Action` just informs the `Store` that an __event__ has occurred or that a __command__ was issued by the component

#### Tasks:
1. Create `auth.actions.ts`;
2. Create login `Action`;
3. Check results on Redux DevTools;

# 10

Trick for grouping actions together: `action.types.ts`.

#### Tasks:
1. Create `logout` `Action`;
2. Create `action.types.ts`;
3. Use alias at import;

# 11

Reducers answer the question:

> What should the store do in response to an action?

Comes from de __reduce__ functional programming operation.

>The Reducer receives de State, an Action, and then calculates a new State.

`on()` comes from the NgRx API and tells the Reducer to which Action are we responding to.

A Reducer function:
- Defines the initial state;
- Tells the Store what to do in response to an Action;

#### Tasks:
1. Change to AuthState;
2. Create initialAuthState;
3. Create Reducer;
4. Change `auth.module.ts`;
5. Remove metaReducer;

# 12

An Action is composed of some data (`payload` - optional) and a `type`.

The Reducer does creates a new Store depending on the action type that triggered it.

#### Tasks:
1. Check for our first store data modification;

## 13. How to read (query) the data from the Store?

The store is an Observable that emits global application values.

__`store/init` & `store/update-reducers` (Actions)__:
- (init) NgRx store initial action dispatched when app starts;
- (update-reducers) Action dispatched when we add feature reducers to our application;
- Used if we want to do something in response to those initialization events;

#### Task:
Display information according to what is queried from the store:

1. Inject the store service in the component;
2. Log the store state to check what is emitted;
3. Hide/Display login and logout buttons (reactive-style);
4. Assign state variables according to the store state;

## 14. NgRx Selectors

Makes the query of the data more efficient.

`distinctUntilChange` RxJs operator keeps the store from emit the same values.

`select()` is an NgRx operator that both __maps__ and __remove duplicates__ (it's basically a combination `map()` and a `distinctUntilChanged()`)

The notion of a mapping function with memory that keeps a previously calculated value cached is what makes a Selector.

> In a pure mapping functions, output does not changes until its input changes.

If the input does not change, why should we run a pure function again?

__`createSelector()`__ arguments:
- __Multiple mapping functions__: for selecting state fragments, for example;
- Projector function;

Functions like `createSelector()` are known in __functional programming__ as memoized functions. Keeps in memory the results of a calculation.

> Selector: It's a mapping function with memory

Combination of selectors.


#### Task:

1. Replace `map()` for `select()`;
2. Create selector functions;
3. The second selector functions should nest the first function;

































