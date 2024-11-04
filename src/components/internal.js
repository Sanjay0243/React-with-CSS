function internal(){
    return (
        <>
        <style>
          {`
              body {
                margin: 0;
                display: flex;
                justify-content: center; 
                align-items: center;    
                height: 100vh;          
                color: white;          
                font-family: Arial, sans-serif;
                background-color: grey;
            } 
      
            // h1 {
            //   color: black;
            //   font-size: 2rem;
            // }
      
            button {
              border: none;
              padding: 10px 20px;
              margin-right: 10px;
              font-size: 16px;
            }
      
            .red-button {
              background-color: red;
              color: white;
            }
      
            .white-button {
              background-color: white;
              color: blue;
            }

           

          `}
        </style>
        <button className="red-button">About Us</button>
        <button className="white-button">Get A Quote</button>
      
      </>
    )
}
export default internal;