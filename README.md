
# Ravn React Code Challenge
A task management app that allows you to browse and add tasks to users


## Author
Dewitt Scott Chavez Ponce
- [@dchavezp](https://github.com/dchavezp)


## Screenshots
Folder Structure

![Folder Structure Screenshot](https://res.cloudinary.com/dwg8fjcio/image/upload/v1678725729/folder-structure_gsxr99.png)

Dashborad

![Dashboard View ](https://res.cloudinary.com/dwg8fjcio/image/upload/v1678726483/dashboard_eoidwm.png)

Filter Action

![Dashboard View ](https://res.cloudinary.com/dwg8fjcio/image/upload/v1678726361/Ravn-React-Code-Challenge_o5941b.gif)

New Task Action
![New Task View](https://res.cloudinary.com/dwg8fjcio/image/upload/v1678726653/create_task_modal_zge6tm.gif)

## Usage

The project structure is based in group components by features. This makes working with the code easier since all the code for each feature is collocated in the same place making it easy to update and add to.

- About Frame motion: It helps to create animations just creating from the initial of a initial state and a animate state
- About RxJs it helps to communicate components using reactive programming
- About Eslint: Helps to write good code and avoid mistakes
- About typescript: It helps to handle tipes on components props
- About Styled Components: It helps to create Styles of components and setting styles from rules
- About Vite: Provides out-of-the-box support for TypeScript, JSX, CSS
- About Date fns: It helps to handle dates
- About Apollo Client: It helps to handle Graphql Request

Theming was thinking in helps to develop using a theme object to set the css values from the design tokens of Design System: 

```typescript
export const theme = {
	typography: {
		display: {
			xL: {
				"font-size": "64px",
				"line-height": "88px",
				"letter-spacing": "1px"
			}...
		},
		body: {
			xL: {
				"font-size": "20px",
				"line-height": "32px",
				"letter-spacing": "0.75px"
			}...
		}
	},
	colors: {
		neutral: {
			"1": "#FFFFFF",
			"2": "#94979A",
			"3": "#393D41",
			"4": "#2C2F33",
			"5": "#222528",
		},
		primary: {
			"1": "#F4CCC8",
			"2": "#EBA59E",
			"3": "#E27D73",
			"4": "#DA584B",
		}...
	},
	borderRadius: {
		lg: "24px",
		md: "16px",
		s: "8px",
		xs: "4px"
	}
};
```

Example of Usage


```typescript
import { theme } from "@/theme/theme";
import styled from "styled-components";

export const StyledApplicationSidebar = styled.div`
    max-width:232px;
    height:100%;
    background:${theme.colors.neutral[4]};
    border-radius:${theme.borderRadius.lg};
    display:flex;
    flex-direction: column;
    align-items:center;
    padding-top:12px;
    gap:8px;
`;

```

### References 

- https://profy.dev/article/react-folder-structure
- https://www.youtube.com/watch?v=p9PAmqpCWgA
- https://blog.webdevsimplified.com/2022-07/react-folder-structure/



## 🔗 Technologies and Library Links

- Typescript
- React
- [Framer Motion](https://www.framer.com/motion/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [RxJs](https://rxjs.dev/)
- [Styled Components](https://styled-components.com/docs/api)
- [React Day Picker](https://react-day-picker.js.org/)
- [Datefns](https://date-fns.org/)
- [Vite](https://vitejs.dev/)
- [Vite Tsconfig paths](https://www.npmjs.com/package/vite-tsconfig-paths)
- [Eslint](https://eslint.org/)



## Run Locally

Clone the project

```bash
  git clone https://github.com/dchavezp/ravn-react-code-challenge.git
```

Go to the project directory

```bash
  cd ravn-react-code-challenge
```

Install dependencies

```bash
  yarn install
```

Start the dev server

```bash
  yarn run dev
```

