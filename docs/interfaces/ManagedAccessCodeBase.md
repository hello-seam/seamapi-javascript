[seamapi](../README.md) / [Exports](../modules.md) / ManagedAccessCodeBase

# Interface: ManagedAccessCodeBase

## Hierarchy

- [`AccessCodeBase`](AccessCodeBase.md)

  ↳ **`ManagedAccessCodeBase`**

  ↳↳ [`OngoingAccessCode`](OngoingAccessCode.md)

  ↳↳ [`TimeBoundAccessCode`](TimeBoundAccessCode.md)

## Table of contents

### Properties

- [access\_code\_id](ManagedAccessCodeBase.md#access_code_id)
- [code](ManagedAccessCodeBase.md#code)
- [common\_code\_key](ManagedAccessCodeBase.md#common_code_key)
- [device\_id](ManagedAccessCodeBase.md#device_id)
- [errors](ManagedAccessCodeBase.md#errors)
- [is\_waiting\_for\_code\_assignment](ManagedAccessCodeBase.md#is_waiting_for_code_assignment)
- [name](ManagedAccessCodeBase.md#name)
- [warnings](ManagedAccessCodeBase.md#warnings)

## Properties

### access\_code\_id

• **access\_code\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[access_code_id](AccessCodeBase.md#access_code_id)

#### Defined in

[src/types/models.ts:237](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L237)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:240](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L240)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:246](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L246)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:238](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L238)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:241](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L241)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Defined in

[src/types/models.ts:247](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L247)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:239](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L239)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:242](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L242)
