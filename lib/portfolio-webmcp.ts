import {
  publicEvidence,
  expandedCareerEvidence,
  cases,
} from './portfolio-data';
import { defaults, estimateCapacity, type CapacityInput } from './capacity';
import { machineProfile } from './machine-profile';
type Registry = {
  registerTool: (
    tool: unknown,
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};
export function registerPortfolioTools() {
  const context = (document as unknown as { modelContext?: Registry })
    .modelContext;
  if (!context?.registerTool) return;
  const lifetime = new AbortController();
  const tools = [
    {
      name: 'portfolio_get_profile',
      title: 'Read Osmar’s structured profile',
      description:
        'Read public career dates, project ownership, outcomes, stack, provenance and evidence limits. No model calls or private data.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      execute: (input: unknown) => {
        if (
          !input ||
          typeof input !== 'object' ||
          Array.isArray(input) ||
          Object.keys(input).length
        )
          throw new Error('This tool accepts an empty object only.');
        return machineProfile;
      },
    },
    {
      name: 'portfolio_get_evidence',
      title: 'Read Osmar’s public portfolio',
      description:
        'Read the approved public career evidence and project-stage limits. No private accounts or inference calls.',
      inputSchema: {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true, untrustedContentHint: true },
      execute: (input: unknown) => {
        if (
          !input ||
          typeof input !== 'object' ||
          Array.isArray(input) ||
          Object.keys(input).length
        )
          throw new Error('This tool accepts an empty object only.');
        return {
          evidence: publicEvidence + '\n' + expandedCareerEvidence,
          projects: cases.map((c) => ({
            id: c.id,
            title: c.label,
            outcome: c.outcome,
          })),
        };
      },
    },
    {
      name: 'portfolio_estimate_capacity',
      title: 'Estimate illustrative AI capacity',
      description:
        'Calculate explicit model-memory and output-throughput lower bounds. These are hypothetical assumptions, not observed production results.',
      inputSchema: {
        type: 'object',
        properties: {
          parametersB: { type: 'number', exclusiveMinimum: 0, maximum: 10000 },
          bits: { type: 'number', exclusiveMinimum: 0, maximum: 64 },
          memoryGiB: { type: 'number', exclusiveMinimum: 0 },
          requestsPerMinute: { type: 'number', exclusiveMinimum: 0 },
          outputTokens: { type: 'number', exclusiveMinimum: 0 },
          tokensPerSecondPerReplica: { type: 'number', exclusiveMinimum: 0 },
          headroomPercent: {
            type: 'number',
            minimum: 0,
            exclusiveMaximum: 100,
          },
        },
        required: Object.keys(defaults),
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: (input: unknown) => estimateCapacity(input as CapacityInput),
    },
  ];
  for (const tool of tools) {
    try {
      Promise.resolve(
        context.registerTool(tool, { signal: lifetime.signal }),
      ).catch(() => {});
    } catch {}
  }
  return () => lifetime.abort();
}
