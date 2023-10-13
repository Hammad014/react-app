import React from 'react'

export interface FooterMenuData {
    p0: string;
    p: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
  }
  
  interface FooterMenusProps {
    footMenus: FooterMenuData[];
  }
  
  const FooterMenus: React.FC<FooterMenusProps> = ({ footMenus }) => {
    return (
        <>
      <ul className='d-flex flex-wrap' style={{listStyleType: 'none', padding: 0, justifyContent:"center" }}>
        {footMenus.map((menu, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
           
            <ul className='font-fam' style={{lineHeight:"40px", listStyleType: 'none', padding: 0, marginLeft: '20px' }}>
              <li className='list-head' style={{ marginBottom: '5px' }}>{menu.p0}</li>
              <br/>
              <a href='#'><li style={{ marginBottom: '5px' }}>{menu.p}</li></a>
              <a href='#'><li style={{ marginBottom: '5px' }}>{menu.p1}</li></a>
              <a href='#'><li style={{ marginBottom: '5px' }}>{menu.p2}</li></a>
              <a href='#'><li style={{ marginBottom: '5px' }}>{menu.p3}</li></a>
              <a href='#'><li style={{ marginBottom: '5px' }}>{menu.p4}</li></a>
              <a href='#'><li style={{ marginBottom: '5px' }}>{menu.p5}</li></a>
            </ul>
          </li>
        ))}
      </ul>
      <br/>
      <br/>
      <br/>
      <br/>


      <div className='foot-background d-flex align-items-center m-auto justify-center flex-wrap'>
    
    <div className='foot-others d-flex align-items-center'>
    <img style={{width:"24px", height:"24px",cursor:"pointer"}} src='/Chevron left.png'/>

    <p className='font-fam'>June 11, 2023<br/><br/>“We are so happy with  quick example text to build on the card title and make up the bulk of the card's content.”<br/><span style={{color:"#98002E", display:"flex",justifyContent:"flex-end"}}>Jesse A.</span></p>
    <img style={{width:"24px", height:"24px",cursor:"pointer"}} src='/Chevron right.png'/>
    </div>
    
    <div className='foot-textarea'>
    <textarea
  style={{ width: "300px", height: "100px", border: "none" }}
  className=""
  placeholder="  Leave a reply..."
></textarea>
 
     <div className='mt-2' style={{ display: 'flex', justifyContent: 'flex-end' }}>
     <button style={{borderRadius:"25px"}} className='d-block w-25'>Post</button>
     </div>
    </div>
      </div>
<br/>
<br/>
<br/>

<div className='d-flex justify-content-center'>
    <img src='/Frame 110.png'/>   
</div>
<br/>
<br/>
<div className='d-flex justify-content-center mt-5'>
<img src='/linked to home logo.png'/>
</div>
<br/>
<br/>
<div className='d-flex m-auto justify-content-center mt-5'>
<div>
    <h5 className='font-fam'>Sales & Support</h5>
    <h1 className='font-fam' style={{color:"#98002E"}}>732.475.7705</h1>
</div>
<div>
    <h5 className='font-fam'>contact@MikeKoenRealtyNJ.com</h5>
    <div className='d-flex pt-2' style={{ gap:"40px"}}>
        <img src='/imagesicons/Facebook (1).png'/>
        <img src='/imagesicons/Vector (3).png'/>
        <img src='/imagesicons/Pinterest.png'/>
        <img src='/imagesicons/Tiktok.png'/>
        <img src='/imagesicons/Youtube (1).png'/>
    </div>
</div>
</div>

<div className='mt-5 mb-5 d-flex flex-wrap justify-content-center font-fam' style={{gap:"30px"}}>
    <a href='#'><p>Privacy Policy</p></a>
    <a href='#'><p>Terms of Use</p></a>
    <a href='#'><p>Site Map</p></a>
    <a href='#'><p>Home</p></a>
    <a href='#'><p style={{marginLeft:"4rem"}}>© 2023 Mike Koen Realty LLC, All rights reserved. | ShoreSite Web Designs LLC</p></a>
</div>

      </>
    );
  };
  


export default FooterMenus