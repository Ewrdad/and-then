export type ReturnState = 'success' | 'failure' | 'retry' | 'skip';

export interface EventMeta {
  description?: string;
}

export interface EventBody {
  type: string;
  content?: unknown;
}

export type Action = (event: Event) => ReturnState | Promise<ReturnState>;

export interface ActionOptions {
  retryAmount?: number;
  timeout?: string;
}

export interface Event {
  name: string;
  timestamp: string;
  meta?: EventMeta;
  body?: EventBody;
  action?: Action;
  actionOptions?: ActionOptions;
}

export interface Situation {
  name: string;
  events: Event[];
}

export interface ScenarioMeta {
  description?: string;
}

export interface Scenario {
  name: string;
  scenarioFileVersion: number;
  meta: ScenarioMeta;
  situations: Situation[];
}
