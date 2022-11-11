import Link from "next/link";
import React from "react";
import GoogleMapReact from 'google-map-react';

export default function ({ singleJob }) {

   function calcDays() {
      let timeNow = new Date();
      let postedDate = new Date(singleJob[0].updatedAt);
      return Math.ceil((timeNow - postedDate) / 86400000)
   }

   function tooNormaNum() {
      let re = /k/gi;
      let str = singleJob[0].salary;
      return str.replace(re, " 000");
   }

   const mapLat = singleJob[0].location.lat;
   const mapLng = singleJob[0].location.long;

   const AnyReactComponent = ({ text }) => <div>{text}</div>;

   const SimpleMap = ({ singleJob }) => {
      const defaultProps = {
         center: {
            lat: mapLat,
            lng: mapLng
         },
         zoom: 11
      };

      return (
         <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
               // bootstrapURLKeys={{ key: "" }}
               defaultCenter={defaultProps.center}
               defaultZoom={defaultProps.zoom}
            >
               <AnyReactComponent
                  lat={mapLat}
                  lng={mapLng}
                  text={<svg width="30" height="38" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z" fill="#878D9D" />
                  </svg>}
               />
            </GoogleMapReact>
         </div>
      );
   }

   return (
      <div className="bg-white job-description-wrapper">
         <div className="flex job-detail-body">
            <div className="job-description">
               <div>
                  <div className="separator flex justify-between items-center">
                     <div className="font-bold text-2xl title_text_color mb-2">
                        Job Details
                     </div>
                     <div className="flex items-center pc-share">
                        <div className="flex items-center">
                           <a href="#" className="flex">
                              <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.00016C1 2.5274 2.19391 1.3335 3.66667 1.3335H14.3333C15.8061 1.3335 17 2.5274 17 4.00016V19.9936C17 21.1595 15.609 21.7639 14.7567 20.9682L9.90994 16.4428C9.39761 15.9645 8.60239 15.9645 8.09007 16.4428L3.24327 20.9682C2.39104 21.7639 1 21.1595 1 19.9936V4.00016Z" stroke="#70778B" stroke-width="2" />
                              </svg>
                              <span className="ml-2 text-lg font-normal title_text_color flex">Save to my list</span>
                           </a>
                        </div>
                        <div className="flex ml-6  items-center">
                           <a href="#" className="flex  items-center">
                              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z" fill="#70778B" />
                              </svg>
                              <span className="ml-2 text-lg font-normal title_text_color flex">Share</span>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="flex save-item items-center">
                     <div className="flex  items-center">
                        <a href="#" className="flex  items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 576 512"><path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" fill="#70778B" /></svg>
                           <span className="ml-2 text-lg font-normal title_text_color">Save to my list</span>
                        </a>
                     </div>
                     <div className="flex ml-6  items-center">
                        <a href="#" className="flex  items-center">
                           <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z" fill="#70778B" />
                           </svg>
                           <span className="ml-2 text-lg font-normal title_text_color">Share</span>
                        </a>
                     </div>
                  </div>
                  <button className="apply-btn mt-10 pc-share">
                     Apply now
                  </button>
                  <div className="flex justify-between mt-8">
                     <div className="job-detail-title font-bold title_text_color text-2xl">
                        {singleJob[0].title}
                     </div>
                     <div className="pc-share">
                        <div className="title_text_color text-xl font-bold">
                           € {tooNormaNum()}
                        </div>
                        <div className="title_text_color text-lg font-normal">
                           Brutto, per year
                        </div>
                     </div>
                  </div>
                  <div className="flex mt-1 justify-between items-center">
                     <div className="text-lg font-normal posted-date-text">
                        Posted {calcDays()} days ago
                     </div>
                     <div className="sellery-div">
                        <div className="title_text_color text-lg font-normal">
                           Brutto, per year
                        </div>
                        <div className="title_text_color text-xl font-bold">
                           € {tooNormaNum()}
                        </div>
                     </div>
                  </div>
                  <div className="mt-2 text-lg font-normal title_text_color pre-vrap">
                     {singleJob[0].description}
                  </div>
                  <button className="mt-10 apply-btn">
                     Apply now
                  </button>
                  <div className="mt-20 font-bold text-2xl title_text_color separator pb-2">
                     Additional info
                  </div>
                  <div>
                     <div className="text-lg font-normal title_text_color mt-4">
                        Employment type
                     </div>
                     <div className="flex mt-2">
                        {singleJob[0].employment_type.map(jobU =>
                           <div key={jobU.employment_type} className="employment-item mr-2">
                              {jobU}
                           </div>
                        )}
                     </div>
                     <div className="text-lg font-normal title_text_color mt-5">
                        Benefits
                     </div>
                     <div className="flex mt-2">
                        {singleJob[0].benefits.map(benefU =>
                           <div key={benefU.benefits} className="benefit-item mr-2">
                              {benefU}
                           </div>
                        )}
                     </div>
                  </div>
                  <div className="mt-20 font-bold text-2xl title_text_color separator pb-2">
                     Attached images
                  </div>
                  <div className="flex img-wrapper">
                     {singleJob[0].pictures.map(img =>
                        <img key={img.pictures} className="mr-2 mt-5 job-img object-cover rounded-lg" src={img} alt="Company image" />
                     )}

                  </div>
               </div>
            </div>
            <div className="mt-20 font-bold text-2xl title_text_color separator pb-2 contacts-title">
               Contacts
            </div>
            <div className="address-wrapper ml-20 ">
               <div className="contacts-wrapper relative">
                  <div className="zindex font-bold text-xl job-name-color">
                     {singleJob[0].name}
                  </div>
                  <svg className="darck-circle" width="196" height="261" viewBox="0 0 196 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="59.5" cy="124.5" r="136.5" fill="#202336" />
                  </svg>
                  <div className="zindex">
                     <div className="flex mt-2 items-center">
                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z" fill="#878D9D" />
                        </svg>
                        <div className="small_text_color ml-2 text-lg font-normal address-contacts-color">{singleJob[0].address}</div>
                     </div>
                  </div>
                  <div className="zindex text-lg font-normal address-contacts-color mt-2">
                     {singleJob[0].phone}
                  </div>
                  <div className="zindex text-lg font-normal address-contacts-color mt-2">
                     {singleJob[0].email}
                  </div>
               </div>
               <div className="map-wrapper">
                  <SimpleMap />
               </div>
            </div>
         </div>
         <div className="mt-24 ml-24 back-wraper">
            <Link href="/" className="flex items-center back-btn">
               <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z" fill="#384564" />
               </svg>
               <span className="ml-5 text-xs font-semibold title_text_color">RETURN TO JOB BOARD</span>
            </Link>
         </div>
      </div>
   )
}

export async function getServerSideProps(context) {
   const response = await fetch(`https://api.json-generator.com/templates/ZM1r0eic3XEy/data?${context.params.id}&access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`)
   const job = await response.json();
   const singleJob = await job.filter(ji => context.params.id == ji.id);

   return {
      props: { singleJob }, // will be passed to the page component as props
   }
}

