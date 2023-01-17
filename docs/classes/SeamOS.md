[seamapi](../README.md) / [Exports](../modules.md) / SeamOS

# Class: SeamOS

## Table of contents

### Constructors

- [constructor](SeamOS.md#constructor)

### Properties

- [access\_codes](SeamOS.md#access_codes)
- [access\_passes](SeamOS.md#access_passes)
- [axios](SeamOS.md#axios)
- [buildings](SeamOS.md#buildings)
- [device\_groups](SeamOS.md#device_groups)
- [devices](SeamOS.md#devices)
- [linked\_accounts](SeamOS.md#linked_accounts)
- [login\_portals](SeamOS.md#login_portals)
- [organizations](SeamOS.md#organizations)
- [user\_groups](SeamOS.md#user_groups)
- [users](SeamOS.md#users)

### Methods

- [\_curriedGet](SeamOS.md#_curriedget)
- [\_curriedPost](SeamOS.md#_curriedpost)
- [\_getGrab](SeamOS.md#_getgrab)
- [\_postGrab](SeamOS.md#_postgrab)
- [get](SeamOS.md#get)
- [health](SeamOS.md#health)
- [makeRequest](SeamOS.md#makerequest)
- [post](SeamOS.md#post)

## Constructors

### constructor

• **new SeamOS**(`apiKeyOrOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamOSClientOptions`](../interfaces/SeamOSClientOptions.md) |

#### Defined in

[src/seam-os/client.ts:52](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L52)

## Properties

### access\_codes

• `Readonly` **access\_codes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `code?`: `string` ; `device_id`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  }\> |
| `delete` | (`data`: `undefined` \| { `access_code_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `access_code_id`: `string`  }) => `Promise`<{ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_group_id?`: `string` ; `device_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<({ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  })[]\> |
| `update` | (`data`: `undefined` \| { `access_code_id`: `string` ; `code?`: `string` ; `device_id?`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:164](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L164)

___

### access\_passes

• `Readonly` **access\_passes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/access_passes/create"``\>) => `Promise`<{ `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{ `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `query?`: `string`  }) => `Promise`<{ `access_pass_id`: `string` ; `access_pass_name`: `string` ; `created_at`: `string` \| `Date` ; `does_not_end`: `boolean` ; `ends_at`: ``null`` \| `string` \| `Date` ; `last_used_at`: ``null`` \| `string` \| `Date` ; `organization_id`: `string` ; `starts_at`: `string` \| `Date` ; `url`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `device_group_id?`: `string` ; `device_id?`: `string`[] ; `device_ids?`: `string`[] ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:172](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L172)

___

### axios

• **axios**: `AxiosInstance`

#### Defined in

[src/seam-os/client.ts:50](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L50)

___

### buildings

• `Readonly` **buildings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add_device` | (`data`: `undefined` \| { `building_id`: `string` ; `device_id`: `string`  }) => `Promise`<{}\> |
| `add_user` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/buildings/add_user"``\>) => `Promise`<{}\> |
| `create` | (`data`: `undefined` \| { `location?`: { [x: string]: `any`;  } ; `name`: `string` ; `owner_id`: `string` ; `timezone`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string` ; `owner_id`: `string` ; `timezone`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `building_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `building_id`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string` ; `owner_id`: `string` ; `timezone`: `string`  }\> |
| `list` | (`data`: `undefined` \| { `query?`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string` ; `owner_id`: `string` ; `timezone`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `building_id`: `string` ; `name?`: `string` ; `owner_id?`: `string` ; `timezone?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:180](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L180)

___

### device\_groups

• `Readonly` **device\_groups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `device_ids?`: `string`[] ; `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `device_group_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `device_group_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `device_ids`: `string`[] ; `name`: `string` ; `organization_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `device_group_id`: `string` ; `device_ids?`: `string`[] ; `name?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:190](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L190)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`data`: `undefined` \| { `device_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_id?`: `string` ; `device_name?`: `string`  }) => `Promise`<{ `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  } ; `warnings`: `unknown`[]  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `has_no_building?`: `boolean` ; `linked_account_id?`: `string` ; `query?`: `string` ; `user_group_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<{ `building_id`: ``null`` \| `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `errors`: `unknown`[] ; `linked_account_id`: `string` ; `name`: `string` ; `properties`: { [x: string]: `unknown`;  } ; `warnings`: `unknown`[]  }[]\> |
| `update` | (`data`: `undefined` \| { `device_id`: `string` ; `location?`: {} ; `name?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:201](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L201)

___

### linked\_accounts

• `Readonly` **linked\_accounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`data`: `undefined` \| { `linked_account_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_provider`: `string` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `login_portal_id`: ``null`` \| `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }\> |
| `list` | (`data`: `undefined` \| { `query?`: `string` ; `since?`: `string` \| `Date`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_provider`: `string` ; `errors`: { `error_code`: `string` ; `message`: `string`  }[] ; `ext_seam_connected_account_id`: `string` ; `linked_account_id`: `string` ; `login_portal_id`: ``null`` \| `string` ; `organization_id`: `string` ; `user_identifier?`: `any` ; `warnings`: { `message`: `string` ; `warning_code`: `string`  }[]  }[]\> |

#### Defined in

[src/seam-os/client.ts:208](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L208)

___

### login\_portals

• `Readonly` **login\_portals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `accepted_providers?`: `string`[] ; `custom_redirect_url?`: `string` ; `device_selection_mode?`: ``"none"`` \| ``"single"`` \| ``"multiple"``  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `login_portal_id`: `string` ; `organization_id`: `string` ; `view_url`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `login_portal_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `login_portal_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `login_portal_id`: `string` ; `organization_id`: `string` ; `view_url`: `string`  }\> |

#### Defined in

[src/seam-os/client.ts:213](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L213)

___

### organizations

• `Readonly` **organizations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `ext_seam_connect_api_key?`: `string` ; `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `get` | () => (`data`: `undefined` \| { `organization_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `invite_user` | (`data`: `undefined` \| { `email`: `string`  }) => `Promise`<{}\> |
| `remove_user` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{}\> |
| `update` | (`data`: `undefined` \| { `ext_seam_connect_api_key?`: `string` ; `name?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:154](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L154)

___

### user\_groups

• `Readonly` **user\_groups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add_user` | (`data`: `undefined` \| { `user_group_id`: `string` ; `user_id`: `string`  }) => `Promise`<{}\> |
| `create` | (`data`: `undefined` \| { `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `user_group_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `user_group_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[]\> |
| `remove_user` | (`data`: `undefined` \| { `user_group_id`: `string` ; `user_id`: `string`  }) => `Promise`<{}\> |
| `update` | (`data`: `undefined` \| { `name?`: `string` ; `user_group_id`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:219](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L219)

___

### users

• `Readonly` **users**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{}\> |
| `get` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `user_group_id?`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `first_name?`: `string` ; `last_name?`: `string` ; `title?`: `string` ; `user_id?`: `string`  }) => `Promise`<{}\> |

#### Defined in

[src/seam-os/client.ts:229](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L229)

## Methods

### \_curriedGet

▸ `Private` **_curriedGet**<`URL`\>(`url`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:146](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L146)

___

### \_curriedPost

▸ `Private` **_curriedPost**<`URL`\>(`url`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:108](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L108)

___

### \_getGrab

▸ `Private` **_getGrab**<`URL`, `InnerObject`\>(`url`, `innerObject`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `InnerObject` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `innerObject` | `InnerObject` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Defined in

[src/seam-os/client.ts:131](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L131)

___

### \_postGrab

▸ `Private` **_postGrab**<`URL`, `InnerObject`\>(`url`, `innerObject`): (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\>) => `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `InnerObject` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `innerObject` | `InnerObject` |

#### Returns

`fn`

▸ (`data`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |

##### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``][`InnerObject`]\>

#### Defined in

[src/seam-os/client.ts:116](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L116)

___

### get

▸ **get**<`URL`\>(`url`, `config?`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `config?` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, ``"GET"``\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:93](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L93)

___

### health

▸ **health**(): (`data`: `undefined` \| {}) => `Promise`<{}\>

#### Returns

`fn`

▸ (`data`): `Promise`<{}\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| {} |

##### Returns

`Promise`<{}\>

#### Defined in

[src/seam-os/client.ts:162](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L162)

___

### makeRequest

▸ **makeRequest**<`URL`, `Method`\>(`request`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `Method` | extends ``"GET"`` \| ``"POST"`` \| ``"PATCH"`` \| ``"DELETE"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, `Method`\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:83](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L83)

___

### post

▸ **post**<`URL`\>(`url`, `data`, `config?`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `URL` |
| `data` | `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<`URL`\> |
| `config?` | [`ExtendedAxiosRequestConfig`](../interfaces/ExtendedAxiosRequestConfig.md)<`URL`, ``"POST"``\> |

#### Returns

`Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Defined in

[src/seam-os/client.ts:100](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L100)
