import React from 'react';
import { Link } from 'react-router-dom';
import home_image from '../assets/images/home_image.jpg'
import search from "../assets/images/search.png"
import accounting from "../assets/images/accounting.png"
import it from "../assets/images/information-technology.png"
import education from "../assets/images/education.png"
import engineer from "../assets/images/engineer.png"
import management from "../assets/images/management.png"
import medical from "../assets/images/medical-symbol.png"
import music from "../assets/images/music.png"
import research from "../assets/images/research.png"
import money from "../assets/images/money.png"
import location from "../assets/images/location.png"
import clock from "../assets/images/clock.png"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import imgError from "../assets/images/ImgnotFound.jpg"
// import TopJobs from './pages/TopJobs';
// import HotJobs from './pages/HotJobs'
// import FeaturedJobs from './pages/FeaturedJobs'
// import NormalJobs from './pages/NormalJobs'

function Home({ setCategory }) {
    const [showHotJobs, setShowHotJobs] = useState(false);
    const [showTopJobs, setShowTopJobs] = useState(true);
    const [showFeaturedJobs, setShowFeaturedJobs] = useState(false);
    const [showNormalJobs, setShowNormalJobs] = useState(false);
    const [type, setType] = useState("top")

    function handleJobTpye(jobtype) {
        setType(jobtype)
    }

    // const handleHotJobsClick = () => {
    //     setShowHotJobs(true);
    //     setShowTopJobs(false);
    //     setShowFeaturedJobs(false);
    //     setShowNormalJobs(false)
    // };

    // const handleTopJobsClick = () => {
    //     setShowHotJobs(false);
    //     setShowTopJobs(true);
    //     setShowFeaturedJobs(false);
    //     setShowNormalJobs(false)

    // };

    // const handleFeaturedJobsClick = () => {
    //     setShowHotJobs(false);
    //     setShowTopJobs(false);
    //     setShowFeaturedJobs(true);
    //     setShowNormalJobs(false)
    // };

    // const handleNormalJobsClick = () => {
    //     setShowHotJobs(false);
    //     setShowTopJobs(false);
    //     setShowFeaturedJobs(false);
    //     setShowNormalJobs(true)
    // };

    const [jobs, setJobs] = useState(null)

    function fetchData() {
        axios.get("http://localhost:8000/api/jobs")
            .then(res => {
                console.log("data", res);
                setJobs(res.data.data)
            })
            .catch(err => {
                console.log("error", err);
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleCategoryClick = (category) => {
        console.log("Clicked category:", category);
        setCategory(category);
    };

    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="dark-overlay"></div>
                    {/* <img src={home_image} alt="" className='home_img' /> */}
                    <div className="info">
                        <h1 style={{ display: "block", textAlign: "center", fontSize: "60px" }}>Find your dream job!</h1>
                        <p style={{ fontSize: "30px" }}>A dream doesn't become reality through magic; it takes sweat, determination and hard work....</p>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search by job title, categorey, company" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit"><img src={search} alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="categorey">
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Accounting')} >
                            <div className='cat_img'><img src={accounting} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Accounting / Finance</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Accounting").length})</p>
                            </div>
                        </Link>
                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('It')} >
                            <div className="cat_img"><img src={it} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Information technology</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "It").length})</p>
                            </div>
                        </Link>
                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Education')} >
                            <div className="cat_img"><img src={education} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Education / Training</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Education").length})</p>
                            </div>
                        </Link>

                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Research')} >
                            <div className="cat_img"><img src={research} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Reseach / Consultancy</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Research").length})</p>
                            </div>
                        </Link>
                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Hr')} >
                            <div className="cat_img"><img src={management} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Human Resource</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Hr").length})</p>
                            </div>
                        </Link >
                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Medical')} >
                            <div className="cat_img"><img src={medical} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Medical / Pharmacy</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Medical").length})</p>
                            </div>
                        </Link>
                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Music')} >
                            <div className="cat_img"><img src={music} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Music / Arts</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Music").length})</p>
                            </div>
                        </Link>
                    </div>
                    <div className="cat_list">
                        <Link to="/categorey" className='link' value="Accounting" onClick={() => handleCategoryClick('Engineer')} >
                            <div className="cat_img"><img src={engineer} alt="" /></div>
                            <div className="cat_desc" style={{ marginTop: "10px" }}>
                                <p>Engineer / Architects</p>
                                <p style={{ textAlign: "center", marginTop: "-10px", opacity: "0.6" }}>({jobs?.filter(job => job?.categorey === "Engineer").length})</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="section-list">
                    <div className="section-titles" style={{ display: "flex", justifyContent: "space-between" }}>
                        <h4>Latest Jobs</h4>
                        <ul className="tab-menu" style={{ display: "flex" }}>
                            <li className="menu-item"><a className='item-link' href="#top-jobs" onClick={() => handleJobTpye('top')}>Top jobs</a></li>
                            <li className="menu-item"><Link className='item-link' to="#hot-jobs" onClick={() => handleJobTpye('hot')}>Hot jobs</Link></li>
                            <li className="menu-item"><Link className='item-link' to="#featured-jobs" onClick={() => handleJobTpye('featured')} >Featured jobs</Link></li>
                            <li className="menu-item"><Link className='item-link' to="#normal-jobs" onClick={() => handleJobTpye('normal')}>Normal jobs</Link></li>
                        </ul>
                    </div>
                    <div className="jobs">
                        {/* {showHotJobs && <HotJobs />}
                        {showTopJobs && <TopJobs />}
                        {showFeaturedJobs && <FeaturedJobs />}
                        {showNormalJobs && <NormalJobs />} */}
                        {/* <div className="top-jobs"></div> */}
                        {
                            jobs?.map((item) => {
                                // console.log("Image URLs:", item?.image);

                                return (<>
                                    {item.type == type ?
                                        <div className="top-jobs" >
                                            <div className="job-items">
                                                <div className="item-info">
                                                    <div className="item-image">
                                                        <Link to={`/${item._id}`}><img src={item.image[0] || imgError} alt="img" style={{ width: "90px" }} /></Link>
                                                    </div>
                                                    <div className="item-content">
                                                        <div className="main-meta">
                                                            <div className="title-link">
                                                                <strong><Link to={`/${item._id}`} className='link job-title' style={{ fontSize: "18px" }}>{item?.name} required.</Link></strong>
                                                                <h6 style={{ opacity: "0.8" }}>{item.company}</h6>
                                                            </div>
                                                        </div>
                                                        <div className="meta-bottom d-flex">
                                                            <div className="wraper type-wrap">
                                                                <span><img src={location} alt="" /> {item.location}</span>
                                                            </div>
                                                            <div className="wraper time-wrap">
                                                                <span className="time"><img src={clock} alt="" /> Full Time</span>
                                                            </div>
                                                            <div className="wraper price-wrap">
                                                                <span><img src={money} alt="" /> {item.offeredSalary == "Negotiable" || item.offeredSalary == "negotiable" ? item.offeredSalary : `Rs.${item.offeredSalary}`}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="apply-btn">
                                                        <Link to={`/${item._id}`} className='app-link'><button>View Details</button></Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </div > : null}
                                </>)
                            })
                        }
                    </div >
                </div>
            </div >
        </>

    )
}

export default Home
