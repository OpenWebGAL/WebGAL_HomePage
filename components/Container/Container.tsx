const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'pt-16 pb-4'}>
      <div className={'max-w-screen-xl mx-auto'}>
        {children}
      </div>
    </div>
  )
}

export default Container