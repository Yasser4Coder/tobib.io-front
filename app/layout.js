import '@styles/style.css';
const layout = ({children}) => {
  return (
    <html>
      <body>
        <div className='main'>

        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default layout