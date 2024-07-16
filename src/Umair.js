import React from 'react';
import "./App.css"

const Affidavit = () => {
  return (
    <>
      

        <div className="container border p-4 my-4">
          <h1>AFFIDAVIT</h1>
          <div className="content">
            <p>
              I,{' '}
              <span className="underline-input" style={{ fontWeight: 'bold' }}>
                Umair Asghar
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; S/o{' '}
              <span className="underline-input" style={{ fontWeight: 'bold' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;Muhammad Asghar
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; resident of &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="underline" style={{ width: 'auto', fontWeight: 'bold' }}>
                Dhok Hayal&nbsp;&nbsp;&nbsp;Post Office Dhok Lona&nbsp;&nbsp;&nbsp;District
                Jehlum
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp; do hereby solemnly affirm and declare as under:
            </p>
            <div className="section">
              <p>
                1. That I am residing in district Jehlum since{' '}
                <span className="underline-input" style={{ fontWeight: 'bold' }}>
                  Birth
                </span>
                .
              </p>
              <p>2. That I never migrated to India on or after 1<sup>st</sup> March 1947.</p>
              <p>
                3. That the particulars furnished by me in the application forms for the grant of
                domicile certificate are correct.
              </p>
              <p>
                4. That, I neither obtained nor shall obtain the same from any other district of
                Pakistan after having been granted this one.
              </p>
            </div>
            <p>
              I, further affirm and declare that the contents of the above affidavit are true and
              correct to the best of my knowledge and belief and nothing has been concealed there
              from.
            </p>
            <div className="signature">
              <div>
                <p>
                  Deponent.{' '}
                  <span className="underline-input" style={{ fontWeight: 'bold' }}>
                    Umair Asghar
                  </span>
                </p>
              </div>
              <div>
                <p>
                  NIC NO.{' '}
                  <span className="underline-input" style={{ fontWeight: 'bold' }}>
                    3730161227883
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>


    </>
  );
};

export default Affidavit;
