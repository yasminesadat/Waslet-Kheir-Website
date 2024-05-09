import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ChangePasswordForm from './GenericChangePassword'; 
import Footer from './Footer';

export default function AdminChangePassword(){
   

  const defaultPassword = '123';
  const redirectLink='/Admin';
  
  return (
 
    <div>
     <NavBar/>
     <div style={{marginTop: '7%',minHeight: '100vh'}}>
     <ChangePasswordForm defaultPassword={defaultPassword} redirectLink={redirectLink} />
     </div>
     <Footer/>
        </div>
    );
}