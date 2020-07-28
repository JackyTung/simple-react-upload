This project is a example to show the basic requirement for building large web application.
(Note: It's not the Best Practice, we just share our experience. The project structure depends on your scenario)

1. follow create-react-app, avoid to use webpack (it's to complicated)
2. easy-managed router (react-router)
3. code splitting based on different components, only loads necessary js file. (react-loadable)
4. easy-managed states, keep all data from the same source. (redux)
5. separate UI logic, data select logic (reselect) and data fetching logic.
6. handle async actions (redux-observable).
7. use third-party design system (material-UI)
8. support i18n (react-i18next)
9. consistent coding style (eslint, prettier)

For more detail introduce of this project, [check here](https://medium.com/htc-research-engineering-blog/talk-about-large-react-project-structure-9ebb321d51df).
