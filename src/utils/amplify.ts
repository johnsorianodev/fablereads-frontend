import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import outputs from '../../amplify_outputs.json';
import { generateClient } from 'aws-amplify/data'
import { Schema } from "../../amplify/data/resource"
import { Amplify } from 'aws-amplify';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

Amplify.configure(outputs);
export const client = generateClient<Schema>()
