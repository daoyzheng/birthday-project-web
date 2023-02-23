import { FC, ReactNode, useEffect, useRef } from "react"

type Props = {
  children: ReactNode
  className?: string
}
const Dialog: FC<Props> = ({ children, className }: Props) => {
  const popupRef = useRef<HTMLDivElement>(null)
  return (
    <div ref={popupRef} className={className}>
      {children}
    </div>
  )
}
export default Dialog