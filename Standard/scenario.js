/**
 * @typedef {'success'|'failure'|'retry'|'skip'} ReturnState
 */

/**
 * @typedef {Object} EventMeta
 * @property {string} [description]
 */

/**
 * @typedef {Object} EventBody
 * @property {string} type
 * @property {*} content
 */

/**
 * Callback executed when an event fires.
 * @callback Action
 * @param {Event} event
 * @returns {ReturnState|Promise<ReturnState>} Return state or a promise resolving to return state
 */

/**
 * @typedef {Object} ActionOptions
 * @property {number} [retryAmount]
 * @property {string} [timeout] - ISO timestamp or timeout representation
 */

/**
 * @typedef {Object} Event
 * @property {string} name
 * @property {string} timestamp
 * @property {EventMeta} [meta]
 * @property {EventBody} [body]
 * @property {Action} [action]
 * @property {ActionOptions} [actionOptions]
 */

/**
 * @typedef {Object} Situation
 * @property {string} name
 * @property {Event[]} events
 */

/**
 * @typedef {Object} ScenarioMeta
 * @property {string} [description]
 */

/**
 * @typedef {Object} Scenario
 * @property {string} name
 * @property {number} scenarioFileVersion
 * @property {ScenarioMeta} meta
 * @property {Situation[]} situations
 */

/**
 * Enum representing return states for event actions.
 * @readonly
 * @enum {ReturnState}
 */
const returnStateEnum = {
  SUCCESS: "success",
  FAILURE: "failure",
  RETRY: "retry",
  SKIP: "skip",
};

/** @type {Scenario} */
export const example = {
  name: "example",
  scenarioFileVersion: 1,
  meta: {
    description: "This is an example scenario.",
  },
  situations: [
    {
      name: "Event Stream 1",
      events: [
        {
          name: "Event 1",
          timestamp: "0000-00-05T00:00:00Z",
          meta: {
            description: "This is the first event.",
          },
          body: {
            type: "text",
            content: "Hello, World!",
          },
          action: (event) => {
            console.log("Event 1 executed");
            return 'success';
          },
          actionOptions: {
            retryAmount: 0,
            timeout: "0000-00-05T00:00:00Z",
          },
        },
      ],
    },
    {
      name: "Event Stream 2",
      events: [],
    },
  ],
};

// Ensure this file is a module so TypeScript can resolve JSDoc types via import
export default example;
