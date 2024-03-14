[seamapi](../README.md) / [Exports](../modules.md) / OngoingAccessCode

# Interface: OngoingAccessCode

## Hierarchy

- [`ManagedAccessCodeBase`](ManagedAccessCodeBase.md)

  ↳ **`OngoingAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](OngoingAccessCode.md#access_code_id)
- [appearance](OngoingAccessCode.md#appearance)
- [code](OngoingAccessCode.md#code)
- [common\_code\_key](OngoingAccessCode.md#common_code_key)
- [created\_at](OngoingAccessCode.md#created_at)
- [device\_id](OngoingAccessCode.md#device_id)
- [errors](OngoingAccessCode.md#errors)
- [is\_backup](OngoingAccessCode.md#is_backup)
- [is\_backup\_access\_code\_available](OngoingAccessCode.md#is_backup_access_code_available)
- [is\_external\_modification\_allowed](OngoingAccessCode.md#is_external_modification_allowed)
- [is\_waiting\_for\_code\_assignment](OngoingAccessCode.md#is_waiting_for_code_assignment)
- [name](OngoingAccessCode.md#name)
- [pulled\_backup\_access\_code\_id](OngoingAccessCode.md#pulled_backup_access_code_id)
- [status](OngoingAccessCode.md#status)
- [type](OngoingAccessCode.md#type)
- [warnings](OngoingAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[access_code_id](ManagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:422](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L422)

___

### appearance

• **appearance**: `Object`

#### Index signature

▪ [key: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name?` | `string` |

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[appearance](ManagedAccessCodeBase.md#appearance)

#### Defined in

[src/types/models.ts:431](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L431)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[code](ManagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:425](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L425)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[common_code_key](ManagedAccessCodeBase.md#common_code_key)

#### Defined in

[src/types/models.ts:439](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L439)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:445](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L445)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[device_id](ManagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:423](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L423)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[errors](ManagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:429](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L429)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_backup](ManagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:426](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L426)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_backup_access_code_available](ManagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:428](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L428)

___

### is\_external\_modification\_allowed

• **is\_external\_modification\_allowed**: `boolean`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_external_modification_allowed](ManagedAccessCodeBase.md#is_external_modification_allowed)

#### Defined in

[src/types/models.ts:438](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L438)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[is_waiting_for_code_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)

#### Defined in

[src/types/models.ts:440](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L440)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[name](ManagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:424](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L424)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[pulled_backup_access_code_id](ManagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:427](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L427)

___

### status

• **status**: ``"setting"`` \| ``"set"`` \| ``"unset"`` \| ``"removing"``

#### Defined in

[src/types/models.ts:446](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L446)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:444](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L444)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[ManagedAccessCodeBase](ManagedAccessCodeBase.md).[warnings](ManagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:430](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L430)
