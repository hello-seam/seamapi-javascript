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
| `delete` | (`data`: `undefined` \| { `access_code_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `access_code_id`: `string`  }) => `Promise`<{ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `device_group_id?`: `string` ; `device_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<({ `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `type`: ``"ongoing"``  } \| { `access_code_id`: `string` ; `code`: `string` ; `created_at`: `string` \| `Date` ; `ends_at`: `string` \| `Date` ; `starts_at`: `string` \| `Date` ; `type`: ``"time_bound"``  })[]\> |
| `update` | (`data`: `undefined` \| { `access_code_id`: `string` ; `code?`: `string` ; `device_id?`: `string` ; `ends_at?`: `string` \| `Date` ; `name?`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:160](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L160)

___

### access\_passes

• `Readonly` **access\_passes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/access_passes/create"``\>) => `Promise`<{ `access_methods`: ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] ; `access_pass_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `access_pass_id`: `string`  }) => `Promise`<{ `access_methods`: ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] ; `access_pass_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<{ `access_methods`: ({ `access_method`: ``"remote_unlock"`` ; `device_id`: `string`  } \| { `access_method`: ``"access_code"`` ; `code`: `string` ; `device_id`: `string`  })[] ; `access_pass_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `device_group_id?`: `string` ; `device_id?`: `string`[] ; `device_ids?`: `string`[] ; `ends_at?`: `string` \| `Date` ; `name`: `string` ; `starts_at?`: `string` \| `Date`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:168](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L168)

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
| `add_device` | (`data`: `undefined` \| { `building_id`: `string` ; `device_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `add_user` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/buildings/add_user"``\>) => `Promise`<{ `ok`: `boolean`  }\> |
| `create` | (`data`: `undefined` \| { `location?`: `any` ; `name`: `string` ; `owner_id`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `building_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `building_id`: `string`  }) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `building_id`: `string` ; `created_at`: `string` \| `Date` ; `location?`: `any` ; `name`: `string` ; `organization_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `building_id`: `string` ; `name?`: `string` ; `owner_id?`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:176](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L176)

___

### device\_groups

• `Readonly` **device\_groups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `add_device` | (`data`: `undefined` \| { `device_group_id`: `string` ; `device_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `create` | (`data`: `undefined` \| { `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `device_group_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `device_group_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `device_group_id`: `string` ; `name`: `string` ; `organization_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `device_group_id`: `string` ; `name?`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:186](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L186)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`data`: `undefined` \| { `device_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| [`RouteRequestBody`](../modules/SeamOSRouteTypes.md#routerequestbody)<``"/devices/get"``\>) => `Promise`<{ `connected_account_id`: `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `name`: `string`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `has_no_building?`: `boolean` ; `user_group_id?`: `string` ; `user_id?`: `string`  }) => `Promise`<{ `connected_account_id`: `string` ; `created_at`: `string` \| `Date` ; `device_id`: `string` ; `device_type`: `string` ; `name`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `device_id`: `string` ; `location?`: {} ; `name?`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:197](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L197)

___

### login\_portals

• `Readonly` **login\_portals**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `accepted_providers?`: `string`[] ; `custom_redirect_url?`: `string` ; `device_selection_mode?`: ``"none"`` \| ``"single"`` \| ``"multiple"``  }) => `Promise`<{ `connected_account_id`: ``null`` \| `string` ; `connected_webview_id`: `string` ; `created_at`: `string` \| `Date` ; `organization_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `login_portal_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `login_portal_id`: `string`  }) => `Promise`<{ `connected_account_id`: ``null`` \| `string` ; `connected_webview_id`: `string` ; `created_at`: `string` \| `Date` ; `organization_id`: `string`  }\> |

#### Defined in

[src/seam-os/client.ts:204](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L204)

___

### organizations

• `Readonly` **organizations**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `get` | () => (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string`  }\> |
| `invite_user` | (`data`: `undefined` \| { `email`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `remove_user` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `update` | (`data`: `undefined` \| { `name?`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:150](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L150)

___

### user\_groups

• `Readonly` **user\_groups**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: `undefined` \| { `name`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }\> |
| `delete` | (`data`: `undefined` \| { `user_group_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `user_group_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| {}) => `Promise`<{ `created_at`: `string` \| `Date` ; `name`: `string` ; `organization_id`: `string` ; `user_group_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `name?`: `string` ; `user_group_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:210](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L210)

___

### users

• `Readonly` **users**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |
| `get` | (`data`: `undefined` \| { `user_id`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  }\> |
| `list` | (`data`: `undefined` \| { `building_id?`: `string` ; `user_group_id?`: `string`  }) => `Promise`<{ `created_at`: `string` \| `Date` ; `organization_id`: `string` ; `user_id`: `string`  }[]\> |
| `update` | (`data`: `undefined` \| { `first_name?`: `string` ; `last_name?`: `string` ; `title?`: `string` ; `user_id?`: `string`  }) => `Promise`<{ `ok`: `boolean`  }\> |

#### Defined in

[src/seam-os/client.ts:218](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L218)

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

[src/seam-os/client.ts:142](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L142)

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

[src/seam-os/client.ts:104](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L104)

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

[src/seam-os/client.ts:127](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L127)

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

[src/seam-os/client.ts:112](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L112)

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

[src/seam-os/client.ts:89](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L89)

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

[src/seam-os/client.ts:158](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L158)

___

### makeRequest

▸ **makeRequest**<`URL`, `Method`\>(`request`): `Promise`<[`Routes`](../interfaces/SeamOSRouteTypes.Routes.md)[`URL`][``"jsonResponse"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `URL` | extends keyof [`Routes`](../interfaces/SeamOSRouteTypes.Routes.md) |
| `Method` | extends ``"GET"`` \| ``"POST"`` \| ``"DELETE"`` \| ``"PATCH"`` |

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

[src/seam-os/client.ts:96](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L96)
