import React from 'react';
import { useTranslation } from 'react-i18next';

const PreviousPrincipals = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Previous Principals
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">SL No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">Smt. Ramola Nandi, M.A. (Patna) M.Sc (London)</td><td className="border border-gray-300 px-4 py-2">July 1946 to Dec. 1972</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">Smt. Asha Lata Bose, M.A.</td><td className="border border-gray-300 px-4 py-2">1-1-1973 to 31-12-1977</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">Dr. Quraisha Hussain, M.A., Ph.D.</td><td className="border border-gray-300 px-4 py-2">1-1-1978 to Dec 31-12-1984</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">Dr. Mala Ghosh, M.A., Ph.D.</td><td className="border border-gray-300 px-4 py-2">1-1-1985 to 10-10-1995</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">Dr. Sarojini Srivastava, M.Sc., Ph.D.</td><td className="border border-gray-300 px-4 py-2">1-2-1991 to 14-08-1995</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">Sanchalan Samiti , P.U</td><td className="border border-gray-300 px-4 py-2">5-08-1995 to 10 Oct 10-10-1995</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">Dr. Archana Sinha, M.A., Ph.D., D. Lit</td><td className="border border-gray-300 px-4 py-2">11-10-1995 to 20-07-1998</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">Dr. Phullara Sinha, M.A., Ph.D.</td><td className="border border-gray-300 px-4 py-2">21-07-1998 to 30-08-1999</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">9</td><td className="border border-gray-300 px-4 py-2">Dr. Niroj Sinha, M.A., Ph.D.</td><td className="border border-gray-300 px-4 py-2">01-09-1999 to 30-11-2000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">10</td><td className="border border-gray-300 px-4 py-2">Dr. Savitri Sharma, M.A., Ph.D</td><td className="border border-gray-300 px-4 py-2">01-12-2000 to 25-04-2001</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">11</td><td className="border border-gray-300 px-4 py-2">Dr. Manju Rani Sinha, M.A., Ph.D.</td><td className="border border-gray-300 px-4 py-2">26.04.2001 to 30.05.2003</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">12</td><td className="border border-gray-300 px-4 py-2">Dr. Savitri Sharma, M.A., Ph.D.</td><td className="border border-gray-300 px-4 py-2">01.06.2003 to 29.03.2004</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">13</td><td className="border border-gray-300 px-4 py-2">Dr. Chitralekha Verma, M.Sc., Ph.D.</td><td className="border border-gray-300 px-4 py-2">01.03.2004 to 30.06.2004</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">14</td><td className="border border-gray-300 px-4 py-2">Dr. Pushpa Sinha, M.A., Ph.D</td><td className="border border-gray-300 px-4 py-2">01.07.2004 to 31.08.2004</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">15</td><td className="border border-gray-300 px-4 py-2">Dr. Kiran Aryani Mitra, M.Sc., Ph.D</td><td className="border border-gray-300 px-4 py-2">01.09.2004 to 30.06.05</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">16</td><td className="border border-gray-300 px-4 py-2">Prof. Dr. Sukhada Kumari, M.A, Ph.D</td><td className="border border-gray-300 px-4 py-2">01.07.2005 to 02.06.09</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">17</td><td className="border border-gray-300 px-4 py-2">Prof. Dr. Dolly Sinha, M.Sc, Ph.D (IIT, Delhi)</td><td className="border border-gray-300 px-4 py-2">03.06.2009 to 07.05.15</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">18</td><td className="border border-gray-300 px-4 py-2">Prof. Umesh Mishra</td><td className="border border-gray-300 px-4 py-2">07.05.2015 to 11.05.15</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">19</td><td className="border border-gray-300 px-4 py-2">Prof. Dr. Asha Singh</td><td className="border border-gray-300 px-4 py-2">12-05-2015 to 31-10-2016</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">20</td><td className="border border-gray-300 px-4 py-2">Dr. Jaishree Mishra</td><td className="border border-gray-300 px-4 py-2">1-11-2016 to 31-12-2016</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">21</td><td className="border border-gray-300 px-4 py-2">Prof. Dharamshila Prasad</td><td className="border border-gray-300 px-4 py-2">01-01-2017 to 31-10-2017</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">22</td><td className="border border-gray-300 px-4 py-2">Dr. Padmalata Thakur</td><td className="border border-gray-300 px-4 py-2">01-11-2017 to 30-11-2017</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">23</td><td className="border border-gray-300 px-4 py-2">Prof. (Dr.) Shashi Sharma</td><td className="border border-gray-300 px-4 py-2">01-12-2017 to 30-11-2021</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">24</td><td className="border border-gray-300 px-4 py-2">Prof. (Dr.) Namita Kumari</td><td className="border border-gray-300 px-4 py-2">01-12-2021 to 9-Jul-2025</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">25</td><td className="border border-gray-300 px-4 py-2">Prof.(Dr.) Nagendra Prasad Verma</td><td className="border border-gray-300 px-4 py-2">10-Jul-2025 till date</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousPrincipals;
