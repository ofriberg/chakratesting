export const project = {
  __typename: "Project",
  id: "87066980-75d8-44fe-a159-63d7f6bcc12c",
  name: "Oscar Test",
  primarySimplifiedDatasetId: null,
  account: {
    __typename: "Account",
    id: "bcdd1b0e-ffa6-420f-9fd1-8331c55e790f",
    name: "Plant-Dev"
  },
  mainScenario: {
    __typename: "Scenario",
    id: "f79b26c5-0d64-464a-a40f-9a0876c667de",
    name: "Default",
    status: "FULFILLED",
    ruleProcessingStatus: "FAILED",
    withLayerExpansion: true,
    datasets: [
      {
        __typename: "Dataset",
        id: "139a0bd8-f5e7-4244-92ea-e1a8893d6238",
        name: "K-20.ifc"
      },
      {
        __typename: "Dataset",
        id: "8f990c25-5e93-4915-a0d4-ec2ed0feb973",
        name: "Hugin Ro FU Plan01.ifc"
      }
    ],
    createdAt: "1652087847941",
    updatedAt: "1661940075073"
  },
  pipelines: {
    __typename: "Pipelines",
    id: "87066980-75d8-44fe-a159-63d7f6bcc12c",
    nodes: [],
    status: "FAILED"
  },
  pipelineStepLists: [
    {
      __typename: "PipelineStepList",
      id: "3fc4ca29-330f-443c-aa24-41b3bb7f5048",
      name: "Oscars lista igen",
      description: "beskrivning rivning",
      accountSearchable: false,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
            sourceType: "BUILDING_ELEMENTS",
            prefix: "plant::buildingElement::",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: "plant::rawMaterial::id",
            buildingElementIdColumn: "jkjkj"
          },
          id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
          name: "My step2 999",
          description: "My step2 desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701586896"
        }
      ]
    },
    {
      __typename: "PipelineStepList",
      id: "5a824423-408c-4f8e-8f7e-b1e0f8118119",
      name: "",
      description: "",
      accountSearchable: false,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            sourceType: "BUILDING_ELEMENT_PRODUCTS",
            prefix: "plant::buildingElement::product::test",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: null,
            buildingElementIdColumn: "plant::buildingElement::id"
          },
          id: "ee4df7b7-df16-4760-b127-678df968b21e",
          name: "Join BE products",
          description: "My step desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701497803"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "96df197d-19a9-4787-a460-74f070772bed",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "656bcb00-1e6c-4b36-a53a-a604bbcf5113",
                column: "TestCol 90",
                dataType: "STRING",
                description: "jljkljkljlj jlkjkjkj",
                rules: []
              },
              {
                __typename: "ColumnMapping",
                id: "285d99af-e19a-4985-864e-e87fde095b01",
                column: "Test col 4330990",
                dataType: "STRING",
                description: "setjkljagkljkl kjklajklj",
                rules: []
              }
            ]
          },
          join: null,
          id: "96df197d-19a9-4787-a460-74f070772bed",
          name: "Steg 1",
          description: "Steg 1",
          accountSearchable: false,
          type: "COLUMN_MAPPING",
          createdAt: "1657865104778"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        }
      ]
    },
    {
      __typename: "PipelineStepList",
      id: "3eb7a994-3a9a-4480-8d62-96cee8228403",
      name: "Test12345",
      description: "Ny steglista",
      accountSearchable: false,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            sourceType: "BUILDING_ELEMENT_PRODUCTS",
            prefix: "plant::buildingElement::product::test",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: null,
            buildingElementIdColumn: "plant::buildingElement::id"
          },
          id: "ee4df7b7-df16-4760-b127-678df968b21e",
          name: "Join BE products",
          description: "My step desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701497803"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        }
      ]
    },
    {
      __typename: "PipelineStepList",
      id: "df3b0dfb-0990-4045-9e52-60e4ece38e51",
      name: "Test234",
      description: "",
      accountSearchable: true,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
            sourceType: "BUILDING_ELEMENTS",
            prefix: "plant::buildingElement::",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: "plant::rawMaterial::id",
            buildingElementIdColumn: "jkjkj"
          },
          id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
          name: "My step2 999",
          description: "My step2 desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701586896"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            sourceType: "BUILDING_ELEMENT_PRODUCTS",
            prefix: "plant::buildingElement::product::test",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: null,
            buildingElementIdColumn: "plant::buildingElement::id"
          },
          id: "ee4df7b7-df16-4760-b127-678df968b21e",
          name: "Join BE products",
          description: "My step desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701497803"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
            sourceType: "BUILDING_ELEMENTS",
            prefix: "plant::buildingElement::",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: "plant::rawMaterial::id",
            buildingElementIdColumn: "jkjkj"
          },
          id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
          name: "My step2 999",
          description: "My step2 desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701586896"
        }
      ]
    },
    {
      __typename: "PipelineStepList",
      id: "93d3f26e-2914-4738-b44c-e73659c40e41",
      name: "Oscars lista",
      description: "list beskrv",
      accountSearchable: false,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
            sourceType: "BUILDING_ELEMENTS",
            prefix: "plant::buildingElement::",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: "plant::rawMaterial::id",
            buildingElementIdColumn: "jkjkj"
          },
          id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
          name: "My step2 999",
          description: "My step2 desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701586896"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
            sourceType: "BUILDING_ELEMENTS",
            prefix: "befields::",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: "rmIdCol",
            buildingElementIdColumn: null
          },
          id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
          name: "Test mitt nya steg",
          description: "bra steg",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1658487243530"
        },
        {
          __typename: "PipelineStep",
          sequence: {
            __typename: "PipelineStepSequenceData",
            id: "e52a987c-113f-4e6d-addd-a68ab67f0b62",
            steps: [
              {
                __typename: "PipelineStep",
                id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
                name: "Test mitt nya steg",
                description: "bra steg",
                accountSearchable: false,
                type: "JOIN",
                createdAt: "1658487243530"
              },
              {
                __typename: "PipelineStep",
                id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
                name: "My step2 999",
                description: "My step2 desc",
                accountSearchable: false,
                type: "JOIN",
                createdAt: "1657701586896"
              },
              {
                __typename: "PipelineStep",
                id: "34649e43-303c-4ce7-aa50-3a9eb9713ac4",
                name: "Test steg Nytt simon",
                description: "detta är ett bra steg",
                accountSearchable: false,
                type: "JOIN",
                createdAt: "1658486744118"
              },
              {
                __typename: "PipelineStep",
                id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
                name: "Test mitt nya steg",
                description: "bra steg",
                accountSearchable: false,
                type: "JOIN",
                createdAt: "1658487243530"
              },
              {
                __typename: "PipelineStep",
                id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
                name: "Mitt första steg",
                description:
                  "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
                accountSearchable: true,
                type: "COLUMN_MAPPING",
                createdAt: "1657864998865"
              }
            ]
          },
          columnMapping: null,
          join: null,
          id: "e52a987c-113f-4e6d-addd-a68ab67f0b62",
          name: "seq",
          description: "seq",
          accountSearchable: false,
          type: "SEQUENCE",
          createdAt: "1661271777859"
        }
      ]
    },
    {
      __typename: "PipelineStepList",
      id: "7b3d3321-aa51-47ce-b450-17d6a3015202",
      name: "Testlista1",
      description: "Ny steglistaddf",
      accountSearchable: true,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            sourceType: "BUILDING_ELEMENT_PRODUCTS",
            prefix: "plant::buildingElement::product::test",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: null,
            buildingElementIdColumn: "plant::buildingElement::id"
          },
          id: "ee4df7b7-df16-4760-b127-678df968b21e",
          name: "Join BE products",
          description: "My step desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701497803"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        }
      ]
    },
    {
      __typename: "PipelineStepList",
      id: "3ae40290-f107-47e3-b89f-668273dbe5c0",
      name: "Stegosaurus",
      description: "besko",
      accountSearchable: false,
      steps: [
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: null,
          id: "34649e43-303c-4ce7-aa50-3a9eb9713ac4",
          name: "Test steg Nytt simon",
          description: "detta är ett bra steg",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1658486744118"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: null,
          join: {
            __typename: "PipelineStepJoinData",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            sourceType: "BUILDING_ELEMENT_PRODUCTS",
            prefix: "plant::buildingElement::product::test",
            sourceColumns: [],
            sourceDatasetId: null,
            sourceKeys: [],
            keys: [],
            rawMaterialIdColumn: null,
            buildingElementIdColumn: "plant::buildingElement::id"
          },
          id: "ee4df7b7-df16-4760-b127-678df968b21e",
          name: "Join BE products",
          description: "My step desc",
          accountSearchable: false,
          type: "JOIN",
          createdAt: "1657701497803"
        },
        {
          __typename: "PipelineStep",
          sequence: null,
          columnMapping: {
            __typename: "PipelineStepColumnMappingData",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            columnMappings: [
              {
                __typename: "ColumnMapping",
                id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
                column: "fart",
                dataType: "BOOL",
                description: "fart",
                rules: []
              }
            ]
          },
          join: null,
          id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
          name: "Mitt första steg",
          description:
            "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
          accountSearchable: true,
          type: "COLUMN_MAPPING",
          createdAt: "1657864998865"
        },
        {
          __typename: "PipelineStep",
          sequence: {
            __typename: "PipelineStepSequenceData",
            id: "fd704957-c875-4e64-ae7b-7550dca75971",
            steps: [
              {
                __typename: "PipelineStep",
                id: "96df197d-19a9-4787-a460-74f070772bed",
                name: "Steg 1",
                description: "Steg 1",
                accountSearchable: false,
                type: "COLUMN_MAPPING",
                createdAt: "1657865104778"
              },
              {
                __typename: "PipelineStep",
                id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
                name: "Mitt första steg",
                description:
                  "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
                accountSearchable: true,
                type: "COLUMN_MAPPING",
                createdAt: "1657864998865"
              },
              {
                __typename: "PipelineStep",
                id: "ee4df7b7-df16-4760-b127-678df968b21e",
                name: "Join BE products",
                description: "My step desc",
                accountSearchable: false,
                type: "JOIN",
                createdAt: "1657701497803"
              },
              {
                __typename: "PipelineStep",
                id: "ee4df7b7-df16-4760-b127-678df968b21e",
                name: "Join BE products",
                description: "My step desc",
                accountSearchable: false,
                type: "JOIN",
                createdAt: "1657701497803"
              }
            ]
          },
          columnMapping: null,
          join: null,
          id: "fd704957-c875-4e64-ae7b-7550dca75971",
          name: "Teststeg",
          description: "hej",
          accountSearchable: false,
          type: "SEQUENCE",
          createdAt: "1658320318620"
        }
      ]
    }
  ],
  pipelineSteps: [
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: null,
      join: {
        __typename: "PipelineStepJoinData",
        id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
        sourceType: "BUILDING_ELEMENTS",
        prefix: "befields::",
        sourceColumns: [],
        sourceDatasetId: null,
        sourceKeys: [],
        keys: [],
        rawMaterialIdColumn: "rmIdCol",
        buildingElementIdColumn: null
      },
      id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
      name: "Test mitt nya steg",
      description: "bra steg",
      accountSearchable: false,
      type: "JOIN",
      createdAt: "1658487243530"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: null,
      join: {
        __typename: "PipelineStepJoinData",
        id: "eccc3d74-7271-4b58-9d6f-2920553dc6a9",
        sourceType: "BUILDING_ELEMENTS",
        prefix: "bla",
        sourceColumns: [],
        sourceDatasetId: null,
        sourceKeys: [],
        keys: [],
        rawMaterialIdColumn: "hej",
        buildingElementIdColumn: null
      },
      id: "eccc3d74-7271-4b58-9d6f-2920553dc6a9",
      name: "Test",
      description: "hej",
      accountSearchable: false,
      type: "JOIN",
      createdAt: "1658487403164"
    },
    {
      __typename: "PipelineStep",
      sequence: {
        __typename: "PipelineStepSequenceData",
        id: "e52a987c-113f-4e6d-addd-a68ab67f0b62",
        steps: [
          {
            __typename: "PipelineStep",
            id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
            name: "Test mitt nya steg",
            description: "bra steg",
            accountSearchable: false,
            type: "JOIN",
            createdAt: "1658487243530"
          },
          {
            __typename: "PipelineStep",
            id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
            name: "My step2 999",
            description: "My step2 desc",
            accountSearchable: false,
            type: "JOIN",
            createdAt: "1657701586896"
          },
          {
            __typename: "PipelineStep",
            id: "34649e43-303c-4ce7-aa50-3a9eb9713ac4",
            name: "Test steg Nytt simon",
            description: "detta är ett bra steg",
            accountSearchable: false,
            type: "JOIN",
            createdAt: "1658486744118"
          },
          {
            __typename: "PipelineStep",
            id: "3e64fcc8-0a23-40bc-a075-dd49e5333fc3",
            name: "Test mitt nya steg",
            description: "bra steg",
            accountSearchable: false,
            type: "JOIN",
            createdAt: "1658487243530"
          },
          {
            __typename: "PipelineStep",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            name: "Mitt första steg",
            description:
              "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
            accountSearchable: true,
            type: "COLUMN_MAPPING",
            createdAt: "1657864998865"
          }
        ]
      },
      columnMapping: null,
      join: null,
      id: "e52a987c-113f-4e6d-addd-a68ab67f0b62",
      name: "seq",
      description: "seq",
      accountSearchable: false,
      type: "SEQUENCE",
      createdAt: "1661271777859"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: null,
      join: {
        __typename: "PipelineStepJoinData",
        id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
        sourceType: "BUILDING_ELEMENTS",
        prefix: "plant::buildingElement::",
        sourceColumns: [],
        sourceDatasetId: null,
        sourceKeys: [],
        keys: [],
        rawMaterialIdColumn: "plant::rawMaterial::id",
        buildingElementIdColumn: "jkjkj"
      },
      id: "cab956c8-3e8a-46ae-980f-8dcf831d5ee0",
      name: "My step2 999",
      description: "My step2 desc",
      accountSearchable: false,
      type: "JOIN",
      createdAt: "1657701586896"
    },
    {
      __typename: "PipelineStep",
      sequence: {
        __typename: "PipelineStepSequenceData",
        id: "a590808b-51cc-460b-a2ae-2c80ba920812",
        steps: []
      },
      columnMapping: null,
      join: null,
      id: "a590808b-51cc-460b-a2ae-2c80ba920812",
      name: "Testsekvens",
      description: "sekvens",
      accountSearchable: false,
      type: "SEQUENCE",
      createdAt: "1661329467946"
    },
    {
      __typename: "PipelineStep",
      sequence: {
        __typename: "PipelineStepSequenceData",
        id: "fd704957-c875-4e64-ae7b-7550dca75971",
        steps: [
          {
            __typename: "PipelineStep",
            id: "96df197d-19a9-4787-a460-74f070772bed",
            name: "Steg 1",
            description: "Steg 1",
            accountSearchable: false,
            type: "COLUMN_MAPPING",
            createdAt: "1657865104778"
          },
          {
            __typename: "PipelineStep",
            id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
            name: "Mitt första steg",
            description:
              "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
            accountSearchable: true,
            type: "COLUMN_MAPPING",
            createdAt: "1657864998865"
          },
          {
            __typename: "PipelineStep",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            name: "Join BE products",
            description: "My step desc",
            accountSearchable: false,
            type: "JOIN",
            createdAt: "1657701497803"
          },
          {
            __typename: "PipelineStep",
            id: "ee4df7b7-df16-4760-b127-678df968b21e",
            name: "Join BE products",
            description: "My step desc",
            accountSearchable: false,
            type: "JOIN",
            createdAt: "1657701497803"
          }
        ]
      },
      columnMapping: null,
      join: null,
      id: "fd704957-c875-4e64-ae7b-7550dca75971",
      name: "Teststeg",
      description: "hej",
      accountSearchable: false,
      type: "SEQUENCE",
      createdAt: "1658320318620"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: {
        __typename: "PipelineStepColumnMappingData",
        id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
        columnMappings: [
          {
            __typename: "ColumnMapping",
            id: "ff36273a-f47b-4c70-a1df-fef702a4db3a",
            column: "fart",
            dataType: "BOOL",
            description: "fart",
            rules: []
          }
        ]
      },
      join: null,
      id: "4fdec68d-a9c6-40ea-b99c-741c61a02b7a",
      name: "Mitt första steg",
      description:
        "Ett litet steg för Oscar, ett massivt jevla steg för mänskligheten.",
      accountSearchable: true,
      type: "COLUMN_MAPPING",
      createdAt: "1657864998865"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: null,
      join: {
        __typename: "PipelineStepJoinData",
        id: "ee4df7b7-df16-4760-b127-678df968b21e",
        sourceType: "BUILDING_ELEMENT_PRODUCTS",
        prefix: "plant::buildingElement::product::test",
        sourceColumns: [],
        sourceDatasetId: null,
        sourceKeys: [],
        keys: [],
        rawMaterialIdColumn: null,
        buildingElementIdColumn: "plant::buildingElement::id"
      },
      id: "ee4df7b7-df16-4760-b127-678df968b21e",
      name: "Join BE products",
      description: "My step desc",
      accountSearchable: false,
      type: "JOIN",
      createdAt: "1657701497803"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: null,
      join: null,
      id: "34649e43-303c-4ce7-aa50-3a9eb9713ac4",
      name: "Test steg Nytt simon",
      description: "detta är ett bra steg",
      accountSearchable: false,
      type: "JOIN",
      createdAt: "1658486744118"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: {
        __typename: "PipelineStepColumnMappingData",
        id: "785de02a-dc68-43d6-9a37-54fbd3a35560",
        columnMappings: [
          {
            __typename: "ColumnMapping",
            id: "c610c99f-c32f-426e-af8e-8171f5d5ddd4",
            column: "Test basba 2",
            dataType: "STRING",
            description: "do this",
            rules: []
          },
          {
            __typename: "ColumnMapping",
            id: "3c35b4f9-62e5-4d45-9957-5d7af8bc3b8b",
            column: "BSAB",
            dataType: "STRING",
            description: "test bsabs",
            rules: []
          },
          {
            __typename: "ColumnMapping",
            id: "8bbef3a2-945b-45d9-ae73-7f8d9d483972",
            column: "Test",
            dataType: "STRING",
            description: "hej",
            rules: []
          }
        ]
      },
      join: null,
      id: "785de02a-dc68-43d6-9a37-54fbd3a35560",
      name: "Test steg 1",
      description: "Det är ett bra steg",
      accountSearchable: false,
      type: "COLUMN_MAPPING",
      createdAt: "1657910450677"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: {
        __typename: "PipelineStepColumnMappingData",
        id: "96df197d-19a9-4787-a460-74f070772bed",
        columnMappings: [
          {
            __typename: "ColumnMapping",
            id: "656bcb00-1e6c-4b36-a53a-a604bbcf5113",
            column: "TestCol 90",
            dataType: "STRING",
            description: "jljkljkljlj jlkjkjkj",
            rules: []
          },
          {
            __typename: "ColumnMapping",
            id: "285d99af-e19a-4985-864e-e87fde095b01",
            column: "Test col 4330990",
            dataType: "STRING",
            description: "setjkljagkljkl kjklajklj",
            rules: []
          }
        ]
      },
      join: null,
      id: "96df197d-19a9-4787-a460-74f070772bed",
      name: "Steg 1",
      description: "Steg 1",
      accountSearchable: false,
      type: "COLUMN_MAPPING",
      createdAt: "1657865104778"
    },
    {
      __typename: "PipelineStep",
      sequence: null,
      columnMapping: {
        __typename: "PipelineStepColumnMappingData",
        id: "77e985d9-2480-4802-8f60-ff6af23c0c25",
        columnMappings: [
          {
            __typename: "ColumnMapping",
            id: "6127e724-06b3-4eb4-b34b-5a2c6655e576",
            column: "asdf",
            dataType: "STRING",
            description: "asdf",
            rules: []
          }
        ]
      },
      join: null,
      id: "77e985d9-2480-4802-8f60-ff6af23c0c25",
      name: "Steg 1244",
      description: "",
      accountSearchable: false,
      type: "COLUMN_MAPPING",
      createdAt: "1661332134235"
    }
  ],
  buildingFrame: "YVB + IVB ",
  constructionType: "Affärslokaler",
  totalCost: null,
  materialCost: null,
  quantityApproximationComment: null,
  isQuantityApproximationSubmitted: false,
  stories: 4,
  frameMaterial: null,
  projectType: "NEW_BUILDING",
  projectStatus: "IN_PROGRESS",
  BIMImages: [
    {
      __typename: "BIMImage",
      description: "Tak",
      url:
        "https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2018/4/19/49bb9c6d-8d69-4b91-b183-1e9285f6d572/bigOriginal.jpg"
    },
    {
      __typename: "BIMImage",
      description: "Tak copy",
      url:
        "https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2018/4/19/49bb9c6d-8d69-4b91-b183-1e9285f6d572/bigOriginal.jpg"
    },
    {
      __typename: "BIMImage",
      description: "Tak copy (2)",
      url:
        "https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2018/4/19/49bb9c6d-8d69-4b91-b183-1e9285f6d572/bigOriginal.jpg"
    },
    {
      __typename: "BIMImage",
      description: "Tak copy (3)",
      url:
        "https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2018/4/19/49bb9c6d-8d69-4b91-b183-1e9285f6d572/bigOriginal.jpg"
    },
    {
      __typename: "BIMImage",
      description: "Tak final version",
      url:
        "https://cached-images.bonnier.news/gcs/bilder/epi-30-dn/UploadedImages/2018/4/19/49bb9c6d-8d69-4b91-b183-1e9285f6d572/bigOriginal.jpg"
    }
  ],
  reportPages: [
    "method-page",
    "weight-summary-page",
    "introduction-page",
    "first-page",
    "gwp-summary-page",
    "abstract-page",
    "bsab-detail-page",
    "building-element-page",
    "give-thanks-page",
    "lca-modules-page",
    "s-b-e-f-page",
    "raw-material-pages",
    "building-element-pages",
    "bsab-summary-page",
    "b-s-a-b-image-page"
  ],
  qtos: [
    {
      __typename: "DatasetQto",
      id: "42ec3e20-a1c9-42fb-ad3a-af0afada0e32",
      name: "Micke test",
      query: {
        __typename: "DsrQuery",
        filter: [
          {
            NOT: {
              exclude: false,
              BuildingElementComponentSubGroup: {
                includes: "exkl"
              }
            }
          }
        ],
        group: [
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementComponentSubGroup",
            as: "Position",
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductBSAB",
            as: "Test",
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementName",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BIMLayer",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BIMEntity",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "datasetId",
            as: null,
            hide: false
          }
        ],
        aggregations: [
          {
            __typename: "DsrQueryAggregation",
            col: "A1_A5PerBTA",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "guid",
            op: "count",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: "Building element count",
            hide: false
          }
        ],
        diffSupport: {
          __typename: "DsrDiffSupport",
          groups: [
            {
              __typename: "DsrQueryJoinGroup",
              key: "galt",
              filter: [
                {
                  "plant::dataset::name": {
                    includes: "k"
                  }
                }
              ],
              columns: []
            }
          ],
          extraPrimaryFilter: [
            {
              exclude: false,
              "plant::dataset::name": {
                includes: "v"
              }
            }
          ]
        },
        sort: [
          {
            __typename: "DsrQuerySort",
            col: "A1_A5PerBTA",
            desc: true
          }
        ],
        topN: 45
      }
    },
    {
      __typename: "DatasetQto",
      id: "da201fc3-430b-431b-a1a2-62508765ce43",
      name: "Mappa BSAB",
      query: {
        __typename: "DsrQuery",
        filter: [],
        group: [
          {
            __typename: "DsrQueryGroup",
            col: "ProductBSAB",
            as: "Test2",
            hide: null
          }
        ],
        aggregations: [
          {
            __typename: "DsrQueryAggregation",
            col: "A1_A5PerBTA",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "guid",
            op: "count",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: "Building element count",
            hide: false
          }
        ],
        diffSupport: {
          __typename: "DsrDiffSupport",
          groups: [],
          extraPrimaryFilter: []
        },
        sort: [
          {
            __typename: "DsrQuerySort",
            col: "A1_A5PerBTA",
            desc: true
          }
        ],
        topN: 45
      }
    },
    {
      __typename: "DatasetQto",
      id: "773990a7-8616-482f-8949-ed0f7af04cf5",
      name: "Granska BSAB-koder",
      query: {
        __typename: "DsrQuery",
        filter: [
          {
            NOT: {
              exclude: false,
              ProductRawMaterialId: {
                includes: "55f74cd3-7573-4049-927d-5cd8d8f89e52"
              }
            }
          },
          {
            NOT: {
              exclude: false,
              BuildingElementComponentSubGroup: {
                includes: "exkl"
              }
            }
          }
        ],
        group: [
          {
            __typename: "DsrQueryGroup",
            col: "ProductBSAB",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementUnit",
            as: null,
            hide: false
          }
        ],
        aggregations: [
          {
            __typename: "DsrQueryAggregation",
            col: "guid",
            op: "count",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: "BuildingElementCount",
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "A1_A5PerBTA",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "BuildingElementAmount",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: "max",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductArea",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductVolume",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "A1_A5",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "weight",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          }
        ],
        diffSupport: {
          __typename: "DsrDiffSupport",
          groups: [
            {
              __typename: "DsrQueryJoinGroup",
              key: "comp",
              filter: [
                {
                  "plant::dataset::name": {
                    includes: "v1"
                  }
                }
              ],
              columns: []
            },
            {
              __typename: "DsrQueryJoinGroup",
              key: "total",
              filter: [
                {
                  NOT: {
                    "plant::dataset::name": "is_null"
                  }
                }
              ],
              columns: []
            }
          ],
          extraPrimaryFilter: [
            {
              exclude: false,
              "plant::dataset::name": {
                includes: "v0"
              }
            }
          ]
        },
        sort: [
          {
            __typename: "DsrQuerySort",
            col: "ProductBSAB",
            desc: true
          }
        ],
        topN: 46
      }
    },
    {
      __typename: "DatasetQto",
      id: "b5e3a975-bd1c-4133-8312-e892ebda0020",
      name: "Mappa K-modell",
      query: {
        __typename: "DsrQuery",
        filter: [
          {
            NOT: {
              exclude: false,
              BuildingElementComponentSubGroup: {
                includes: "exkl"
              }
            }
          }
        ],
        group: [
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementComponentSubGroup",
            as: "Position",
            hide: false
          }
        ],
        aggregations: [],
        diffSupport: {
          __typename: "DsrDiffSupport",
          groups: [],
          extraPrimaryFilter: []
        },
        sort: [
          {
            __typename: "DsrQuerySort",
            col: "A1_A5PerBTA",
            desc: true
          }
        ],
        topN: 47
      }
    },
    {
      __typename: "DatasetQto",
      id: "c58a9bae-2dd1-4e15-baec-a0198c196009",
      name: "Granska BuildingElements",
      query: {
        __typename: "DsrQuery",
        filter: [
          {
            NOT: {
              exclude: false,
              BuildingElementComponentSubGroup: {
                includes: "exkl"
              }
            }
          }
        ],
        group: [
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementComponentSubGroup",
            as: "Position",
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "otherFields.modelName",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BIMLayer",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductBSAB",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BIMEntity",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementName",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementUnit",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductUnitWeight",
            as: null,
            hide: false
          }
        ],
        aggregations: [
          {
            __typename: "DsrQueryAggregation",
            col: "guid",
            op: "count",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: "BuildingElementCount",
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "A1_A5PerBTA",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "BuildingElementAmount",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: "max",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductVolume",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductArea",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductLength",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "weight",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: "Product, Weight",
            hide: false
          }
        ],
        diffSupport: {
          __typename: "DsrDiffSupport",
          groups: [
            {
              __typename: "DsrQueryJoinGroup",
              key: "va",
              filter: [
                {
                  "plant::dataset::name": {
                    includes: "v"
                  }
                }
              ],
              columns: []
            }
          ],
          extraPrimaryFilter: [
            {
              exclude: false,
              "plant::dataset::name": {
                includes: "v"
              }
            }
          ]
        },
        sort: [
          {
            __typename: "DsrQuerySort",
            col: "A1_A5PerBTA",
            desc: true
          },
          {
            __typename: "DsrQuerySort",
            col: "BuildingElementAmount",
            desc: true
          }
        ],
        topN: 45
      }
    },
    {
      __typename: "DatasetQto",
      id: "a959681c-7a49-4744-9ffb-03fe2b8dd09f",
      name: "Granska material ",
      query: {
        __typename: "DsrQuery",
        filter: [
          {
            NOT: {
              exclude: false,
              BuildingElementComponentSubGroup: {
                includes: "exk"
              }
            }
          }
        ],
        group: [
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementComponentSubGroup",
            as: "Position",
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "BuildingElementName",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductRawMaterialId",
            as: "Råmaterial",
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductName",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductUnit",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductThickness",
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryGroup",
            col: "ProductUnitWeight",
            as: null,
            hide: false
          }
        ],
        aggregations: [
          {
            __typename: "DsrQueryAggregation",
            col: "A1_A5PerBTA",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductAmount",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductVolume",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductArea",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductLength",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "weight",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          },
          {
            __typename: "DsrQueryAggregation",
            col: "ProductCost",
            op: "sum",
            reduceAggOp: "sum",
            withinGuidOp: null,
            as: null,
            hide: false
          }
        ],
        diffSupport: {
          __typename: "DsrDiffSupport",
          groups: [
            {
              __typename: "DsrQueryJoinGroup",
              key: "va",
              filter: [
                {
                  "plant::dataset::name": {
                    includes: "v"
                  }
                }
              ],
              columns: []
            }
          ],
          extraPrimaryFilter: [
            {
              exclude: false,
              "plant::dataset::name": {
                includes: "v"
              }
            }
          ]
        },
        sort: [
          {
            __typename: "DsrQuerySort",
            col: "A1_A5PerBTA",
            desc: false
          }
        ],
        topN: 20
      }
    }
  ],
  datasets: [
    {
      __typename: "Dataset",
      id: "139a0bd8-f5e7-4244-92ea-e1a8893d6238",
      name: "K-20.ifc",
      recordCount: 4728,
      rowCount: 4728,
      colCount: 100,
      file: {
        __typename: "File",
        id: "a28c22a2-630e-47ed-8f9b-ee32fd696c0d",
        filename: "K-20.ifc",
        signedUrlRead:
          "https://storage.googleapis.com/plant-app-files/a28c22a2-630e-47ed-8f9b-ee32fd696c0d?GoogleAccessId=plant-backend%40plant-293310.iam.gserviceaccount.com&Expires=1663366854&Signature=RP4lMKDMsYfxkC9U5fPaEUNjKN59raQ9zeIF7Yy3D5J2agQ59nQQ7T7NvAlgEoJ3HVk0rBmsFzPfe%2FV6VehMB3HjlH8%2FDlvDXI94Es1foOoEq7WmcpaG2ueQW5ZnK3bJKwqUIMsz3UUVzOHEo%2F3Rxu%2FRoKJzh0kjCVcZAvxKqkQvU51ELQMZJB1jsfcrl94D8sXvN%2Bu4gQepXGv6L6GAryWyUtE0OFZAu9VB4zpXncD3WMf%2BflnADWvIgd7vxWbQB6MgkT7eAfQCQT7mrsORIcdB3N6llH4GP9pBmQJv3nCKutdIrIc0boR1S%2B8BjRf4K8WxmCoeDF0aE64SNTofBg%3D%3D"
      },
      status: "FULFILLED",
      sourceType: "IFC",
      scenarios: [
        {
          __typename: "Scenario",
          id: "f79b26c5-0d64-464a-a40f-9a0876c667de"
        }
      ]
    },
    {
      __typename: "Dataset",
      id: "8f990c25-5e93-4915-a0d4-ec2ed0feb973",
      name: "Hugin Ro FU Plan01.ifc",
      recordCount: 792,
      rowCount: 792,
      colCount: 138,
      file: {
        __typename: "File",
        id: "1ab727cc-be94-4722-a639-12067e445441",
        filename: "Hugin Ro FU Plan01.ifc",
        signedUrlRead:
          "https://storage.googleapis.com/plant-app-files/1ab727cc-be94-4722-a639-12067e445441?GoogleAccessId=plant-backend%40plant-293310.iam.gserviceaccount.com&Expires=1663366854&Signature=clUQUZwHOSAQQwjGtGvnaN%2FPLhoPxPRUPyF4CNeiL%2FtPF6Lxrw449DPAueer6I%2Bmf6rjufSy2lBMWvSVvLdJbBK7MLh%2FodV77oFKDEsmz%2B8jsb%2BzByKsVJ6sL8FSR%2Fvvo2AqZmoPqyX7eFn1GkCQH6ZNSPz8F6aAQwy7zRaytM974kOXzQtFt0UTm6qZcH3ypE%2FjMzbRN%2BdW1W6TU7rA7cR2zU7SMLEt13d3LsFVCd1nK0v3dnPPBstQMUOsOX643e3SE9MCTBUEMY1Z4MsSKxy5hDobazUktVW2N0mNnb9tHDl%2FAwA4iCj0fRxlAQUVUAj3sI8QaQJcThBUJul3Lw%3D%3D"
      },
      status: "FULFILLED",
      sourceType: "IFC",
      scenarios: [
        {
          __typename: "Scenario",
          id: "f79b26c5-0d64-464a-a40f-9a0876c667de"
        }
      ]
    },
    {
      __typename: "Dataset",
      id: "721472f3-165d-434f-9e2f-3b44e1ee3b23",
      name: "Kalkylark grundläggning - Barkarbystaden - Indata.csv",
      recordCount: 1,
      rowCount: 1,
      colCount: 8,
      file: {
        __typename: "File",
        id: "767479a7-f6e6-4794-8a41-f4d2ca9b53a2",
        filename: "Kalkylark grundläggning - Barkarbystaden - Indata.csv",
        signedUrlRead:
          "https://storage.googleapis.com/plant-app-files/767479a7-f6e6-4794-8a41-f4d2ca9b53a2?GoogleAccessId=plant-backend%40plant-293310.iam.gserviceaccount.com&Expires=1663366854&Signature=DbOA3G9BXdTQBEnJtWvigwEBZ8OkVaBnUKd%2Fu%2FUCyUOnS9%2FkgUwTIZZdQbgm4xy6vZAlOljoSRmJiJQCCkhTnm7yD3cRO4pUcghBq9k7FBm1ADSX9Lgn2bNLunYor06KTs2CC23Ou3KKVtD0krUXmN6yQHZTv7PyOsQVFPjY64PB54P%2BEp2Rpu%2FE6yzNozEBuirIoEW2KMaXZGK0ZEiLMryo3%2FnaWZCpUrpQGG3AE8RZ2zTeLLjiGVOK%2FC2X0M2m1hqJDjC1EFGQ5gh%2Fuhdjd3WnIbv3uf9ZRFKycTWiXVfkTFGbE6xfoRzWYgkTR830kjbl0GkDYYqlZCnqQ8HUwA%3D%3D"
      },
      status: "FULFILLED",
      sourceType: "IFC",
      scenarios: []
    },
    {
      __typename: "Dataset",
      id: "388c01c2-b2a8-434b-b960-696093b45cf7",
      name: "Schablon - installationer Eden.csv",
      recordCount: 6,
      rowCount: 6,
      colCount: 7,
      file: {
        __typename: "File",
        id: "2bf9217d-7379-4f53-b4d3-c487250562cf",
        filename: "Schablon - installationer Eden.csv",
        signedUrlRead:
          "https://storage.googleapis.com/plant-app-files/2bf9217d-7379-4f53-b4d3-c487250562cf?GoogleAccessId=plant-backend%40plant-293310.iam.gserviceaccount.com&Expires=1663366854&Signature=r%2B8cVsqOzMU0QTF6oLTpObBkAg31Sw228RD51sZSoB3x0ZO%2FhgoNk3o0ZJJVzkOi8h%2FNn%2BeRJj7Gj4E80xIBPqMtQjQKcfbqRQa0tBtayyyEBb0M4wqBhSJXYMixBTmXliDhUi1%2BcsrF4INZ2aF4GcyNu48lqMV63%2BFiMFopmtckaaZz%2F%2BE0ZkLdCv%2BfAYePQr2r5I%2BhGx9gsPRT8g43tnkzyEHeAlWKcev%2BNXkQTfZ7SUIYIFTZco2K7N2kb4KalhvKKfSH7BXSHABwKJirPLhdFcI8MgsLrEzigHBVl67%2FhJAllnYfznOFzRC5SAALGVej0kocMyByi7UzWRNqUg%3D%3D"
      },
      status: "FULFILLED",
      sourceType: "IFC",
      scenarios: []
    }
  ],
  description: "Beskrivning123",
  reportSummary: "",
  reportTitle: "Titel",
  reportAuthor: "Öskar",
  reportSubTitle: "subt",
  reportReferencePageText: "",
  reportLogoUrl:
    "https://www.plant.se/wp-content/uploads/2018/10/Plant-new-logo.svg",
  reportThanksTo: "",
  yearsLifeTime: null,
  area: 18862,
  rawMaterialsValidAt: "1647385200000",
  declaredBuildingParts: [
    {
      __typename: "DeclaredBuildingPart",
      id: "53e2e064-449d-431b-a9ca-81f8f006a112",
      classificationSystem: "SBEF",
      code: "03",
      label: "Rivning av vägg/Bjälklag/Tak",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "3810eb46-fce4-4928-8fc1-e107523d77d3",
      classificationSystem: "SBEF",
      code: "04",
      label: "Rivning övrigt",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "ed2a0b56-407f-4a2d-bd0c-c7bb6d654bee",
      classificationSystem: "SBEF",
      code: "05",
      label: "Rivning för hiss/Trappa",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "2cd6f728-a263-47d9-acb3-aaec148c880b",
      classificationSystem: "SBEF",
      code: "06",
      label: "Håltagning/Förstärkning",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a10f1500-c3e9-49cd-8bc6-4632dfd758f5",
      classificationSystem: "SBEF",
      code: "07",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "af685296-fce4-434d-8181-45d45511db49",
      classificationSystem: "SBEF",
      code: "08",
      label: "Provisorier",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "2c61174e-ecd2-4337-b3e2-484bdc736e7c",
      classificationSystem: "SBEF",
      code: "09",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "2c4ac61f-3e4a-4152-9b49-5fa6ab316254",
      classificationSystem: "SBEF",
      code: "3",
      label: "Stomme",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "5d543c40-6fd6-4f28-912d-00e6296e3bab",
      classificationSystem: "SBEF",
      code: "30",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "4f66d889-e979-4c5e-9113-b17ed559a3a0",
      classificationSystem: "SBEF",
      code: "32",
      label: "Pelare",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "49597baf-a362-4a50-b6bf-ecc82e6c140c",
      classificationSystem: "SBEF",
      code: "35",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "5e3a66f8-16e3-4030-99df-53cf979f1ace",
      classificationSystem: "SBEF",
      code: "38",
      label: "Huskompl stomme",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "9ee7d07a-49c0-402a-9409-50cdca7b0c84",
      classificationSystem: "SBEF",
      code: "39",
      label: "Stomme övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a0e2a2c4-0479-47a4-bd80-a5a4d4a0ad25",
      classificationSystem: "SBEF",
      code: "6",
      label: "Stomkompl/Rumsbildning",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "156ad665-af0f-478f-b820-fac225b09481",
      classificationSystem: "SBEF",
      code: "60",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "ba2e4fd8-b17c-44c9-9239-a9bdfd7a2966",
      classificationSystem: "SBEF",
      code: "61",
      label: "Insida yttervägg",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "335b04a5-537b-4826-9ca7-e71c6624b4ea",
      classificationSystem: "SBEF",
      code: "62",
      label: "Undergolv",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a0173aec-03a5-443d-84b6-96167ea3074e",
      classificationSystem: "SBEF",
      code: "63",
      label: "Innerväggar",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "f07e3e6d-0350-441b-ada3-ccb79dc1332e",
      classificationSystem: "SBEF",
      code: "64",
      label: "Innertak",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "120995ed-9f9a-4614-99fe-369cbe31b757",
      classificationSystem: "SBEF",
      code: "65",
      label: "Invändiga dörrar/Glaspartier",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "c779be86-e203-475f-8fe3-3f165e845637",
      classificationSystem: "SBEF",
      code: "66",
      label: "Invändiga trappor",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "1f1a40c2-8700-498c-9d40-f13c8df85b9e",
      classificationSystem: "SBEF",
      code: "67",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "57a793a5-461a-4609-b44b-857bcca2c494",
      classificationSystem: "SBEF",
      code: "68",
      label: "Stomkompl övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a08335b5-ad0f-4204-bb96-8cdb11ea522f",
      classificationSystem: "SBEF",
      code: "69",
      label: "Rumsbildning övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "abf89fcf-c1c1-467d-aa30-f2f8f9786dd2",
      classificationSystem: "SBEF",
      code: "10",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "8b164244-b640-4a88-9370-78959077e846",
      classificationSystem: "SBEF",
      code: "36",
      label: "Trappor/Hiss-schakt",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "0c392bc6-be6d-46c9-80ab-30a8893f1bda",
      classificationSystem: "SBEF",
      code: "00",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "dfd6bc3f-da0a-4ae4-9bb4-8b56d62f32b3",
      classificationSystem: "SBEF",
      code: "02",
      label: "Rivning av inredning/Utrustning",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "c3136d59-935e-4e1e-937c-82d4e70f1a6f",
      classificationSystem: "SBEF",
      code: "1",
      label: "Mark",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "722ee2a2-339b-45be-87aa-87b71aab1f24",
      classificationSystem: "SBEF",
      code: "31",
      label: "Väggar",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "39060745-d003-4694-b13b-13c26fce00b1",
      classificationSystem: "SBEF",
      code: "33",
      label: "",
      declarationStatus: "NOT_RELEVANT"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "cf73db40-9bbd-4703-884f-3b6452349e8c",
      classificationSystem: "SBEF",
      code: "34",
      label: "Bjälklag/Balkar",
      declarationStatus: "NOT_RELEVANT"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "597ddeb2-5901-4aa6-8bf3-7a872be6976b",
      classificationSystem: "SBEF",
      code: "12",
      label: "Schakt/Fyllning",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "eb2a6291-b01b-4a7b-8ec4-b908eadbc02c",
      classificationSystem: "SBEF",
      code: "13",
      label: "Markförstärkning/Dränering",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "399de541-1aac-4528-bad6-ed7820c5beb7",
      classificationSystem: "SBEF",
      code: "16",
      label: "Vägar/Planer",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "3ffb148c-2d41-46bb-9913-8b76e2c62e89",
      classificationSystem: "SBEF",
      code: "18",
      label: "Markutrustning/Stödmurar",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "29e91578-32d8-4de2-bb2b-8243359cfab8",
      classificationSystem: "SBEF",
      code: "19",
      label: "Mark övrigt",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "6704e576-cf2a-4015-ae8f-ce51a9ffc10a",
      classificationSystem: "SBEF",
      code: "40",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "fcdbddd5-e3d2-42f1-9429-8aef8d68914a",
      classificationSystem: "SBEF",
      code: "41",
      label: "Takstomme",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "f1329218-b7c5-4434-abe0-4018e68cf839",
      classificationSystem: "SBEF",
      code: "42",
      label: "Taklagskompl",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "d819c0d4-5980-43fa-9bd4-8a8d5b7d4dfe",
      classificationSystem: "SBEF",
      code: "43",
      label: "Taktäckning",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "5d3e40a3-73d1-4e5e-8d2c-4a18cf416218",
      classificationSystem: "SBEF",
      code: "44",
      label: "Takfot/Gavlar",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "9a98c2c8-c42f-412a-9fd7-81e4c56afeea",
      classificationSystem: "SBEF",
      code: "45",
      label: "Öppningskompl/Takluckor",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "34f9460b-9d31-4dfd-a49c-3f85eee48ffe",
      classificationSystem: "SBEF",
      code: "46",
      label: "Yttertak övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a8263c67-3473-493f-837a-6a2e57fc3607",
      classificationSystem: "SBEF",
      code: "47",
      label: "Terrasser/Altaner (på yttertak)",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "62f8f8b2-afd9-4aaf-980f-932095e2e4ea",
      classificationSystem: "SBEF",
      code: "48",
      label: "Huskompl tak",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "cdcb8a1e-ca0a-4956-9ce9-aba586f481fc",
      classificationSystem: "SBEF",
      code: "49",
      label: "Plåtarbeten",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "99370323-a1b5-461d-aad1-7096f094ac14",
      classificationSystem: "SBEF",
      code: "7",
      label: "Invändiga ytskikt/Rumskompl",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "4dde6280-83be-4b6e-8060-49eb5d3450cb",
      classificationSystem: "SBEF",
      code: "70",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "c323e3b6-a5f6-424d-9d3e-1e60800497db",
      classificationSystem: "SBEF",
      code: "71",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "93e508ff-a615-4e89-9f0c-55b3d859882e",
      classificationSystem: "SBEF",
      code: "72",
      label: "Ytskikt golv/Trappor",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "5553b56e-cdb9-4a3d-9303-0bf73aa44cd1",
      classificationSystem: "SBEF",
      code: "73",
      label: "Ytskikt vägg",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "91defa18-483e-4de6-aa64-d1395c967ba9",
      classificationSystem: "SBEF",
      code: "74",
      label: "Ytskikt tak/Undertak",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "00b6f247-a550-4859-8a15-d6ea90916533",
      classificationSystem: "SBEF",
      code: "75",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "2ec39dea-5afe-4fea-8497-39042ae9fa71",
      classificationSystem: "SBEF",
      code: "76",
      label: "Vitvaror",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "9f23d8bd-4068-4a88-ad4c-20f6bdfcc082",
      classificationSystem: "SBEF",
      code: "77",
      label: "Skåp och inredningssnickerier",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "905811df-36bd-4047-83ca-d1919fe0a7ca",
      classificationSystem: "SBEF",
      code: "78",
      label: "Rumskompl övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "4a3ac386-1090-44f3-ba78-887618430afc",
      classificationSystem: "SBEF",
      code: "79",
      label: "Rumskompl övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "aa009a68-d4ad-4333-9a77-0094aa56ee1b",
      classificationSystem: "SBEF",
      code: "2",
      label: "Husunderbyggnad",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "744f4699-fe66-4783-a201-ae46daed26f3",
      classificationSystem: "SBEF",
      code: "20",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "fb94fc05-f794-475d-a25b-9d145314cae3",
      classificationSystem: "SBEF",
      code: "21",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "5812e175-47c7-476f-a004-1949d4b4cba2",
      classificationSystem: "SBEF",
      code: "22",
      label: "Schakt/Fyllning hus",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "575b83dc-012b-486b-9b53-f901519e8867",
      classificationSystem: "SBEF",
      code: "23",
      label: "Markförstärkning/Dränering",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "eb55aa44-3304-4afa-b8d6-64fe8796dd07",
      classificationSystem: "SBEF",
      code: "25",
      label: "Kulvert/Tunnlar",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "3b791c8c-bdb2-49bf-8264-5d121c623bf9",
      classificationSystem: "SBEF",
      code: "26",
      label: "Garage (som en del av huset)",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "14ed2c06-6632-4edf-bc3a-3e455fa7abab",
      classificationSystem: "SBEF",
      code: "28",
      label: "Huskompl grund",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "37e3faf3-6241-49e3-bf47-d9c57bc0d620",
      classificationSystem: "SBEF",
      code: "24",
      label: "Grundkonstruktion",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "da979769-1fdb-4c03-9a09-8240bda247ee",
      classificationSystem: "SBEF",
      code: "11",
      label: "Röjning/Rivning/Flyttning",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "b7ece588-ea79-4090-8a29-dad501b8e360",
      classificationSystem: "SBEF",
      code: "15",
      label: "Ledning/Kulvert/Tunnlar",
      declarationStatus: "NOT_RELEVANT"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "153ec008-0f38-4fba-ba7f-7d57cfd8680b",
      classificationSystem: "SBEF",
      code: "14",
      label: "",
      declarationStatus: "NOT_RELEVANT"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "2dd94c26-07cb-42ac-bf51-b5208ec0301f",
      classificationSystem: "SBEF",
      code: "17",
      label: "Trädgård",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "b5efeda4-8522-4cf8-ae95-d5f2e542dd1a",
      classificationSystem: "SBEF",
      code: "5",
      label: "Fasader",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "c35dec12-3749-4d99-82e9-de166f8f8f8e",
      classificationSystem: "SBEF",
      code: "50",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "93c9c4b1-264f-482d-910c-2d5f8c0dbea1",
      classificationSystem: "SBEF",
      code: "51",
      label: "Stomkompl/Utfackning",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "9335a07c-1571-4c90-879c-50fa28842786",
      classificationSystem: "SBEF",
      code: "52",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "44f9c097-eec0-4185-abb5-db879e776521",
      classificationSystem: "SBEF",
      code: "53",
      label: "Fasadbeklädnad/Ytskikt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "6260734f-274e-4ead-83da-4cfe3e4224d3",
      classificationSystem: "SBEF",
      code: "54",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "59b8ea18-6b96-4ebc-a10e-e971967f25b4",
      classificationSystem: "SBEF",
      code: "56",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "eba192d2-ff65-40a1-8149-4ff292092260",
      classificationSystem: "SBEF",
      code: "57",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "5929c710-7e2d-461c-ba83-d1fecafde3ac",
      classificationSystem: "SBEF",
      code: "58",
      label: "Huskompl fasader",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "ebd97b1e-14ab-4705-8d98-afe5e34ea1c1",
      classificationSystem: "SBEF",
      code: "8",
      label: "Installationer",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "adaec512-95fe-4cbc-ac86-b37a13ceeada",
      classificationSystem: "SBEF",
      code: "80",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "68903ca6-f84a-41dd-a419-c60ba37e5638",
      classificationSystem: "SBEF",
      code: "81",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "665d0911-ba29-476f-86d1-2a16fd131d35",
      classificationSystem: "SBEF",
      code: "82",
      label: "Process",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "fd45875a-89ae-4b95-b156-308c66e62789",
      classificationSystem: "SBEF",
      code: "83",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "4080b4f8-2fa0-4bda-97e3-dab6316a47fc",
      classificationSystem: "SBEF",
      code: "84",
      label: "Sanitet/Värme",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "411c83e7-eaf5-4387-a227-ffa475ad4d04",
      classificationSystem: "SBEF",
      code: "85",
      label: "Kyla/Luft",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "4d2a274a-4795-48c9-880b-16d80888c2e0",
      classificationSystem: "SBEF",
      code: "86",
      label: "El",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "db23a97c-4ce3-439f-849e-6c63869ce270",
      classificationSystem: "SBEF",
      code: "87",
      label: "Transport",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "fb9ec4f3-f807-4c30-b4f2-8a3f3715e508",
      classificationSystem: "SBEF",
      code: "88",
      label: "Styr/Regler",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "3ac67960-46cd-4311-b4e2-529f9d726ecb",
      classificationSystem: "SBEF",
      code: "89",
      label: "Installationer övrigt",
      declarationStatus: "DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "ed1a5bcc-d271-4fff-a229-385472c043cb",
      classificationSystem: "SBEF",
      code: "90",
      label: "Sammansatta",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "6c77d2ad-1921-41f3-8819-543bd3b32917",
      classificationSystem: "SBEF",
      code: "91",
      label: "Gemensamma arbeten",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "83105b7c-e6dd-4043-acbc-74404bcbd361",
      classificationSystem: "SBEF",
      code: "92",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "8d849c70-6551-4f71-93a5-dc25ba3bf5d0",
      classificationSystem: "SBEF",
      code: "93",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "4a145668-4c90-4145-9584-a81dadf7d8b6",
      classificationSystem: "SBEF",
      code: "94",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "245059db-aecb-4723-93df-88fb086b248a",
      classificationSystem: "SBEF",
      code: "95",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "947c0c85-dde7-4fbd-a4a7-ea0001eca77a",
      classificationSystem: "SBEF",
      code: "96",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "9481b4fa-290e-49eb-928c-9185f4070257",
      classificationSystem: "SBEF",
      code: "97",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "338995a5-8658-4b20-84d0-fceba76d67da",
      classificationSystem: "SBEF",
      code: "98",
      label: "",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "50f9e7d2-9438-4685-b08b-83c50a63e7f9",
      classificationSystem: "SBEF",
      code: "59",
      label: "Ytterväggar övrigt",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a00a11a1-4112-4374-953e-aef4f2791116",
      classificationSystem: "SBEF",
      code: "55",
      label: "Fönster/Dörrar,Portar/Partier",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "89118235-0137-4ec2-b7fd-607500151fbf",
      classificationSystem: "SBEF",
      code: "29",
      label: "Husunderbyggnad övrigt",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a88fc9f5-d1d8-4e3a-ba10-0959f90503e4",
      classificationSystem: "SBEF",
      code: "99",
      label: "",
      declarationStatus: "NOT_RELEVANT"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "65ba0187-719c-4481-b0b5-81185cc3fcd1",
      classificationSystem: "SBEF",
      code: "0",
      label: "Sammansatta byggdelar",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "627e1603-a3e3-4942-8cca-2f0d64ea0af5",
      classificationSystem: "SBEF",
      code: "4",
      label: "Yttertak",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "c7762697-01c1-42c3-a93f-fffcc44acbf4",
      classificationSystem: "SBEF",
      code: "01",
      label: "Demontering",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "7d5667af-2054-484e-87f2-1b2b2bbe5109",
      classificationSystem: "SBEF",
      code: "27",
      label: "Platta på mark",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "a1c8f4e3-eb59-4266-854a-4ec9b2ff169e",
      classificationSystem: "SBEF",
      code: "9",
      label: "Gemensamma arbeten/Tillfälliga fabriken",
      declarationStatus: "NOT_DECLARED"
    },
    {
      __typename: "DeclaredBuildingPart",
      id: "74324c24-0a35-4b39-8ad1-f6891d149521",
      classificationSystem: "SBEF",
      code: "37",
      label: "Samverkan/Takstomme",
      declarationStatus: "NOT_RELEVANT"
    }
  ],
  LCASystemBoundary: {
    __typename: "LCASystemBoundary",
    A1: "NOT_DECLARED",
    A2: "NOT_DECLARED",
    A3: "NOT_DECLARED",
    A4: "DECLARED",
    A5: "DECLARED",
    B1: "NOT_RELEVANT",
    B2: "NOT_DECLARED",
    B3: "NOT_DECLARED",
    B4: "NOT_DECLARED",
    B5: "NOT_DECLARED",
    B6: "NOT_DECLARED",
    B7: "NOT_DECLARED",
    C1: "NOT_DECLARED",
    C2: "NOT_DECLARED",
    C3: "NOT_DECLARED",
    C4: "NOT_DECLARED",
    D: "NOT_RELEVANT"
  },
  createdAt: "1652087847933"
};
