
 import React from 'react' ;
 /* import { useEffect, useState } from "react";
 import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; */
import "../App.css";
//import { auth } from "./firebase-config"; 
 
 export default function Home() { 
	/* const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
  
	const [user, setUser] = useState({});
	
	useEffect(() => { 
	  onAuthStateChanged(auth, (currentUser) => {
	  setUser(currentUser) ;
	}) 
  
  },[])
	
  
	const register = async () => {
	  try {
		const user = await createUserWithEmailAndPassword(
		  auth,
		  registerEmail,
		  registerPassword
		);
		console.log(user);
	  } catch (error) {
		console.log(error.message);
	  }
	};
  
	const login = async () => {
	  try {
		const user = await signInWithEmailAndPassword(
		  auth,
		  loginEmail,
		  loginPassword
		);
		console.log(user);
	  } catch (error) {
		console.log(error.message);
	  }
	};
  
	const logout = async () => {
	  await signOut(auth);
	}; */
  
   return (
     <React.Fragment> 
        <div id="loader-wrapper"> 
        <div id="loader"><div class="sk-spinner sk-spinner-cube-grid"><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div></div></div>
        </div>	
	
<section id="header">
	<div class="container">
		<div class="row text-center">
			<div class="col-md-8">
				<h1 class="white-text">Gérer vos Factures simplement</h1> 
				<h5 class="white-text">Gérez votre fichier client, établissez des devis et générez des factures gratuitement</h5>
				<div id="countdown" class="white-text"></div>
			</div>
		</div>
	</div>
	<div class="animation">
	<a class="arrow-down-animation" data-scroll href="#subscribe"><i class="fa fa-angle-down"></i></a>
	</div>
</section> 

<section id="about">
	<div class="container">
		<div class="row text-center">
			
			<div data-sr="enter top over 1s, wait 0.3s, move 24px, reset" class="col-md-4">
				<i class="fa fa-laptop"></i>
				<h3>Réactivité</h3>
				<div class="colored-line-small-center"></div>
				
			</div>
			
			<div data-sr="enter bottom over 1s, wait 0.3s, move 24px, reset" class="col-md-4 middle">
				<i class="fa fa-lightbulb-o"></i>
				<h3>Confidentialité</h3> 
				<div class="colored-line-small-center"></div>						
				
			</div>
			
			<div data-sr="enter top over 1s, wait 0.3s, move 24px, reset" class="col-md-4">
				<i class="fa fa-newspaper-o"></i>
				<h3>Transparence des honoraires</h3>
				<div class="colored-line-small-center"></div>
				
			</div>
		</div>
	</div>			
</section>



		



<section id="subscribe">
	<div class="container">
		<i data-sr="ease-in over 1s, reset" class="fa fa-envelope icontop"></i>
		<div class="row text-center">
			<div class="col-md-8 col-md-offset-2">
				<h2 data-sr="enter top over 1s, wait 0.3s, move 24px, reset" class="white-text">Sign up to our Newsletter</h2>
				<h5 data-sr="enter bottom over 1s, wait 0.3s, move 24px, reset" class="white-text">Stay up2date with climb-up</h5>
				
				<form id="mc_form" role="form">
					<input data-sr="enter top over 1s, wait 0.3s, move 24px, reset" type="email" class="form-control" id="mc-email" name="mc-email" placeholder="Your Email" />
					<button data-sr="enter bottom over 1s, wait 0.3s, move 24px, reset" type="submit" class="button-leweb">Submit</button>
					<label for="mc-email" class="mc-email"></label>
				</form>
				
			</div>
		</div>
	</div>	
</section>





     </React.Fragment>
   )
 }
 
	