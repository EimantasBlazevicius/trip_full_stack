import React from "react";
import { Link } from "react-router-dom";

const Default = () => {
  return (
    <React.Fragment>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Here to Share?</h1>
          <p className="lead font-weight-normal">
            People are waiting for your amazing roudtrip details, guide us
            through the path of great Holiday.
          </p>
          <Link className="btn btn-outline-secondary" to="/login">
            Login to Write
          </Link>
        </div>
      </div>
      <row>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="blog-post col-6 bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5 text-white">Another headline</h2>
              <p className="lead">
                Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir
                grafinio dizaino pasaulyje jau nuo XVI a. pradžios. Lorem Ipsum
                tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas
                atsitiktine tvarka išdėliojo raides atspaudų prese ir tokiu būdu
                sukūrė raidžių egzempliorių. Šis tekstas išliko beveik
                nepasikeitęs ne tik penkis amžius, bet ir įžengė i kopiuterinio
                grafinio dizaino laikus. Jis išpopuliarėjo XX a. šeštajame
                dešimtmetyje, kai buvo išleisti Letraset lapai su Lorem Ipsum
                ištraukomis, o vėliau -leidybinė sistema AldusPageMaker, kurioje
                buvo ir Lorem Ipsum versija.
              </p>
            </div>
          </div>
          <div className="blog-post col-6 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
          </div>
        </div>
      </row>
      <row>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="blog-post col-6 bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">
                Lorem ipsum - tai fiktyvus tekstas naudojamas spaudos ir
                grafinio dizaino pasaulyje jau nuo XVI a. pradžios. Lorem Ipsum
                tapo standartiniu fiktyviu tekstu, kai nežinomas spaustuvininkas
                atsitiktine tvarka išdėliojo raides atspaudų prese ir tokiu būdu
                sukūrė raidžių egzempliorių. Šis tekstas išliko beveik
                nepasikeitęs ne tik penkis amžius, bet ir įžengė i kopiuterinio
                grafinio dizaino laikus. Jis išpopuliarėjo XX a. šeštajame
                dešimtmetyje, kai buvo išleisti Letraset lapai su Lorem Ipsum
                ištraukomis, o vėliau -leidybinė sistema AldusPageMaker, kurioje
                buvo ir Lorem Ipsum versija.
              </p>
            </div>
          </div>
          <div className="blog-post col-6 bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5 text-white">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
          </div>
        </div>
      </row>
    </React.Fragment>
  );
};

export default Default;
