module.exports = 
  {
    languageOptions: {
      globals: {
        MyGlobal: true,
      },
    },

    overrides: [
      {
        extends: [
          "eslint:recommended",
          "plugin:@angular-eslint/recommended",
          "plugin:@angular-eslint/template/process-inline-templates",
          "plugin:@typescript-eslint/strict-type-checked",
          "plugin:@typescript-eslint/stylistic-type-checked",
          "plugin:import/recommended",
          "plugin:import/typescript",
          "plugin:rxjs/recommended",
          "plugin:jsdoc/recommended-typescript",
          "plugin:sort/recommended",
          "plugin:deprecation/recommended",
          "plugin:prettier/recommended",
        ],
        files: ["*.ts"],
        overrides: [
          {
            extends: ["plugin:jest/recommended", "plugin:jest/style"],
            files: "*.spec.ts",
            plugins: ["jest"],
            rules: {
              "no-null/no-null": "off",
            },
          },
        ],
        parserOptions: {
          createDefaultProgram: true,
          project: ["./tsconfig.json", "./tsconfig.app.json"],
        },
        plugins: [
          "unused-imports",
          "sort",
          "sort-class-members",
          "jsdoc",
          "rxjs",
          "rxjs-angular",
          "deprecation",
          "no-null",
        ],
        rules: {
          "@angular-eslint/component-selector": [
            "warn",
            {
              prefix: ["app"],
              style: "kebab-case",
              type: "element",
            },
          ],
          "@angular-eslint/directive-selector": [
            "warn",
            {
              prefix: ["app"],
              style: "camelCase",
              type: "attribute",
            },
          ],
          "@angular-eslint/no-duplicates-in-metadata-arrays": "warn",
          "@angular-eslint/no-empty-lifecycle-method": "off",
          "@angular-eslint/pipe-prefix": ["warn", { prefixes: ["app"] }],
          "@angular-eslint/prefer-standalone-component": "warn",
          "@angular-eslint/relative-url-prefix": "warn",
          "@angular-eslint/use-pipe-transform-interface": "warn",
          "@typescript-eslint/consistent-type-assertions": [
            "warn",
            {
              assertionStyle: "as",
              objectLiteralTypeAssertions: "never",
            },
          ],
          "@typescript-eslint/consistent-type-imports": [
            "warn",
            { prefer: "type-imports" },
          ],
          "@typescript-eslint/explicit-function-return-type": "warn",
          "@typescript-eslint/explicit-member-accessibility": [
            "warn",
            {
              accessibility: "explicit",
              overrides: {
                accessors: "explicit",
                constructors: "no-public",
                parameterProperties: "explicit",
              },
            },
          ],
          "@typescript-eslint/no-empty-interface": "off",
          "@typescript-eslint/no-empty-object-type": [
            "error",
            { allowInterfaces: "always" },
          ],
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/no-extraneous-class": "off",
          "@typescript-eslint/no-floating-promises": [
            "warn",
            {
              ignoreIIFE: true,
              ignoreVoid: true,
            },
          ],
          "@typescript-eslint/no-inferrable-types": "off",
          "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
          "@typescript-eslint/no-unnecessary-condition": "off",
          "@typescript-eslint/no-unnecessary-type-parameters": "warn",
          "@typescript-eslint/no-unsafe-argument": "off",
          "@typescript-eslint/no-unsafe-assignment": "off",
          "@typescript-eslint/no-unsafe-call": "off",
          "@typescript-eslint/no-unsafe-declaration-merging": "off",
          "@typescript-eslint/no-unsafe-member-access": "off",
          "@typescript-eslint/no-unsafe-return": "off",
          "@typescript-eslint/no-unused-vars": "off",
          "@typescript-eslint/prefer-nullish-coalescing": "off",
          "@typescript-eslint/restrict-plus-operands": [
            "warn",
            {
              allowAny: true,
              skipCompoundAssignments: false,
            },
          ],
          "@typescript-eslint/restrict-template-expressions": "off",
          "@typescript-eslint/typedef": [
            "warn",
            {
              arrowParameter: true,
              memberVariableDeclaration: true,
              parameter: true,
              propertyDeclaration: true,
            },
          ],
          "@typescript-eslint/unbound-method": [
            "error",
            { ignoreStatic: true },
          ],
          camelcase: ["warn", {}],
          eqeqeq: ["warn", "smart"],
          "import/no-cycle": "error",
          "import/no-unused-modules": [
            "warn",
            {
              memberVariableDeclaration: true,
              parameter: true,
              propertyDeclaration: true,
              unusedExports: true,
            },
          ],
          indent: "off",
          "jsdoc/check-tag-names": [
            "warn",
            { definedTags: ["jest-environment"] },
          ],
          "jsdoc/no-blank-blocks": "warn",
          "jsdoc/require-description-complete-sentence": ["warn", {}],
          "jsdoc/require-jsdoc": [
            "warn",
            {
              contexts: [
                {
                  context: "PropertyDefinition",
                  inlineCommentBlock: true,
                },
                {
                  context: "TSInterfaceDeclaration",
                  inlineCommentBlock: false,
                },
                {
                  context: "TSMethodSignature",
                  inlineCommentBlock: true,
                },
                {
                  context: "TSPropertySignature",
                  inlineCommentBlock: true,
                },
                {
                  context: "TSEnumDeclaration",
                  inlineCommentBlock: false,
                },
                {
                  context: "TSTypeAliasDeclaration",
                  inlineCommentBlock: false,
                },
                {
                  context: "ExportNamedDeclaration",
                  inlineCommentBlock: false,
                },
              ],
              publicOnly: false,
              require: {
                ClassDeclaration: true,
                ClassExpression: true,
                MethodDefinition: true,
              },
            },
          ],
          "lines-between-class-members": ["warn", "always"],
          "no-console": "warn",
          "no-invalid-this": ["error", {}],
          "no-null/no-null": "warn",
          "no-restricted-syntax": [
            "warn",
            {
              message:
                "Do not use getters/setters as they trigger change detection nonstop.",
              selector: "MethodDefinition[kind='set']",
            },
            {
              message:
                "Do not use getters/setters as they trigger change detection nonstop.",
              selector: "MethodDefinition[kind='get']",
            },
          ],
          "no-useless-rename": "warn",
          "no-var": ["warn"],
          "prefer-const": "off",
          "prettier/prettier": ["warn", {}],
          quotes: [
            "warn",
            "double",
            {
              avoidEscape: true,
            },
          ],
          "rxjs-angular/prefer-takeuntil": [
            "warn",
            {
              alias: ["takeUntilDestroyed"],
            },
          ],
          "rxjs/finnish": [
            "warn",
            {
              functions: true,
              methods: true,
              names: {
                "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false,
              },
              parameters: true,
              properties: true,
              strict: false,
              types: {
                "^EventEmitter$": false,
              },
              variables: true,
            },
          ],
          "sort-class-members/sort-class-members": [
            "warn",
            {
              accessorPairPositioning: "getThenSet",
              groups: {
                angular: [
                  {
                    name: "/ng.+/",
                    type: "method",
                  },
                ],
                "methods-private": [
                  {
                    accessibility: "private",
                    type: "method",
                  },
                ],
                "methods-protected": [
                  {
                    accessibility: "protected",
                    type: "method",
                  },
                ],
                "methods-public": [
                  {
                    accessibility: "public",
                    type: "method",
                  },
                ],
                "properties-private": [
                  {
                    accessibility: "private",
                    type: "property",
                  },
                ],
                "properties-protected": [
                  {
                    accessibility: "protected",
                    type: "property",
                  },
                ],
                "properties-public": [
                  {
                    accessibility: "public",
                    type: "property",
                  },
                ],
              },
              order: [
                "[static-properties]",
                "[static-methods]",
                "[conventional-private-properties]",
                "[properties-private]",
                "[properties-protected]",
                "[properties-public]",
                "constructor",
                "[angular]",
                "[accessor-pairs]",
                "[methods-public]",
                "[methods-protected]",
                "[methods-private]",
                "[everything-else]",
              ],
            },
          ],
          "sort-keys": [
            "warn",
            "asc",
            {
              caseSensitive: false,
              natural: true,
            },
          ],
          "sort/string-enums": [
            "warn",
            { caseSensitive: false, natural: true },
          ],
          "sort/string-unions": [
            "error",
            { caseSensitive: false, natural: true },
          ],
          "sort/type-properties": "warn",
          "unused-imports/no-unused-imports": "warn",
        },
        settings: {
          "import/resolver": {
            node: true,
            typescript: true,
          },
        },
      },
      {
        extends: [
          "plugin:@angular-eslint/template/recommended",
          "plugin:prettier/recommended",
        ],
        files: ["*.html"],
        rules: {
          "@angular-eslint/template/alt-text": "warn",
          "@angular-eslint/template/attributes-order": "warn",
          "@angular-eslint/template/banana-in-box": "warn",
          "@angular-eslint/template/click-events-have-key-events": "off",
          "@angular-eslint/template/elements-content": "warn",
          "@angular-eslint/template/eqeqeq": "warn",
          "@angular-eslint/template/interactive-supports-focus": "warn",
          "@angular-eslint/template/label-has-associated-control": "warn",
          "@angular-eslint/template/mouse-events-have-key-events": "warn",
          "@angular-eslint/template/no-autofocus": "warn",
          "@angular-eslint/template/no-call-expression": "warn",
          "@angular-eslint/template/no-distracting-elements": "warn",
          "@angular-eslint/template/no-negated-async": "warn",
          "@angular-eslint/template/no-positive-tabindex": "warn",
          "@angular-eslint/template/prefer-control-flow": "warn",
          "@angular-eslint/template/role-has-required-aria": "warn",
          "@angular-eslint/template/table-scope": "warn",
          "@angular-eslint/template/valid-aria": "warn",
          "prettier/prettier": [
            "warn",
            {
              bracketSameLine: true,
              bracketSpacing: true,
              endOfLine: "auto",
              htmlWhitespaceSensitivity: "strict",
              parser: "angular",
              quoteProps: "preserve",
              singleAttributePerLine: true,
            },
          ],
        },
      },
    ],
    rules: {
      "linebreak-style": ["warn", "windows"],
    },
  };
