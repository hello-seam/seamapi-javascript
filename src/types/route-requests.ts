import { Except } from "type-fest"
import { CommonDeviceProperties, Provider } from "./models"

export interface ConnectWebviewCreateRequest {
  accepted_providers: Provider[]
}

export interface DevicesListRequest {
  connected_account_id?: string
  connect_webview_id?: string
  device_type?: string
}

export interface AccessCodeCreateBaseRequest {
  device_id: string
  name?: string
  code?: string
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

export type AccessCodeDeleteRequest = {
  device_id?: string
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
  properties?: Partial<CommonDeviceProperties>
  name?: string
  location?: object
}

export type WebhookGetRequest = {
  webhook_id: string
}

export type WebhookCreateRequest = {
  url: string
}

export interface EventsListRequest {
  since?: string | Date
  device_ids?: string[]
  device_id?: string
  event_types?: string[]
  event_type?: string
}
