import React, { useState } from "react";
import "../style/table.css";
export default function Table() {
  const dataBases = [
    {
      id: 1,
      first_name: "Staffard",
      last_name: "Bartoszek",
      email: "sbartoszek0@cnn.com",
      gender: "Male",
      ip_address: "144.39.53.170",
    },
    {
      id: 2,
      first_name: "Ailsun",
      last_name: "Pechacek",
      email: "apechacek1@youku.com",
      gender: "Female",
      ip_address: "79.76.251.150",
    },
    {
      id: 3,
      first_name: "Orion",
      last_name: "Bendixen",
      email: "obendixen2@army.mil",
      gender: "Polygender",
      ip_address: "85.237.155.166",
    },
    {
      id: 4,
      first_name: "Ciel",
      last_name: "Moatt",
      email: "cmoatt3@is.gd",
      gender: "Polygender",
      ip_address: "76.9.111.80",
    },
    {
      id: 5,
      first_name: "Thedric",
      last_name: "Calderonello",
      email: "tcalderonello4@state.gov",
      gender: "Male",
      ip_address: "1.226.50.247",
    },
    {
      id: 6,
      first_name: "Letty",
      last_name: "Rothschild",
      email: "lrothschild5@cbslocal.com",
      gender: "Female",
      ip_address: "166.230.23.254",
    },
    {
      id: 7,
      first_name: "Giffie",
      last_name: "Payfoot",
      email: "gpayfoot6@bigcartel.com",
      gender: "Male",
      ip_address: "212.177.39.55",
    },
    {
      id: 8,
      first_name: "Gui",
      last_name: "Bootman",
      email: "gbootman7@sakura.ne.jp",
      gender: "Female",
      ip_address: "190.22.220.152",
    },
    {
      id: 9,
      first_name: "Amby",
      last_name: "Pesterfield",
      email: "apesterfield8@meetup.com",
      gender: "Male",
      ip_address: "128.89.190.217",
    },
    {
      id: 10,
      first_name: "Malorie",
      last_name: "Legendre",
      email: "mlegendre9@cbslocal.com",
      gender: "Female",
      ip_address: "223.59.204.82",
    },
    {
      id: 11,
      first_name: "Osborn",
      last_name: "McGillacoell",
      email: "omcgillacoella@yellowbook.com",
      gender: "Polygender",
      ip_address: "249.202.156.4",
    },
    {
      id: 12,
      first_name: "Hermann",
      last_name: "Staples",
      email: "hstaplesb@forbes.com",
      gender: "Male",
      ip_address: "208.41.228.63",
    },
    {
      id: 13,
      first_name: "Friedrich",
      last_name: "Orry",
      email: "forryc@photobucket.com",
      gender: "Male",
      ip_address: "248.62.114.133",
    },
    {
      id: 14,
      first_name: "Lizzy",
      last_name: "Bollins",
      email: "lbollinsd@livejournal.com",
      gender: "Female",
      ip_address: "131.0.191.106",
    },
    {
      id: 15,
      first_name: "Ellswerth",
      last_name: "Parkisson",
      email: "eparkissone@paypal.com",
      gender: "Male",
      ip_address: "241.165.185.125",
    },
    {
      id: 16,
      first_name: "Harald",
      last_name: "Bowes",
      email: "hbowesf@timesonline.co.uk",
      gender: "Male",
      ip_address: "71.235.67.215",
    },
    {
      id: 17,
      first_name: "Rory",
      last_name: "Jarrell",
      email: "rjarrellg@pinterest.com",
      gender: "Male",
      ip_address: "77.64.214.26",
    },
    {
      id: 18,
      first_name: "Cecilio",
      last_name: "Marmon",
      email: "cmarmonh@pinterest.com",
      gender: "Male",
      ip_address: "145.72.4.196",
    },
    {
      id: 19,
      first_name: "Nerte",
      last_name: "Trassler",
      email: "ntrassleri@lulu.com",
      gender: "Female",
      ip_address: "152.49.94.211",
    },
    {
      id: 20,
      first_name: "Lotta",
      last_name: "Orteu",
      email: "lorteuj@jalbum.net",
      gender: "Female",
      ip_address: "165.208.46.131",
    },
  ];

  const [dataBase, setDatabase] = useState(dataBases);
  return (
    <React.Fragment>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>First_name</th>
            <th>Last_name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP_address</th>
          </tr>
        </thead>
        <tbody>
          {dataBase.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.id}</td>
                <td>{person.first_name}</td>
                <td>{person.last_name}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
                <td>{person.ip_address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
