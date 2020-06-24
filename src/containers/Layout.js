import React, { Component } from 'react';
import Aux from '../hoc/Auxa';
import './Layout.css';
import Navigation from '../components/Navigation/Navigation';
import Carousel from '../components/Carousel/Carousel';
import Youtube from '../components/Youtube/Youtube';
import Books from '../components/Books/Books';
import Courses from '../components/Courses/Courses';
import Contact from '../components/Contact/Contact';
import Join from '../components/Join/Join';
import Footer from '../components/Footer/Footer';
import book1 from '../assets/books/b1.jpg';
import book2 from '../assets/books/b2.jpg';
import book3 from '../assets/books/b3.jpg';
import book4 from '../assets/books/b4.jpg';

class Layout extends Component{
    state={
        books:[
            {
                imgSrc:book1,
                alt: 'Book1',
                src: 'https://www.amazon.in/POLITY-NCERT-SAAR-VI-XII-English/dp/9383315644/ref=sr_1_1?dchild=1&m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1592971813&s=merchant-items&sr=1-1',
                id:1
            },
            {
                imgSrc:book2,
                alt: 'Book2',
                src: 'https://www.amazon.in/History-Hindi-N-C-R-T-SAR/dp/8192756513/ref=sr_1_2?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-2',
                id:2
            },
            {
                imgSrc:book3,
                alt: 'Book3',
                src: 'https://www.amazon.in/Vastunist-Ncert-Saar-VI-XII-Lohiya/dp/B07VNW515H/ref=sr_1_3?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-3',
                id:3
            },
            {
                imgSrc:book4,
                alt: 'Book4',
                src: 'https://www.amazon.in/Rajvaystha-NCERT-VI-XII-Lohiya-Manoj/dp/819275653X/ref=sr_1_4?m=AGHGGPQMIBWVH&marketplaceID=A21TJRUUN4KGV&qid=1572866104&s=merchant-items&sr=1-4',
                id:4
            }
        ]
        
    }

    render() {
        return (
            <Aux>
                <main>
                <Navigation/>
                <Carousel/>
                <Youtube/>
                <Books books={this.state.books}/>
                <Courses/>
                <Join/>
                <Contact/>
                <Footer/>
                <a href="https://api.whatsapp.com/send?phone=919972968390&text=I%20want%20to%20join%20online%20classes%20at%20Prabha%20Institute%20of%20Civil%20Services&source=&data=&app_absent=" class="float" target="_blank">
                    <i class="fa fa-whatsapp my-float"></i>
                </a>
                </main>
            </Aux>
        );
    }
}

export default Layout;