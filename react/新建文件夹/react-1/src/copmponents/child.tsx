
interface ChildProps {
  title: string
  render?: () => React.ReactNode
}
export const Child = (props: ChildProps) => {
  const { title, render } = props
  return <div>{title}{render?.()}</div>
}