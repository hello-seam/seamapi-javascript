import { SeamEvent } from "seamapi-types"
import { CustomMetadata } from "./globals"

export interface Workspace {
  workspace_id: string
  connect_partner_name?: string
  name: string
  is_sandbox: boolean
}

export const LOCK_DEVICE_TYPES = [
  "akuvox_lock",
  "august_lock",
  "brivo_lock",
  "butterflymx_lock",
  "doorking_lock",
  "genie_lock",
  "igloo_lock",
  "linear_lock",
  "lockly_lock",
  "nuki_lock",
  "salto_lock",
  "schlage_lock",
  "smartthings_lock",
  "yale_lock",
]
export type LockDeviceType = typeof LOCK_DEVICE_TYPES[number]

export const NOISE_DETECTION_DEVICE_TYPES = [
  "noiseaware_activity_zone",
  "minut_sensor",
]
export type NoiseDetectionDeviceType =
  typeof NOISE_DETECTION_DEVICE_TYPES[number]

export type DeviceType = LockDeviceType | NoiseDetectionDeviceType

export const PROVIDERS = [
  "akuvox",
  "august",
  "brivo",
  "butterflymx",
  "doorking",
  "genie",
  "igloo",
  "linear",
  "lockly",
  "nuki",
  "salto",
  "schlage",
  "smartthings",
  "yale_access",
  "minut",
]
export type Provider = typeof PROVIDERS[number]

/** This type can allow for other provider categories as they are added  */
export type ProviderCategory = "stable"

export interface SeamError {
  error_code: string
  message: string
}

export interface SeamWarning {
  warning_code: string
  message: string
}

export type BatteryStatus = "critical" | "low" | "good" | "full"

export type CommonDeviceProperties = {
  name: string
  online: boolean
  battery?: {
    level: number
    status: BatteryStatus
  }
  image_url?: string
}

export type DeviceLocation = {
  location_name?: string
  timezone?: string
}

export interface Device<
  Properties extends CommonDeviceProperties,
  Type = DeviceType
> {
  device_id: string
  workspace_id: string
  properties: Properties
  location?: DeviceLocation | null
  device_type: Type
  connected_account_id: string
  capabilities_supported: unknown[]
  errors: SeamError[]
  warnings: SeamWarning[]
  created_at: string
}

export type UnmanagedDevice = Pick<
  Device<CommonDeviceProperties>,
  | "device_id"
  | "device_type"
  | "connected_account_id"
  | "workspace_id"
  | "errors"
  | "warnings"
  | "created_at"
>

export interface DeviceProvider {
  device_provider_name: string
  display_name: string
  image_url: string
  provider_categories: ProviderCategory[]
}

export interface LockProperties extends CommonDeviceProperties {
  locked: boolean
  door_open?: boolean
  battery_level?: number
  has_direct_power?: boolean
  manufacturer?: string
  supported_code_lengths?: number[]
  max_active_codes_supported?: number
  serial_number?: string

  schlage_metadata?: {
    device_id: string
    device_name: string
    access_code_length: number
    model?: string
    location_id?: string
  }

  august_metadata?: {
    lock_id: string
    lock_name: string
    house_name: string
    house_id?: string
    has_keypad: boolean
    model?: string
  }

  smartthings_metadata?: unknown
}

export type AnyDevice = Device<any, DeviceType>
export type LockDevice = Device<LockProperties, LockDeviceType>

export type ActionType =
  | "LOCK_DOOR"
  | "UNLOCK_DOOR"
  | "CREATE_ACCESS_CODE"
  | "UPDATE_ACCESS_CODE"
  | "DELETE_ACCESS_CODE"

interface ActionAttemptBase<T extends ActionType> {
  action_attempt_id: string
  action_type: T
  status: string
  result: any
  error: any
}

export interface PendingActionAttempt<T extends ActionType>
  extends ActionAttemptBase<T> {
  status: "pending"
  result: null
  error: null
}

export interface ActionAttemptWithError<T extends ActionType>
  extends ActionAttemptBase<T> {
  status: "error"
  result: null
  error: {
    type: string
    message: string
  }
}

export interface ActionAttemptResultTypeMap
  extends Record<ActionType, unknown> {
  CREATE_ACCESS_CODE: { access_code: AccessCode }
  UPDATE_ACCESS_CODE: { access_code: AccessCode }
}

export interface SuccessfulActionAttempt<T extends ActionType>
  extends ActionAttemptBase<T> {
  status: "success"
  error: null
  result: ActionAttemptResultTypeMap[T]
}

export type ActionAttempt<T extends ActionType = ActionType> =
  | PendingActionAttempt<T>
  | ActionAttemptWithError<T>
  | SuccessfulActionAttempt<T>

export interface ConnectWebview {
  connect_webview_id: string
  workspace_id: string
  device_selection_mode: string
  accepted_providers: Provider[]
  selected_provider?: Provider | null
  accepted_devices: unknown[]
  any_provider_allowed: boolean
  any_device_allowed: null | boolean
  created_at: string
  login_successful: boolean
  status: "pending" | "authorized"
  connected_account_id?: null | string
  custom_redirect_url?: null | string
  custom_redirect_failure_url?: null | string
  url: string
  authorized_at?: null | string
  custom_metadata: CustomMetadata
}

export interface AccessCodeBase {
  access_code_id: string
  device_id: string
  name?: string
  code: string | null
  errors?: SeamError[]
  warnings?: SeamWarning[]
}

export interface ManagedAccessCodeBase extends AccessCodeBase {
  common_code_key?: string | null
  is_waiting_for_code_assignment?: true
}

export interface OngoingAccessCode extends ManagedAccessCodeBase {
  type: "ongoing"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
}

export interface TimeBoundAccessCode extends ManagedAccessCodeBase {
  type: "time_bound"
  created_at: string
  status: "setting" | "set" | "removing" | "unset"
  starts_at: string
  ends_at: string
}

export interface UnmanagedAccessCode extends AccessCodeBase {
  type: "ongoing"
  created_at: string
  status: "set"
}

export type AccessCode = OngoingAccessCode | TimeBoundAccessCode

export interface UserIdentifier {
  email: string
}

export interface ConnectedAccount {
  connected_account_id: string
  created_at: string
  user_identifier: UserIdentifier
  account_type: Provider
  errors: SeamError[]
  warnings: SeamWarning[]
  custom_metadata: CustomMetadata
}

export interface Webhook {
  webhook_id: string
  url: string
  event_types?: string[]
  secret?: string
}

type Flatten<EventType extends SeamEvent["event_type"]> =
  EventType extends SeamEvent["event_type"]
    ? {
        event_id: string
        event_type: EventType
        occurred_at: string
        created_at: string
      } & Extract<SeamEvent, { event_type: EventType }>["payload"]
    : never

export type Event = Flatten<SeamEvent["event_type"]>

export type NoiseThresholds = {
  device_id: string
  noise_threshold_id: string
  starts_daily_at: string
  ends_daily_at: string
  noise_threshold_decibels: number
  name: string
  /**
   * Only present if the noise threshold is from Noiseaware
   */
  noise_threshold_nrs?: number
}
