[seamapi](README.md) / Exports

# seamapi

## Table of contents

### References

- [default](modules.md#default)

### Namespaces

- [SeamOSRouteTypes](modules/SeamOSRouteTypes.md)

### Classes

- [Seam](classes/Seam.md)
- [SeamAPIError](classes/SeamAPIError.md)
- [SeamActionAttemptError](classes/SeamActionAttemptError.md)
- [SeamMalformedInputError](classes/SeamMalformedInputError.md)
- [SeamOS](classes/SeamOS.md)
- [SeamWebhook](classes/SeamWebhook.md)

### Interfaces

- [APIErrorResponse](interfaces/APIErrorResponse.md)
- [AccessCodeBase](interfaces/AccessCodeBase.md)
- [AccessCodeCreateBaseRequest](interfaces/AccessCodeCreateBaseRequest.md)
- [AccessCodeCreateMultipleOngoingRequest](interfaces/AccessCodeCreateMultipleOngoingRequest.md)
- [AccessCodeCreateMultipleResponse](interfaces/AccessCodeCreateMultipleResponse.md)
- [AccessCodeCreateMultipleScheduledRequest](interfaces/AccessCodeCreateMultipleScheduledRequest.md)
- [AccessCodeCreateOngoingRequest](interfaces/AccessCodeCreateOngoingRequest.md)
- [AccessCodeCreateResponse](interfaces/AccessCodeCreateResponse.md)
- [AccessCodeCreateScheduledRequest](interfaces/AccessCodeCreateScheduledRequest.md)
- [AccessCodeGetResponse](interfaces/AccessCodeGetResponse.md)
- [AccessCodeUpdateBaseRequest](interfaces/AccessCodeUpdateBaseRequest.md)
- [AccessCodesListResponse](interfaces/AccessCodesListResponse.md)
- [ActionAttemptCreateResponse](interfaces/ActionAttemptCreateResponse.md)
- [ActionAttemptGetResponse](interfaces/ActionAttemptGetResponse.md)
- [ActionAttemptResultTypeMap](interfaces/ActionAttemptResultTypeMap.md)
- [ActionAttemptWithError](interfaces/ActionAttemptWithError.md)
- [ConnectWebview](interfaces/ConnectWebview.md)
- [ConnectWebviewCreateRequest](interfaces/ConnectWebviewCreateRequest.md)
- [ConnectWebviewCreateResponse](interfaces/ConnectWebviewCreateResponse.md)
- [ConnectWebviewDeleteRequest](interfaces/ConnectWebviewDeleteRequest.md)
- [ConnectWebviewGetResponse](interfaces/ConnectWebviewGetResponse.md)
- [ConnectWebviewsListResponse](interfaces/ConnectWebviewsListResponse.md)
- [ConnectedAccount](interfaces/ConnectedAccount.md)
- [ConnectedAccountsDeleteRequest](interfaces/ConnectedAccountsDeleteRequest.md)
- [ConnectedAccountsGetRequest](interfaces/ConnectedAccountsGetRequest.md)
- [ConnectedAccountsGetResponse](interfaces/ConnectedAccountsGetResponse.md)
- [ConnectedAccountsListResponse](interfaces/ConnectedAccountsListResponse.md)
- [Device](interfaces/Device.md)
- [DeviceGetResponse](interfaces/DeviceGetResponse.md)
- [DevicesListRequest](interfaces/DevicesListRequest.md)
- [DevicesListResponse](interfaces/DevicesListResponse.md)
- [ErroredAPIResponse](interfaces/ErroredAPIResponse.md)
- [EventsListRequest](interfaces/EventsListRequest.md)
- [EventsListResponse](interfaces/EventsListResponse.md)
- [ExtendedAxiosRequestConfig](interfaces/ExtendedAxiosRequestConfig.md)
- [LockGetResponse](interfaces/LockGetResponse.md)
- [LockProperties](interfaces/LockProperties.md)
- [LocksListResponse](interfaces/LocksListResponse.md)
- [OngoingAccessCode](interfaces/OngoingAccessCode.md)
- [PendingActionAttempt](interfaces/PendingActionAttempt.md)
- [SeamAPIErrorMetadata](interfaces/SeamAPIErrorMetadata.md)
- [SeamClientOptions](interfaces/SeamClientOptions.md)
- [SeamError](interfaces/SeamError.md)
- [SeamOSClientOptions](interfaces/SeamOSClientOptions.md)
- [SeamWarning](interfaces/SeamWarning.md)
- [SuccessfulActionAttempt](interfaces/SuccessfulActionAttempt.md)
- [TimeBoundAccessCode](interfaces/TimeBoundAccessCode.md)
- [UserIdentifier](interfaces/UserIdentifier.md)
- [Webhook](interfaces/Webhook.md)
- [WebhookGetResponse](interfaces/WebhookGetResponse.md)
- [WebhookListResponse](interfaces/WebhookListResponse.md)
- [Workspace](interfaces/Workspace.md)
- [WorkspaceGetResponse](interfaces/WorkspaceGetResponse.md)
- [WorkspaceResetSandboxResponse](interfaces/WorkspaceResetSandboxResponse.md)
- [WorkspacesListResponse](interfaces/WorkspacesListResponse.md)

### Type aliases

- [APIResponse](modules.md#apiresponse)
- [AccessCode](modules.md#accesscode)
- [AccessCodeCreateMultipleBaseRequest](modules.md#accesscodecreatemultiplebaserequest)
- [AccessCodeCreateMultipleRequest](modules.md#accesscodecreatemultiplerequest)
- [AccessCodeCreateRequest](modules.md#accesscodecreaterequest)
- [AccessCodeDeleteRequest](modules.md#accesscodedeleterequest)
- [AccessCodeGetRequest](modules.md#accesscodegetrequest)
- [AccessCodeUpdateOngoingRequest](modules.md#accesscodeupdateongoingrequest)
- [AccessCodeUpdateRequest](modules.md#accesscodeupdaterequest)
- [AccessCodeUpdateScheduledRequest](modules.md#accesscodeupdatescheduledrequest)
- [ActionAttempt](modules.md#actionattempt)
- [ActionType](modules.md#actiontype)
- [AnyDevice](modules.md#anydevice)
- [BatteryStatus](modules.md#batterystatus)
- [CommonDeviceProperties](modules.md#commondeviceproperties)
- [CustomMetadata](modules.md#custommetadata)
- [DeviceDeleteRequest](modules.md#devicedeleterequest)
- [DeviceGetRequest](modules.md#devicegetrequest)
- [DeviceLocation](modules.md#devicelocation)
- [DeviceType](modules.md#devicetype)
- [DeviceUpdateRequest](modules.md#deviceupdaterequest)
- [Event](modules.md#event)
- [LockDevice](modules.md#lockdevice)
- [LockDeviceType](modules.md#lockdevicetype)
- [NoiseDetectionDeviceType](modules.md#noisedetectiondevicetype)
- [Provider](modules.md#provider)
- [SeamWebhookEvent](modules.md#seamwebhookevent)
- [SuccessfulAPIResponse](modules.md#successfulapiresponse)
- [WebhookCreateRequest](modules.md#webhookcreaterequest)
- [WebhookGetRequest](modules.md#webhookgetrequest)

### Variables

- [LOCK\_DEVICE\_TYPES](modules.md#lock_device_types)
- [NOISE\_DETECTION\_DEVICE\_TYPES](modules.md#noise_detection_device_types)
- [PROVIDERS](modules.md#providers)

### Functions

- [getSeamClientOptionsWithDefaults](modules.md#getseamclientoptionswithdefaults)
- [getSeamOSClientOptionsWithDefaults](modules.md#getseamosclientoptionswithdefaults)

## References

### default

Renames and re-exports [Seam](classes/Seam.md)

## Type aliases

### APIResponse

Ƭ **APIResponse**<`T`\>: [`SuccessfulAPIResponse`](modules.md#successfulapiresponse)<`T`\> \| [`ErroredAPIResponse`](interfaces/ErroredAPIResponse.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:16](https://github.com/seamapi/javascript/blob/main/src/types/globals.ts#L16)

___

### AccessCode

Ƭ **AccessCode**: [`OngoingAccessCode`](interfaces/OngoingAccessCode.md) \| [`TimeBoundAccessCode`](interfaces/TimeBoundAccessCode.md)

#### Defined in

[src/types/models.ts:222](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L222)

___

### AccessCodeCreateMultipleBaseRequest

Ƭ **AccessCodeCreateMultipleBaseRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `behavior_when_code_cannot_be_shared?` | ``"throw"`` \| ``"create_random_code"`` |
| `device_ids` | `string`[] |
| `name?` | `string` |

#### Defined in

[src/types/route-requests.ts:55](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L55)

___

### AccessCodeCreateMultipleRequest

Ƭ **AccessCodeCreateMultipleRequest**: [`AccessCodeCreateMultipleOngoingRequest`](interfaces/AccessCodeCreateMultipleOngoingRequest.md) \| [`AccessCodeCreateMultipleScheduledRequest`](interfaces/AccessCodeCreateMultipleScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:70](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L70)

___

### AccessCodeCreateRequest

Ƭ **AccessCodeCreateRequest**: [`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md) \| [`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md)

#### Defined in

[src/types/route-requests.ts:51](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L51)

___

### AccessCodeDeleteRequest

Ƭ **AccessCodeDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:93](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L93)

___

### AccessCodeGetRequest

Ƭ **AccessCodeGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_code_id?` | `string` |
| `code?` | `string` |
| `device_id?` | `string` |

#### Defined in

[src/types/route-requests.ts:98](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L98)

___

### AccessCodeUpdateOngoingRequest

Ƭ **AccessCodeUpdateOngoingRequest**: `Except`<[`AccessCodeCreateOngoingRequest`](interfaces/AccessCodeCreateOngoingRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:79](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L79)

___

### AccessCodeUpdateRequest

Ƭ **AccessCodeUpdateRequest**: [`AccessCodeUpdateOngoingRequest`](modules.md#accesscodeupdateongoingrequest) \| [`AccessCodeUpdateScheduledRequest`](modules.md#accesscodeupdatescheduledrequest)

#### Defined in

[src/types/route-requests.ts:89](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L89)

___

### AccessCodeUpdateScheduledRequest

Ƭ **AccessCodeUpdateScheduledRequest**: `Except`<[`AccessCodeCreateScheduledRequest`](interfaces/AccessCodeCreateScheduledRequest.md), ``"device_id"``\> & [`AccessCodeUpdateBaseRequest`](interfaces/AccessCodeUpdateBaseRequest.md)

#### Defined in

[src/types/route-requests.ts:84](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L84)

___

### ActionAttempt

Ƭ **ActionAttempt**<`T`\>: [`PendingActionAttempt`](interfaces/PendingActionAttempt.md)<`T`\> \| [`ActionAttemptWithError`](interfaces/ActionAttemptWithError.md)<`T`\> \| [`SuccessfulActionAttempt`](interfaces/SuccessfulActionAttempt.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ActionType`](modules.md#actiontype) = [`ActionType`](modules.md#actiontype) |

#### Defined in

[src/types/models.ts:173](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L173)

___

### ActionType

Ƭ **ActionType**: ``"LOCK_DOOR"`` \| ``"UNLOCK_DOOR"`` \| ``"CREATE_ACCESS_CODE"`` \| ``"UPDATE_ACCESS_CODE"`` \| ``"DELETE_ACCESS_CODE"``

#### Defined in

[src/types/models.ts:128](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L128)

___

### AnyDevice

Ƭ **AnyDevice**: [`Device`](interfaces/Device.md)<`any`, [`DeviceType`](modules.md#devicetype)\>

#### Defined in

[src/types/models.ts:125](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L125)

___

### BatteryStatus

Ƭ **BatteryStatus**: ``"critical"`` \| ``"low"`` \| ``"good"`` \| ``"full"``

#### Defined in

[src/types/models.ts:63](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L63)

___

### CommonDeviceProperties

Ƭ **CommonDeviceProperties**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `battery?` | `Object` |
| `battery.level` | `number` |
| `battery.status` | [`BatteryStatus`](modules.md#batterystatus) |
| `name` | `string` |
| `online` | `boolean` |

#### Defined in

[src/types/models.ts:65](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L65)

___

### CustomMetadata

Ƭ **CustomMetadata**: `Record`<`string`, `string` \| `number` \| `boolean` \| ``null``\>

#### Defined in

[src/types/globals.ts:18](https://github.com/seamapi/javascript/blob/main/src/types/globals.ts#L18)

___

### DeviceDeleteRequest

Ƭ **DeviceDeleteRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |

#### Defined in

[src/types/route-requests.ts:119](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L119)

___

### DeviceGetRequest

Ƭ **DeviceGetRequest**: { `device_id`: `string`  } \| { `name`: `string`  }

#### Defined in

[src/types/route-requests.ts:104](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L104)

___

### DeviceLocation

Ƭ **DeviceLocation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `location_name?` | `string` |
| `timezone?` | `string` |

#### Defined in

[src/types/models.ts:74](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L74)

___

### DeviceType

Ƭ **DeviceType**: [`LockDeviceType`](modules.md#lockdevicetype) \| [`NoiseDetectionDeviceType`](modules.md#noisedetectiondevicetype)

#### Defined in

[src/types/models.ts:33](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L33)

___

### DeviceUpdateRequest

Ƭ **DeviceUpdateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `location?` | `object` |
| `name?` | `string` |
| `properties?` | `Partial`<[`CommonDeviceProperties`](modules.md#commondeviceproperties)\> |

#### Defined in

[src/types/route-requests.ts:112](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L112)

___

### Event

Ƭ **Event**: `Flatten`<`SeamEvent`[``"event_type"``]\>

#### Defined in

[src/types/models.ts:255](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L255)

___

### LockDevice

Ƭ **LockDevice**: [`Device`](interfaces/Device.md)<[`LockProperties`](interfaces/LockProperties.md), [`LockDeviceType`](modules.md#lockdevicetype)\>

#### Defined in

[src/types/models.ts:126](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L126)

___

### LockDeviceType

Ƭ **LockDeviceType**: typeof [`LOCK_DEVICE_TYPES`](modules.md#lock_device_types)[`number`]

#### Defined in

[src/types/models.ts:27](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L27)

___

### NoiseDetectionDeviceType

Ƭ **NoiseDetectionDeviceType**: typeof [`NOISE_DETECTION_DEVICE_TYPES`](modules.md#noise_detection_device_types)[`number`]

#### Defined in

[src/types/models.ts:30](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L30)

___

### Provider

Ƭ **Provider**: typeof [`PROVIDERS`](modules.md#providers)[`number`]

#### Defined in

[src/types/models.ts:51](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L51)

___

### SeamWebhookEvent

Ƭ **SeamWebhookEvent**: `Distribute`<`SeamEvent`[``"event_type"``]\>

#### Defined in

[src/types/webhook-events.ts:10](https://github.com/seamapi/javascript/blob/main/src/types/webhook-events.ts#L10)

___

### SuccessfulAPIResponse

Ƭ **SuccessfulAPIResponse**<`T`\>: `T` & { `ok`: ``true``  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/globals.ts:7](https://github.com/seamapi/javascript/blob/main/src/types/globals.ts#L7)

___

### WebhookCreateRequest

Ƭ **WebhookCreateRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Defined in

[src/types/route-requests.ts:127](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L127)

___

### WebhookGetRequest

Ƭ **WebhookGetRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `webhook_id` | `string` |

#### Defined in

[src/types/route-requests.ts:123](https://github.com/seamapi/javascript/blob/main/src/types/route-requests.ts#L123)

## Variables

### LOCK\_DEVICE\_TYPES

• `Const` **LOCK\_DEVICE\_TYPES**: `string`[]

#### Defined in

[src/types/models.ts:11](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L11)

___

### NOISE\_DETECTION\_DEVICE\_TYPES

• `Const` **NOISE\_DETECTION\_DEVICE\_TYPES**: `string`[]

#### Defined in

[src/types/models.ts:29](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L29)

___

### PROVIDERS

• `Const` **PROVIDERS**: `string`[]

#### Defined in

[src/types/models.ts:35](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L35)

## Functions

### getSeamClientOptionsWithDefaults

▸ **getSeamClientOptionsWithDefaults**(`apiKeyOrOptions?`): [`SeamClientOptions`](interfaces/SeamClientOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamClientOptions`](interfaces/SeamClientOptions.md) |

#### Returns

[`SeamClientOptions`](interfaces/SeamClientOptions.md)

#### Defined in

[src/seam-connect/client.ts:26](https://github.com/seamapi/javascript/blob/main/src/seam-connect/client.ts#L26)

___

### getSeamOSClientOptionsWithDefaults

▸ **getSeamOSClientOptionsWithDefaults**(`apiKeyOrOptions?`): [`SeamOSClientOptions`](interfaces/SeamOSClientOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKeyOrOptions?` | `string` \| [`SeamOSClientOptions`](interfaces/SeamOSClientOptions.md) |

#### Returns

[`SeamOSClientOptions`](interfaces/SeamOSClientOptions.md)

#### Defined in

[src/seam-os/client.ts:24](https://github.com/seamapi/javascript/blob/main/src/seam-os/client.ts#L24)
