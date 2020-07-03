
import React,{useEffect} from 'react'
import Banner from '../Organisms/Banner'
import { getAllTeacher } from '../../Redux/actionCreator'
import store from '../../Redux/store'
import { connect } from 'react-redux'
import Teacher from '../Organisms/Teacher'

const Teachers = ({match,teachers}) => 
   {
     useEffect(()=>{
        store.dispatch(getAllTeacher())
     },[match])   /*Uso de hook para que solo se ejecute una sola vez la accion */
      return(
         (
            <>
              <Banner color="dark-color"
            image={ {
               src:"",
               alt:"Banner profesor"
            } } 
               title="Nuestro profesores"
               subtitle="Este plantel docente esta altamente calificado para guiarte
                           en tu educación."
            />
           {
              teachers && /*renderizado condicional de react , si teachers existe se renderiza lo demas */
              <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
               {
                  teachers.map(item=>(
                    <Teacher 
                    key={item.id}
                    picture={item.picture}
                    name={item.name}
                    country={item.country} />
                  ))
               }
            </main> 
           }
            </>
           )
       
      )
   }
const mapStateToProps = state =>({
   teachers:state.teacherReducer.teachers
})
export default connect(mapStateToProps,{})(Teachers)
