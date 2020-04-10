### s1

ngrx => angular reactive extensions;

state management solution 

without state management solution => 

- all data is fetched each time from the backend;
- data is attached to the lifecycle of the component;

ngrx improves UX

in memory database on the client-side

avoid showing excessive loading indicators

saves on the background

1. reduce http requests
2. in memory database that persists despite component transition (client-side database);
3. kill loading indicators (minimal loading indicators)
4. saving data happens on the background

improved UX and performance

**Tasks:**

1. `ng add @ngrx/store`
2. `ng add @ngrx/store-devtools`
3. Redux DevTools
4. `npm start`



state > raw > in memory database status;





### s2

different modules manage different parts of our store

auth module. eager loaded. always loads. **eager load x lazy load.**

lazy load: reduces the amount of js the application has to load once it starts. application bundle size is smaller. 

imports on app-module are eager loaded.

**scaffolding command**

**feature module X root module**

**#7 Tasks:**

1. `ng generate store auth/Auth --module auth.module.ts`
2. remove meta reducers
3. Get to the state Auth: {};



store service api. manages the client side database.

*noop*. no operation.

Type definition of the state inside the store. State interface is the global state saved inside the store.

The store is an observable we can subscribe to. The values emitted are the value of the global application state. 

dispatch() => only way to modify the data inside the store;



 #8 Tasks:

1. Implement login method;
2. Rename State do AppState;

