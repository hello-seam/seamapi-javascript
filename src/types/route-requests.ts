import { Except } from "type-fest"
import { CommonDeviceProperties, Provider } from "./models"
import { CustomMetadata } from "./globals"

export interface ConnectWebviewCreateRequest {
  accepted_providers: Provider[]
  device_selection_mode?: "none" | "single" | "multiple"
  custom_redirect_url?: string
  custom_redirect_failure_url?: string
  custom_metadata?: CustomMetadata
}

export interface ConnectWebviewDeleteRequest {
  connect_webview_id: string
}

interface ConnectedAccountBaseRequest {
  connected_account_id?: string
  email?: string
}

export interface ConnectedAccountsGetRequest
  extends ConnectedAccountBaseRequest {}

export interface ConnectedAccountsDeleteRequest
  extends ConnectedAccountBaseRequest {}

export interface DevicesListRequest {
  connected_account_id?: string
  connect_webview_id?: string
  device_type?: string
  device_ids?: string[]
}

export interface DeviceProvidersListRequest {
  provider_category?: string
}

export interface AccessCodeCreateBaseRequest {
  device_id: string
  name?: string
  code?: string
  common_code_key?: string
}

export interface AccessCodeCreateOngoingRequest
  extends AccessCodeCreateBaseRequest {}

export interface AccessCodeCreateScheduledRequest
  extends AccessCodeCreateBaseRequest {
  starts_at: string | Date
  ends_at: string | Date
}

export type AccessCodeCreateRequest =
  | AccessCodeCreateOngoingRequest
  | AccessCodeCreateScheduledRequest

export type AccessCodeCreateMultipleBaseRequest = {
  device_ids: string[]
  name?: string
  behavior_when_code_cannot_be_shared?: "throw" | "create_random_code"
}

export interface AccessCodeCreateMultipleOngoingRequest
  extends AccessCodeCreateMultipleBaseRequest {}

export interface AccessCodeCreateMultipleScheduledRequest
  extends AccessCodeCreateMultipleBaseRequest {
  starts_at: string | Date
  ends_at: string | Date
}

export type AccessCodeCreateMultipleRequest =
  | AccessCodeCreateMultipleOngoingRequest
  | AccessCodeCreateMultipleScheduledRequest

export interface AccessCodeUpdateBaseRequest {
  device_id?: string
  access_code_id: string
}

export type AccessCodeUpdateOngoingRequest = Except<
  AccessCodeCreateOngoingRequest,
  "device_id"
> &
  AccessCodeUpdateBaseRequest
export type AccessCodeUpdateScheduledRequest = Except<
  AccessCodeCreateScheduledRequest,
  "device_id"
> &
  AccessCodeUpdateBaseRequest
export type AccessCodeUpdateRequest =
  | AccessCodeUpdateOngoingRequest
  | AccessCodeUpdateScheduledRequest

export type AccessCodesListRequest = {
  device_id: string
}

export type AccessCodeDeleteRequest = {
  device_id?: string
  access_code_id: string
}

export type AccessCodeGetRequest = {
  access_code_id?: string
  device_id?: string
  code?: string
}

export type UnmanagedAccessCodeGetRequest = {
  access_code_id?: string
  device_id?: string
  code?: string
}

export type UnmanagedAccessCodeDeleteRequest = {
  access_code_id: string
  device_id?: string
}

export type UnmanagedAccessCodesListRequest = {
  device_id: string
}

export type UnmanagedAccessCodeUpdateRequest = {
  access_code_id: string
  is_managed: true
}

export type UnmanagedAccessCodeConvertToManagedRequest = {
  access_code_id: string
}

export type DeviceGetRequest =
  | {
      device_id: string
    }
  | {
      name: string
    }

export type DeviceUpdateRequest = {
  device_id: string
  is_managed?: boolean
  properties?: Partial<CommonDeviceProperties>
  name?: string
  location?: object
}

export type DeviceDeleteRequest = {
  device_id: string
}

export type WebhookGetRequest = {
  webhook_id: string
}

export type WebhookCreateRequest = {
  url: string
}

export type UnmanagedDeviceUpdateRequest = {
  device_id: string
  is_managed?: boolean
}

export interface EventsListRequest {
  since?: string | Date
  device_ids?: string[]
  device_id?: string
  event_types?: string[]
  event_type?: string
  connected_account_id?: string
}

export type NoiseThresholdsListRequest = {
  device_id: string
}

export type NoiseThresholdsCreateRequest = {
  device_id: string
  name?: string
  starts_daily_at: string
  ends_daily_at: string
  noise_threshold_decibels?: number
  /**
   * only available for NoiseAware devices
   */
  noise_threshold_nrs?: number
}

export type NoiseThresholdsUpdateRequest = {
  device_id: string
  noise_threshold_id: string
  name?: string
  starts_daily_at?: string
  ends_daily_at?: string
  noise_threshold_decibels?: number
  /**
   * only available for NoiseAware devices
   */
  noise_threshold_nrs?: number
}

export type NoiseThresholdsDeleteRequest = {
  device_id: string
  noise_threshold_id: string
}

export type DeviceModelsListRequest = {
  main_category?: string
  support_level?: string
  brand?: string
  text_search?: string
}
