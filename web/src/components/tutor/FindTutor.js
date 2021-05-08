import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './style.css'
import Select from "react-dropdown-select";
import avatar from "../../assets/login.png";
import {
  ChevronLeft,
  ChevronRight,
  Briefcase,
  MapPin,
  ArrowUpRight,
} from "react-feather";
// import noData from "../assets/img/no-data.svg";
import axios from 'axios';
import HashLoader from "react-spinners/CircleLoader";
import {options} from '../../constants/constants'

var baseUrl = "https://scholarslist.org:1338"

const FindTutor = () => {
  const [allData, setAllData] = useState([]);
  const [queryName, setQueryName] = useState("");
  const [queryLocation, setQueryLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [rInterest, setRinterest] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [allLocationData, setAllLocationData] = useState(true);
  const [apiCondition, setApiCondition] = useState(false);
  const [pages, setPages] = useState(1)
  const history = useHistory();

  const searchFeatured = async () => {
    setLoading(true);
    
    const url =
      apiCondition == false && rInterest == "" && queryName == ""
        ? `${baseUrl}/researchers?_start=${currentPage*12}&_limit=12`
        : `${baseUrl}/researchers/filter?fullName=${queryName}&location=${queryLocation}&rInterests=${rInterest}&_start=${currentPage*12}&_limit=12`;

    try {
      const data = await axios.get(url);
      const getData = data.data.docs;
      const pageData = data.data.pages
      console.log(pageData)
      
      setLoading(false);
      setAllData(getData);
      setPages(pageData);

      setAllLocationData(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const previousFeatured = async () => {
      setCurrentPage(currentPage - 1);
   
  };
  const nextFeatured = async () => {

  //setFilterPage(1)
  console.log('here')
    setCurrentPage(currentPage + 1);
    console.log(currentPage)
    if (apiCondition == false) {
    } else {
      setApiCondition(true);
    }
  };

  const onSearch = () => {
    setCurrentPage(0);
    searchFeatured(0);
  };

  const handleChange = (code) => {
    if (code[0]) {
      
      //   alert("code[0].value "+code[0].value )
      if (code[0].value == "" || code[0].value === "all") {
        setAllLocationData(true);
        setApiCondition(false);
      } else {
        setAllLocationData(false);
        setApiCondition(true);
      }

      setQueryLocation(code[0].value==="all"?"":code[0].value);
    }
  };


  console.log(currentPage)
  useEffect(() => {
    window.scrollTo(0, 0);
    searchFeatured();
  }, [currentPage]);

  return (
    <div>
      {/* Main Content */}

      <main className="page-wrapper position-relative">

        {/* Find Researchers */}
        <section id="find-researchers" className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1 className="mb-3 pb-1">Find your amazing mentors</h1>
              <h5 className="pb-md-0 mb-3 pb-1 line-height-base font-weight-normal">
                Browsing the lab website is annoying, why not use our directory
                and get acquainted with the people who are doing some amazing
                things around the world with one click.{" "}
              </h5>
            </div>
          </div>
        </section>

        {/* Find Researchers filter */}
        <form>
          <section id="find-researchers-filter" className="container pt-5">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-row align-items-end">
                  <div className="form-group col-lg col-sm-12">
                    <label
                      htmlFor="search-researchers"
                      className="font-weight-bold"
                    >
                      Search for researchers
                    </label>
                    <input
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          searchFeatured();
                        }
                      }}
                      onChange={(e) => setQueryName(e.target.value)}
                      value={queryName}
                      className="form-control"
                      type="text"
                      id="search-researchers"
                      placeholder="Enter the name"
                    />
                  </div>
                  <div className="form-group col-lg col-sm-12 col-md-6">
                    <label
                      htmlFor="search-researchers"
                      className="font-weight-bold"
                    >
                      Location
                    </label>

                    <Select
                      options={options}
                      searchable={true}
                      onChange={handleChange}
                      className="form-control"
                    ></Select>
                  </div>

                  <div className="form-group col-lg col-sm-12 col-md-6">
                    <label
                      htmlFor="research-interest"
                      className="font-weight-bold"
                    >
                      Research Interest
                    </label>

                    <input
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          searchFeatured();
                        }
                      }}
                      onChange={(e) => setRinterest(e.target.value)}
                      value={rInterest}
                      className="form-control"
                      type="text"
                      id="search-researchers"
                      placeholder="Search"
                    />
                  </div>

                    
                    <div className="form-group col-md-2 col-sm-12">
                      {" "}
                      <button
                        type="button"
                        onClick={onSearch}
                        className="btn w-100 btn-primary"
                      >
                        Search
                      </button>
                    </div>
                  
                </div>
              </div>
            </div>
          </section>
        </form>

        {/* Featured */}
        <section id="featured" className="py-4">
          <div className="container py-3 py-lg-0">
            <div className="mb-lg-5 mb-4 d-flex justify-content-end">
              {/* <h2 className="h1 mb-0">Featured</h2> */}



              {isLoading == true  ? null : currentPage == 0 && pages > 1 ? (
                <div
                  className="tns-custom-controls cs-controls-inverse mb-md-n4"
                  tabIndex="0"
                >
                  <button
                    className="mr-2 disabled-btn"
                    type="button"
                    data-controls="prev"
                    tabIndex="-1"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={nextFeatured}
                    data-controls="next"
                    tabIndex="-1"
                    
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              ) :
                 (currentPage > 0 ) && (currentPage >= pages-1) ? (
                <div
                  className="tns-custom-controls cs-controls-inverse mb-md-n4"
                  tabIndex="0"
                >
                  

                  <button
                    type="button"
                    onClick={previousFeatured}
                    data-controls="prev"
                    tabIndex="-1"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    className="mr-2 disabled-btn"
                    data-controls="next"
                    tabIndex="-1"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              ) : (currentPage > 0) && (currentPage < pages-1) ?     
              <div
              className="tns-custom-controls cs-controls-inverse mb-md-n4"
              tabIndex="0">
              <button
                type="button"
                onClick={previousFeatured}
                data-controls="prev"
                tabIndex="-1"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                
                onClick={nextFeatured}
                type="button"
                data-controls="next"
                tabIndex="-1"
              >
                <ChevronRight size={20} />
              </button>
            </div> : null}
            </div>
          </div>
          <div className="container py-lg-0">
            <div className="row">
              {isLoading === true ? (
                <div
                  className="sweet-loading"
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                >
                  <HashLoader
                    size={60}
                    margin={2}
                    color={"#17e3cc"}
                    loading={isLoading}
                  />
                </div>
                
              ) : allData.length > 0 ? (
                allData.map((item, index) => {
                  return (
                    <div
                      className="col-lg-3 col-md-4 mb-4 col-sm-6 col-xs-12"
                      key={index}
                    >
                      <div className="rounded">
                        <a
                          className="featured-card-scale text-decoration-none mt-3 mx-0"
                          onClick={() =>
                            history.push({
                              pathname: `/profile/${item.userName}`,
                            })
                          }
                        >
                          <span className="profile-link">
                            <ArrowUpRight size={18} />
                          </span>
                          <div className="featured-card-img">
                            {item.photos.length > 0 ? (
                              <img
                                src={`${baseUrl}${item.photos[0].url}`}
                                alt="Card Image"
                              />
                            ) : (
                              <img src={avatar} />
                            )}
                          </div>
                          <div className="featured-card-body">
                            <h3
                              onClick={() =>
                                history.push({
                                  pathname: `/profile/${item.userName}`,
                                })
                              }
                              className="featured-card-title"
                            >
                              {item.fullName}
                            </h3>

                            <p
                              onClick={() =>
                                history.push({
                                  pathname: `/profile/${item.userName}`,
                                })
                              }
                              className="mb-2 text-white"

                              //className="font-size-sm text-muted"
                            >
                              {item.companyName}
                            </p>

                            <p
                              onClick={() =>
                                history.push({
                                  pathname: `/profile/${item.userName}`,
                                })
                              }
                              className="mb-1 text-white d-flex align-items-center"

                              // className="font-size-sm text-muted"
                            >
                              <MapPin size={16} className="mr-2" />
                              <span className="location">
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    `images/flags/${item.location.toLowerCase()}.svg`
                                  }
                                />
                              </span>
                            </p>
                            <p
                              onClick={() =>
                                history.push({
                                  pathname: `/profile/${item.userName}`,
                                })
                              }
                              className="mb-1 text-white d-flex align-items-center"
                              // className="font-size-sm text-muted"
                            >
                              <Briefcase size={16} className="mr-2" />
                              {/* <span className="mr-2">💼</span> */}
                              {item.jobTitle}
                              {/* {console.log(item.rInterests.split(','))} */}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ marginRight: "auto", marginLeft: "auto" }}>
                  <img
                    // src={noData}
                    style={{ height: "300px", width: "400px" }}
                  />
                  <h3 style={{ textAlign: "center" }}>No Data</h3>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
    </div>
  );
};

export default FindTutor;