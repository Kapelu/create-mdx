type TitleProps = {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <h2
      className='
        mx-auto
        my-8
        w-62.5
        border-y
        border-primary
        px-4
        py-2
        text-center
        font-semibold
        text-title
      '>
      {title}
    </h2>
  )
}
