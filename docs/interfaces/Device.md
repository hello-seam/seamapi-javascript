[seamapi](../README.md) / [Exports](../modules.md) / Device

# Interface: Device<Properties, Type\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Properties` | extends [`CommonDeviceProperties`](../modules.md#commondeviceproperties) |
| `Type` | [`DeviceType`](../modules.md#devicetype) |

## Table of contents

### Properties

- [capabilities\_supported](Device.md#capabilities_supported)
- [connected\_account\_id](Device.md#connected_account_id)
- [created\_at](Device.md#created_at)
- [device\_id](Device.md#device_id)
- [device\_type](Device.md#device_type)
- [errors](Device.md#errors)
- [is\_managed](Device.md#is_managed)
- [location](Device.md#location)
- [properties](Device.md#properties)
- [warnings](Device.md#warnings)
- [workspace\_id](Device.md#workspace_id)

## Properties

### capabilities\_supported

• **capabilities\_supported**: `unknown`[]

#### Defined in

[src/types/models.ts:149](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L149)

___

### connected\_account\_id

• **connected\_account\_id**: `string`

#### Defined in

[src/types/models.ts:148](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L148)

___

### created\_at

• **created\_at**: `string`

#### Defined in

[src/types/models.ts:152](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L152)

___

### device\_id

• **device\_id**: `string`

#### Defined in

[src/types/models.ts:143](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L143)

___

### device\_type

• **device\_type**: `Type`

#### Defined in

[src/types/models.ts:147](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L147)

___

### errors

• **errors**: ([`DeviceError`](DeviceError.md) \| [`ConnectedAccountError`](ConnectedAccountError.md))[]

#### Defined in

[src/types/models.ts:150](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L150)

___

### is\_managed

• **is\_managed**: ``true``

#### Defined in

[src/types/models.ts:153](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L153)

___

### location

• `Optional` **location**: ``null`` \| [`DeviceLocation`](../modules.md#devicelocation)

#### Defined in

[src/types/models.ts:146](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L146)

___

### properties

• **properties**: `Properties`

#### Defined in

[src/types/models.ts:145](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L145)

___

### warnings

• **warnings**: [`SeamWarning`](SeamWarning.md)[]

#### Defined in

[src/types/models.ts:151](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L151)

___

### workspace\_id

• **workspace\_id**: `string`

#### Defined in

[src/types/models.ts:144](https://github.com/seamapi/javascript/blob/main/src/types/models.ts#L144)
