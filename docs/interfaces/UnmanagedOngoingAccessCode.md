[seamapi](../README.md) / [Exports](../modules.md) / UnmanagedOngoingAccessCode

# Interface: UnmanagedOngoingAccessCode

## Hierarchy

- [`UnmanagedAccessCodeBase`](UnmanagedAccessCodeBase.md)

  ↳ **`UnmanagedOngoingAccessCode`**

## Table of contents

### Properties

- [access\_code\_id](UnmanagedOngoingAccessCode.md#access_code_id)
- [code](UnmanagedOngoingAccessCode.md#code)
- [created\_at](UnmanagedOngoingAccessCode.md#created_at)
- [device\_id](UnmanagedOngoingAccessCode.md#device_id)
- [errors](UnmanagedOngoingAccessCode.md#errors)
- [is\_backup](UnmanagedOngoingAccessCode.md#is_backup)
- [is\_backup\_access\_code\_available](UnmanagedOngoingAccessCode.md#is_backup_access_code_available)
- [name](UnmanagedOngoingAccessCode.md#name)
- [pulled\_backup\_access\_code\_id](UnmanagedOngoingAccessCode.md#pulled_backup_access_code_id)
- [status](UnmanagedOngoingAccessCode.md#status)
- [type](UnmanagedOngoingAccessCode.md#type)
- [warnings](UnmanagedOngoingAccessCode.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[access_code_id](UnmanagedAccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:400](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L400)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[code](UnmanagedAccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:403](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L403)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[created_at](UnmanagedAccessCodeBase.md#created_at)

#### Defined in

[src/types/models.ts:435](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L435)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[device_id](UnmanagedAccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:401](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L401)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md) \| [`AccessCodeError`](AccessCodeError.md))[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[errors](UnmanagedAccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:407](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L407)

___

### is\_backup

• `Optional` **is\_backup**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup](UnmanagedAccessCodeBase.md#is_backup)

#### Defined in

[src/types/models.ts:404](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L404)

___

### is\_backup\_access\_code\_available

• **is\_backup\_access\_code\_available**: `boolean`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[is_backup_access_code_available](UnmanagedAccessCodeBase.md#is_backup_access_code_available)

#### Defined in

[src/types/models.ts:406](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L406)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[name](UnmanagedAccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:402](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L402)

___

### pulled\_backup\_access\_code\_id

• `Optional` **pulled\_backup\_access\_code\_id**: ``null`` \| `string`

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[pulled_backup_access_code_id](UnmanagedAccessCodeBase.md#pulled_backup_access_code_id)

#### Defined in

[src/types/models.ts:405](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L405)

___

### status

• **status**: ``"set"``

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[status](UnmanagedAccessCodeBase.md#status)

#### Defined in

[src/types/models.ts:434](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L434)

___

### type

• **type**: ``"ongoing"``

#### Defined in

[src/types/models.ts:439](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L439)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[UnmanagedAccessCodeBase](UnmanagedAccessCodeBase.md).[warnings](UnmanagedAccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:408](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L408)
