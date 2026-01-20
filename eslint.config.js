import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [ 'dist' ],
  test: [ 'test/**/*.js' ],
  build: [
    'eslint.config.js',
    'rollup.config.js'
  ]
};

export default [
  {
    ignores: files.ignored
  },

  // build
  ...bpmnIoPlugin.configs.node.map(config => {

    return {
      ...config,
      files: files.build
    };
  }),

  // support "with" import
  {
    files: files.build,
    languageOptions: {
      ecmaVersion: 2025
    }
  },

  // lib + test
  ...bpmnIoPlugin.configs.node.map(config => {

    return {
      ...config,
      ignores: files.build
    };
  }),

  // test
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: files.test
    };
  })
];
