import React, { useEffect, useState } from "react";
import {  Link, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import {ArrowUpRight, Briefcase, BookOpen} from 'react-feather';
// import avatar from "../assets/img/avatar-placeholder.png";
import SyncLoader from "react-spinners/SyncLoader";
// import { baseUrl } from "../constants";
var baseUrl = "https://scholarslist.org:1338"

const ProfilePage = () => {
  

  const [bio, setBio] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fullName, setfullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [university, setUniversity] = useState("");
  const [located, setLocated] = useState("");
  const [highestDegree, setHighestDegree] = useState("");
 
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [googleUrl, setGoogleUrl] = useState('');
  const [profilePhoto, setProfilePhoto] = useState([]);
  const [citation, setCitation] = useState('');
  const [hIndex, setHindex] = useState('');
  const [iIndex, setIindex] = useState('');
  const [rInterests, setRinterests] = useState('');
  const [isLoading, setLoading] = useState(false);
  const location = useLocation()
  const getUserProfile = async () => {

   setLoading(true)
    try {
      const data = await axios.get(
         `${baseUrl}/researchers/?userName=${location.pathname.split('/')[2]}`
      );
      const getData = data.data.docs;
    console.log(getData)
      // console.log("photos",getData.photos)
      setBio(getData[0].bio);
      setCompanyName(getData[0].companyName);
      setfullName(getData[0].fullName);
      setJobTitle(getData[0].jobTitle);
      setLocated(getData[0].location);
      setUniversity(getData[0].university);
      setProfilePhoto(getData[0].photos);
      setCitation(getData[0].citations);
      setHindex(getData[0].hIndex);
      setIindex(getData[0].iIndex);
      setRinterests(getData[0].rInterests)
      setGoogleUrl(getData[0].googleUrl);
      setLinkedInUrl(getData[0].linkedInUrl);
      setLoading(false)
     

    } catch(err) {
      setLoading(false)
    }
  };


  
  const gotoGoogle = () => {
    window.open(`${googleUrl}`)
  }

  const gotoLinkedIn = () => {
    window.open(`${linkedInUrl}`)
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    getUserProfile();
    
  }, []);

  return (
    <div>
      {/* main content */}

      <main className="page-wrapper position-relative">
        {/* Profile */}
        <section id="profile" className="">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="row">
                  <div className="mx-3 mx-sm-0 col-sm-4 col">
                    <div className="rounded">
                      <div className="featured-card-scale text-decoration-none mb-4 mr-0 mr-sm-4">
                        <div className="featured-card-img">
                      

                {profilePhoto.length > 0 ? (
                   profilePhoto.map((item, index) => {
                    return (
                     <img src={`${baseUrl}${item.url}`} alt="Card Image" />
                     )
                   })

                 ): <img  alt="Card Image" /> } 
                        </div>
                      </div>
                    </div>
                    <div className="researcher-name d-sm-none d-block">
                      <h3 className="mb-3 text-center text-sm-left">
                        Hey! I’m <span> {isLoading == true ? (
                          <span>
                           <SyncLoader
                           size={10}
                           margin={2}
                           color={"#17e3cc"}
                           loading={isLoading}
                           
                         />
                         </span>
                        ):fullName}  </span>
                      </h3>
                    </div>
                    <hr className="d-block d-sm-none divider" />
                    <div className="buttons text-center text-sm-left d-sm-none d-block mb-4 justify-content-between">
                      <Link onClick={gotoGoogle} className="btn google-scholar-profile" >
                        View my Google Scholar profile
                        <ArrowUpRight size={16} className="ml-4" />
                        
                      </Link>
                      {linkedInUrl == 'not available' ? (
                         <p className="mb-0 mt-3 mt-sm-0 linkedin-profile">
                       
                        
                         View my <Link className="disabled-btn">LinkedIn </Link>profile 
                        <ArrowUpRight size={16} className="mr-2" />
                       </p>
                      ):
                     <p className="mb-0 mt-3 mt-sm-0 linkedin-profile">
                       
                        
                      View my <Link  onClick={gotoLinkedIn}>LinkedIn </Link>profile
                     <ArrowUpRight size={16} className="mr-2" />
                    </p>
}
                  
                    </div>
                  </div>
                  <div className="col">
                    <div className="researcher-name d-none d-sm-block">
                      <h3 className="mb-3 text-center text-sm-left">
                        Hey! I’m <span> {isLoading == true ? (
                          <span>
                           <SyncLoader
                           size={10}
                           margin={2}
                           color={"#17e3cc"}
                           loading={isLoading}
                           
                         />
                         </span>
                        ):fullName}  </span>
                      </h3> 
                    </div>
                    <div className="d-block d-sm-flex mb-3">
                      <p className="mr-0 mr-sm-3 mb-0 pr-0 pr-sm-3 border-sm-right d-flex align-items-center">
                      {/* <Briefcase size={16} className="mr-2" /> */}
                      <span className="mr-2 emoji-icon">💼</span>
                        <span className="mr-1"> {jobTitle} </span> at <span className="ml-1"> {" "} {companyName}</span>
                      </p>
                      <p className="mb-0 mt-3 mt-sm-0">  <span className="location">
                      <img src={process.env.PUBLIC_URL+`images/flags/${located.toLowerCase()}.svg`} />
                          </span></p>
                    </div>
                    <div className="d-flex mb-3">
                      <p className="mb-0">
                        {/* <i className="graduate-icon mr-2"></i> */}
                        <span className="mr-2 emoji-icon">🎓</span>Graduated from <span>{" "} {university}</span>
                      </p>
                    </div>
                    <div className="d-flex mb-3">
                      <p className="mr-3 mb-0 pr-3 border-right">Citation: <span>{citation}</span></p>
                  <p className="mr-3 mb-0 pr-3 border-right">h-Index: <span>{hIndex}</span></p>
                  <p className="mb-0">i-Index: <span>{iIndex}</span></p>
                    </div>
                    <div className="d-flex mb-3">
                      <p className="mb-0 align-items-center">
                      {/* <BookOpen size={16} className="mr-2" /> */}
                      <span className="mr-2 emoji-icon">📖</span>
                      Research Interests: <span className="d-block">{rInterests}</span>
                      </p>
                    </div>
                    <div className="researcher-bio mt-3  mb-4">
                    <p className="mb-0 align-items-center">
                      <span className="mr-2 emoji-icon text-size-15">ℹ️</span>
                      Bio:
                      </p>
                       <p className="mb-0">
                        {" "}
                    {bio}
                      </p>
                    </div>
                    <div className="buttons d-none text-center text-sm-left d-sm-flex mb-5 justify-content-between">
                      <Link onClick={gotoGoogle} className="btn google-scholar-profile" >
                        View my Google Scholar profile
                        <ArrowUpRight size={16} className="ml-4" />
                        
                      </Link>
                      {linkedInUrl === 'not available' ? (
                         <p className="mb-0 mt-3 mt-sm-0 linkedin-profile">
                         View my <Link className="disabled-btn" >LinkedIn </Link>profile
                        <ArrowUpRight size={16} className="mr-2" />
                       </p>
                      ):
                      <p className="mb-0 mt-3 mt-sm-0 linkedin-profile">
                        View my <Link  onClick={gotoLinkedIn}>LinkedIn</Link> profile
                       <ArrowUpRight size={16} className="mr-2" />
                      </p>
}
                    </div>
                    <div className="note-text pt-4 pt-sm-0">
                    <hr className="d-block d-sm-none divider" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;