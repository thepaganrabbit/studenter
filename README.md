# Studenter

## Description

A web application to manage students. The backend or API will be built using NestJs (Coming Eventually).

### Template

If anyone is interested in the base of the project it is available as the template branch. 

#### A Little about the project structure.

## Routing

Routing for this application is set up in the routes array as seen in routing/index.ts:

```TypeScript
export const routes: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[] =
  [
    {
      path: '/',
      element: <Home />,
      index: true,
    } as IndexRouteProps,
  ];

```

All routes are handled by the routeManager for the intial routes for the base application (website/etc).

```TypeScript
export const routeManager = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route {...route} key={short.generate()} />
      ))}
    </Routes>
  );
};

```

Route Guards:

Protected routes can be as simple as awrapper component or possibly a HOC is there are shared values. Below is a simple example which also is present in the base project.

```TypeScript
// Route Guard
const SampleGuard = ({ children }: PropsBase) => {
  React.useEffect(() => {
    alert('Impliment any route guard in here.');
    return () => {}
  }, []);
  return <>{children}</>;
};

// implementation in route array
export const routes: PathRouteProps[] | LayoutRouteProps[] | IndexRouteProps[] =
  [
    {
      path: '/guard',
      element: (
        <SampleGuard>
          <Home />
        </SampleGuard>
      ),
    } as PathRouteProps,
  ];

```

## Store

Generally all the application types are in the types.ts file, so when creating new modules add them as a type in the RootModel interface within the file types.ts and then register them in store/models/RootModel.ts.

### Tech

1. React
2. TypeScript
3. Rematch
4. Scss
5. Bulma
6. MUI DataTable
7. React-Router