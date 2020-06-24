import React,{ Component } from 'react';
import './Courses.css';

import course1 from '../../assets/courses/cc1.jpg';
import course2 from '../../assets/courses/cc2.jpg';
import course3 from '../../assets/courses/cc3.jpg';
import course4 from '../../assets/courses/cc4.jpg';
import course5 from '../../assets/courses/cc5.jpg';

class Courses extends Component{

    state={
        courses:[
            {
                imgs: course1,
                alt: 'Course1',
                heading: 'Pub Ad | UPSC UPPCS BPSC',
                para: 'We provide online and offline courses for Pub Ad optional subject, UPSC UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series',
                id:1,
                disp1:'block',
                disp2:'none'
            },
            {
                imgs: course2,
                alt: 'Course2',
                heading: 'Ethics | UPSC UPPCS',
                para: 'We provide online and offline courses for Ethics, UPSC UPPCS, in the form of Classroom Lecture, Study material and Test Series',
                id:2,
                disp1:'block',
                disp2:'none'
            },
            {
                imgs: course3,
                alt: 'Course3',
                heading: 'Disaster Managemnet | UPSC UPPCS',
                para: 'We provide online and offline courses for Disaster Managemnet subject, UPSC UPPCS, in the form of Classroom Lecture, Study material and Test Series',
                id:3,
                disp1:'block',
                disp2:'none'
            },
            {
                imgs: course4,
                alt: 'Course4',
                heading: 'Hindi Sahitya | PPCS BPSC',
                para: 'We provide online and offline courses for Hindi Sahitya,UPPCS BPSC, in the form of Classroom Lecture, Study material and Test Series',
                id:4,
                disp1:'block',
                disp2:'none'
            },
            {
                imgs: course5,
                alt: 'Course5',
                heading: 'NCERT | SAAR',
                para: 'We provide online and offline courses for NCERT, SAAR, in the form of Classroom Lecture, Study material and Test Series',
                id:5,
                disp1:'block',
                disp2:'none'
            }
        ]
    }
    clickHandler = (ind)=>{
        let d,e;
        d = this.state.courses[ind-1].disp1;
        e = this.state.courses[ind-1].disp2;
        this.setState(prevState => ({
            courses: prevState.courses.map((list) => {
              if (list.id !== ind) {
                return list
              }
        
              return {
                ...list,
                disp1:e,
                disp2:d
              }
            })
          }))
        
    }

    render(){
        let courses;
        courses = this.state.courses.map(i=>(
            <div className="column1" key={i.id}>
                <div className="card1" onClick={()=>this.clickHandler(i.id)}>
                
                            <div class="card-image" style={{display: i.disp1}}>
                                <img  src={i.imgs} alt={i.alt}/>
                            </div>
                            <div class="card-content" style={{display: i.disp1,paddingBottom:'50px'}}>
                                <span
                                    class="card-title">{i.heading}</span>
                            </div>
                            <div class="card-reveal" style={{display: i.disp2, transform: 'translateY(0%)'}}>
                                <span class="card-title ">{i.heading}<i
                                        class="material-icons right" >close</i></span>
                                <p>{i.para}</p>
                            </div>    
                </div>
            </div>
        ));
    return (
        <section classNameName="sect">
        <div className="row1">
            <h2 style={{textAlign:"center",fontSize:"1.7rem",fontWeight:"400",lineHeight: "2.3rem"}}>Our Courses</h2>
            {courses}
        </div>
        </section>
    );
    };
    
}

export default Courses;