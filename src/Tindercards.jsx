import React, { useState } from "react" 
// import TinderCard from "react-tinder-card"

function Tindercards() {
  const [people,setPeople] = useState([
    {
     name:"Elon Musk",
     url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rollingstone.com%2Fwp-content%2Fuploads%2F2023%2F04%2Felon-musk-RS-1800.jpg%3Fw%3D1581%26h%3D1054%26crop%3D1&tbnid=D6AuhORg-GU8IM&vet=12ahUKEwiXv_bhk6L_AhWCmycCHeXpDJMQMygWegUIARCYAg..i&imgrefurl=https%3A%2F%2Fwww.rollingstone.com%2Fculture%2Fculture-features%2Felon-musk-isnt-funny-bad-jokes-twitter-1234712950%2F&docid=FxY4Pmw02gqYFM&w=1581&h=1054&q=elon%20musk%20picture&ved=2ahUKEwiXv_bhk6L_AhWCmycCHeXpDJMQMygWegUIARCYAg",
    },
    {
      name:"Jeff Bezos",
      url:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimageio.forbes.com%2Fspecials-images%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fformat%3Djpg%26crop%3D1012%2C1013%2Cx627%2Cy129%2Csafe%26height%3D416%26width%3D416%26fit%3Dbounds&tbnid=toaeX_7cbF27WM&vet=12ahUKEwiPsfGElKL_AhWLpycCHeYuCcoQMygGegUIARD0AQ..i&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Fjeff-bezos%2F&docid=E0U2SB3yq5CSbM&w=416&h=416&q=jeff%20bezos&ved=2ahUKEwiPsfGElKL_AhWLpycCHeYuCcoQMygGegUIARD0AQ",
     },
  ]);


  return (
    <div className='tinderCards'>
        {/* {people.map((person) => (
        <TinderCard
            className="Swipe"
            key={character.name}
            preventSwipe={["up","down"]}
        ></TinderCard>

      ))} */}
         <h1>hello world</h1>
    </div>
  )

      

      




  
}

export default Tindercards