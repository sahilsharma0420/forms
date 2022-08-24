import React, { useState, useEffect } from "react";
import "./Form3.css";
function Form3() {
  const Services = [
    { id: "1", name: "Site Survey" },
    { id: "2", name: "Kitchen Installation" },
    { id: "3", name: "Wardrobe Installation" },
    { id: "4", name: "Product Service" },
  ];
  const drawing = [
    { id: "1", servicesId: "1", name: "Upload pdf " },
    { id: "2", servicesId: "2", name: "Upload dxf" },
    
  ];
  const Completion_target = [
    { id: "1", servicesId: "1", name: "Expected start Date" },
    { id: "2", servicesId: "2", name: "Expected End Date" },
  ];
  const Working_hours = [
    { id: "1", servicesId: "1", name: "Start time " },
    { id: "2", servicesId: "2", name: "End Time" },
    { id: "3", servicesId: "3", name: "Break start Time" },
    { id: "4", servicesId: "4", name: "Break End Time" },
  ];
  const Site_Condition = [
    { id: "1", servicesId: "1", name: "Renovation Site" },
    { id: "2", servicesId: "2", name: "New site" },
    { id: "5", servicesId: "2", name: "lockable" },
    { id: "3", servicesId: "3", name: "Upload Images" },
    { id: "6", servicesId: "3", name: "Electricity" },
    { id: "4", servicesId: "4", name: "Stay in Night" },
    { id: "9", servicesId: "4", name: "Washroom" },
    { id: "8", servicesId: "4", name: "Drinking Water" },
    { id: "7", servicesId: "4", name: "Upload Videos" },
  ];
  const Type_of_products = [
    { id: "1", servicesId: "1", name: "Assembled" },
    { id: "2", servicesId: "2", name: "Flat Pack" },
    { id: "5", servicesId: "3", name: "Mixed but machine" },
    { id: "3", servicesId: "3", name: "Upload Images" },
    { id: "6", servicesId: "4", name: "Mixed and Incomplete/No Machined" },
    { id: "4", servicesId: "4", name: "Hinge Drill" },
    { id: "9", servicesId: "4", name: "Channel Drill" },
    { id: "8", servicesId: "4", name: "Accessory Drill" },
    { id: "7", servicesId: "4", name: "Joinery Drill" },
    { id: "10", servicesId: "4", name: "Machining required on site" },
  ];
  const Work_phase = [
    { id: "1", servicesId: "1", name: "1" },
    { id: "2", servicesId: "2", name: "2" },
    { id: "3", servicesId: "3", name: "3" },
    { id: "4", servicesId: "4", name: "4" },
  ];
  const Phase_work_details = [
    { id: "1", servicesId: "1", name: "Carcass Fixing" },
    { id: "2", servicesId: "2", name: "Shutter fixing" },
    { id: "3", servicesId: "3", name: "Light fixing" },
    { id: "4", servicesId: "4", name: "Appliance fixing" },
  ];

  const [services, setservices] = useState([]);
  const [draw, setdraw] = useState([]);
  const [completion, setcompletion] = useState([]);
  const [working, setworking] = useState([]);
  const [site, setsite] = useState([]);
  const [type, settype] = useState([]);
  const [work, setwork] = useState([]);
  const [phase, setphase] = useState([]);
  const [a,seta]=useState(1);
  useEffect(() => {
    setservices(Services);
  }, []);
  const handleservice = (id) => {
   const a=id;
    const dt = drawing.filter((x) => x.servicesId === id);
    const dt1 = Completion_target.filter((x) => x.servicesId === id);
    const dt2 = Working_hours.filter((x) => x.servicesId === id);
    const dt3 = Site_Condition.filter((x) => x.servicesId === id);
    const dt4 = Type_of_products.filter((x) => x.servicesId === id);
    const dt5 = Work_phase.filter((x) => x.servicesId === id);
    const dt6 = Phase_work_details.filter((x) => x.servicesId === id);
    seta(a);
    setdraw(dt);
    setcompletion(dt1);
    setworking(dt2);
    setsite(dt3);
    settype(dt4);
    setwork(dt5);
    setphase(dt6);

  };
  return (
<>
<center><h3>Enquiry form</h3></center>
    <center>
    <div className="form3 ">
  

    <div className="form3row">
      <div className="form3col">
        <p>Service type</p>
   <select  onChange={(e) => handleservice(e.target.value)}>
          <option className="outeroption" value="0">Select Services</option>
          {services && services !== undefined
            ? services.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>
      </div>

      <div className="form3col">
        <p>Drawings</p>
        
       {a=="1"||a=="2"? <select>
          <option className="outeroption" value="1">Select drawing</option>
  
          {draw && draw !== undefined
            ? draw.map((ctr, index) => {
                return (
                  <>
               
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                  </>  );
              })
            : "NO Country"}
        </select>:<input type="text" placeholder="Enter the Drawing values"/>}

      </div>
      </div>
 
     <div className="form3row">
      <div className="form3col">
        <p>Face Area(SqFt)</p>
        <input className="inputclass" type="text" placeholder="Enter the face area value" />
      </div>
      <div className="form3col">
        <p>Floating Shelf</p>
        <input className="inputclass"  type="text" placeholder="No. of floating shelf" />
      </div>
      </div>
      <div className="form3row">
      <div className="form3col">
        <p>Spot Light(Nos)</p>
        <input className="inputclass"  type="text" placeholder="No.of Spot Light" />
      </div>
      <div className="form3col">
        <p>Strip Light(Nos)</p>
        <input className="inputclass" type="text" placeholder="No of Strip Light" />
      </div>
      </div>
      <div className="form3row">
      <div className="form3col">
        <p>Completion Target</p>
       {a=="1"||a=="2"? <select>
          <option className="outeroption" value="0">Select Completion_target</option>
          {completion && completion !== undefined
            ? completion.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>:<input type="text" placeholder="Enter the Completion Target"/>}
      </div>
      <div className="form3col">
        <p>Working Hours</p>
        <select>
          <option className="outeroption" value="0">Select Working_hours</option>
          {working && working !== undefined
            ? working.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>
      </div>
      </div>
      <div className="form3row">
      <div className="form3col">
        <p>Site Condition</p>
        <select>
          <option className="outeroption" value="0">Select Site_Condition</option>
          {site && site !== undefined
            ? site.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>
      </div>
      <div className="form3col">
        <p>Type of Products</p>
        <select>
          <option className="outeroption" value="0">Select Type_of_products</option>
          {type && type !== undefined
            ? type.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>
      </div>
      </div>
      <div className="form3row">
      <div className="form3col">
        <p>Work Phase</p>
        <select>
          <option className="outeroption" value="0">Select Working_hours</option>
          {working && working !== undefined
            ? working.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>
      </div>
      <div className="form3col">
        <p>Phase Work Details</p>
        <select>
          <option className="outeroption" value="0">Select Work_phase</option>
          {work && work !== undefined
            ? work.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "NO Country"}
        </select>
      </div>
      </div>
      <div className="form3row">
      <div className="form3col">
        <p>Locality</p>
        <input className="inputclass" type="text" placeholder="Enter your locality" />
      </div>
      <div className="form3col">
        <p>Pin Code Of Locality</p>
        <input className="inputclass" type="text" placeholder="Enter the pin code" />
      </div>
      </div>

    </div>
    </center>
    </>
  );
 
}

export default Form3;
