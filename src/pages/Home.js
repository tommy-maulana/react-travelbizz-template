import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div id="tb-wrapper">
                <div id="tb-page">

                <header id="tb-header-section" class="sticky-banner">
                    <div class="container">
                        <div class="nav-header">
                            <a href="#" class="js-tb-nav-toggle tb-nav-toggle dark"><i></i></a>
                            <h1 id="tb-logo"><a href="index.html"><i class="icon-airplane"></i>Travel</a></h1>
                            {/* <!-- START #tb-menu-wrap --> */}
                            <nav id="tb-menu-wrap">
                                <ul class="sf-menu" id="tb-primary-menu">
                                    <li class="active"><a href="#">Home</a></li>
                                    <li><a class="js-scroll-trigger" href="#tb-tours">Tours</a></li>
                                    <li><a class="js-scroll-trigger" href="#why_us">Why Choose Us</a></li>
                                    <li><a class="js-scroll-trigger" href="#tb-services">Services</a></li>
                                    <li><a class="js-scroll-trigger" href="#tb-destination">Places</a></li>
                                    <li><a class="js-scroll-trigger" href="#tb-team">Guide's</a></li>
                                    <li><a class="js-scroll-trigger" href="#tb-partner">Partners</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>

                {/* <!-- end:header-top --> */}
            
                <div class="tb-hero">
                    <div class="tb-overlay"></div>
                    <div class="tb-cover" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(images/cover_bg_1.jpeg)"}}>
                        <div class="desc">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-5 col-md-5">
                                        <div class="tabulation animate-box">

                                        {/* <!-- Nav tabs --> */}
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li role="presentation" class="active">
                                                <a href="#flights" aria-controls="flights" role="tab" data-toggle="tab">Flights</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#hotels" aria-controls="hotels" role="tab" data-toggle="tab">Hotels</a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#packages" aria-controls="packages" role="tab" data-toggle="tab">Packages</a>
                                            </li>
                                        </ul>

                                        {/* <!-- Tab panes --> */}
                                            <div class="tab-content">
                                            <div role="tabpanel" class="tab-pane active" id="flights">
                                                <div class="row">
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <div class="input-field">
                                                            <label>From:</label>
                                                            <input type="text" class="form-control" placeholder="Los Angeles, USA"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <div class="input-field">
                                                            <label>To:</label>
                                                            <input type="text" class="form-control" placeholder="Tokyo, Japan"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label>Check In:</label>
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label>Check Out:</label>
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 mt">
                                                        <section class="no-pd">
                                                            <label>Class:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>Economy</option>
                                                                <option value="economy">Economy</option>
                                                                <option value="first">First</option>
                                                                <option value="business">Business</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <section class="no-pd">
                                                            <label>Adult:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <section class="no-pd">
                                                            <label>Children:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <input type="submit" class="btn btn-primary btn-block" value="Search Flight" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div role="tabpanel" class="tab-pane" id="hotels">
                                                <div class="row">
                                                    <div class="col-xxs-12 col-xs-12 mt">
                                                        <div class="input-field">
                                                            <label>City:</label>
                                                            <input type="text" class="form-control" placeholder="Los Angeles, USA"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label>Return:</label>
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label>Check Out:</label>
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 mt">
                                                        <section class="no-pd">
                                                            <label>Rooms:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="economy">1</option>
                                                                <option value="first">2</option>
                                                                <option value="business">3</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <section class="no-pd">
                                                            <label>Adult:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <section class="no-pd">
                                                            <label>Children:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <input type="submit" class="btn btn-primary btn-block" value="Search Hotel" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div role="tabpanel" class="tab-pane" id="packages">
                                                <div class="row">
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <div class="input-field">
                                                            <label>City:</label>
                                                            <input type="text" class="form-control" placeholder="Los Angeles, USA"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <div class="input-field">
                                                            <label>Destination:</label>
                                                            <input type="text" class="form-control" placeholder="Tokyo, Japan"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label>Departs:</label>
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt alternate">
                                                        <div class="input-field">
                                                            <label>Return:</label>
                                                            <input type="text" class="form-control" placeholder="mm/dd/yyyy"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12 mt">
                                                        <section class="no-pd">
                                                            <label>Rooms:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="economy">1</option>
                                                                <option value="first">2</option>
                                                                <option value="business">3</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <section class="no-pd">
                                                            <label>Adult:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xxs-12 col-xs-6 mt">
                                                        <section class="no-pd">
                                                            <label>Children:</label>
                                                            <select class="cs-select cs-skin-border">
                                                                <option value="" disabled selected>1</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                            </select>
                                                        </section>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <input type="submit" class="btn btn-primary btn-block" value="Search Packages" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="desc2 animate-box">
                                        <div class="col-sm-7 col-md-7 pl-50">
                                            <p>Welcome to <a href="" class="tb-site-name"> TravelBizz</a></p>
                                            <h2>Let's Discover The World Together</h2>
                                            <h3>More Than 1200 Destinations.</h3>
                                            <span class="price">Staring From $499</span>
                                            {/* <!-- <p><a class="btn btn-primary btn-lg" href="#">Get Started</a></p> --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* <!-- Tours Section --> */}
                <section id="tb-tours" class="tb-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Hot Tours</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6 tb-tours animate-box" data-animate-effect="fadeIn">
                                <div><img src="images/place-1.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
                                    <div class="desc">
                                        <span></span>
                                        <h3>Dubai</h3>
                                        <span>3 nights + Flight 5*Hotel</span>
                                        <span class="price">$1,000</span>
                                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 tb-tours animate-box" data-animate-effect="fadeIn">
                                <div><img src="images/place-2.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
                                    <div class="desc">
                                        <span></span>
                                        <h3>Philippines</h3>
                                        <span>4 nights + Flight 5*Hotel</span>
                                        <span class="price">$1,000</span>
                                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 tb-tours animate-box" data-animate-effect="fadeIn">
                                <div><img src="images/place-3.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
                                    <div class="desc">
                                        <span></span>
                                        <h3>Rome</h3>
                                        <span>2 nights + Flight 4*Hotel</span>
                                        <span class="price">$1,000</span>
                                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 tb-tours animate-box" data-animate-effect="fadeIn">
                                <div><img src="images/place-4.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
                                    <div class="desc">
                                        <span></span>
                                        <h3>France</h3>
                                        <span>2 nights + Flight 4*Hotel</span>
                                        <span class="price">$1,000</span>
                                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 tb-tours animate-box" data-animate-effect="fadeIn">
                                <div><img src="images/place-5.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
                                    <div class="desc">
                                        <span></span>
                                        <h3>Paris</h3>
                                        <span>2 nights + Flight 4*Hotel</span>
                                        <span class="price">$1,000</span>
                                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6 tb-tours animate-box" data-animate-effect="fadeIn">
                                <div><img src="images/place-6.jpg" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive" />
                                    <div class="desc">
                                        <span></span>
                                        <h3>Itlay</h3>
                                        <span>2 nights + Flight 4*Hotel</span>
                                        <span class="price">$1,000</span>
                                        <a class="btn btn-primary btn-outline" href="#">Book Now <i class="icon-arrow-right22"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 text-center animate-box">
                                <p class="tours-button"><a class="btn btn-primary btn-outline btn-lg" href="#">See All Offers <i class="icon-arrow-right22"></i></a></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--Why Choose Us--> */}
                <section class="why-bg" id="why_us">
                    <div class="tb-overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3 class="text-white">Why Choose TravelBizz</h3>
                                <p class="text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            {/* <!-- single travel start --> */}
                            <div class="col-md-4 col-sm-6">
                                <div class="single-travel">
                                    <div class="media">
                                        <div class="media-left media-middle travel-number">
                                            <span>01.</span>
                                        </div>
                                        <div class="media-body travel-content">
                                            <h4>Travel Arrangements</h4>
                                            <p>Lorem ipsum dolor sit amet adiu piscing elit sed diam nonum euismo tincidunt ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- single travel end --> */}

                            <div class="col-md-4 col-sm-6">
                                <div class="single-travel">
                                    <div class="media">
                                        <div class="media-left media-middle travel-number">
                                            <span>02.</span>
                                        </div>
                                        <div class="media-body travel-content">
                                            <h4>Cheap Flights</h4>
                                            <p>Lorem ipsum dolor sit amet adiu piscing elit sed diam nonum euismo tincidunt ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- single travel end --> */}

                            <div class="col-md-4 col-sm-6">
                                <div class="single-travel">
                                    <div class="media">
                                        <div class="media-left media-middle travel-number">
                                            <span>03.</span>
                                        </div>
                                        <div class="media-body travel-content">
                                            <h4>Hand-picked tours</h4>
                                            <p>Lorem ipsum dolor sit amet adiu piscing elit sed diam nonum euismo tincidunt ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- single travel end --> */}

                            <div class="col-md-4 col-sm-6">
                                <div class="single-travel">
                                    <div class="media">
                                        <div class="media-left media-middle travel-number">
                                            <span>04.</span>
                                        </div>
                                        <div class="media-body travel-content">
                                            <h4>Privet Guide</h4>
                                            <p>Lorem ipsum dolor sit amet adiu piscing elit sed diam nonum euismo tincidunt ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- single travel end --> */}

                            <div class="col-md-4 col-sm-6">
                                <div class="single-travel">
                                    <div class="media">
                                        <div class="media-left media-middle travel-number">
                                            <span>05.</span>
                                        </div>
                                        <div class="media-body travel-content">
                                            <h4>Special Activities</h4>
                                            <p>Lorem ipsum dolor sit amet adiu piscing elit sed diam nonum euismo tincidunt ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- single travel end --> */}

                            <div class="col-md-4 col-sm-6">
                                <div class="single-travel">
                                    <div class="media">
                                        <div class="media-left media-middle travel-number">
                                            <span>06.</span>
                                        </div>
                                        <div class="media-body travel-content">
                                            <h4>Best Price Guarantee</h4>
                                            <p>Lorem ipsum dolor sit amet adiu piscing elit sed diam nonum euismo tincidunt ut.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> {/* <!-- single travel end --> */}
                        </div>
                    </div>
                </section>

                {/* <!-- About-us Section --> */}
                <section class="about-us" id="about_us">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="group-title animate-box">
                                    <h2 class="main-title">We Are TravelBizz</h2>
                                </div>
                                <div class="about-us-wrapper">
                                    <p class="text">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat uisas aute
                                        irure dolor ullamco laboris nisi in reprehenderit.</p>
                                    <div class="group-list">
                                        <ul class="list-unstyled about-us-list">
                                            <li>
                                                <p class="text">- First Class Flights</p>
                                            </li>
                                            <li>
                                                <p class="text">- 5 Star Accommodations</p>
                                            </li>
                                            <li>
                                                <p class="text">- Inclusive Packages</p>
                                            </li>
                                            <li>
                                                <p class="text">- Latest Model Vehicles</p>
                                            </li>
                                        </ul>
                                        <ul class="list-unstyled about-us-list">
                                            <li>
                                                <p class="text">- Handpicked Hotels</p>
                                            </li>
                                            <li>
                                                <p class="text">- Accesibility managment</p>
                                            </li>
                                            <li>
                                                <p class="text">- 10 Languages available</p>
                                            </li>
                                            <li>
                                                <p class="text">- +120 Premium city tours</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="group-button">
                                        <a href="tour-result.html" class="btn btn-primary btn-outline">purchase now</a>
                                        <a href="about-us.html" class="btn btn-primary btn-outline">read more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="about-us-image">
                                    <img src="images/about-us-1.jpg" alt="" class="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Services Section --> */}
                <section id="tb-services" class="tb-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Our Services</h3>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="serviceBox">
                                    <div class="service-icon"><i class="fa fa-globe"></i></div>
                                    <h3 class="title">AMAZING TOUR</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="serviceBox">
                                    <div class="service-icon"><i class="fa fa-rocket"></i></div>
                                    <h3 class="title">CRUISES BOOKING</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="serviceBox">
                                    <div class="service-icon"><i class="fa fa-rocket"></i></div>
                                    <h3 class="title">TICKET BOOKING</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="serviceBox">
                                    <div class="service-icon"><i class="fa fa-globe"></i></div>
                                    <h3 class="title">FLIGHT BOOKING</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="serviceBox">
                                    <div class="service-icon"><i class="fa fa-rocket"></i></div>
                                    <h3 class="title">HOTEL BOOKING</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-6">
                                <div class="serviceBox">
                                    <div class="service-icon"><i class="fa fa-rocket"></i></div>
                                    <h3 class="title">RAIL BOOKING</h3>
                                    <p class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur, deleniti eaque excepturi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* <!-- Destination Section --> */}
                <div id="tb-destination">
                    <div class="tour-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <ul id="tb-destination-list" class="animate-box">
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-1.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Los Angeles</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-2.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Hongkong</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-3.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Italy</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-4.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Philippines</h2>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-5.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Japan</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-half text-center">
                                        <div class="title-bg">
                                            <div class="case-studies-summary">
                                                <h2>Most Popular Destinations</h2>
                                                <span><a href="#">View All Destinations</a></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-6.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Paris</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-7.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Singapore</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-8.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Madagascar</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-9.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Egypt</h2>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="one-forth text-center" style={{backgroundImage: 'url(images/place-10.jpg)'}}>
                                        <a href="#">
                                            <div class="case-studies-summary">
                                                <h2>Indonesia</h2>
                                            </div>
                                        </a>
                                    </li>
                                </ul>		
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Facts Section--> */}
                <section class="facts">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="group-title animate-box">
                                    <h2 class="main-title">Facts of TravelBizz</h2>
                                </div>
                                <div class="fact-wrapper">
                                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, by injected humour. </p>
                                    <div class="fact-list">
                                        <ul class="list-unstyled">
                                            <li>
                                                <p class="text">- 1456 flight in the world.</p>
                                            </li>
                                            <li>
                                                <p class="text">- 2385 happy customer enjoy jouneys with Explooer.</p>
                                            </li>
                                            <li>
                                                <p class="text">- 356 best destinational we explore.</p>
                                            </li>
                                            <li>
                                                <p class="text">- 2345 package tours every year.</p>
                                            </li>
                                            <li>
                                                <p class="text">- top 10 best tourism services.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <a href="#" class="btn btn-primary btn-outline">read more</a>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="fact-image-wrapper">
                                    <div class="fact-image">
                                        <a href="#" class="icons icons-1">
                                            <i class="fas fa-plane"></i>
                                        </a>
                                        <img src="images/area-1.png" alt="" class="img-responsive" />
                                    </div>
                                    <div class="fact-image">
                                        <a href="#" class="icons icons-2">
                                            <i class="fa fa-map-marker"></i>
                                        </a>
                                        <img src="images/area-2.png" alt="" class="img-responsive" />
                                    </div>
                                    <div class="fact-image">
                                        <a href="#" class="icons icons-3">
                                            <i class="fa fa-users"></i>
                                        </a>
                                        <img src="images/area-3.png" alt="" class="img-responsive" />
                                    </div>
                                    <div class="fact-image">
                                        <a href="#" class="icons icons-4">
                                            <i class="fa fa-suitcase"></i>
                                        </a>
                                        <img src="images/area-4.png" alt="" class="img-responsive" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Team Section--> */}
                {/* <section class="our_team tb-section-gray" id="tb-team"> */}
                    {/* <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Our Guide</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-1.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-2.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Kristiana</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-3.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Kristiana</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-4.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Kristiana</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </section> */}

                {/* <!-- Testimonials Section--> */}
                <section class="our_testimonials" id="tb-team">
                <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3 class="text-white">Our Guide</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3 class="text-white">Clients View</h3>
                                <p class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                            </div>
                        </div>
                    </div> */}
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-1.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Williamson</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-2.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Kristiana</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-3.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Kristiana</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="col-md-3 col-sm-6">
                                <div class="our-team">
                                    <div class="team-img">
                                        <img src="images/tm-4.jpg" alt="team-img" />
                                        <div class="social">
                                            <ul>
                                                <li><a href="#" class="fab fa-facebook"></a></li>
                                                <li><a href="#" class="fab fa-twitter"></a></li>
                                                <li><a href="#" class="fab fa-linkedin"></a></li>
                                                <li><a href="#" class="fab fa-skype"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="team-content">
                                        <h3 class="title">Kristiana</h3>
                                        <span class="post">Tour Guide</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>

                {/* <!-- Our Partners Section--> */}
                <section class="our_partner tb-section-gray text-center" id="tb-partner">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Trusted Partners</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-md-2 col-sm-4">
                                <div class="op_img">
                                    <img src="images/p-1.jpg" alt="our_partner_img" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="op_img">
                                    <img src="images/p-2.jpg" alt="our_partner_img" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="op_img">
                                    <img src="images/p-3.jpg" alt="our_partner_img" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="op_img">
                                    <img src="images/p-4.jpg" alt="our_partner_img" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="op_img">
                                    <img src="images/p-5.jpg" alt="our_partner_img" />
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-4">
                                <div class="op_img">
                                    <img src="images/p-6.jpg" alt="our_partner_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Footer Section--> */}
                <footer>
                    <div class="footer-main">
                        <div class="container">
                            <div class="footer-main-wrapper">
                                <a href="index.html" class="logo-footer">
                                    TravelBizz
                                </a>
                                <div class="row">
                                        <div class="col-md-3 col-xs-12 col-sm-6">
                                            <div class="contact-us-widget widget">
                                                <div class="title-widget">contact us</div>
                                                <div class="content-widget">
                                                    <div class="info-list">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <i class="icons fa fa-map-marker"></i>
                                                                <a href="#" class="link">132, My Street, Kingston, New York 12401</a>
                                                            </li>
                                                            <li>
                                                                <i class="icons fa fa-phone"></i>
                                                                <a href="#" class="link">270 - 188 - 6026</a>
                                                            </li>
                                                            <li>
                                                                <i class="icons fa fa-envelope"></i>
                                                                <a href="#" class="link">domain@expooler.com</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="form-email">
                                                        <p class="text">Sign up for our mailing list to get latest updates and offers.</p>
                                                        <form action="index.html">
                                                            <div class="input-group">
                                                                <input type="text" placeholder="Email address" class="form-control form-email-widget" />
                                                                <span class="input-group-btn">
                                                                    <button type="submit" class="btn-email">✔</button>
                                                                </span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-12 col-sm-6">
                                            <div class="explore-widget widget">
                                                <div class="title-widget">explore</div>
                                                <div class="content-widget">
                                                    <ul class="list-unstyled">
                                                        <li>
                                                            <a href="#" class="link">Tour Singapore City</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Manila City</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour New York City</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Sanghai City</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Hongkong City</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Tokyo City</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-12 col-sm-6">
                                            <div class="top-deals-widget widget">
                                                <div class="title-widget">top deals</div>
                                                <div class="content-widget">
                                                    <ul class="list-unstyled">
                                                        <li>
                                                            <a href="#" class="link">Tour Packages Singapore</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Packages Manila</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Packages New York</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Packages Sanghai</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Packages Hongkong</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="link">Tour Packages Tokyo</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-xs-12 col-sm-6">
                                            <div class="destination-widget widget">
                                                <div class="title-widget">Destination</div>
                                                <div class="content-widget">
                                                    <ul class="list-unstyled list-inline">
                                                        <li>
                                                            <a href="#" class="thumb">
                                                                <img src="images/gallery-01.jpg" alt="" class="img-responsive" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="thumb">
                                                                <img src="images/gallery-02.jpg" alt="" class="img-responsive" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="thumb">
                                                                <img src="images/gallery-03.jpg" alt="" class="img-responsive" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="thumb">
                                                                <img src="images/gallery-04.jpg" alt="" class="img-responsive" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="thumb">
                                                                <img src="images/gallery-05.jpg" alt="" class="img-responsive" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" class="thumb">
                                                                <img src="images/gallery-06.jpg" alt="" class="img-responsive" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                
                {/* <!-- Copyright Section --> */}
                <div class="copyright1">
                    <div class="container">
                        <div class="row"> 
                            <div class="col-md-6 col-xs-12">
                                <div class="bottom_footer_info">
                                    <p>Copyright &copy; 2018-2020. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-12">
                                <div class="bottom_footer_logo text-right">
                                    <ul class="list-inline">
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-cc-paypal"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-cc-visa"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-cc-mastercard"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-cc-discover"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-apple-pay"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            

            </div>
            {/* <!-- END tb-page --> */}

            </div>
            {/* <!-- END tb-wrapper --> */
        }</div>
        )
    }
}

export default Home;