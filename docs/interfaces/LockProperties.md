[seamapi](../README.md) / [Exports](../modules.md) / LockProperties

# Interface: LockProperties

## Hierarchy

- [`CommonDeviceProperties`](../modules.md#commondeviceproperties)

  ↳ **`LockProperties`**

## Table of contents

### Properties

- [august\_metadata](LockProperties.md#august_metadata)
- [battery\_level](LockProperties.md#battery_level)
- [door\_open](LockProperties.md#door_open)
- [locked](LockProperties.md#locked)
- [manufacturer](LockProperties.md#manufacturer)
- [name](LockProperties.md#name)
- [online](LockProperties.md#online)
- [schlage\_metadata](LockProperties.md#schlage_metadata)
- [smartthings\_metadata](LockProperties.md#smartthings_metadata)

## Properties

### august\_metadata

• `Optional` **august\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `has_keypad` | `boolean` |
| `house_name` | `string` |
| `lock_id` | `string` |
| `lock_name` | `string` |

#### Defined in

[src/types/models.ts:58](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L58)

___

### battery\_level

• `Optional` **battery\_level**: `number`

#### Defined in

[src/types/models.ts:50](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L50)

___

### door\_open

• `Optional` **door\_open**: `boolean`

#### Defined in

[src/types/models.ts:49](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L49)

___

### locked

• **locked**: `boolean`

#### Defined in

[src/types/models.ts:48](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L48)

___

### manufacturer

• `Optional` **manufacturer**: `string`

#### Defined in

[src/types/models.ts:51](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L51)

___

### name

• **name**: `string`

#### Inherited from

CommonDeviceProperties.name

#### Defined in

[src/types/models.ts:29](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L29)

___

### online

• **online**: `boolean`

#### Inherited from

CommonDeviceProperties.online

#### Defined in

[src/types/models.ts:30](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L30)

___

### schlage\_metadata

• `Optional` **schlage\_metadata**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `device_id` | `string` |
| `device_name` | `string` |

#### Defined in

[src/types/models.ts:53](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L53)

___

### smartthings\_metadata

• `Optional` **smartthings\_metadata**: `unknown`

#### Defined in

[src/types/models.ts:65](https://github.com/seamapi/seamapi-javascript/blob/main/src/types/models.ts#L65)
