[seamapi](../README.md) / [Exports](../modules.md) / TimeBoundAccessCode

# Interface: TimeBoundAccessCode

## Hierarchy

- [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ **`TimeBoundAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](TimeBoundAccessCode.md#access_code_id)
- [code](TimeBoundAccessCode.md#code)
- [common\_code\_key](TimeBoundAccessCode.md#common_code_key)
- [created\_at](TimeBoundAccessCode.md#created_at)
- [device\_id](TimeBoundAccessCode.md#device_id)
- [ends\_at](TimeBoundAccessCode.md#ends_at)
- [errors](TimeBoundAccessCode.md#errors)
- [is\_backup](TimeBoundAccessCode.md#is_backup)
- [is\_backup\_access\_code\_available](TimeBoundAccessCode.md#is_backup_access_code_available)
- [is\_scheduled\_on\_device](TimeBoundAccessCode.md#is_scheduled_on_device)
- [is\_waiting\_for\_code\_assignment](TimeBoundAccessCode.md#is_waiting_for_code_assignment)
- [name](TimeBoundAccessCode.md#name)
- [pulled\_backup\_access\_code\_id](TimeBoundAccessCode.md#pulled_backup_access_code_id)
- [starts\_at](TimeBoundAccessCode.md#starts_at)
- [status](TimeBoundAccessCode.md#status)
- [type](TimeBoundAccessCode.md#type)
- [warnings](TimeBoundAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[access_code_id](ManagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:387](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L387)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:390](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L390)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:399](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L399)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:411](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L411)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:388](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L388)

___

### ends\_at

• **ends\_at**: `string`

#### Defined in

[src/types/models.ts:415](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L415)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:394](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L394)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_backup](ManagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:391](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L391)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_backup_access_code_available](ManagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:393](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L393)

___

### is\_scheduled\_on\_device

• `Optional` **is\_scheduled\_on\_device**: `boolean`

#### Defined in

[src/types/models.ts:413](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L413)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:400](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L400)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:389](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L389)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[pulled_backup_access_code_id](ManagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:392](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L392)

___

### starts\_at

• **starts\_at**: `string`

#### Defined in

[src/types/models.ts:414](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L414)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:412](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L412)

___

### type

• **type**: ``"time_bound"``

#### Defined in

[src/types/models.ts:410](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L410)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:395](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L395)
