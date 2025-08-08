import React from "react";

import Work, { WorkHero, GallaryList, colorIndex } from ".";

const BROCHURES_DATA = [
  // [
  //   "/",
  //   "/assets/brochuresimg/dostiTest.jpg",
  //   "DOSTI",
  //   "/assets/brochurespdf/Dosti Maple E-Bro_Ver 2_PDF.pdf",
  // ],

  [
    "/",
    "/assets/brochuresimg/gallantwest-01.jpg",
    "Shalimar Corp",
    "/assets/brochurespdf/gallant_west.pdf",
  ],

  [
    "/",
    "/assets/brochuresimg/LOGO_HIRANNANDANI COMUNITY.jpg",
    "HIRANANDANI COMMUNITIES",
    "/assets/brochurespdf/HIRANANDANI COMMUNITY_PDF.pdf",
  ],

  [
    "/",
    "/assets/brochuresimg/LOGO_BROOKFIELD.jpg",
    "BROOKFIELD PROPERTIES",
    "/assets/brochurespdf/BROOKFIELD_PDF.pdf",
  ],

  [
    "/",
    "/assets/brochuresimg/omaxecheck.jpg",
    "OMAXE LIMITED",
    "/assets/brochurespdf/OMAXE_PDF.pdf",
  ],

  [
    "/",
    "/assets/brochuresimg/rajapushpa.jpg",
    "RAJAPUSHPA PROPERTIES",
    "/assets/brochurespdf/Rodas brochure.pdf",
  ],

  [
    "/",
    "/assets/brochuresimg/auris.png",
    "Auris Serenity",
    "/assets/brochurespdf/Auris Serenity brochure.pdf",
  ],
  //   [
  //     "/",
  //     "/assets/brochuresimg/ibs.png",
  //     "Indiabulls Sky Forest",
  //     "/assets/brochurespdf/IBS Bro.pdf",
  //   ],
  //   [
  //     "/",
  //     "/assets/brochuresimg/quantum.png",
  //     "Hiranandani Quantum",
  //     "/assets/brochurespdf/Quantum E-Bro.pdf",
  //   ],

  //   [
  //     "/",
  //     "/assets/brochuresimg/rodas.png",
  //     "Rodas Enclave",
  //     "/assets/brochurespdf/Rodas brochure.pdf",
  //   ],

  [
    "/",
    "/assets/brochuresimg/sheth edmontTest.jpg",
    "SHETH REALTY",
    "/assets/brochurespdf/Sheth Edmont Brochure Digital_PDF.pdf",
  ],
  [
    "/",
    "/assets/brochuresimg/montana.png",
    "Sheth Montana",
    "/assets/brochurespdf/Sheth - Montana Brochure.pdf",
  ],
];
// Indiabulls
// Sheth Creators
// Suyojit
// Peninsula Heights
// Peninsula Heights
// Mani
// Sheth Iris Bay
// Indigo Properties
// Marathon
// Sheth Group
// Anandam
// Anandam
const CAMPAIGN_DATA = [
  ["/", "/assets/shortlistedimg/campain_DOSTI.png", "DOSTI REALTY"],
  ["/", "/assets/shortlistedimg/campain_omaxe.png", "OMAXE LIMITED"],
  ["/", "/assets/shortlistedimg/campain_ajmera.png", "AJMERA REALTY"],
  [
    "/",
    "/assets/shortlistedimg/campain_grokfileld.png",
    "BROOKFIELD PROPERTIES",
  ],

  ["/", "/assets/shortlistedimg/Hiranandani.png", "HIRANANDANI GROUP"],
  ["/", "/assets/shortlistedimg/Omkar.png", "OMKAR DEVELOPERS"],
  ["/", "/assets/shortlistedimg/Vasant Oasis.png", "SHETH REALTY"],
  // ["/", "/assets/shortlistedimg/TOI.png", "The Times of India"],
  ["/", "/assets/shortlistedimg/Alcove.png", "ALCOVE REALTY"],
  ["/", "/assets/shortlistedimg/Omaxe.png", "Omaxe"],
  ["/", "/assets/shortlistedimg/Aurobinda.png", "AURO REALTY"],
  ["/", "/assets/shortlistedimg/Gaurs.png", "GAURSONS INDIA LIMITED"],
  ["/", "/assets/shortlistedimg/IRIS.png", "Sheth Iris"],
  ["/", "/assets/shortlistedimg/Sheth Creators.png", "Sheth Creators"],
  ["/", "/assets/shortlistedimg/Picture7.jpg", "INDIABULLS REAL ESTATE"],
  ["/", "/assets/shortlistedimg/Sheth Creators 2.jpg", "Sheth Creators"],
  ["/", "/assets/shortlistedimg/Picture17.jpg", "SUYOJIT INFRASTRUCTURE"],
  ["/", "/assets/shortlistedimg/Peninsula.png", "Peninsula Heights"],
  ["/", "/assets/shortlistedimg/Picture25.jpg", "MANI GROUP"],
  ["/", "/assets/shortlistedimg/Picture41.jpg", "Sheth Iris Bay"],
  ["/", "/assets/shortlistedimg/Picture44.jpg", "Indigo Properties"],
  ["/", "/assets/shortlistedimg/Picture47.jpg", "MARATHON GROUP"],
  ["/", "/assets/shortlistedimg/Picture50.jpg", "Sheth Group"],
  ["/", "/assets/shortlistedimg/Picture63.jpg", "Anandam"],
  ["/", "/assets/shortlistedimg/Picture20_Pixelate.jpg", "Anandam"],
];

const MEDIA_DATA = [
  ["/", "/assets/newspaperimg/Picture2.jpg", ""],
  ["/", "/assets/newspaperimg/pearl big homes.jpg", ""],
  ["/", "/assets/newspaperimg/Picture22.jpg", ""],
  ["/", "/assets/shortlistedimg/TOI.png", ""],
  ["/", "/assets/newspaperimg/Picture2.jpg", ""],
  ["/", "/assets/newspaperimg/Picture15.jpg", ""],
  ["/", "/assets/newspaperimg/Picture22.jpg", ""],
  ["/", "/assets/newspaperimg/Picture42.jpg", ""],

  ["/", "/assets/newspaperimg/Picture51.jpg", ""],
  ["/", "/assets/newspaperimg/Picture53.jpg", ""],
  ["/", "/assets/newspaperimg/Picture56.jpg", ""],
];

export default function Campaigns(props) {
  return (
    <Work>
      {/* clearly it's top most reign of page */}
      <WorkHero
        title="Campaigns"
        heroCopy="If strategy is your brand’s intellect, then creativity is its persona. We’ll ensure your brand makes instant chemistry with customers, even in an over communicated world."
      />

      <div className="List-container">
        <div className="TitleTextButton app-container branding-title">
          <div className="TitleTextButton-wrapper">
            <div className="TitleTextButton-wrapperSmall">
              <p className="TitleTextButton-text app-text--large">BROCHURES</p>
            </div>
          </div>
        </div>
        <div className="List-wrapper">
          <GallaryList
            parentProp={props}
            gallaryData={BROCHURES_DATA}
            LIST_NAME={"BROCHURES"}
            pageColor={colorIndex[1]}
          />
        </div>
      </div>

      <div className="List-container">
        <div className="TitleTextButton app-container branding-title">
          <div className="TitleTextButton-wrapper">
            <div className="TitleTextButton-wrapperSmall">
              <p className="TitleTextButton-text app-text--large">CAMPAIGNS</p>
            </div>
          </div>
        </div>
        <div className="List-wrapper">
          <GallaryList
            parentProp={props}
            gallaryData={CAMPAIGN_DATA}
            LIST_NAME={"CAMPAIGN"}
            pageColor={colorIndex[1]}
          />
        </div>
      </div>

      <div className="List-container">
        <div className="TitleTextButton app-container branding-title">
          <div className="TitleTextButton-wrapper">
            <div className="TitleTextButton-wrapperSmall">
              <p className="TitleTextButton-text app-text--large">MEDIA</p>
            </div>
          </div>
        </div>
        <div className="List-wrapper">
          <GallaryList
            parentProp={props}
            gallaryData={MEDIA_DATA}
            LIST_NAME={"MEDIA"}
            pageColor={colorIndex[1]}
          />
        </div>
      </div>
    </Work>
  );
}
