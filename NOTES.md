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

> An `Action` just informs the `Store` that an event has occurred or that a command was issued by the component

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

An Action is composed of some data (`payload`) and a `type`.

The Reducer does creates a new Store depending on the action type that triggered it.

#### Tasks:
1. Check for our first store data modification;

## 13 How to read (query) the data from the Store?




































