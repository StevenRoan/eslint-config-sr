## Usage

#### Install

```sh
# sh
npm install babel-eslint eslint \
  eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react \
  eslint-config-airbnb \
  --save-dev
npm install eslint-config-sr --save-dev
```

Please visit [rules](http://eslint.org/docs/rules) for more detail.

#### Config

Create a file called `.eslintrc.yml` and add code as below to get it work:

```yaml
# .eslintrc.yml
extends:
  - 'sr/browser' # for browser uses
  - 'sr/node' # for node uses
  - 'sr' # whatever
```

If you need only partial configuration, you can do following below:

```yaml
# .eslintrc.yml
extends:
  - "sr/rules/es2015"
  - "sr/rules/style"
```

#### Install IDE/editor plugin

You should install plugin for your IDE or editor.

Please visit http://eslint.org/docs/user-guide/integrations.html for more detail.
