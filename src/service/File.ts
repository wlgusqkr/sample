import axios from 'axios'

export interface IFile {
  key: string
  file: File
}

export interface UploadInfoReqeust {
  entityName?: string
  entityId?: string
}

export interface IAttachmentResponse {
  code: string
  seq: number
  id: string
  originalFileName: string
  physicalFileName: string
  size: number
  fileType: string
  isDelete: boolean
  createDate: Date
  downloadCnt: number
  entityId: string
  entityName: string
}

export interface AttachmentSavePayload {
  uniqueId: string
  isDelete: boolean
}

export type UploadPayload = {
  fileList?: IFile[]
  attachmentCode?: string
  info?: UploadInfoReqeust
  list?: AttachmentSavePayload[]
}

const UPLOAD_API = '/portal-service/api/v1/attachments'
const DOWNLOAD_API = `/server/portal-service/api/v1/download`

let fileHeader = {
  'Content-Type': 'multipart/form-data',
}

/**
 * 파일 업로드 서비스
 */
export const fileService = {
  url: UPLOAD_API,
  downloadUrl: DOWNLOAD_API,
  upload: async ({ fileList, attachmentCode, info, list }: UploadPayload) => {
    let formData = new FormData()

    fileList.map(item => {
      formData.append('files', item.file)
    })

    if (info) {
      formData.append(
        'info',
        new Blob([JSON.stringify(info)], { type: 'application/json' }),
      )
    }

    if (list) {
      formData.append(
        'list',
        new Blob([JSON.stringify(list)], { type: 'application/json' }),
      )
    }

    // attachmentCode가 있는 경우 update라고 본다
    if (attachmentCode) {
      return axios.put(
        `/server${UPLOAD_API}/upload/${attachmentCode}`,
        formData,
        {
          headers: fileHeader,
        },
      )
    }

    // attachmentCode가 없는 경우 신규 저장
    return axios.post(`/server${UPLOAD_API}/upload`, formData, {
      headers: fileHeader,
    })
  },
  save: async ({ attachmentCode, info, list }: UploadPayload) => {
    let formData = new FormData()

    formData.append(
      'info',
      new Blob([JSON.stringify(info)], { type: 'application/json' }),
    )

    formData.append(
      'list',
      new Blob([JSON.stringify(list)], { type: 'application/json' }),
    )

    return axios.put(`${UPLOAD_API}/${attachmentCode}`, formData, {
      headers: fileHeader,
    })
  },
  getAttachmentList: (attachmentCode: string) => {
    return axios.get(`${UPLOAD_API}/${attachmentCode}`)
  },
  deleteAll: (attachmentCode: string) =>
    axios.delete(`${UPLOAD_API}/${attachmentCode}/children`),
}
