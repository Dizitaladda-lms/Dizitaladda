import PublicNavbar from "../../../components/PublicNavbar.jsx";
import LegacyPageContent from "../../../components/LegacyPageContent.jsx";

export const pageMetadata = {"title":"Lawprep","description":""};

export default function LegacyPage_lawww_index() {
  return (
    <>
      <PublicNavbar />
      <LegacyPageContent>
        
    
<meta charSet="UTF-8" />

    
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

    
    
{/*  HTML Meta Tag  */}


<meta name="robots" content="noindex, nofollow" />


 
<link rel="icon" href="https://dizitaladda.com/assets/img/favicon.webp" />

    


   
   
    
{/*  Custom Styles  */}


    
<link rel="stylesheet" href="./css/bootstrap.min.css" />

    
<link rel="stylesheet" href="./css/owl.carousel.min.css" />

    
<link rel="stylesheet" href="./css/style.css" />


     
{/*  Custom js  */}

    
<script src="./js/jquery-1.12.0.min.js" />

    
<script src="./js/selectordie.js" />

    
<script src="./js/bootstrap.min.js" />

    
<script src="./js/owl.carousel.js" />

   
    
<style dangerouslySetInnerHTML={{__html:"\r\n        .contact-sec {\r\n            padding: 60px 0;\r\n            \r\n            background-color: #f9f9f9;\r\n\r\n        }\r\n        .slider-form {\r\n            margin-bottom: 10px;\r\n            backdrop-filter: blur(10px);\r\n            padding: 30px;\r\n            box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);\r\n            border-radius: 8px;\r\n        }\r\n        \r\n    "}} />








    
{/*  Your HTML Content  */}


    
<header className="demotest">

        <nav className="navbar navbar-default navbar-fixed-top " data-spy="affix" data-offset-top="50">

            <div className="container-fluid header-container">

                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" id="mymenubtn">

                        <span className="icon-bar"></span>

                        <span className="icon-bar"></span>

                        <span className="icon-bar"></span>

                    </button>

                    <a className="navbar-brand" href="https://www.successmantra.in"><img src="https://dizitaladda.com/assets/img/logo.webp" width="150px" /></a>

                </div>

                <div className="collapse navbar-collapse" id="mymenuNavbar">



                    <ul className="nav navbar-nav navbar-right navbar-contact hidden-xs">

                        <li>

                            <a href="#contactus">contact us </a>

                        </li>



                    </ul>

                    <ul className="nav navbar-nav navbar-right">

                        <li><a href="#home">Home</a></li>

                        <li>

                            <a href="#aboutus">about us </a>

                        </li>

                        <li><a href="#whyus">Why us</a></li>

                        <li><a href="#benefits">Benefits </a></li>

                        <li><a href="#courses">Courses</a></li>

                        <li><a href="#testimonials">Testimonials </a></li>

                    </ul>

                    <ul className="nav navbar-nav navbar-right navbar-contact hidden-sm hidden-md hidden-lg">

                        <li>

                            <a href="#contactus">contact us </a>

                        </li>



                    </ul>

                </div>

            </div>

        </nav>

    </header>




    
<section className="slider-wrap" id="home">

        <img src="https://www.successmantra.in/landing-pages-assets-2121/images/banner-backgroung.png" />

        <div className="slide-text">

            <div className="row">

                <div className="col-sm-6 col-md-7">

                    <div className="slide-text-dec">

                        <h3>CLAT-2025 is on DEC 01, 2024</h3>

                        <h1> <b>Crack CLAT/AILET 2025/26</b> Entrance Exam </h1>

                        <p className="custom-text" style={{"color":"green","fontSize":"20px","fontFamily":"'Roboto', sans-serif","fontWeight":"400"}}>
                            Outright your dream to be a Lawyer with us</p>

                    </div>

                </div>

                <div className="col-sm-6 col-md-5">

                    <div className="slider-form text-center">

                        <div className="form-box">

                            <h2>Enquire <span>Now</span> </h2>



                            <form action="" id="" method="post">
                                <div className="form-group">

                                    <input type="text" id="name_req" name="name_req" className="form-control" placeholder="Name" />

                                    <span id="info-name_req" className="info text-danger"></span>

                                </div>

                                {/*  <div class="form-group ">

                                    <input type="text" name="email_req" id="email_req" class="form-control"
                                        placeholder="Email" />

                                    <span id="info-email_req" class="info text-danger"></span>

                                </div>  */}

                                <div className="form-group">

                                    <input type="text" id="phone_number" name="phone_number" className="form-control" placeholder="Mobile No." />

                                    <span id="info-phone_number" className="info text-danger"></span>

                                </div>

                                <div className="form-group ">

                                    <input type="text" className="form-control" id="location" name="location" placeholder="Location" />

                                    <span id="info-location" className="info text-danger"></span>

                                </div>

                                <div className="form-group">

                                    <select className="form-control select-ctrl" id="center" name="center">

                                        <option value="">Center</option>

                                        <option value="GTB Nagar">Greater Kailash,delhi</option>

                                        <option value="Laxmi Nagar">Patna,Bihar</option>
                                        <option value="Laxmi Nagar">Chandigarh,Punjab</option>
                                        <option value="Online Coaching">Online Coaching</option>



                                    </select>

                                    <span id="info-center" className="info text-danger"></span>

                                </div>

                                <div className="form-group">

                                    <textarea rows="4" className="form-control" id="content" name="content" placeholder="Query"></textarea>

                                    <span id="info-content" className="info text-danger"></span>

                                </div>
                                {/*  <div class="form-group">
                                    <div class="g-recaptcha" data-sitekey="6Lep5MoZAAAAADiIHWP2Somdi9xM29cdk-dXP2Gu"
                                        data-callback="recaptchaCallback"></div>
                                </div>  */}

                                <div className="form-group" id="loding_img1" style={{"display":"none","color":"green"}}>Please
                                    wait...</div>

                                <div className="form-group">

                                    <button type="submit" className="btn btn-warning btn-slider onte" id="contact_request121" disabled={true} data-legacy-onclick={"return validateRequest()"}>

                                        Get more info <i className="fa fa-long-arrow-right"></i>



                                    </button>
                                </div>

                            </form>



                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>


    
<section className="wrap abt-wrap">

        <div className="container">

            <div className="row">

                <div className="col-md-10 col-md-offset-1 col-md-pull-0">

                    <div className="row">

                        <div className="col-sm-6 col-md-6">

                            <div className="thumbnail abt-tmbimg tmb">

                                <img src="https://www.successmantra.in/landing-pages-assets-2121/images/Amazing-Results.png" />



                            </div>

                        </div>

                        <div className="col-sm-6 col-md-6">

                            <div className="abt-dec">

                                <p>
                                </p><p style={{}}> </p>

                                <h4><span style={{"color":"rgb(8, 82, 148)"}}>Do You Dare To Be A <strong>CLAT
                                            Topper</strong>? Wanna Join <strong>NLSIU Bangalore</strong>? Is
                                        <strong>NLU Delhi</strong> Your Dream College?</span></h4>

                                <h2>If Yes, Then <strong>Join the Online </strong>Live<strong> | Offline Classroom
                                        Program</strong>, Now!</h2>

                                <h4>Enrollment Open! Call @ <a href="tel:+91 8588 876 885" style={{"outline":"0px"}}>8810606010</a></h4>

                                <h3><span style={{"color":"rgb(8, 82, 148)"}}><strong>Crack CLAT 2025
                                            &amp; 2026</strong> &amp; Pursue a Power-packed Profession which
                                        never retires</span></h3>

                                <p> </p>
                                <p></p>

                            </div>

                        </div>



                    </div>

                </div>

            </div>



            <div className="abt-dec abt-box text-center" id="aboutus">

                <div className="title courses-title text-center">

                    <h1> <b>About Us </b> <span>(Dizital Adda)</span></h1>



                </div>

                <div className="row">

                    <div className="col-md-10 col-md-offset-1 col-md-pull-0">

                        <h2>Even if a tiny seed is grown properly with utmost care, one day it mesmerizes the entire
                            world.</h2>

                    </div>

                </div>



                <p>
                </p><p style={{"textAlign":"center","marginBottom":"0px","lineHeight":"1.8","padding":"0px","outline":"none","transition":"all 0.3s ease-in-out 0s"}}>
                    The above-said quote depicts the philosophy of <strong>Dizital Adda (SM)</strong>. The foundation
                    stone of <strong>SM</strong>, headquartered in GTB Nagar, Delhi, was laid by Mrs. K Punam, along
                    with Mr. B S Shanti, in 2008. With a modest beginning, <strong style={{"textAlign":"center"}}>SM</strong> has now become synonymous with professionalism and
                    excellence in the field of <strong>LAW</strong> entrance exams. We've 4 Offline centers in
                    Delhi- GTB Nagar, Nirman Vihar, Pitampura &amp; Kalkaji. The teaching pedagogy of <strong style={{"textAlign":"center"}}>SM</strong> is unique and has been recognized as the best across the
                    industry. Our <strong>selection is to students ratio (2:5)</strong> is testimony to this. In a short
                    span, we have successfully produced <strong>TOPPERS and RANKERS.</strong></p>
                <p></p>

            </div>

        </div>

    </section>



    
<section className="wrap why-wrap" id="whyus">
        <div className="container">

            <div className="row why-row">

                <div className="col-sm-4 text-center hidden-sm hidden-md hidden-lg">

                    <div className="title why-title">

                        <h1>Why</h1>

                        <h4>Dizital Adda?</h4>

                    </div>

                </div>

                <div className="col-sm-4 col-sm-offset-0 col-md-3 col-md-offset-1 why-box-float-rgt">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/559c5acf253785e3d6cf2e712dbde127.png" />

                        <h5>Best Success Rate</h5>

                    </div>



                </div>

                <div className="col-sm-4 col-md-4 text-center hidden-xs">

                    <div className="title why-title">

                        <h1>Why</h1>

                        <h4>Dizital Adda?</h4>

                    </div>

                </div>

                <div className="col-sm-4  col-md-3 col-sm-pull-0 why-box-float-left">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/5e90d2958de52c9bdfc4ce0d0600aaf0.png" />

                        <h5>True Coaching at Affordable Fees – Quality-Focused</h5>

                    </div>

                </div>

            </div>

            <div className="row">

                <div className="col-sm-4 why-box-float-lft">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/004f78682be9ec5f66b01bd9b648c843.png" />

                        <h5>Small Batch size for Individual Attention</h5>

                    </div>

                </div>

                <div className="col-sm-4 text-center">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/dec0c314513e10d38432ea0297a1e698.png" />

                        <h5>A Team of Highly Experienced and Trained Faculties</h5>

                    </div>

                </div>

                <div className="col-sm-4 why-box-float-rgt">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/5bee3a4e6902535118970e84847adfcc.png" />

                        <h5>Well Researched Books &amp; Study Materials</h5>

                    </div>

                </div>

            </div>

            <div className="row">

                <div className="col-sm-5 why-box-float-rgt">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/b35ed794f4ebe2f3438c8a654bdc7510.png" />

                        <h5>Series of 140 Online Tests for Better Time Management</h5>

                    </div>

                </div>



                <div className="col-sm-5 col-sm-offset-2 why-box-float-lft">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/f54d985124814adbbd0c0cd9ce0fa4f7.png" />

                        <h5>Informative &amp; Motivational Blog Articles</h5>

                    </div>

                </div>

            </div>

            <div className="row">

                <div className="col-sm-4 col-sm-offset-4 col-sm-pull-0 text-center">

                    <div className="why-choose-box why-choose-box-lg">

                        <img style={{"height":"85px","width":"74px"}} src="https://www.successmantra.in/page_images/a8802e2169f1e4e7b902162ae39c3dcd.png" />

                        <h5>Mobile Application for Daily Current Affairs </h5>

                    </div>

                </div>

            </div>
        </div>


    </section>



    
<section className="wrap" id="video" style={{"paddingBottom":"0"}}>
        <div className="container">
            <div className="title courses-title text-center">

                <h1> Our <b>Videos </b></h1>



            </div>
            <div className="row">
                <div className="col-md-12">
                    <div id="news-slider" className="owl-carousel">

                        <div className="post-slide">
                            <div className="post-img">
                                <a data-toggle="modal" data-target="#67">

                                    <video data-legacy-oncontextmenu={"return false;"} style={{"width":"350px","height":"240px"}} controls={true} controlslist="nodownload">
                                        <source src="https://www.successmantra.in/page_images/product_video_compressed_(3)2.mp4" type="video/mp4" />
                                    </video>

                                    <i className="fa fa-play" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>

                    </div>




                </div>
            </div>



        </div>
    </section>



    
<section className="counter-sec wrap">

        <div className="container">

            <div className="row text-center">

                <div className="col-sm-9 col-sm-offset-2 col-sm-pull-0 col-md-9 col-md-offset-2 col-md-pull-0 col-lg-9 col-lg-offset-2 col-lg-pull-0">
                    <div className="row text-center">

                        <div className="col-sm-4 col-md-4 counter-block">

                            <div className="counter-box">

                                <h1><span className="counter">12784</span><span>+</span></h1>

                                <h4>Students</h4>

                            </div>

                        </div>



                        <div className="col-sm-4 col-md-4 counter-block">

                            <div className="counter-box">

                                <h1 className="lightgold"><span className="counter">343478</span><span>+</span></h1>

                                <h4>Questions Curated </h4>

                            </div>

                        </div>



                        <div className="col-sm-4 col-md-4 counter-block">

                            <div className="counter-box">

                                <h1><span className="counter">85</span><span>%</span></h1>

                                <h4>Result</h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>



    
<section className="banner-wrap">

        <img style={{"height":"627px","width":"1920px"}} src="" />


    </section>


    
<section className="offer-wrap wrap">

        <div className="container">



            <div className="row">

                <div className="col-sm-6  col-md-6 clat">

                    <div className="title courses-title">



                    </div>

                    <p>
                    </p><h1 style={{"textAlign":"justify","marginTop":"20px","lineHeight":"1.1"}}><strong><span arial="" style={{"fontFamily":"sans-serif"}}>CLAT 2025/26</span></strong></h1>

                    <h1 style={{"textAlign":"left","marginTop":"20px","lineHeight":"1.1"}}> </h1>

                    <h3 style={{"textAlign":"justify","lineHeight":"1.1","marginTop":"20px"}}><em><span arial="">"Make
                                crime pay. Become a lawyer." </span><span arial="">- Will Rogers</span></em>
                    </h3>

                    <p className="MsoNormal" style={{"textAlign":"justify"}}><strong>CLAT</strong> stands for Common Law
                        Admission Test. It is an all-India entrance examination conducted by the National Law Schools |
                        Universities for admissions to their undergraduate and postgraduate degree programmes (LL.B
                        &amp; LL.M). The <strong>CLAT</strong> exam is conducted on rotation, based upon the order of
                        their establishment, by <strong>25 National Law Universities (NLUs)</strong>.
                        ‘Consortium of Law, Bangalore’ is the designated body that assists the particular
                        NLU with the nuances of conducting tests.<o_p></o_p>
                    </p>

                    <h2 style={{"textAlign":"justify","lineHeight":"1.1","marginTop":"20px"}}><strong>Revised Pattern &amp;
                            Syllabus</strong> </h2>

                    <p className="MsoNormal" style={{"textAlign":"justify"}}>The <strong>CLAT</strong> 2025 will also have
                        a comprehension-based pattern of the questions for the UG Programme. Comprehension-based
                        questions will be asked from:-<o_p></o_p>
                    </p>

                    <p style={{"textAlign":"justify","marginBottom":"0px","lineHeight":"1.8","padding":"0px","outline":"none","transition":"all 0.3s ease-in-out 0s"}}>
                        <b>English Language</b> (22-24 Questions)<b>, Logical Reasoning</b><span style={{"textAlign":"justify"}}> (22-24 Questions)</span><b>, Quantitative
                            Techniques</b><span style={{"textAlign":"justify"}}> (10-12 Questions)</span><b>, General
                            Knowledge</b><span style={{"textAlign":"justify"}}> </span><b>including Current
                            Affairs</b><span style={{"textAlign":"justify"}}> (28-32 Questions)</span><b>, Legal
                            Reasoning</b><span style={{"textAlign":"justify"}}> (28-32 Questions)</span>
                    </p>
                    <p></p>


                </div>

                <div className="col-sm-6 col-md-6">

                    <p>
                    </p><table className="table" style={{"backgroundColor":"rgb(255, 255, 255)","width":"553px","marginBottom":"0px","fontFamily":"Montserrat, sans-serif","fontSize":"15px"}}>
                        <thead style={{"background":"rgb(242, 242, 242)"}}>
                            <tr>
                                <th className="text-center" colSpan="5" style={{"padding":"20px 10px","lineHeight":"1.42857","borderBottomWidth":"1px","textTransform":"inherit","fontSize":"16px"}}>
                                    <h3 style={{"fontFamily":"inherit","lineHeight":"1.1","marginTop":"20px","fontSize":"24px","textTransform":"capitalize"}}>
                                        <strong>CLAT 2025 Information</strong>
                                    </h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderTop":"1px solid rgb(221, 221, 221)","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Eligibility</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderTop":"1px solid rgb(221, 221, 221)","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <p><b>Minimum 45% in XII - Genral Category</b></p>

                                    <p><b>Minimum 40% in XII - Reserved Category </b></p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Application Form Available From</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>To be notified </b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Exam Date</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <span style={{"fontSize":"13px"}}><b>December 01, 2025</b></span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Exam Duration</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>2 Hours</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Seats Offered</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>3,400+</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Exam Mode</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>Offline</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Official Website</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <a href="https://clatconsortiumofnlu.ac.in/" style={{"color":"rgb(51, 122, 183)"}} target="_blank"><b>https://clatconsortiumofnlu.ac.in/</b></a>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Total No. of Ques.</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>120</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Marking Scheme</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>+ 1 Mark</b>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    Negative Marking</td>
                                <td style={{"padding":"10px","lineHeight":"1.42857","verticalAlign":"middle","borderBottom":"1px solid rgb(234, 237, 239)","fontSize":"13px","borderRight":"1px solid rgb(234, 237, 239)"}}>
                                    <b>-0.25 Marks</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p></p>

                </div>

            </div>



        </div>

    </section>



    
<section className="courses-wrap wrap" id="courses">

        <div className="container">

            <div className="title courses-title text-center">

                <h1> <b>courses</b> we Offer</h1>

            </div>

            <div className="table-responsive">


                <h3>Dizital Adda's Concepts, Strategies, Notes, Mocks &amp; Revision Techniques Guiding You
                    Throughout Your CLAT Journey</h3>

                <p> </p>

                <table>
                    <tbody>
                        <tr>
                            <td><strong>Sections</strong></td>
                            <td><strong>2 Year Classroom Program CLAT 2026</strong></td>
                            <td><strong>2 Year Digital Program CLAT 2026</strong></td>
                            <td><strong>1 Year Classroom Program CLAT 2025</strong></td>
                            <td><strong>1 Year</strong><strong> </strong><strong>Digital Program CLAT 2025</strong>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Class Mode</strong></td>
                            <td>OFFLINE Classroom Program</td>
                            <td>ONLINE Digital Program</td>
                            <td>OFFLINE Classroom Program</td>
                            <td>ONLINE Digital Program</td>
                        </tr>
                        <tr>
                            <td><strong>Target Year</strong></td>
                            <td>CLAT 2026</td>
                            <td>CLAT 2026</td>
                            <td>CLAT 2025</td>
                            <td>CLAT 2025</td>
                        </tr>
                        <tr>
                            <td><strong>Duration</strong></td>
                            <td>20-24 Months</td>
                            <td>20-24 Months</td>
                            <td>10-12 Months</td>
                            <td>10-12 Months</td>
                        </tr>
                        <tr>
                            <td><strong>Faculty</strong></td>
                            <td>Classes under the leadership of NLU Delhi &amp; DU LLB Alumni</td>
                            <td>Classes under the leadership of NLU Delhi &amp; DU LLB Alumni</td>
                            <td>Classes under the leadership of NLU Delhi &amp; DU LLB Alumni</td>
                            <td>Classes under the leadership of NLU Delhi &amp; DU LLB Alumni</td>
                        </tr>
                        <tr>
                            <td><strong>Useful For</strong></td>
                            <td>Useful For Students studying in the XI Class </td>
                            <td>Useful For Students studying in the XI Class</td>
                            <td>Useful For Students studying in the XII Class or XII passed</td>
                            <td>Useful For Students studying  in the XII Class or XII passed</td>
                        </tr>
                        <tr>
                            <td><strong>Ideal Time to Start</strong></td>
                            <td>NOW</td>
                            <td>NOW</td>
                            <td>NOW</td>
                            <td>NOW</td>
                        </tr>
                        <tr>
                            <td><strong>Total Teaching Hours*</strong></td>
                            <td>1,000+ Hours including 600+ LIVE Teaching Hours</td>
                            <td>1,000+ Hours including 600+ LIVE Teaching Hours</td>
                            <td>
                                <p>650+ Hours including 400+ LIVE Teaching Hours</p>
                            </td>
                            <td>650+ Hours including 400+ LIVE Teaching Hours</td>
                        </tr>
                        <tr>
                            <td><strong>Books &amp; Study Materials: A Series Of 15+ Fundamental &amp; Practice
                                    Books, Past Papers, Current Affairs Timeline, The Hindu E-Newspaper</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Interaction With Facility</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td>
                                <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                                </p>

                                <p>(Voice as well as chat interaction facility during Online classes, making classes
                                    just next to Offline classes)</p>
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td>
                                <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                                </p>

                                <p>(Voice as well as chat interaction facility during Online classes, making classes
                                    just next to Offline classes)</p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>A Collection Of 2000+ Passage Based Questions for Practice, Based On
                                    CLAT New Pattern</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Pravahini Magazine - Monthly Compendium &amp; Weekly Editorials Of Current
                                    Affairs</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Ease Vidya App (Your Online Knowledge Mentor): Mobile And Website
                                    Application</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Daily Practice Sheets : Every Class Is Supported By Assignments</strong>
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Offline &amp; Online Test Series</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Test Series</strong></td>
                            <td>SECTIONAL TESTS &amp; UNIT TESTS : 700+ Chapter-Wise &amp; Section-Wise Tests</td>
                            <td>SECTIONAL TESTS &amp; UNIT TESTS : 700+ Chapter-Wise &amp; Section-Wise Tests</td>
                            <td>SECTIONAL TESTS &amp; UNIT TESTS : 450+ Chapter-Wise &amp; Section-Wise Tests</td>
                            <td>SECTIONAL TESTS &amp; UNIT TESTS : 450+ Chapter-Wise &amp; Section-Wise Tests</td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>MOCK TESTS (FULL LENGTH)* : 90+ (Online + Offline Tests)</td>
                            <td>MOCK TESTS (FULL LENGTH)* : 90+ (Online + Offline Tests)</td>
                            <td>MOCK TESTS (FULL LENGTH)* : 45+ (Online + Offline Tests)</td>
                            <td>MOCK TESTS (FULL LENGTH)* : 45+ (Online + Offline Tests)</td>
                        </tr>
                        <tr>
                            <td><strong>Practice Questions</strong></td>
                            <td>Access to 5500+ PRACTICE Questions</td>
                            <td>Access to 5500+ PRACTICE Questions</td>
                            <td>Access to 5500+ PRACTICE Questions</td>
                            <td>Access to 5500+ PRACTICE Questions</td>
                        </tr>
                        <tr>
                            <td><strong>Personalized Career Counseling</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Doubt Clearing Sessions</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Payment Installment Option</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Scholarships Available on Demand</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Entrance Exam Form Filling Assistance</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Hostel Facility Assistance</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Hostel Facility Assistance</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td>Not Required</td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td>Not Required</td>
                        </tr>
                        <tr>
                            <td><strong>Access To Social Media Platforms</strong></td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                            <td><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB3VBMVEX6+vr7+vv//f/3+ff//v/4+fj//P/7+/v5+vn////6+/r8+/z+/P79+/34+vgjrzExtD4ztT/4+vn3+fguszsksDEytD8psTb9/P00tUD9+/z1+PVNvldKvVUvszwmsDQlsDMwtDz5+vpZwmPF6Mhcw2Yhry4qsjYlsDIosTSG0o0nsTT8+vv9/f3g8OH+/P3j8uR0zH1lxm/2+fb8+/vo9Ony9/Kg2qWi26ew4bSx4bUdrCo2tkNCuk7S7NQtszi04rj8/Px8z4Ov4LTw9/HR7NMnsTWR1Zfy+PPz9/N/z4bg8uKT1pkqsTjJ6cvw9vCV15wvsjtXwWGM05IqsTdTwF47uEeW15wiri/++/5IvFTO6tCb2aDu9u85t0UssjrY79ojrzA3tkMpsTckrzF4zICS15ms3rGS1pkrsjjb8N0/uEtHvFKt37EtsjoxtD1ryHT5+fknsDS547zA5sNgxGjI6cxOvlkvtDsosTUpsjbs9u1LvVUrsjez4bf0+PQytT4sszh/0IcssjgnsDMmsDP+/f5jxWyj3Kmh26eW2JwtsznS7dVSv1yI045BukwbrSjk8+Xd8N/5+vj3+vhdw2Z9z4VqyHPz+PMlsDHu9++t37ImsTP7/PxuyXYA5HeZAAABoklEQVQoz2NgZ2BnYMAgGDgYudiBFANW2ck8bQyR0tLsXFjk2Bk4OCdqtafFmPJg0czIwcU0u3+CZEcsNwMWwME+V0tTbeokTuyyDBLTZs6ZN4OJD8JHM12JpU9De/oUCQ6oF1BtZuXs1FbvncVTyAj3I5ICVpayim7JHhZWmByqxbzVNY2tXZysDFgBK0uTaHN5PTcHQgjJdD4WldqGljoWZqTQRdjMwMBbWlmlyo0W/DAOK0uJuKBmMacwkhwYKJmAHcZWUKSujOkidh4+R6C72BIE8zVyOZlR5YBxayGjwsInzOnDn5fjz4tqMxcHk6W9mownNwNHqG9KMLLNYEKIyU5QUDSchS06UETOlUkIRTM4MLxEFeOyODP4Q4IYGDHjkM07TJE/lVNVnN8dzWFgE1g5AxIFxNKzM+P9WIQwA4WD10U2WSRJUjzKQwojksGx7KwgICIQ4cTCgSYHsZ2RUVleTEDeioUZa0wyczq4icnZGLBxMGA6DYikzGwVrI3YsNkMCTpzWUM9Ng4s+QlC6xvrSmBqZmCHsXQYODBSLgB6IzxBSODfGgAAAABJRU5ErkJggg==" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>CLAT </strong>exam is one-go exam. Those <strong>2 hours</strong> will decide which
                    <strong>national law university </strong>one will go after. The CLAT exam tests your
                    <strong>aptitude </strong>first and less of knowledge. <strong>Logical understanding
                        concepts </strong>and <strong>deducing capabilities </strong>are what the
                    universities/colleges look for.
                </p>

                <p>Boasting it to be the best Institute for CLAT Coaching in Delhi, <strong>Dizital Adda
                    </strong>offers edge- to- edge knowledge to crack the annual examination of the <strong>Common Law
                        Admissions Test (CLAT is scheduled on December 01, 2025)</strong>. Dizital Adda is one of the
                    prominent coaching institutes for CLAT Exam preparation in your city - GTB Nagar, Nirman Vihar,
                    Pitampura &amp; Kalkaji are 4 prominent centers. Our <strong>classroom program</strong> courses are
                    designed meticulously to offer you the maximum benefits. With the long-term
                    <strong>batches</strong>, benefits in terms of<strong> time management</strong> and <strong>accuracy
                    </strong>to score good in the final test, have no comparison across industry.
                </p>

                <p><strong>Dizital Adda is a journey of every law aspirant, a journey from beginner to
                        topper.</strong></p>

                <p> </p>



            </div>

        </div>

    </section>



   


    
<section className="wrap testimonials-wrap" id="testimonials">

        <div className="container">

            <div className="row">

                <div className="col-sm-12 col-md-7">

                    <div className="clents-title">

                        <h1>What our <b>Students Say </b> </h1>

                    </div>

                    <div className="tastimonial">

                        <div className="owl-carousel owl-theme owl-carousel2">
                            <div className="item">

                                <div className="single-testimonial-item">

                                    <div className="user-img"><img style={{"height":"76px","width":"76px"}} src="https://www.successmantra.in/page_images/591288155b7995265ae84a8dd78ccd2e.png" />
                                    </div>

                                    <div className="testimonial-body">

                                        <div className="user-name">
                                            <h3 style={{"marginBottom":"0px"}}>Sumit Kumar Gupta</h3><span>CLAT AIR - 4 |
                                                AILET AIR - 10</span>
                                        </div>

                                        <p>
                                        </p><p>I was the classroom program student of Dizital Adda, Delhi. I really feel
                                            that the study curriculum at this coaching was very helpful. They always
                                            provide you a competitive environment which propels you to work hard and
                                            harder, resulting into better performance. Thanks to everyone.</p>

                                        <p></p>

                                    </div>

                                </div>

                            </div>
                            <div className="item">

                                <div className="single-testimonial-item">

                                    <div className="user-img"><img style={{"height":"76px","width":"76px"}} src="https://www.successmantra.in/page_images/58ae4fc08a023327dbdd8e68c14098e2.jpg" />
                                    </div>

                                    <div className="testimonial-body">

                                        <div className="user-name">
                                            <h3 style={{"marginBottom":"0px"}}>Piyush Gupta</h3><span>AIR 8, CLAT</span>
                                        </div>

                                        <p>
                                        </p><p>I joined Dizital Adda for my CLAT 2023 attempt and the dedicated team there
                                            helped me achieving my goal. The classroom study material boosted my scores,
                                            both in mocks as well as in the actual CLAT. I would like to express my
                                            gratitude to the team Dizital Adda for helping me in getting my dream NLU.
                                        </p>

                                        <p></p>

                                    </div>

                                </div>

                            </div>


                            <div className="item">

                                <div className="single-testimonial-item">

                                    <div className="user-img"><img style={{"height":"76px","width":"76px"}} src="https://www.successmantra.in/page_images/fd6adb43931ac2139f83512dbfa50400.jpg" />
                                    </div>

                                    <div className="testimonial-body">

                                        <div className="user-name">
                                            <h3 style={{"marginBottom":"0px"}}>Anmol Sai</h3><span>AIR 37, CLAT</span>
                                        </div>

                                        <p>
                                        </p><p>My experience at Dizital Adda is great and memorable. The mentors at this
                                            coaching helped us enhance my academic and interpersonal skills. I was good
                                            into academics but Dizital Adda Mentors helped me to alleviate my subject
                                            under-standing with utmost sincerity. I am thankful to this team.</p>

                                        <p></p>

                                    </div>

                                </div>

                            </div>


                            <div className="item">

                                <div className="single-testimonial-item">

                                    <div className="user-img"><img style={{"height":"76px","width":"76px"}} src="https://www.successmantra.in/page_images/6bacf14bd47e9dae280a45c9e978039f.jpg" />
                                    </div>

                                    <div className="testimonial-body">

                                        <div className="user-name">
                                            <h3 style={{"marginBottom":"0px"}}>Simran Sandhu </h3><span>AIR 157,
                                                CLAT</span>
                                        </div>

                                        <p>
                                        </p><p>I'm incredibly lucky I got to enrol in this coaching. Because it helped
                                            me in getting into the college of my choice! I was able to achieve such a
                                            high rank thanks to their comprehensive study materials, highly skilled,
                                            expert teachers, and regular tests! Dizital Adda was quite helpful to me
                                            during my trip. Thank you to the entire Best CLAT Coaching in Delhi team.
                                        </p>

                                        <p></p>

                                    </div>

                                </div>

                            </div>


                            <div className="item">

                                <div className="single-testimonial-item">

                                    <div className="user-img"><img style={{"height":"76px","width":"76px"}} src="https://www.successmantra.in/page_images/5e4983bcbb6fc03a929861886093ea2d.jpg" />
                                    </div>

                                    <div className="testimonial-body">

                                        <div className="user-name">
                                            <h3 style={{"marginBottom":"0px"}}>Harsh Raj</h3><span>AIR 70, CLAT</span>
                                        </div>

                                        <p>
                                        </p><p>Legal Faculty is the most wonderful and genuine person I've ever seen.
                                            He's a true inspiration! He is the best law professor I've ever seen
                                            in my legal career. A person is never great merely in terms of intellect,
                                            but also in terms of heart, and you have actually accomplished both. I count
                                            myself lucky to be a student of yours through this Best CLAT Coaching in
                                            Delhi.</p>

                                        <p></p>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="col-sm-12 col-md-5 hidden-xs hidden-sm">

                    <img src="https://www.successmantra.in/landing-pages-assets-2121/images/textimonial-bg.png" className="img-responsive" />

                </div>

            </div>



        </div>

    </section>

    
    

<section className="contact-sec" id="contactus">
    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-5">
                <div className="slider-form">
                    <div className="form-box">
                        <h2>Enquire <span>Now</span></h2>
                        <form action="" id="" method="post">
                            <div className="form-group">
                                <input type="text" id="name_req" name="name_req" className="form-control" placeholder="Name" />
                                <span id="info-name_req" className="info text-danger"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" id="phone_number" name="phone_number" className="form-control" placeholder="Mobile No." />
                                <span id="info-phone_number" className="info text-danger"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="location" name="location" placeholder="Location" />
                                <span id="info-location" className="info text-danger"></span>
                            </div>
                            <div className="form-group">
                                <select className="form-control select-ctrl" id="center" name="center">
                                    <option value="">Center</option>
                                    <option value="GTB Nagar">Greater Kailash, Delhi</option>
                                    <option value="Laxmi Nagar">Patna, Bihar</option>
                                    <option value="Chandigarh">Chandigarh, Punjab</option>
                                    <option value="Online Coaching">Online Coaching</option>
                                </select>
                                <span id="info-center" className="info text-danger"></span>
                            </div>
                            <div className="form-group">
                                <textarea rows="4" className="form-control" id="content" name="content" placeholder="Query"></textarea>
                                <span id="info-content" className="info text-danger"></span>
                            </div>
                            <div className="form-group" id="loding_img1" style={{"display":"none","color":"green"}}>Please wait...</div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-warning btn-slider" id="contact_request121" data-legacy-onclick={"return validateRequest()"}>
                                    Get more info <i className="fa fa-long-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6 col-md-offset-1">
                <div className="contact-dec">
                    <div className="title">
                        <h4>Contact Us</h4>
                        <h1><b>Don’t Hesitate</b> to Contact us for any Information</h1>
                    </div>
                    <p>Call us for immediate support at this number</p>
                    <h3><a href="tel:+918810606010">+91 8810606010</a></h3>
                    <h4>Follow us on</h4>
                    <ul className="list-inline">
                        <li><a href="#"><img src="https://www.successmantra.in/landing-pages-assets-2121/images/pepsi.png" alt="Pepsi" /></a></li>
                        <li><a href="#"><img src="https://www.successmantra.in/landing-pages-assets-2121/images/fb.png" alt="Facebook" /></a></li>
                        <li><a href="#"><img src="https://www.successmantra.in/landing-pages-assets-2121/images/jd.png" alt="JustDial" /></a></li>
                        <li><a href="#"><img src="https://www.successmantra.in/landing-pages-assets-2121/images/icongreen.png" alt="Green" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>



    
<script dangerouslySetInnerHTML={{__html:"\r\n\r\n        $(document).ready(function () {\r\n\r\n            $(\"#mymenubtn\").click(function () {\r\n\r\n                $(\"#mymenuNavbar\").slideToggle(\"slow\");\r\n\r\n            });\r\n\r\n        });\r\n\r\n    "}} />


    
<script src="./js/custom.js" />






    
{/*  Initialization for AOS and WOW.js  */}

    
{/*  <script>
        AOS.init();
        new WOW().init();
    </script>  */}



<script src="/common-lead-form.js" defer="" />


      </LegacyPageContent>
    </>
  );
}
