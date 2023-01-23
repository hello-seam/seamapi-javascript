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
- [events](Seam.md#events)
- [locks](Seam.md#locks)
- [webhooks](Seam.md#webhooks)
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

[src/seam-connect/client.ts:44](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L44)

## Properties

### accessCodes

• `Readonly` **accessCodes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`AccessCodeCreateOngoingRequest`](../interfaces/AccessCodeCreateOngoingRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)\>(`params`: [`AccessCodeCreateScheduledRequest`](../interfaces/AccessCodeCreateScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |
| `createMultiple` | (`params`: [`AccessCodeCreateMultipleOngoingRequest`](../interfaces/AccessCodeCreateMultipleOngoingRequest.md)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md)[]\>(`params`: [`AccessCodeCreateMultipleScheduledRequest`](../interfaces/AccessCodeCreateMultipleScheduledRequest.md)) => `Promise`<[`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)[]\> |
| `delete` | (`params`: [`AccessCodeDeleteRequest`](../modules.md#accesscodedeleterequest)) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `get` | (`params`: [`AccessCodeGetRequest`](../modules.md#accesscodegetrequest)) => `Promise`<[`AccessCode`](../modules.md#accesscode)\> |
| `list` | (`params`: { `device_id`: `string`  }) => `Promise`<[`AccessCode`](../modules.md#accesscode)[]\> |
| `update` | (`params`: [`AccessCodeUpdateRequest`](../modules.md#accesscodeupdaterequest)) => `Promise`<[`OngoingAccessCode`](../interfaces/OngoingAccessCode.md) \| [`TimeBoundAccessCode`](../interfaces/TimeBoundAccessCode.md)\> |

#### Inherited from

Routes.accessCodes

#### Defined in

[src/seam-connect/routes.ts:241](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L241)

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

[src/seam-connect/routes.ts:325](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L325)

___

### client

• **client**: `AxiosInstance`

#### Defined in

[src/seam-connect/client.ts:42](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L42)

___

### connectWebviews

• `Readonly` **connectWebviews**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`params`: [`ConnectWebviewCreateRequest`](../interfaces/ConnectWebviewCreateRequest.md)) => `Promise`<`Omit`<[`ConnectWebview`](../interfaces/ConnectWebview.md), ``"connected_account_id"``\> & { `custom_redirect_failure_url`: ``null`` \| `string` ; `custom_redirect_url`: ``null`` \| `string`  }\> |
| `delete` | (`params`: [`ConnectWebviewDeleteRequest`](../interfaces/ConnectWebviewDeleteRequest.md)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`connectWebviewId`: `string`) => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)\> |
| `list` | () => `Promise`<[`ConnectWebview`](../interfaces/ConnectWebview.md)[]\> |

#### Inherited from

Routes.connectWebviews

#### Defined in

[src/seam-connect/routes.ts:209](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L209)

___

### connectedAccounts

• `Readonly` **connectedAccounts**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`params`: [`ConnectedAccountsDeleteRequest`](../interfaces/ConnectedAccountsDeleteRequest.md)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`ConnectedAccountsGetRequest`](../interfaces/ConnectedAccountsGetRequest.md)) => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)\> |
| `list` | () => `Promise`<[`ConnectedAccount`](../interfaces/ConnectedAccount.md)[]\> |

#### Inherited from

Routes.connectedAccounts

#### Defined in

[src/seam-connect/routes.ts:300](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L300)

___

### devices

• `Readonly` **devices**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delete` | (`params`: [`DeviceDeleteRequest`](../modules.md#devicedeleterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`DeviceGetRequest`](../modules.md#devicegetrequest)) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), [`DeviceType`](../modules.md#devicetype)\>\> |
| `list` | (`params?`: [`DevicesListRequest`](../interfaces/DevicesListRequest.md)) => `Promise`<[`Device`](../interfaces/Device.md)<[`CommonDeviceProperties`](../modules.md#commondeviceproperties), [`DeviceType`](../modules.md#devicetype)\>[]\> |
| `update` | (`params`: [`DeviceUpdateRequest`](../modules.md#deviceupdaterequest)) => `Promise`<{ `ok`: ``true``  }\> |

#### Inherited from

Routes.devices

#### Defined in

[src/seam-connect/routes.ts:172](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L172)

___

### events

• `Readonly` **events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `list` | (`params?`: [`EventsListRequest`](../interfaces/EventsListRequest.md)) => `Promise`<[`Event`](../modules.md#event)[]\> |

#### Inherited from

Routes.events

#### Defined in

[src/seam-connect/routes.ts:197](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L197)

___

### locks

• `Readonly` **locks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`deviceId`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)\> |
| `list` | (`connectedAccountId?`: `string`) => `Promise`<[`LockDevice`](../modules.md#lockdevice)[]\> |
| `lockDoor` | (`deviceId`: `string`) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |
| `unlockDoor` | (`deviceId`: `string`) => `Promise`<{ `actionAttempt`: [`ActionAttempt`](../modules.md#actionattempt)<[`ActionType`](../modules.md#actiontype)\>  }\> |

#### Inherited from

Routes.locks

#### Defined in

[src/seam-connect/routes.ts:137](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L137)

___

### webhooks

• `Readonly` **webhooks**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `create` | (`data`: [`WebhookCreateRequest`](../modules.md#webhookcreaterequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `delete` | (`params`: [`WebhookGetRequest`](../modules.md#webhookgetrequest)) => `Promise`<{ `ok`: ``true``  }\> |
| `get` | (`params`: [`WebhookGetRequest`](../modules.md#webhookgetrequest)) => `Promise`<[`Webhook`](../interfaces/Webhook.md)\> |
| `list` | () => `Promise`<[`Webhook`](../interfaces/Webhook.md)[]\> |

#### Inherited from

Routes.webhooks

#### Defined in

[src/seam-connect/routes.ts:335](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L335)

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

[src/seam-connect/routes.ts:121](https://github.com/seamapi/javascript/blob/main/src/seam-connect/routes.ts#L121)

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

[src/seam-connect/client.ts:82](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L82)
