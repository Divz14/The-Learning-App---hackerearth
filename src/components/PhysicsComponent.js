import React from 'react';
import Phy from '../images/physics2.jpg/.';
import Favatar from '../images/favatar.png/.';
import Mavatar from '../images/mavatar.png/.';
import M1avatar from '../images/m1avatar.png/.';
import "./Course.css";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron
  ,Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label  } from 'reactstrap';

class Course extends React.Component {
  constructor() {
    super();
    
    this.state= {
        isNavOpen: false,
        isModalOpen: false,
        isOpen: false
    };
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  
}

toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
     this.setState({ isOpen: false })
  }

  handleLogin(event) {
      this.toggleModal();
      alert("Username: "+ this.username.value+ "Password: "+ this.password.value
        +"Remember: " + this.remember.checked);
        event.preventDefault();
  }

       
  
  render(){

    return (
      <div style={{marginLeft: 20}} className="container-fluid">
           <img src={Phy} alt="physics" className="img1"/>  
        <div className="grid-container1">
            <div className="grid-child">
            <h1>PHYSICS <button className="button" onClick={this.toggleModal}>ENROLL NOW</button> </h1>
            <h3>ABOUT THIS COURSE</h3>
           
            <p>Remember that anyone can learn physics. It's no different from learning programming, 
                from learning a musical instrument, from reading great literature. Whether you turn it into a hobby or a career, the pure joy of understanding the universe around us is one of the most 
                beautiful experiences you can ever have in life. </p>

            <h3>WHAT YOU WILL LEARN</h3>
            <hr />
            
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>MOTION AND FORCES</span>
            <div className="dropdown-content">
            <p>Force and motion are deeply related in nature.In physics, we come across various motions of a body. What causes the motion of an object? The answer is a force. What stops an object under motion? The answer is Force. 
              Thus, in general Force and Motion are like two sides of a coin. 
              In this module ,you will learn about different types of force and motion.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=5oi5j11FkQg" target="_blank">WATCH NOW </a></button>
            </div>
            </div>
            <br/>
            <hr/>
                
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>CONSERVATION OF ENERGY</span>
            <div className="dropdown-content">
            <p>Energy is required for the evolution of life forms on earth. 
              In physics, it is defined as the capacity to do work. We know that energy exists in different forms in nature. 
              You have learned about various forms of energy – heat, electrical, chemical, nuclear, etc. 
              In this module, you will learn about the laws and principles that govern energy . 
              This law is known as the law of conservation of energy.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=VxCORJ8dN3Y" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>
                
            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>ELECTRICITY</span>
            <div className="dropdown-content">
            <p>A few minutes of power outage makes us realize how important electric current is to us. Many inventions and discoveries have been made in order to facilitate human life smoothly. The discovery of current electricity is one such discovery that we are highly dependent on to make our life easier. 
              Here, in this module let us learn about current electricity and its characteristics.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=ru032Mfsfig" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>MAGNETISM</span>
            <div className="dropdown-content">
            <p>If you have ever used a compass (either the traditional mechanical one or the one built in your Smartphone), then you know it always points north. If you suspend a refrigerator magnet, it will also point north. 
              This suggests that there is a magnetic field all around us generated by the earth under your feet!.In this module you will leran about the properties of magnetism and earth's magnetic field</p>
    
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=s94suB5uLWw" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr/>

            
            <div className="dropdown">
            <i  className='fa'>&#xf103;</i><span>GRAVITY</span>
            <div className="dropdown-content">
            <p>We barely think about gravity in our daily lives, but we must realise that it defines the way we interact with the world. We grow within its constraints, and our heart, muscles, balance system all depend on it. In this module, let us understand this essential force and its effect on us.</p>
            <button className="wbutton"><a href="https://www.youtube.com/watch?v=EwY6p-r_hyU" target="_blank">WATCH NOW</a></button>
            </div>
            </div>
            <br/> <hr />
          
            </div>
                <div className="grid-child right">
              
                <i className='fa'>&#xf254;</i><span id="heading">LENGTH  : </span><span>     5-Weeks</span><br /><hr />
                <i  className='fa'>&#xf3fd;</i><span id="heading">EFFORT  : </span><span>     2-3 hours per week</span><br /><hr />
                <i  className='fa'>&#xf02b;</i><span id="heading">PRICE  :   </span><span>    Free</span><br /><hr />
                <i className="fa">&#xf19c;</i><span id="heading">INSTITUTION  : </span><span>    Glorifying </span><br /><hr />
                <i className="fa">&#xf19d;</i><span id="heading">SUBJECT  : </span><span>       Physics</span><br /><hr />
                <i  className='fa'>&#xf0a3;</i><span id="heading">LEVEL  :  </span><span>      Intermediate</span><br /><hr />
                <i  className='fa'>&#xf557;</i><span id="heading">LANGUAGE  : </span><span>     English</span><br /><hr />
                <i className='fa'>&#xf5da;</i><span id="heading">COURSE TYPE  :</span><span>   Self-paced</span><br /><hr />
              
                </div>
                </div>
                
                <div class="container-fluid">
                <h3>INSTRUCTORS</h3>
                  
                <div className="card-group2">
                
                <div className="card2">
    <div className="card-body2">
    <img className="card-img-top img1" src={Mavatar} alt="Card image"  />
      <h4 className="card-text2">John Doe</h4></div>
      </div>

      <div className="card2 ">
    <div className="card-body2">
    <img className="card-img-top img1" src={Favatar} alt="Card image"  />
      <h4 className="card-text2">Chloe Decker</h4></div>
      </div>

      <div className="card2">
    
    <div className="card-body2">
    <img className="card-img-top img1" src={M1avatar} alt="Card image"  />
      <h4 className="card-text2">Lucifer Star</h4></div>
      </div>
      </div>
      <br />
      <button className="button" onClick={this.toggleModal}>ENROLL NOW</button>
      </div>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleLogin}>
                   <FormGroup>
                       <Label htmlFor="username">Username</Label>
                       <Input type="text" id="username" name="username" 
                            />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="password">Password</Label>
                       <Input type="password" id="password" name="password"
                            />
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" name="remember"
                             /> 
                           Remember me
                       </Label>
                   </FormGroup>
                   <Button type="submit" value="submit" color="bg-primary">Login</Button>

               </Form>
           </ModalBody>
       </Modal>

      
      </div>
      
    
      
    )
  }
}
  export default Course;