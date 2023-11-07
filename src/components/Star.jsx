import ReactStars from "react-rating-stars-component";

const Star = () => {
  return (
   <ReactStars size={25} count={5} isHalf={true}
   onChange={(rating)=>console.log('rating',rating)}/>
  )
}

export default Star