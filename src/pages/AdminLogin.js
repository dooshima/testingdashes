import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { Link, Redirect } from 'react-router-dom';
import SuccessAlert from "./SucessAlert";
import ErrorAlert from "./ErrorAlert";





class AdminLogin extends Component {
    constructor() {
        super();

        this.onChangeUsernameData = this.onChangeUsernameData.bind(this);
        this.onChangePasswordData = this.onChangePasswordData.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          username: '',
          password: '',
          alert_message:'',
          store: null
        }
      }
    
    onChangeUsernameData(e){
      this.setState({
        username: e.target.value,
      });
    }

    onChangePasswordData(e){
      this.setState({
        password: e.target.value
      });
    }

    componentDidMount()
    {
      this.storeToken()
    }

    storeToken()
    {
      let store = JSON.parse(localStorage.getItem('token'));
      if(store && store.login){
        this.setState({login:true, stroe: store})
      }
    }
    onSubmit(e){
      e.preventDefault();
      const data  = {
        username: this.state.username,
        password:this.state.password
      }
    
      axios.post("http://helloworld.com.ng/medflit-api/api/login", data)
            .then(res =>{
              this.setState({alert_message:"Success"})
              this.props.history.push('/Dashboard')
              console.info(res.data)
              localStorage.setItem('token', res.data.data.access_token
            )
            }).catch(error =>{
              this.setState({alert_message:"Error"});
            })
            this.storeToken();
    }

      render(){
        return(
          <div className='loginform'>
            <hr/>
            {this.state.alert_message == "Success" ? <SuccessAlert/> : null}
            {this.state.alert_message == "Error" ? <ErrorAlert/> : null}

            <form id="contact-form"  method="POST" onSubmit = {this.onSubmit}>
              <div className="form-group">
                  <label htmlFor="username">Username / Email</label>
                  <input type="text" className="form-control" id="username" 
                  value = {this.state.username}
                  onChange={this.onChangeUsernameData} />
              </div>
              <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input type="password" className="form-control" id="password" 
                  aria-describedby="emailHelp" 
                  value = {this.state.password}
                  onChange={this.onChangePasswordData} />
              </div>
            
              <button type="submit"  className="btn btn-primary">Login</button>
            </form>
          </div>
        );
      }
    
     
   
    }
    


export default  AdminLogin;