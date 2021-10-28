import { createRouter } from '@backstage/plugin-permission-backend';
import { AllowAllPermissionPolicy } from '@backstage/plugin-permission-node';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  const { logger, config } = env;
  return await createRouter({
    logger,
    config,
    policy: new AllowAllPermissionPolicy(),
  });
}
