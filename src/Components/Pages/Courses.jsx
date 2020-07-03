import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../Redux/store'
import { getAllCourses } from '../../Redux/actionCreator'
import Card from '../Organisms/Card'


const Courses = ({courses}) => {

   useEffect(()=>{
   store.dispatch(getAllCourses())
},[])

   return (
      <>
      <Banner
      color="dark-color"
      image={{
         src:"#",
         alt:"Cursos"
      }}
      title="Cursos"
      subtitle="Comienza desde cero y haste experto en una tecnologia"
       />
       {
          courses &&
          <main className="ed-grid m-grid-5">
            {
               courses.map(c=>(
                <Card picture={c.picture} name={c.name} key={c.id} />
               ))
            }
          </main>
       }
       </>
   )
}

     
       
    

const mapStateToProps = state =>({
   courses:state.courseReducer.courses
})
export default connect(mapStateToProps,{})(Courses)
