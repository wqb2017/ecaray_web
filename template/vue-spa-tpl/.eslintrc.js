module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    // 结尾分好必加
    semi: ['error', 'always'],
    // 避免修改使用 const 声明的变量。
    'no-const-assign': 'error',
    // 不要定义未使用的变量。
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    // 字符串拼接操作符 (Infix operators) 之间要留空格。
    'space-infix-ops': 'error',
    // 不允许有连续多行空行。
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    //点号操作符须与属性需在同一行。
    'dot-location': ['error', 'property'],
    // 文件末尾留一空行。
    'eol-last': 'error',
    // 函数调用时标识符与括号间不留间隔。
    'func-call-spacing': ['error', 'never'],
    // 构造函数要以大写字母开头。
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    // 无参的构造函数调用时要带上括号。
    'new-parens': 'error',
    // 对象中定义了存值器，一定要对应的定义取值器。
    'accessor-pairs': 'error',
    // 避免对类名重新赋值。
    'no-class-assign': 'error',
    // 不要定义冗余的函数参数。
    'no-dupe-args': 'error',
    // 类中不要定义冗余的属性。
    'no-dupe-class-members': 'error',
    // 对象字面量中不要定义重复的属性。
    'no-dupe-keys': 'error',
    // switch 语句中不要定义重复的 case 分支。
    'no-duplicate-case': 'error',
    // 不要使用多余的括号包裹函数。
    'no-extra-parens': ['error', 'functions'],
    // switch 一定要使用 break 来将条件分支正常中断。
    'no-fallthrough': 'error',
    // 属性前面不要加空格。
    'no-whitespace-before-property': 'error',
    //禁止使用alert confirm prompt
    'no-alert': 0,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
}
