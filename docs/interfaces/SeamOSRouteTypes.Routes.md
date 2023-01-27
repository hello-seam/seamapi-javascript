[seamapi](../README.md) / [Exports](../modules.md) / [SeamOSRouteTypes](../modules/SeamOSRouteTypes.md) / Routes

# Interface: Routes

[SeamOSRouteTypes](../modules/SeamOSRouteTypes.md).Routes

## Table of contents

### Properties

- [/access\_codes/create](SeamOSRouteTypes.Routes.md#/access_codes/create)
- [/access\_codes/delete](SeamOSRouteTypes.Routes.md#/access_codes/delete)
- [/access\_codes/get](SeamOSRouteTypes.Routes.md#/access_codes/get)
- [/access\_codes/list](SeamOSRouteTypes.Routes.md#/access_codes/list)
- [/access\_codes/update](SeamOSRouteTypes.Routes.md#/access_codes/update)
- [/access\_passes/create](SeamOSRouteTypes.Routes.md#/access_passes/create)
- [/access\_passes/delete](SeamOSRouteTypes.Routes.md#/access_passes/delete)
- [/access\_passes/get](SeamOSRouteTypes.Routes.md#/access_passes/get)
- [/access\_passes/get\_count\_summary](SeamOSRouteTypes.Routes.md#/access_passes/get_count_summary)
- [/access\_passes/list](SeamOSRouteTypes.Routes.md#/access_passes/list)
- [/access\_passes/update](SeamOSRouteTypes.Routes.md#/access_passes/update)
- [/buildings/add\_device](SeamOSRouteTypes.Routes.md#/buildings/add_device)
- [/buildings/add\_user](SeamOSRouteTypes.Routes.md#/buildings/add_user)
- [/buildings/create](SeamOSRouteTypes.Routes.md#/buildings/create)
- [/buildings/delete](SeamOSRouteTypes.Routes.md#/buildings/delete)
- [/buildings/get](SeamOSRouteTypes.Routes.md#/buildings/get)
- [/buildings/get\_count\_summary](SeamOSRouteTypes.Routes.md#/buildings/get_count_summary)
- [/buildings/list](SeamOSRouteTypes.Routes.md#/buildings/list)
- [/buildings/remove\_device](SeamOSRouteTypes.Routes.md#/buildings/remove_device)
- [/buildings/remove\_user](SeamOSRouteTypes.Routes.md#/buildings/remove_user)
- [/buildings/update](SeamOSRouteTypes.Routes.md#/buildings/update)
- [/buildings/update\_user\_role](SeamOSRouteTypes.Routes.md#/buildings/update_user_role)
- [/device\_groups/create](SeamOSRouteTypes.Routes.md#/device_groups/create)
- [/device\_groups/delete](SeamOSRouteTypes.Routes.md#/device_groups/delete)
- [/device\_groups/get](SeamOSRouteTypes.Routes.md#/device_groups/get)
- [/device\_groups/list](SeamOSRouteTypes.Routes.md#/device_groups/list)
- [/device\_groups/update](SeamOSRouteTypes.Routes.md#/device_groups/update)
- [/devices/delete](SeamOSRouteTypes.Routes.md#/devices/delete)
- [/devices/get](SeamOSRouteTypes.Routes.md#/devices/get)
- [/devices/list](SeamOSRouteTypes.Routes.md#/devices/list)
- [/devices/list\_counts](SeamOSRouteTypes.Routes.md#/devices/list_counts)
- [/devices/update](SeamOSRouteTypes.Routes.md#/devices/update)
- [/health](SeamOSRouteTypes.Routes.md#/health)
- [/incidents/list](SeamOSRouteTypes.Routes.md#/incidents/list)
- [/internal/auth0/callback](SeamOSRouteTypes.Routes.md#/internal/auth0/callback)
- [/internal/auth0/login](SeamOSRouteTypes.Routes.md#/internal/auth0/login)
- [/internal/auth0/logout](SeamOSRouteTypes.Routes.md#/internal/auth0/logout)
- [/internal/organization\_invitations/accept](SeamOSRouteTypes.Routes.md#/internal/organization_invitations/accept)
- [/internal/organization\_invitations/reject](SeamOSRouteTypes.Routes.md#/internal/organization_invitations/reject)
- [/internal/organizations/delete](SeamOSRouteTypes.Routes.md#/internal/organizations/delete)
- [/internal/organizations/list](SeamOSRouteTypes.Routes.md#/internal/organizations/list)
- [/internal/user\_sessions/create](SeamOSRouteTypes.Routes.md#/internal/user_sessions/create)
- [/internal/users/reset-password](SeamOSRouteTypes.Routes.md#/internal/users/reset-password)
- [/linked\_accounts/get](SeamOSRouteTypes.Routes.md#/linked_accounts/get)
- [/linked\_accounts/get\_counts](SeamOSRouteTypes.Routes.md#/linked_accounts/get_counts)
- [/linked\_accounts/list](SeamOSRouteTypes.Routes.md#/linked_accounts/list)
- [/locks/lock](SeamOSRouteTypes.Routes.md#/locks/lock)
- [/locks/unlock](SeamOSRouteTypes.Routes.md#/locks/unlock)
- [/login\_portals/create](SeamOSRouteTypes.Routes.md#/login_portals/create)
- [/login\_portals/delete](SeamOSRouteTypes.Routes.md#/login_portals/delete)
- [/login\_portals/get](SeamOSRouteTypes.Routes.md#/login_portals/get)
- [/login\_portals/list](SeamOSRouteTypes.Routes.md#/login_portals/list)
- [/organizations/create](SeamOSRouteTypes.Routes.md#/organizations/create)
- [/organizations/get](SeamOSRouteTypes.Routes.md#/organizations/get)
- [/organizations/get\_count\_summary](SeamOSRouteTypes.Routes.md#/organizations/get_count_summary)
- [/organizations/invite\_user](SeamOSRouteTypes.Routes.md#/organizations/invite_user)
- [/organizations/list](SeamOSRouteTypes.Routes.md#/organizations/list)
- [/organizations/remove\_user](SeamOSRouteTypes.Routes.md#/organizations/remove_user)
- [/organizations/update](SeamOSRouteTypes.Routes.md#/organizations/update)
- [/organizations/update\_user\_role](SeamOSRouteTypes.Routes.md#/organizations/update_user_role)
- [/user\_groups/add\_user](SeamOSRouteTypes.Routes.md#/user_groups/add_user)
- [/user\_groups/create](SeamOSRouteTypes.Routes.md#/user_groups/create)
- [/user\_groups/delete](SeamOSRouteTypes.Routes.md#/user_groups/delete)
- [/user\_groups/get](SeamOSRouteTypes.Routes.md#/user_groups/get)
- [/user\_groups/list](SeamOSRouteTypes.Routes.md#/user_groups/list)
- [/user\_groups/remove\_user](SeamOSRouteTypes.Routes.md#/user_groups/remove_user)
- [/user\_groups/update](SeamOSRouteTypes.Routes.md#/user_groups/update)
- [/users/delete](SeamOSRouteTypes.Routes.md#/users/delete)
- [/users/get](SeamOSRouteTypes.Routes.md#/users/get)
- [/users/get\_building\_roles](SeamOSRouteTypes.Routes.md#/users/get_building_roles)
- [/users/list](SeamOSRouteTypes.Routes.md#/users/list)
- [/users/list\_organization\_roles](SeamOSRouteTypes.Routes.md#/users/list_organization_roles)
- [/users/update](SeamOSRouteTypes.Routes.md#/users/update)

## Properties

### /access\_codes/create

• **/access\_codes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  } |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/create"`` |

#### Defined in

[src/seam-os/routes.ts:117](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L117)

___

### /access\_codes/delete

• **/access\_codes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:148](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L148)

___

### /access\_codes/get

• **/access\_codes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  } |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/get"`` |

#### Defined in

[src/seam-os/routes.ts:159](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L159)

___

### /access\_codes/list

• **/access\_codes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_group_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_codes` | ({ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  })[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/list"`` |

#### Defined in

[src/seam-os/routes.ts:186](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L186)

___

### /access\_codes/update

• **/access\_codes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.access_code_id` | `string` |
| `jsonBody.code?` | `string` |
| `jsonBody.device_id?` | `string` |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.name?` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/update"`` |

#### Defined in

[src/seam-os/routes.ts:217](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L217)

___

### /access\_passes/create

• **/access\_passes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `building_id`: `string` ; `devices`: { `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } \| { `building_id`: `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_group_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  } |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass` | `Object` |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.access_pass.access_pass_name` | `string` |
| `jsonResponse.access_pass.created_at` | `string` \| `Date` |
| `jsonResponse.access_pass.does_not_end` | `boolean` |
| `jsonResponse.access_pass.ends_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.last_used_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.organization_id` | `string` |
| `jsonResponse.access_pass.starts_at` | `string` \| `Date` |
| `jsonResponse.access_pass.url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/create"`` |

#### Defined in

[src/seam-os/routes.ts:233](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L233)

___

### /access\_passes/delete

• **/access\_passes/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/delete"`` |

#### Defined in

[src/seam-os/routes.ts:274](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L274)

___

### /access\_passes/get

• **/access\_passes/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass` | `Object` |
| `jsonResponse.access_pass.access_pass_id` | `string` |
| `jsonResponse.access_pass.access_pass_name` | `string` |
| `jsonResponse.access_pass.created_at` | `string` \| `Date` |
| `jsonResponse.access_pass.does_not_end` | `boolean` |
| `jsonResponse.access_pass.ends_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.last_used_at` | ``null`` \| `string` \| `Date` |
| `jsonResponse.access_pass.organization_id` | `string` |
| `jsonResponse.access_pass.starts_at` | `string` \| `Date` |
| `jsonResponse.access_pass.url` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/get"`` |

#### Defined in

[src/seam-os/routes.ts:285](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L285)

___

### /access\_passes/get\_count\_summary

• **/access\_passes/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_pass_id` | `string` |
| `commonParams.end?` | `string` \| `Date` |
| `commonParams.start` | `string` \| `Date` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_pass_counts` | `Object` |
| `jsonResponse.access_pass_counts.total_uses` | `number` |
| `jsonResponse.access_pass_counts.uses_in_period` | `number` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:308](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L308)

___

### /access\_passes/list

• **/access\_passes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_passes` | { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/list"`` |

#### Defined in

[src/seam-os/routes.ts:326](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L326)

___

### /access\_passes/update

• **/access\_passes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `access_method_flags?`: { `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean`  } ; `access_pass_id`: `string` ; `device_group_id?`: `string` ; `devices?`: { `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } \| { `access_pass_id`: `string` ; `devices`: { `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } \| { `access_pass_id`: `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_group_id`: `string` ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/update"`` |

#### Defined in

[src/seam-os/routes.ts:350](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L350)

___

### /buildings/add\_device

• **/buildings/add\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/add_device"`` |

#### Defined in

[src/seam-os/routes.ts:396](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L396)

___

### /buildings/add\_user

• **/buildings/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `building_id`: `string` ; `user_id`: `string`  } \| { `building_id`: `string` ; `email`: `string`  } |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:408](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L408)

___

### /buildings/create

• **/buildings/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.location?` | `Object` |
| `jsonBody.name` | `string` |
| `jsonBody.timezone` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location?` | `any` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.building.timezone` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/create"`` |

#### Defined in

[src/seam-os/routes.ts:425](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L425)

___

### /buildings/delete

• **/buildings/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/delete"`` |

#### Defined in

[src/seam-os/routes.ts:451](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L451)

___

### /buildings/get

• **/buildings/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location?` | `any` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.building.timezone` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/get"`` |

#### Defined in

[src/seam-os/routes.ts:462](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L462)

___

### /buildings/get\_count\_summary

• **/buildings/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.end?` | `string` \| `Date` |
| `commonParams.start?` | `string` \| `Date` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.building_counts` | `Object` |
| `jsonResponse.building_counts.active_access_passes` | `string` \| `number` \| `bigint` |
| `jsonResponse.building_counts.devices` | `string` \| `number` \| `bigint` |
| `jsonResponse.building_counts.incidents` | `string` \| `number` \| `bigint` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:482](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L482)

___

### /buildings/list

• **/buildings/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.query?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.buildings` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/list"`` |

#### Defined in

[src/seam-os/routes.ts:501](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L501)

___

### /buildings/remove\_device

• **/buildings/remove\_device**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.device_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/remove_device"`` |

#### Defined in

[src/seam-os/routes.ts:521](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L521)

___

### /buildings/remove\_user

• **/buildings/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:533](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L533)

___

### /buildings/update

• **/buildings/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.name?` | `string` |
| `commonParams.timezone?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/update"`` |

#### Defined in

[src/seam-os/routes.ts:545](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L545)

___

### /buildings/update\_user\_role

• **/buildings/update\_user\_role**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.building_roles` | (``"building:manager"`` \| ``"building:member"``)[] |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/update_user_role"`` |

#### Defined in

[src/seam-os/routes.ts:558](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L558)

___

### /device\_groups/create

• **/device\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_ids?` | `string`[] |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_group` | `Object` |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.device_ids` | `string`[] |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:571](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L571)

___

### /device\_groups/delete

• **/device\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:591](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L591)

___

### /device\_groups/get

• **/device\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.device_group_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_group` | `Object` |
| `jsonResponse.device_group.created_at` | `string` \| `Date` |
| `jsonResponse.device_group.device_group_id` | `string` |
| `jsonResponse.device_group.device_ids` | `string`[] |
| `jsonResponse.device_group.name` | `string` |
| `jsonResponse.device_group.organization_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:602](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L602)

___

### /device\_groups/list

• **/device\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_groups` | { `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:621](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L621)

___

### /device\_groups/update

• **/device\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_group_id` | `string` |
| `jsonBody.device_ids?` | `string`[] |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:638](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L638)

___

### /devices/delete

• **/devices/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.device_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/delete"`` |

#### Defined in

[src/seam-os/routes.ts:651](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L651)

___

### /devices/get

• **/devices/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.device_name?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device` | `Object` |
| `jsonResponse.device.building_id` | ``null`` \| `string` |
| `jsonResponse.device.created_at` | `string` \| `Date` |
| `jsonResponse.device.device_id` | `string` |
| `jsonResponse.device.device_type` | `string` |
| `jsonResponse.device.errors` | `unknown`[] |
| `jsonResponse.device.linked_account_id` | `string` |
| `jsonResponse.device.name` | `string` |
| `jsonResponse.device.properties` | `Object` |
| `jsonResponse.device.warnings` | `unknown`[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/get"`` |

#### Defined in

[src/seam-os/routes.ts:662](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L662)

___

### /devices/list

• **/devices/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.has_no_building?` | `boolean` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.query?` | `string` |
| `commonParams.user_group_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.devices` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  } ; `warnings`: `unknown`[]  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/list"`` |

#### Defined in

[src/seam-os/routes.ts:689](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L689)

___

### /devices/list\_counts

• **/devices/list\_counts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.queries` | `string`[] |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_counts` | { `count`: `number` ; `query`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/list_counts"`` |

#### Defined in

[src/seam-os/routes.ts:719](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L719)

___

### /devices/update

• **/devices/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.device_id` | `string` |
| `jsonBody.location?` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/update"`` |

#### Defined in

[src/seam-os/routes.ts:736](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L736)

___

### /health

• **/health**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/health"`` |

#### Defined in

[src/seam-os/routes.ts:2](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L2)

___

### /incidents/list

• **/incidents/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.between?` | (`string` \| `Date`)[] |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.is_resolved?` | `boolean` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.incidents` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: ``null`` \| `string` ; `ended_at`: ``null`` \| `string` \| `Date` ; `incident_id`: `string` ; `is_resolved`: `boolean` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `started_at`: `string` \| `Date` ; `type`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/incidents/list"`` |

#### Defined in

[src/seam-os/routes.ts:749](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L749)

___

### /internal/auth0/callback

• **/internal/auth0/callback**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/auth0/callback"`` |

#### Defined in

[src/seam-os/routes.ts:11](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L11)

___

### /internal/auth0/login

• **/internal/auth0/login**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/auth0/login"`` |

#### Defined in

[src/seam-os/routes.ts:20](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L20)

___

### /internal/auth0/logout

• **/internal/auth0/logout**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.return_to` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/auth0/logout"`` |

#### Defined in

[src/seam-os/routes.ts:29](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L29)

___

### /internal/organization\_invitations/accept

• **/internal/organization\_invitations/accept**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.token` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/organization_invitations/accept"`` |

#### Defined in

[src/seam-os/routes.ts:40](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L40)

___

### /internal/organization\_invitations/reject

• **/internal/organization\_invitations/reject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.token` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/organization_invitations/reject"`` |

#### Defined in

[src/seam-os/routes.ts:51](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L51)

___

### /internal/organizations/delete

• **/internal/organizations/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.organization_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/organizations/delete"`` |

#### Defined in

[src/seam-os/routes.ts:62](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L62)

___

### /internal/organizations/list

• **/internal/organizations/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.organizations` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/organizations/list"`` |

#### Defined in

[src/seam-os/routes.ts:73](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L73)

___

### /internal/user\_sessions/create

• **/internal/user\_sessions/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.auth0_id_token` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.session` | `Object` |
| `jsonResponse.session.created_at` | `string` \| `Date` |
| `jsonResponse.session.expires_at` | `string` \| `Date` |
| `jsonResponse.session.session_key` | `string` |
| `jsonResponse.session.user_session_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/user_sessions/create"`` |

#### Defined in

[src/seam-os/routes.ts:99](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L99)

___

### /internal/users/reset-password

• **/internal/users/reset-password**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/internal/users/reset-password"`` |

#### Defined in

[src/seam-os/routes.ts:88](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L88)

___

### /linked\_accounts/get

• **/linked\_accounts/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.linked_account_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.linked_account` | `Object` |
| `jsonResponse.linked_account.account_type` | `string` |
| `jsonResponse.linked_account.created_at` | `string` \| `Date` |
| `jsonResponse.linked_account.device_count` | `number` |
| `jsonResponse.linked_account.errors` | { `error_code`: `string` ; `message`: `string`  }[] |
| `jsonResponse.linked_account.ext_seam_connected_account_id` | `string` |
| `jsonResponse.linked_account.linked_account_id` | `string` |
| `jsonResponse.linked_account.login_portal_id` | ``null`` \| `string` |
| `jsonResponse.linked_account.organization_id` | `string` |
| `jsonResponse.linked_account.user_identifier?` | `any` |
| `jsonResponse.linked_account.warnings` | { `message`: `string` ; `warning_code`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/linked_accounts/get"`` |

#### Defined in

[src/seam-os/routes.ts:776](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L776)

___

### /linked\_accounts/get\_counts

• **/linked\_accounts/get\_counts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.queries` | `string`[] |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.counts` | { `count`: `number` ; `query`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/linked_accounts/get_counts"`` |

#### Defined in

[src/seam-os/routes.ts:806](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L806)

___

### /linked\_accounts/list

• **/linked\_accounts/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.query?` | `string` |
| `commonParams.since?` | `string` \| `Date` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.linked_accounts` | { `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `login_portal_id`: ``null`` \| `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/linked_accounts/list"`` |

#### Defined in

[src/seam-os/routes.ts:822](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L822)

___

### /locks/lock

• **/locks/lock**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.access_pass_id?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/locks/lock"`` |

#### Defined in

[src/seam-os/routes.ts:853](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L853)

___

### /locks/unlock

• **/locks/unlock**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.access_pass_id?` | `string` |
| `jsonBody.device_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/locks/unlock"`` |

#### Defined in

[src/seam-os/routes.ts:865](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L865)

___

### /login\_portals/create

• **/login\_portals/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.accepted_providers?` | `string`[] |
| `jsonBody.custom_redirect_url?` | `string` |
| `jsonBody.device_selection_mode?` | ``"none"`` \| ``"single"`` \| ``"multiple"`` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portal` | `Object` |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/create"`` |

#### Defined in

[src/seam-os/routes.ts:877](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L877)

___

### /login\_portals/delete

• **/login\_portals/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.login_portal_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/delete"`` |

#### Defined in

[src/seam-os/routes.ts:897](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L897)

___

### /login\_portals/get

• **/login\_portals/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.login_portal_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portal` | `Object` |
| `jsonResponse.login_portal.created_at` | `string` \| `Date` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/get"`` |

#### Defined in

[src/seam-os/routes.ts:908](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L908)

___

### /login\_portals/list

• **/login\_portals/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.since?` | `string` \| `Date` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.login_portals` | { `created_at`: `string` \| `Date` ; `login_portal_id`: `string` ; `organization_id`: `string` ; `view_url`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/list"`` |

#### Defined in

[src/seam-os/routes.ts:926](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L926)

___

### /organizations/create

• **/organizations/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.ext_seam_connect_api_key?` | `string` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.organization` | `Object` |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/create"`` |

#### Defined in

[src/seam-os/routes.ts:944](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L944)

___

### /organizations/get

• **/organizations/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.organization_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.organization` | `Object` |
| `jsonResponse.organization.created_at` | `string` \| `Date` |
| `jsonResponse.organization.name` | `string` |
| `jsonResponse.organization.organization_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/get"`` |

#### Defined in

[src/seam-os/routes.ts:962](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L962)

___

### /organizations/get\_count\_summary

• **/organizations/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.between` | (`string` \| `Date`)[] |
| `commonParams.organization_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.organization_counts` | `Object` |
| `jsonResponse.organization_counts.incidents_in_period` | `number` |
| `jsonResponse.organization_counts.total_active_access_passes` | `number` |
| `jsonResponse.organization_counts.total_online_devices` | `number` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:979](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L979)

___

### /organizations/invite\_user

• **/organizations/invite\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.email` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/invite_user"`` |

#### Defined in

[src/seam-os/routes.ts:997](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L997)

___

### /organizations/list

• **/organizations/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.query?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.organizations` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/list"`` |

#### Defined in

[src/seam-os/routes.ts:1008](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1008)

___

### /organizations/remove\_user

• **/organizations/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:1025](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1025)

___

### /organizations/update

• **/organizations/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.ext_seam_connect_api_key?` | `string` |
| `commonParams.name?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/update"`` |

#### Defined in

[src/seam-os/routes.ts:1036](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1036)

___

### /organizations/update\_user\_role

• **/organizations/update\_user\_role**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.can_view_all_buildings?` | `boolean` |
| `commonParams.organization_roles?` | (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/update_user_role"`` |

#### Defined in

[src/seam-os/routes.ts:1048](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1048)

___

### /user\_groups/add\_user

• **/user\_groups/add\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_group_id` | `string` |
| `jsonBody.user_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/add_user"`` |

#### Defined in

[src/seam-os/routes.ts:1063](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1063)

___

### /user\_groups/create

• **/user\_groups/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_group` | `Object` |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/create"`` |

#### Defined in

[src/seam-os/routes.ts:1075](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1075)

___

### /user\_groups/delete

• **/user\_groups/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_group_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1093](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1093)

___

### /user\_groups/get

• **/user\_groups/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_group_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_group` | `Object` |
| `jsonResponse.user_group.created_at` | `string` \| `Date` |
| `jsonResponse.user_group.name` | `string` |
| `jsonResponse.user_group.organization_id` | `string` |
| `jsonResponse.user_group.user_group_id` | `string` |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:1104](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1104)

___

### /user\_groups/list

• **/user\_groups/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_groups` | { `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:1122](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1122)

___

### /user\_groups/remove\_user

• **/user\_groups/remove\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_group_id` | `string` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:1138](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1138)

___

### /user\_groups/update

• **/user\_groups/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.name?` | `string` |
| `jsonBody.user_group_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/update"`` |

#### Defined in

[src/seam-os/routes.ts:1150](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1150)

___

### /users/delete

• **/users/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1162](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1162)

___

### /users/get

• **/users/get**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user` | `Object` |
| `jsonResponse.user.created_at` | `string` \| `Date` |
| `jsonResponse.user.email` | ``null`` \| `string` |
| `jsonResponse.user.first_name` | ``null`` \| `string` |
| `jsonResponse.user.last_name` | ``null`` \| `string` |
| `jsonResponse.user.organization_id` | `string` |
| `jsonResponse.user.title` | ``null`` \| `string` |
| `jsonResponse.user.user_id` | `string` |
| `method` | ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/get"`` |

#### Defined in

[src/seam-os/routes.ts:1173](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1173)

___

### /users/get\_building\_roles

• **/users/get\_building\_roles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_building_roles` | { `building_id`: `string` ; `building_name`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:member"``)[]  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/get_building_roles"`` |

#### Defined in

[src/seam-os/routes.ts:1194](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1194)

___

### /users/list

• **/users/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.user_group_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.users` | { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `first_name`: ``null`` \| `string` ; `last_name`: ``null`` \| `string` ; `organization_id`: `string` ; `title`: ``null`` \| `string` ; `user_id`: `string`  }[] |
| `method` | ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/list"`` |

#### Defined in

[src/seam-os/routes.ts:1211](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1211)

___

### /users/list\_organization\_roles

• **/users/list\_organization\_roles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.user_ids?` | `string`[] |
| `jsonResponse` | `Object` |
| `jsonResponse.user_organization_roles` | { `can_view_all_buildings`: `boolean` ; `organization_roles`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  }[] |
| `method` | ``"GET"`` \| ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/list_organization_roles"`` |

#### Defined in

[src/seam-os/routes.ts:1234](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1234)

___

### /users/update

• **/users/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.first_name?` | `string` |
| `jsonBody.last_name?` | `string` |
| `jsonBody.title?` | `string` |
| `jsonBody.user_id?` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/update"`` |

#### Defined in

[src/seam-os/routes.ts:1251](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1251)
