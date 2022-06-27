[seamapi](../README.md) / [Exports](../modules.md) / Seam

# Class: Seam

## Hierarchy

- `Routes`

  ↳ **`Seam`**

## Table of contents

### Constructors

- [constructor](Seam.md#constructor)

### Properties

- [accessCodes](Seam.md#accesscodes)
- [actionAttempts](Seam.md#actionattempts)
- [client](Seam.md#client)
- [connectWebviews](Seam.md#connectwebviews)
- [connectedAccounts](Seam.md#connectedaccounts)
- [devices](Seam.md#devices)
- [locks](Seam.md#locks)
- [workspaces](Seam.md#workspaces)

### Methods

- [makeRequest](Seam.md#makerequest)

## Constructors

### constructor

• **new Seam**(`apiKeyOrOptions?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamClientOptions`](../interfaces/SeamClientOptions.md) |

#### Overrides

Routes.constructor

#### Defined in

[src/client.ts:39](https://github.com/seamapi/javascript/blob/main/src/client.ts#L39)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`AccessCodeCreateOngoingRequest`](../interfaces/AccessCodeCreateOngoingRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)\>(`params`: [`AccessCodeCreateScheduledRequest`](../interfaces/AccessCodeCreateScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |
| `delete` | (`params`: [`AccessCodeDeleteRequest`](../modules.md#accesscodedeleterequest)) => `Promise`<`unknown`\> |
| `list` | (`params`: { `device_id`: `string`  }) => `Promise`<[`AccessCode`](../modules.md#accesscode)[]\> |
| `update` | (`params`: [`AccessCodeUpdateRequest`](../modules.md#accesscodeupdaterequest)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md) \| [`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/routes.ts:196](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L196)

___

### actionAttempts

• `Readonly` **actionAttempts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | <T\>(`actionAttemptId`: `string`) => `Promise`<[`ActionAttempt`](../modules.md#actionattempt)<`T`\>\> |

#### Inherited from

Routes.actionAttempts

#### Defined in

[src/routes.ts:260](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L260)

___

### client

• **client**: `AxiosInstance`

#### Defined in

[src/client.ts:37](https://github.com/seamapi/javascript/blob/main/src/client.ts#L37)

___

### connectWebviews

• `Readonly` **connectWebviews**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<`Omit`<[`ConnectWebview`](../interfaces/ConnectWebview.md), ``"connected_account_id"``\> & { `custom_redirect_url`: ``null`` \| `string`  }\> |
| `get` | (`connectWebviewId`: `string`) => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)\> |
| `list` | () => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)[]\> |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/routes.ts:170](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L170)

___

### connectedAccounts

• `Readonly` **connectedAccounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`connectedAccountId`: `string`) => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)\> |
| `list` | () => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |

#### Inherited from

Routes.connectedAccounts

#### Defined in

[src/routes.ts:239](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L239)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`params`: [`DeviceGetRequest`](../modules.md#devicegetrequest)) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), [`DeviceType`](../modules.md#devicetype)\>\> |
| `list` | (`params?`: [`DevicesListRequest`](../interfaces/DevicesListRequest.md)) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), [`DeviceType`](../modules.md#devicetype)\>[]\> |
| `update` | (`params`: [`DeviceUpdateRequest`](../modules.md#deviceupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.devices

#### Defined in

[src/routes.ts:151](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L151)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)[]\> |
| `lockDoor` | (`deviceId`: `string`) => `Promise`<`unknown`\> |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<`unknown`\> |

#### Inherited from

Routes.locks

#### Defined in

[src/routes.ts:116](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L116)

___

### workspaces

• `Readonly` **workspaces**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md) & { `connect_partner_name`: `string`  }\> |
| `list` | () => `Promise`<[`Workspace`](../interfaces/Workspace.md)[]\> |
| `resetSandbox` | () => `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<[`WorkspaceResetSandboxResponse`](../interfaces/WorkspaceResetSandboxResponse.md)\>\> |

#### Inherited from

Routes.workspaces

#### Defined in

[src/routes.ts:100](https://github.com/seamapi/javascript/blob/main/src/routes.ts#L100)

## Methods

### makeRequest

▸ **makeRequest**<`T`\>(`request`): `Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `AxiosRequestConfig`<`any`\> |

#### Returns

`Promise`<[`SuccessfulAPIResponse`](../modules.md#successfulapiresponse)<`T`\>\>

#### Overrides

Routes.makeRequest

#### Defined in

[src/client.ts:70](https://github.com/seamapi/javascript/blob/main/src/client.ts#L70)
