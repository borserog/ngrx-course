# Section 1

NgRx => Angular Reactive Extensions.

It's a __State Management Solution__ 

Without state management solution: 

- all data is fetched each time from the backend;
- data is attached to the lifecycle of a component;

NgRx improves UX (removes loading of content) and performance.

__In memory database__ on the client-side.

Saving content is done on the background.

Advantages of State Management Solutions:
1. Reduce HTTP requests to the backend;
2. Data is stored in a in memory database that persists despite component transition (client-side database);
3. Reduces the overall amount of loading indicators in the application; 
4. Sending (saving) content is done on the background;

### Task: _NgRx Setup_
1. `ng add @ngrx/store`
2. `ng add @ngrx/store-devtools`
3. Redux DevTools
4. `npm start`
 

# Lesson 7

Different modules are used to manage different parts of our Store.

Auth module should be __eager loaded__ (always loads). 

>__Eager Loading x Lazy Loading__
>
>By default, NgModules are eagerly loaded, which means that as soon as the app loads, so do all the NgModules, whether or not they are immediately necessary. For large apps with lots of routes, consider lazy loading—a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
__Lazy load:__ reduces the amount of JS the application has to load once it starts. That makes the __application bundle size__ is smaller. 

Imports on app-module are eager loaded (_forRoot()_).

__Scaffolding Command:__ commands used for generating Angular files.

>__Feature Module x Root Module__
>
>A feature module is an organizational best practice, as opposed to a concept of the core Angular API. A feature module delivers a cohesive set of functionality focused on a specific application need such as a user workflow, routing, or forms. While you can do everything within the root module, feature modules help you partition the app into focused areas. A feature module collaborates with the root module and with other modules through the services it provides and the components, directives, and pipes that it shares.

store service api. manages the client side database.

`*noop*`: no operation. RxJs Operator.

It's a good practice to have an `AppState` interface that represents the global state of the application saved inside the store.

>_The store is an observable we can subscribe to_. The values emitted represent what's inside the global application state. 

`dispatch()`: Method from the NgRx API that informs the Store of an Action;

### Task: Generate Feature Module

1. `ng generate store auth/Auth --module auth.module.ts`
2. remove meta reducers
3. Get to the state Auth: {};


# Lesson 8
####Task: Implement the login method:

1. Implement login method;
2. Rename State do AppState;


# Lesson 9
Actions always have a type and usually a payload.

`dispatch()` X **CRUD-like methods**:
 1. Actions communicate to the store an event or a command;
 2. The store decides what to do with the action;
 3. Indirection. The component isn't tightly coupled with the rest of the application;

>__Convention for naming actions:__
>
>`"[source_of_action] event or command the action corresponds to"`

`props<T>()`: carries the payload of an Action.

The dispatch of an `Action` by itself doesn't affect the `Store` state.

> An `Action` just informs the `Store` that an __event__ has occurred or that a __command__ was issued by the component

####Task: Create Actions
1. Create `auth.actions.ts`;
2. Create login `Action`;
3. Check results on Redux DevTools;

# Lesson 10

Trick for grouping actions together: `action.types.ts`.

#### Task: Grouping Actions
1. Create `logout` `Action`;
2. Create `action.types.ts`;
3. Use alias at import;

# Lesson 11

Reducers answer the question:

> What should the Store do in response to an Action?

The idea of a Reducer function comes from the __reduce functional programming operation__.

>The Reducer receives de State, an Action, and then calculates a new State.

`on()` comes from the NgRx API and tells the Reducer to which Action are we responding to.

A Reducer function:
- Defines the initial state;
- Tells the Store what to do in response to an Action (`on()`);

#### Task: Creating a Reducer Function
1. Change to AuthState;
2. Create initialAuthState;
3. Create Reducer;
4. Change `auth.module.ts`;
5. Remove metaReducer;

# Lesson 12

An Action is composed of some data (`payload` - optional) and a `type`.

The Reducer creates a new Store depending on the action type that triggered it.

#### Task:
1. Check for our first store data modification;

# 13. How to read (query) the data from the Store?

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

# 14. NgRx Selectors

Makes the query of the data more efficient.

`distinctUntilChange` RxJs operator keeps the store from emitting the same values.

`select()` is an NgRx operator that both __maps__ and __remove duplicate emissions of the same value__ (it's basically a combination `map()` and a `distinctUntilChanged()`)

The notion of a mapping function with memory that keeps a previously calculated value cached is what makes a Selector.

> In a pure mapping function, output does not changes until its input changes.

If the input does not change, why should we run a pure function again?

__`createSelector()`__ arguments:
- __Multiple mapping functions__: for selecting state fragments, for example;
- Projector function;

Functions like `createSelector()` are known in __functional programming__ as memoized functions. Keeps in memory the results of a calculation.

> Selector: It's a mapping function with memory

Selectors can be combined.


#### Task:

1. Replace `map()` for `select()`;
2. Create selector functions;
3. The second selector functions should nest the first
 function;

# 15.Feature Selectors

Feature modules are modules that are part of our
 application and are included in a root module.
 
Feature modules can have Feature states.

Feature Selector allow for writing selection of Feature
 States in a __typesafe__ way.
 
 __Feature Selectors__: Selects a whole application
  branch from our State.
  
  `createFeatureSelector<[type_of_the_state]> 
  (['name_of_the_property_from_state'])`
 
#### Task: Create a Feature Selector

# 16. Practice Lesson: `logout()` Method

# 17. Practice Lesson: Implement a Route Guard

`AuthGuard`: Special type of Angular Service that
 integrates with the Angular Router.
 
 It implements the `CanActivate` interface.
 
 #### Task: Create Route Guard
 
 1. Create `auth.guard.ts`;
 2. Implement `AuthGuard` service;
 3. Add service to `auth.module.ts`;
 4. Register Guard @app.module.ts;
 5. Inject Store at the AuthGuard Service;
 6. Redirect not logged in users using `router.navigate
 ()` on the AuthGuard Service;
 
 # 18. Effects
 
 
 
 




















