import "../assets/styles/allproducts.css"

const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid #333",
        height: "50.0rem",
        paddingTop: "15px",
      }}
      className='bg-success'
    >
      {children}
    </div>
  )
}

export default Scroll
