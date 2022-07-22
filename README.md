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

**Create a Root Model and Match Types to Redux Dispatch**

```TypeScript
import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { RootModel } from '../types';
import { models } from './models/RootModel';

export const store = init({
  models,
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;

```

Create a matching type for the RootState:

```TypeScript
export interface RootModel extends Models<RootModel> {
  test_mod: typeof test_mod;
  student_mod: typeof student_mod;
  message_mod: typeof message_mod;
  assignment_mod: typeof assignment_mod;
}
```

**Create A Model**

```TypeScript
import { createModel } from '@rematch/core';
import { RootModel } from '../../types';

type ComplexTestState = {
  version: string;
};

export const test_mod = createModel<RootModel>()({
  state: {
    version: '0.0.1',
  } as ComplexTestState,
  reducers: {
    increment(state, payload: string) {
      return {
        version: payload,
      };
    },
  },
  effects: (dispatch) => ({
    incrementEffect(payload: string) {
      dispatch.test_mod.increment(payload);
    },
  }),
});
```

**Creating a service**

This is an optional pattern but a pattern I try to use.

```TypeScript
import { format } from 'date-fns';
import { Message, Package, Response, Service } from '../../types';

export class MessageService extends Service {
  constructor() {
    super();
  }
  async GET<T>(data?: Package<T>): Promise<Response<Message[]>> {
    if (data) {
      // gets personal messages
      if (data.type === 'private') {
        return new Promise((resolve) => {
          resolve({
            status: 200,
            data: [
              {
                _id: '344rd',
                title: 'Wondering how it works?',
                sender: { userId: '334d433', name: 'Andy' },
                to: { userId: '323423dd', name: 'Sammy' },
                content: 'this is a message from Andy',
                date: format(new Date(), 'yyyy/dd/MM'),
                status: false,
                approved: true,
                isPrivate: true,
                replies: [],
              },
              {
                _id: '34dfrd',
                title: 'Pressure and Strength?',
                sender: { userId: '334d433', name: 'Andy' },
                to: { userId: '323423dd', name: 'Sammy' },
                content: 'How is grip related to standard pressure of hand?',
                date: format(new Date(), 'yyyy/dd/MM'),
                status: false,
                approved: true,
                isPrivate: true,
                replies: [],
              },
            ],
          });
        });
      } else if (data.type === 'review') {
        return new Promise((resolve) => {
          resolve({
            status: 200,
            data: [
              {
                _id: '344rdsd',
                title: 'Time?',
                sender: { userId: '334d433', name: 'Andy' },
                content: 'What time is class on Wednesday?',
                date: format(new Date(), 'yyyy/dd/MM'),
                status: false,
                approved: false,
                replies: [],
              },
            ],
          });
        });
      }
      // gets a single message
      return new Promise((resolve) => {
        resolve({
          status: 200,
          data: [
            {
              _id: '344rd',
              title: 'Wondering how it works?',
              sender: { userId: '334d433', name: 'Andy' },
              content: 'this is a message from Andy',
              date: format(new Date(), 'yyyy/dd/MM'),
              status: false,
              approved: true,
              replies: [],
            },
          ],
        });
      });
    }
    // gets all messages
    return new Promise((resolve) => {
      resolve({
        status: 200,
        data: [
          {
            _id: '344rd',
            title: 'Wondering how it works?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'this is a message from Andy',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [],
          },
          {
            _id: '344rdd',
            title: 'Age of I-9?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'What is the age range for i=9 travel form?',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [
              {
                _id: 'uurue',
                from: {
                  name: 'Jack Smith',
                  userId: '1222323',
                },
                reply: 'Around 18 but 75 has limits too.',
                date: format(new Date(), 'yyyy/dd/MM'),
              },
              {
                _id: 'uu3rue',
                from: {
                  name: 'Tommy Leru',
                  userId: '1222323',
                },
                reply: '20-70 with no limits > limits apply.',
                date: format(new Date(), 'yyyy/dd/MM'),
              },
            ],
          },
          {
            _id: '34dfrd',
            title: 'Pressure and Strength?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'How is grip related to standard pressure of hand?',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: true,
            replies: [],
          },
          {
            _id: '344rdsd',
            title: 'Time?',
            sender: { userId: '334d433', name: 'Andy' },
            content: 'What time is class on Wednesday?',
            date: format(new Date(), 'yyyy/dd/MM'),
            status: false,
            approved: false,
            replies: [],
          },
        ],
      });
    });
  }
}


```

The Service class:

```TypeScript
export class Service {
  protected baseUrl: string;
  protected errors: Error | string | null;
  public endPoint?: string;
  constructor(URL: string) {
    this.baseUrl = URL;
    this.errors = null;
  }
}
```

**The Provider**

```TypeScript
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
);
```

**Retrieving Data from the store**

Component Level:

```TypeScript
const messages = useSelector(
    (state: RootState) => state.message_mod.messages,
  );
```

**Dispatching Actions**

```TypeScript
  const dispatch = useDispatch<Dispatch>();
  
  React.useEffect(() => {
    dispatch.message_mod.getMessagesToReview('323423dd');
  }, []);
  
```

## Theming

(experimental) The applications theme will be managed in the theme folder using a theme builder class and passed to context.

```TypeScript
export const THEMESETTINGS: ThemeBuilderProps = {
  backgroundLight: '#98D7C2',
  backgroundDark: '#167D7F',
  backgroundPale: '#3DDFE7',
  highlight: '#29A0B1',
  tint: '#94d0d8',
  textColorLight: '#0F1513',
  textColorDark: '#E8F2F2',
  textColorPale: '#061617',
  tintColorLight: '#F0F9F6',
  tintColorDark: '#167D7F',
  tintColorPale: '#29A0B1',
  mode: ModeSelect.LIGHT,
  colors: {
    primary: {
      origin: '#004369',
      tint: '#99b4c3',
      shade: '#00283f',
    },
    secondary: {
      origin: '#01949A',
      tint: '#99d4d7',
      shade: '#01686c',
    },
    tertiary: {
      origin: '#E5DDC8',
      tint: '#f2eee4',
      shade: '#898578',
    },
  },
};

export const theme = new ThemeBuilder(THEMESETTINGS);

// context
export const ThemeContext = React.createContext<ThemeBuilder>(theme);

```

This is added but not tested yet or in full use yet.

Using it:

```TypeScript
const Button = ({ children, onClick }: ButtonProps) => {
  const themeCtx = React.useContext<ThemeBuilder>(ThemeContext);
  return (
    <button
      className="button is-responsive"
      style={{
        backgroundColor: themeCtx.getColorsByMode().tint,
        width: '100%',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

## DataTable

Reusable table in the application. (not fully hooked up)

```TypeScript
const SampleTableUse = () => {
  // for this example pulling from store
   const students = useSelector(
    (state: RootState) => state.student_mod.students,
  );
  // Memoized data to prevent too many re renders (basic init)
  const memoizedStudents = React.useMemo(() => {
    return students;
  }, [students]);
  // Setup the columns (Might put this in use effect depending on renders)
  const studentColumns: MUIDataTableColumnDef[] = [
    {
      label: 'ID',
      name: 'id',
    },
    {
      label: 'First Name',
      name: 'firstName',
    },
    {
      label: 'Last Name',
      name: 'lastName',
    },
    {
      label: 'Middle Initial',
      name: 'middleInitial',
    },
    {
      label: 'Class',
      name: 'class',
    },
    {
      label: 'Class',
      name: 'class',
    },
    {
      label: 'GPA',
      name: 'gpa',
    },
    {
      label: 'File Reference #',
      name: 'fileLink',
    },
  ];
  return (
    <div className="container-room">
      <div
        className="table"
      >
        <DataTable
          title={'Students'}
          data={memoizedStudents}
          columns={studentColumns}
        />
      </div>
    </div>
  );
}

```

### Tech

1. React
2. TypeScript
3. Rematch
4. Scss
5. Bulma
6. MUI DataTable
7. React-Router
8. Date-fns
