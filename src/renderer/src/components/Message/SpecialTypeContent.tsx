import BaseFileIcon from '@renderer/assets/icon/file/baseFileIcon'
import { ContentMetaData } from '@renderer/lib/ai/parseString'
import Md from './Md'
import NetworkIcon from '@renderer/assets/icon/networkIcon'

export default function (meta: ContentMetaData, mdStyle: string) {
  if (meta.type === 'file') {
    return (
      <div
        onClick={() => {
          window.api.openPath(meta.src)
        }}
        class="text-text-dark2 flex cursor-pointer gap-1 break-words duration-150 hover:text-active"
      >
        <BaseFileIcon class="shrink-0 grow-0" width={20} height={20} />
        <span>{meta.filename}</span>
      </div>
    )
  }
  if (meta.type === 'url') {
    return (
      <a
        class="text-text-dark2 break-words underline hover:text-active"
        href={meta.src}
        target="_blank"
        rel="noreferrer"
      >
        {meta.src}
      </a>
    )
  }
  if (meta.type === 'search') {
    return (
      <div class="flex gap-1">
        <NetworkIcon class="text-text-dark2 shrink-0 grow-0" width={20} height={20} />
        <Md class={mdStyle + ' markdown text-text-dark2 break-words'} content={meta.question} />
      </div>
    )
  }
  return null
}
