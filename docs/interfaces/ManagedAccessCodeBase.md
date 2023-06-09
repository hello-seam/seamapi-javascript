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

[src/types/models.ts:268](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L268)

___

### code

• **code**: ``null`` \| `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[code](AccessCodeBase.md#code)

#### Defined in

[src/types/models.ts:271](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L271)

___

### common\_code\_key

• `Optional` **common\_code\_key**: ``null`` \| `string`

#### Defined in

[src/types/models.ts:277](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L277)

___

### device\_id

• **device\_id**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[device_id](AccessCodeBase.md#device_id)

#### Defined in

[src/types/models.ts:269](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L269)

___

### errors

• `Optional` **errors**: [`SeamError`](SeamError.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[errors](AccessCodeBase.md#errors)

#### Defined in

[src/types/models.ts:272](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L272)

___

### is\_waiting\_for\_code\_assignment

• `Optional` **is\_waiting\_for\_code\_assignment**: ``true``

#### Defined in

[src/types/models.ts:278](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L278)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[name](AccessCodeBase.md#name)

#### Defined in

[src/types/models.ts:270](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L270)

___

### warnings

• `Optional` **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Inherited from

[AccessCodeBase](AccessCodeBase.md).[warnings](AccessCodeBase.md#warnings)

#### Defined in

[src/types/models.ts:273](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L273)
