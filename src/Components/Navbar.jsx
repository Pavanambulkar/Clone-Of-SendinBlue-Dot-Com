// import {
  
//   Text,
//   Img,
//   Stack,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
 
//   Button,
// } from "@chakra-ui/react";
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { authContext } from "../Context/AuthContext";


// const Navbar = () => {
//   const { isAuth, LogOut } = useContext(authContext);
//   return (
//     <>
//       <Stack
//         direction={["column", "row"]}
//         spacing="74px"
//         marginTop="10px"
//         // border="1px solid grey"
//         paddingLeft="10px"
//         alignItems="center"
//         height="60px"
//         width="90%"
//       >
//         <Link to="/solution">
//           {/* <Text fontSize={{ base: '24px', md: '40px', lg: '46px' }}>SendinBlue</Text> */}
//           <Img
//             height="50px"
//             width="100%"
//             src="https://strategyinsights.eu/wp-content/uploads/2021/05/sendinblue-logo.png"
//           />
//         </Link>
//         <Link to="/solution">
//           <Menu>
//             <MenuButton fontSize={{ base: "16px", md: "20px", lg: "20px" }} as={Button}>Solution</MenuButton>
//             <MenuList>
//               <MenuItem>
//                 {" "}
//                 <Link to="/whysendinblue">Why SendinBlue?</Link>{" "}
//               </MenuItem>
//               <MenuItem>
//                 {" "}
//                 <Link to="/enterprise">EnterPrise</Link>{" "}
//               </MenuItem>
//             </MenuList>
//           </Menu>
//         </Link>
//         <Link to="/pricing">
//           <Text fontSize={{ base: "16px", md: "20px", lg: "20px" }}>
//             Pricing
//           </Text>
//         </Link>
//         <Link to="/features">
//           <Menu>
//             <MenuButton
//               as={Button}
//               fontSize={{ base: "16px", md: "20px", lg: "20px" }}
//             >
//               Features
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Email Marketing</MenuItem>
//               <MenuItem>Email Api</MenuItem>
//               <MenuItem>Sms Marketing</MenuItem>
//               <MenuItem>Chat</MenuItem>
//               <MenuItem>Inbox</MenuItem>
//             </MenuList>
//           </Menu>
//         </Link>
//         <Link to="/resources">
//           <Menu>
//             <MenuButton
//               as={Button}
//               fontSize={{ base: "16px", md: "20px", lg: "20px" }}
//             >
//               Resources
//             </MenuButton>
//             <MenuList>
//               <MenuItem>Help Center</MenuItem>
//               <MenuItem>Api Docs</MenuItem>
//               <MenuItem>Sendinblue Acadamy</MenuItem>
//               <MenuItem>Product Updates</MenuItem>
//               <MenuItem>Service Lab</MenuItem>
//             </MenuList>
//           </Menu>
//         </Link>
//         <Link to="/blog">
//           <Text fontSize={{ base: "16px", md: "20px", lg: "20px" }}>Blog</Text>
//         </Link>

//         <Link to="/login">
//           <Text fontSize={{ base: "16px", md: "20px", lg: "20px" }}>
//             {" "}

//             {isAuth ? <Button onClick={LogOut}> LogOut</Button> : "Login"}
//           </Text>
//         </Link>

        
//         <Link to="/signup">
//           <Menu>
            
//             <Button
//               colorScheme="blue"
//               fontSize={{ base: "16px", md: "20px", lg: "20px" }}
//             >
//               {" "}
//               Sign Up Free
//             </Button>
//           </Menu>
//           {/* <Text fontSize="xl"></Text> */}
//         </Link>
//       </Stack>
      
//     </>
//   );
// };

// export default Navbar;


import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {Link} from 'react-router-dom'
import { authContext } from "../Context/AuthContext";
import { useContext } from "react";
import { useState } from "react";
function Navbar() {
  const [state, setState] = useState(false);
  const { isAuth, LogOut } = useContext(authContext);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  const showDropdown = () =>{
    setState(true)
  }
  const hideDropdown = () =>{
    setState(false)
  }
	return (
		<header>
			{/* <h3>LOGO</h3> */}
      <img height='100px' width="100px" src="https://cdn-blog.bucksense.com/wp-content/uploads/2021/06/Sendinblue-logo.png" alt="" />
			<nav ref={navRef}>
        <Link  to='/solution'>Solutions   
        <div className="dropdown-menu" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        Solutions
        {
          state ?(<ul onMouseEnter={showDropdown}>
          <li color="black">Why Sendinblue</li>
          <li>EnterPrise</li>
        </ul>) : null
        }
        
        </div>
        </Link>
     
        <Link to='/pricing'>Pricing</Link>
        <Link to='/features'>Features</Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/login'>
                   {isAuth ? <button onClick={LogOut}> LogOut</button> : "Login"}

        </Link>
        <Link to='/signup'>Signup</Link>



				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;


