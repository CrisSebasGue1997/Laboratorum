import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../Redux/store'
import { getAllSpecialities } from '../../Redux/actionCreator'
import { connect } from 'react-redux'
import Card from '../Organisms/Card'

const Specialities = ({specialities}) => 
     {
        useEffect(()=>{
           store.dispatch(getAllSpecialities())
        },[])
        return(
           <>
              
        <Banner
        color="first-color"
        image={{
           src:"#",
           alt:"Banner especialidades"
        }}
        title="Especialidades"
        subtitle="Domina una tecnologica con las rutas de aprendizaje que te ofrecemos"
         />
         {
            specialities &&
            <main className="ed-grid m-grid-3">
            {
               specialities.map(s=>(
                  <Card picture={s.picture} name={s.name} key={s.id} />
               ))
            }
            </main>
         }

           </>
        )
     }

     const mapStateToProps = state =>({
        specialities:state.specialityReducer.specialities
     })
export default connect(mapStateToProps,{})(Specialities)
