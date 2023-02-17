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
- [/access\_passes/create\_from\_access\_code](SeamOSRouteTypes.Routes.md#/access_passes/create_from_access_code)
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
- [/buildings/list\_count\_summaries](SeamOSRouteTypes.Routes.md#/buildings/list_count_summaries)
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
- [/devices/get\_count\_summary](SeamOSRouteTypes.Routes.md#/devices/get_count_summary)
- [/devices/list](SeamOSRouteTypes.Routes.md#/devices/list)
- [/devices/list\_counts](SeamOSRouteTypes.Routes.md#/devices/list_counts)
- [/devices/update](SeamOSRouteTypes.Routes.md#/devices/update)
- [/events/list](SeamOSRouteTypes.Routes.md#/events/list)
- [/health](SeamOSRouteTypes.Routes.md#/health)
- [/incidents/list](SeamOSRouteTypes.Routes.md#/incidents/list)
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
- [/organizations/pending\_users/delete](SeamOSRouteTypes.Routes.md#/organizations/pending_users/delete)
- [/organizations/pending\_users/list](SeamOSRouteTypes.Routes.md#/organizations/pending_users/list)
- [/organizations/pending\_users/resend\_invitation](SeamOSRouteTypes.Routes.md#/organizations/pending_users/resend_invitation)
- [/organizations/pending\_users/update](SeamOSRouteTypes.Routes.md#/organizations/pending_users/update)
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
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"time_bound"``  } |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/create"`` |

#### Defined in

[src/seam-os/routes.ts:2](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L2)

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

[src/seam-os/routes.ts:37](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L37)

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
| `jsonResponse.access_code` | { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"time_bound"``  } |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/get"`` |

#### Defined in

[src/seam-os/routes.ts:48](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L48)

___

### /access\_codes/list

• **/access\_codes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_codes` | ({ `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: ``null`` ; `starts_at`: ``null`` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` ; `starts_at`: `string` ; `status`: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"`` ; `type`: ``"time_bound"``  })[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_codes/list"`` |

#### Defined in

[src/seam-os/routes.ts:79](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L79)

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

[src/seam-os/routes.ts:112](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L112)

___

### /access\_passes/create

• **/access\_passes/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.building_id?` | `string` |
| `jsonBody.building_ids?` | `string`[] |
| `jsonBody.can_use_access_code?` | `boolean` |
| `jsonBody.can_use_remote_unlock?` | `boolean` |
| `jsonBody.device_group_id?` | `string` |
| `jsonBody.devices?` | { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] |
| `jsonBody.ends_at?` | `string` \| `Date` |
| `jsonBody.grant_mixed_building_device_access?` | `boolean` |
| `jsonBody.name` | `string` |
| `jsonBody.starts_at?` | `string` \| `Date` |
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

[src/seam-os/routes.ts:128](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L128)

___

### /access\_passes/create\_from\_access\_code

• **/access\_passes/create\_from\_access\_code**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.access_code_id` | `string` |
| `jsonBody.can_use_remote_unlock?` | `boolean` |
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
| `route` | ``"/access_passes/create_from_access_code"`` |

#### Defined in

[src/seam-os/routes.ts:166](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L166)

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

[src/seam-os/routes.ts:190](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L190)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/get"`` |

#### Defined in

[src/seam-os/routes.ts:201](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L201)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:224](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L224)

___

### /access\_passes/list

• **/access\_passes/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.access_passes` | { `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/list"`` |

#### Defined in

[src/seam-os/routes.ts:242](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L242)

___

### /access\_passes/update

• **/access\_passes/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `access_method_flags?`: { `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean`  } ; `access_pass_id`: `string` ; `device_group_id?`: `string` ; `devices?`: { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } \| { `access_pass_id`: `string` ; `devices`: { `can_use_access_code?`: `boolean` ; `can_use_remote_unlock?`: `boolean` ; `device_id`: `string`  }[] ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } \| { `access_pass_id`: `string` ; `can_use_access_code`: `boolean` ; `can_use_remote_unlock`: `boolean` ; `device_group_id`: `string` ; `ends_at?`: ``null`` \| `string` \| `Date` ; `starts_at?`: `string` \| `Date`  } |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/access_passes/update"`` |

#### Defined in

[src/seam-os/routes.ts:267](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L267)

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

[src/seam-os/routes.ts:313](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L313)

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

[src/seam-os/routes.ts:325](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L325)

___

### /buildings/create

• **/buildings/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.ext_google_place_id` | `string` |
| `jsonBody.name` | `string` |
| `jsonBody.timezone` | `string` |
| `jsonResponse` | `Object` |
| `jsonResponse.building` | `Object` |
| `jsonResponse.building.building_id` | `string` |
| `jsonResponse.building.created_at` | `string` \| `Date` |
| `jsonResponse.building.location` | `Object` |
| `jsonResponse.building.location.addr1` | `string` |
| `jsonResponse.building.location.addr2` | ``null`` \| `string` |
| `jsonResponse.building.location.city` | `string` |
| `jsonResponse.building.location.country` | `string` |
| `jsonResponse.building.location.ext_google_place_id` | ``null`` \| `string` |
| `jsonResponse.building.location.full_address_string` | `string` |
| `jsonResponse.building.location.latitude` | `number` |
| `jsonResponse.building.location.longitude` | `number` |
| `jsonResponse.building.location.state` | `string` |
| `jsonResponse.building.location.zip_code` | `string` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.building.timezone` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/create"`` |

#### Defined in

[src/seam-os/routes.ts:342](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L342)

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

[src/seam-os/routes.ts:375](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L375)

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
| `jsonResponse.building.location` | `Object` |
| `jsonResponse.building.location.addr1` | `string` |
| `jsonResponse.building.location.addr2` | ``null`` \| `string` |
| `jsonResponse.building.location.city` | `string` |
| `jsonResponse.building.location.country` | `string` |
| `jsonResponse.building.location.ext_google_place_id` | ``null`` \| `string` |
| `jsonResponse.building.location.full_address_string` | `string` |
| `jsonResponse.building.location.latitude` | `number` |
| `jsonResponse.building.location.longitude` | `number` |
| `jsonResponse.building.location.state` | `string` |
| `jsonResponse.building.location.zip_code` | `string` |
| `jsonResponse.building.name` | `string` |
| `jsonResponse.building.organization_id` | `string` |
| `jsonResponse.building.timezone` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/get"`` |

#### Defined in

[src/seam-os/routes.ts:386](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L386)

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
| `jsonResponse.building_count_summary` | `Object` |
| `jsonResponse.building_count_summary.active_access_passes` | `number` |
| `jsonResponse.building_count_summary.device_incidents` | `number` |
| `jsonResponse.building_count_summary.devices` | `number` |
| `jsonResponse.building_count_summary.incidents` | `number` |
| `jsonResponse.building_count_summary.low_battery_incidents` | `number` |
| `jsonResponse.building_count_summary.offline_account_incidents` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:417](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L417)

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
| `jsonResponse.buildings` | { `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location`: { `addr1`: `string` ; `addr2`: ``null`` \| `string` ; `city`: `string` ; `country`: `string` ; `ext_google_place_id`: ``null`` \| `string` ; `full_address_string`: `string` ; `latitude`: `number` ; `longitude`: `number` ; `state`: `string` ; `zip_code`: `string`  } ; `name`: `string` ; `organization_id`: `string` ; `timezone`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/list"`` |

#### Defined in

[src/seam-os/routes.ts:439](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L439)

___

### /buildings/list\_count\_summaries

• **/buildings/list\_count\_summaries**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_ids` | `string`[] |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.building_count_summaries` | { `active_access_passes`: `number` ; `devices`: `number` ; `incidents`: `number`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/list_count_summaries"`` |

#### Defined in

[src/seam-os/routes.ts:470](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L470)

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

[src/seam-os/routes.ts:487](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L487)

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

[src/seam-os/routes.ts:499](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L499)

___

### /buildings/update

• **/buildings/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.ext_google_place_id?` | `string` |
| `commonParams.name?` | `string` |
| `commonParams.timezone?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/update"`` |

#### Defined in

[src/seam-os/routes.ts:511](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L511)

___

### /buildings/update\_user\_role

• **/buildings/update\_user\_role**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id` | `string` |
| `commonParams.building_roles` | (``"building:manager"`` \| ``"building:operator"``)[] |
| `commonParams.user_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/buildings/update_user_role"`` |

#### Defined in

[src/seam-os/routes.ts:525](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L525)

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

[src/seam-os/routes.ts:538](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L538)

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

[src/seam-os/routes.ts:558](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L558)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:569](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L569)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/device_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:588](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L588)

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

[src/seam-os/routes.ts:605](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L605)

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

[src/seam-os/routes.ts:618](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L618)

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
| `jsonResponse.device.created_at` | `string` |
| `jsonResponse.device.device_id` | `string` |
| `jsonResponse.device.device_type` | `string` |
| `jsonResponse.device.errors` | `unknown`[] |
| `jsonResponse.device.linked_account_id` | `string` |
| `jsonResponse.device.name` | `string` |
| `jsonResponse.device.properties` | `Object` |
| `jsonResponse.device.warnings` | `unknown`[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/get"`` |

#### Defined in

[src/seam-os/routes.ts:629](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L629)

___

### /devices/get\_count\_summary

• **/devices/get\_count\_summary**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.device_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_count_summary` | `Object` |
| `jsonResponse.device_count_summary.active_access_passes` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:656](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L656)

___

### /devices/list

• **/devices/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.device_ids?` | `string`[] |
| `commonParams.has_no_building?` | `boolean` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.query?` | `string` |
| `commonParams.user_group_id?` | `string` |
| `commonParams.user_id?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.devices` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  } ; `warnings`: `unknown`[]  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/list"`` |

#### Defined in

[src/seam-os/routes.ts:671](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L671)

___

### /devices/list\_counts

• **/devices/list\_counts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.building_id?` | `string` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.queries` | `string`[] |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.device_counts` | { `count`: `number` ; `query`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/list_counts"`` |

#### Defined in

[src/seam-os/routes.ts:702](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L702)

___

### /devices/update

• **/devices/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | { `building_id?`: `string` ; `device_id`: `string` ; `location?`: {} ; `name?`: `string`  } \| { `building_id?`: `string` ; `device_ids`: `string`[] ; `location?`: {} ; `name?`: `string`  } |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/devices/update"`` |

#### Defined in

[src/seam-os/routes.ts:720](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L720)

___

### /events/list

• **/events/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.between?` | (`string` \| `Date`)[] |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.events` | { `building_id`: ``null`` \| `string` ; `created_at`: `string` ; `device_id`: ``null`` \| `string` ; `event_id`: `string` ; `event_type`: `string` ; `occurred_at`: `string` ; `organization_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/events/list"`` |

#### Defined in

[src/seam-os/routes.ts:741](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L741)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/health"`` |

#### Defined in

[src/seam-os/routes.ts:765](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L765)

___

### /incidents/list

• **/incidents/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.access_code_id?` | `string` |
| `commonParams.access_pass_id?` | `string` |
| `commonParams.between?` | (`string` \| `Date`)[] |
| `commonParams.building_id?` | `string` |
| `commonParams.device_id?` | `string` |
| `commonParams.device_ids?` | `string`[] |
| `commonParams.is_resolved?` | `boolean` |
| `commonParams.linked_account_id?` | `string` |
| `commonParams.query?` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.incidents` | { `access_code_id`: ``null`` \| `string` ; `access_pass_id`: ``null`` \| `string` ; `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: ``null`` \| `string` ; `ended_at`: ``null`` \| `string` \| `Date` ; `incident_id`: `string` ; `incident_type`: `string` ; `is_resolved`: `boolean` ; `linked_account_id`: ``null`` \| `string` ; `organization_id`: `string` ; `started_at`: `string` \| `Date`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/incidents/list"`` |

#### Defined in

[src/seam-os/routes.ts:774](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L774)

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
| `jsonResponse.linked_account.organization_id` | `string` |
| `jsonResponse.linked_account.user_identifier?` | `any` |
| `jsonResponse.linked_account.warnings` | { `message`: `string` ; `warning_code`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/linked_accounts/get"`` |

#### Defined in

[src/seam-os/routes.ts:808](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L808)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/linked_accounts/get_counts"`` |

#### Defined in

[src/seam-os/routes.ts:837](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L837)

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
| `jsonResponse.linked_accounts` | { `account_type`: `string` ; `created_at`: `string` \| `Date` ; `device_count`: `number` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/linked_accounts/list"`` |

#### Defined in

[src/seam-os/routes.ts:853](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L853)

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

[src/seam-os/routes.ts:883](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L883)

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

[src/seam-os/routes.ts:895](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L895)

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
| `jsonResponse.login_portal.linked_account_id` | ``null`` \| `string` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.login_successful` | `boolean` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.status` | ``"pending"`` \| ``"authorized"`` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/create"`` |

#### Defined in

[src/seam-os/routes.ts:907](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L907)

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

[src/seam-os/routes.ts:930](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L930)

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
| `jsonResponse.login_portal.linked_account_id` | ``null`` \| `string` |
| `jsonResponse.login_portal.login_portal_id` | `string` |
| `jsonResponse.login_portal.login_successful` | `boolean` |
| `jsonResponse.login_portal.organization_id` | `string` |
| `jsonResponse.login_portal.status` | ``"pending"`` \| ``"authorized"`` |
| `jsonResponse.login_portal.view_url` | `string` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/get"`` |

#### Defined in

[src/seam-os/routes.ts:941](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L941)

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
| `jsonResponse.login_portals` | { `created_at`: `string` \| `Date` ; `linked_account_id`: ``null`` \| `string` ; `login_portal_id`: `string` ; `login_successful`: `boolean` ; `organization_id`: `string` ; `status`: ``"pending"`` \| ``"authorized"`` ; `view_url`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/login_portals/list"`` |

#### Defined in

[src/seam-os/routes.ts:962](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L962)

___

### /organizations/create

• **/organizations/create**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
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

[src/seam-os/routes.ts:983](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L983)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/get"`` |

#### Defined in

[src/seam-os/routes.ts:1000](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1000)

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
| `jsonResponse.organization_counts.total_admins` | `number` |
| `jsonResponse.organization_counts.total_buildings` | `number` |
| `jsonResponse.organization_counts.total_devices` | `number` |
| `jsonResponse.organization_counts.total_linked_accounts` | `number` |
| `jsonResponse.organization_counts.total_members` | `number` |
| `jsonResponse.organization_counts.total_online_devices` | `number` |
| `jsonResponse.organization_counts.total_super_admins` | `number` |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/get_count_summary"`` |

#### Defined in

[src/seam-os/routes.ts:1017](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1017)

___

### /organizations/invite\_user

• **/organizations/invite\_user**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | { `email`: `string` ; `role?`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `user_id?`: `string`  } \| { `email?`: `string` ; `role?`: ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` ; `user_id`: `string`  } |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/invite_user"`` |

#### Defined in

[src/seam-os/routes.ts:1041](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1041)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/list"`` |

#### Defined in

[src/seam-os/routes.ts:1060](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1060)

___

### /organizations/pending\_users/delete

• **/organizations/pending\_users/delete**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.organization_invitation_id` | `string` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"DELETE"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/pending_users/delete"`` |

#### Defined in

[src/seam-os/routes.ts:1077](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1077)

___

### /organizations/pending\_users/list

• **/organizations/pending\_users/list**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.pending_users` | { `created_at`: `string` \| `Date` ; `email`: ``null`` \| `string` ; `organization_id`: `string` ; `organization_invitation_id`: `string` ; `role`: ``null`` \| `string` ; `status`: ``"pending"`` \| ``"accepted"`` \| ``"declined"`` ; `user_id`: ``null`` \| `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/pending_users/list"`` |

#### Defined in

[src/seam-os/routes.ts:1088](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1088)

___

### /organizations/pending\_users/resend\_invitation

• **/organizations/pending\_users/resend\_invitation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonBody.organization_invitation_id` | `string` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/pending_users/resend_invitation"`` |

#### Defined in

[src/seam-os/routes.ts:1107](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1107)

___

### /organizations/pending\_users/update

• **/organizations/pending\_users/update**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.organization_invitation_id` | `string` |
| `commonParams.role` | ``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"`` |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `method` | ``"POST"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/organizations/pending_users/update"`` |

#### Defined in

[src/seam-os/routes.ts:1118](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1118)

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

[src/seam-os/routes.ts:1130](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1130)

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

[src/seam-os/routes.ts:1141](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1141)

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

[src/seam-os/routes.ts:1153](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1153)

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

[src/seam-os/routes.ts:1168](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1168)

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

[src/seam-os/routes.ts:1180](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1180)

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

[src/seam-os/routes.ts:1198](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1198)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/get"`` |

#### Defined in

[src/seam-os/routes.ts:1209](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1209)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/list"`` |

#### Defined in

[src/seam-os/routes.ts:1227](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1227)

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
| `method` | ``"POST"`` \| ``"DELETE"`` \| ``"PATCH"`` |
| `queryParams` | `Object` |
| `route` | ``"/user_groups/remove_user"`` |

#### Defined in

[src/seam-os/routes.ts:1243](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1243)

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

[src/seam-os/routes.ts:1255](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1255)

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

[src/seam-os/routes.ts:1267](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1267)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/get"`` |

#### Defined in

[src/seam-os/routes.ts:1278](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1278)

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
| `jsonResponse.user_building_roles` | { `building_id`: `string` ; `building_name`: `string` ; `building_roles`: (``"building:manager"`` \| ``"building:operator"``)[] ; `created_at`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/get_building_roles"`` |

#### Defined in

[src/seam-os/routes.ts:1299](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1299)

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
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/list"`` |

#### Defined in

[src/seam-os/routes.ts:1317](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1317)

___

### /users/list\_organization\_roles

• **/users/list\_organization\_roles**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commonParams` | `Object` |
| `commonParams.user_ids?` | `string`[] |
| `formData` | `Object` |
| `jsonBody` | `Object` |
| `jsonResponse` | `Object` |
| `jsonResponse.user_organization_roles` | { `can_view_all_buildings`: `boolean` ; `organization_roles`: (``"org:superadmin"`` \| ``"org:admin"`` \| ``"org:member"``)[] ; `user_id`: `string`  }[] |
| `method` | ``"POST"`` \| ``"GET"`` |
| `queryParams` | `Object` |
| `route` | ``"/users/list_organization_roles"`` |

#### Defined in

[src/seam-os/routes.ts:1340](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1340)

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

[src/seam-os/routes.ts:1357](https://github.com/seamapi/javascript/blob/main/src/seam-os/routes.ts#L1357)
