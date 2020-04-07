export default {
  server: {
    type: 'object',
    title: 'Language Server',
    order: 10,
    properties: {
      tool: {
        type: 'string',
        title: 'Tool',
        description: 'Requires restart to take effect.',
        order: 10,
        default: 'rls',
        enum: [
          {
            value: 'rls',
            description: 'reason-language-server: recommended.',
          },
          {
            value: 'ols',
            description: 'ocaml-lsp: merlin based language server.',
          },
        ],
      },
    },
  },

  rls: {
    type: 'object',
    title: 'Reason Language Server',
    order: 20,
    properties: {
      refmt: {
        type: ['null', 'string'],
        title: 'refmt',
        description: 'Provide a custom location for the `refmt` binary',
        order: 10,
      },
      lispRefmt: {
        type: ['null', 'string'],
        title: 'lispRefmt',
        description: 'Provide a location for the reason-lisp `lispRefmt` binary',
        order: 20,
      },
      formatWidth: {
        type: ['null', 'integer'],
        title: 'Format width',
        description: 'Format width',
        order: 30,
        default: 80,
      },
      autoRebuild: {
        type: 'boolean',
        title: 'Auto rebuild on save',
        description: 'Auto-run bsb / done on file save',
        order: 40,
        default: true,
      },
    },
  },

  ols: {
    type: 'object',
    title: 'OCaml LSP',
    order: 30,
    properties: {
      path: {
        type: ['null', 'string'],
        title: 'path',
        description: 'Provide a custom location for the `ocaml-lsp` binary',
        order: 10,
      }
    },
  },

  autocompleteResultsFirst: {
    type: 'boolean',
    title: 'Show Language Server autocomplete results first',
    description:
      'If checked, Language Server suggestions will be placed before ' +
      'the rest of autocomplete results (e.g. snippets etc.). ' +
      'Requires restart to take effect.',
    default: true,
    order: 40,
  },
  formatOnSave: {
    type: 'boolean',
    title: 'Auto format code on save',
    description: 'Auto-run refmt / done on file save',
    order: 50,
    default: true,
  },
};
