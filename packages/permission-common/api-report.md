## API Report File for "@backstage/permission-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import type { DiscoveryApi } from '@backstage/core-plugin-api';

// Warning: (ae-missing-release-tag) "AuthorizeRequest" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AuthorizeRequest = {
  permission: Permission;
  resourceRef?: string;
};

// Warning: (ae-missing-release-tag) "AuthorizeRequestJSON" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AuthorizeRequestJSON = AuthorizeRequest & {
  permission: PermissionJSON;
};

// Warning: (ae-missing-release-tag) "AuthorizeResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AuthorizeResponse =
  | DefinitiveAuthorizeResult
  | ConditionalAuthorizeResult;

// Warning: (ae-missing-release-tag) "AuthorizeResult" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export enum AuthorizeResult {
  // (undocumented)
  ALLOW = 'ALLOW',
  // (undocumented)
  DENY = 'DENY',
  // (undocumented)
  MAYBE = 'MAYBE',
}

// Warning: (ae-missing-release-tag) "ConditionalAuthorizeResult" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type ConditionalAuthorizeResult = {
  result: AuthorizeResult.MAYBE;
  conditions: PermissionCriteria<PermissionCondition<any>>;
};

// Warning: (ae-forgotten-export) The symbol "PermissionMethods" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createPermissions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const createPermissions: <T extends string>(
  permissions: Record<T, PermissionJSON>,
) => Record<T, Permission> & PermissionMethods<T>;

// Warning: (ae-missing-release-tag) "CRUDAction" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export enum CRUDAction {
  // (undocumented)
  CREATE = 'CREATE',
  // (undocumented)
  DELETE = 'DELETE',
  // (undocumented)
  READ = 'READ',
  // (undocumented)
  UPDATE = 'UPDATE',
}

// Warning: (ae-missing-release-tag) "DefinitiveAuthorizeResult" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type DefinitiveAuthorizeResult = {
  result: AuthorizeResult.ALLOW | AuthorizeResult.DENY;
};

// Warning: (ae-missing-release-tag) "Identified" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type Identified<T> = T & {
  id: string;
};

// Warning: (ae-missing-release-tag) "OpaqueAuthorizeRequest" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OpaqueAuthorizeRequest = {
  permission: Permission;
};

// Warning: (ae-missing-release-tag) "Permission" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class Permission {
  constructor(
    name: string,
    attributes: PermissionAttributes,
    resourceType?: string | undefined,
  );
  // (undocumented)
  readonly attributes: PermissionAttributes;
  // (undocumented)
  static fromJSON({
    name,
    attributes,
    resourceType,
  }: PermissionJSON): Permission;
  // (undocumented)
  is(permission: Permission): boolean;
  // (undocumented)
  get isCreate(): boolean;
  // (undocumented)
  get isDelete(): boolean;
  // (undocumented)
  get isRead(): boolean;
  // (undocumented)
  get isRouteVisibility(): boolean;
  // (undocumented)
  get isUpdate(): boolean;
  // (undocumented)
  readonly name: string;
  // (undocumented)
  readonly resourceType?: string | undefined;
  // (undocumented)
  supportsType(type: string): boolean;
}

// Warning: (ae-missing-release-tag) "PermissionAttributes" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type PermissionAttributes = {
  ROUTE_VISIBILITY?: boolean;
  CRUD_ACTION?: CRUDAction;
};

// Warning: (ae-missing-release-tag) "PermissionClient" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class PermissionClient {
  constructor(options: { discoveryApi: DiscoveryApi });
  // (undocumented)
  authorize(
    requests: AuthorizeRequest[],
    options?: PermissionRequestOptions,
  ): Promise<AuthorizeResponse[]>;
}

// Warning: (ae-missing-release-tag) "PermissionCondition" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type PermissionCondition<TParams extends any[] = any> = {
  rule: string;
  params: TParams;
};

// Warning: (ae-missing-release-tag) "PermissionCriteria" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type PermissionCriteria<TQuery> = {
  anyOf: {
    allOf: (TQuery | PermissionCriteria<TQuery>)[];
  }[];
};

// Warning: (ae-missing-release-tag) "PermissionJSON" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type PermissionJSON = {
  name: string;
  attributes: PermissionAttributes;
  resourceType?: string;
};

// Warning: (ae-missing-release-tag) "PermissionRequestOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type PermissionRequestOptions = {
  token?: string;
};

// (No @packageDocumentation comment for this package)
```