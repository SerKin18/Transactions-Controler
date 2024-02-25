## Задание
Необходимо создать приложение React для управления транзакциями. Предоставить пользователю возможность импортировать список транзакций из CSV файла, изменять статус транзакции, удалять транзакцию и экспортировать отфильтрованный список транзакций в CSV файл.

1.  При нажатии на кнопку импорта у пользователя открывается диалоговое окно с предложением загрузить CSV файл.
2.  При нажатии на "delete" показать пользователю диалоговое окно с вопросом, уверен ли он, что хочет удалить эту транзакцию из из списка.
3.  На странице со списком транзакций вывести данные вместе с пагинацией, и при выборе типа или статуса фильтровать данные в таблице.
4.  При нажатии на "edit" показать пользователю модальное окно с предложением изменить статус транзакции и нажать "Save".
5.  Опционально: При нажатии на кнопку экспорта загрузить для пользователя файл с измененной информацией c примененными фильтрами

## Общие требования
1. **Обязательное использование TypeScript**
2. Использовать **ChakraUI**, **tailwind**, или любую библиотеку компонентов на его основе для верстки интерфейса
3. Использовать **Vite** или **Next.js** в качестве шаблона для проекта
4. Использовать [fake-data.csv](fake-data.csv)
5. Результат опубликовать в github репозиторий













# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
