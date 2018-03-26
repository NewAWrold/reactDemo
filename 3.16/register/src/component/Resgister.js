import React from 'react';

export default class Resgister extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            age:'',
            sex: 'man',
            phone:'',
            user:'',
            pwd:''
        }
    }

    handleName(e){
        this.setState({name:e.target.value})
    }
    handleAge(e){
        this.setState({age:e.target.value})
    }
    handleSex(e){
        this.setState({sex:e.target.value})
    }
    handlePhone(e){
        this.setState({phone:e.target.value});
    }
    handleUser(e){
        this.setState({user:e.target.value});
    }
    handlePwd(e){
        this.setState({pwd:e.target.value});
    }
    handleRegister(){
        // console.log(this.state);
        this.props.getResgister(this.state);
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    姓名:<input type='text' onChange={this.handleName.bind(this)} value={this.state.name} />
                </div>
                <div>
                    年龄:<input type='number' onChange={this.handleAge.bind(this)} value={this.state.age} />
                </div>
                <div>
                    性别:
                    <label id='man'>男</label>
                    <input type='radio'  onClick={this.handleSex.bind(this)} id='man' defaultChecked value='man' name='sex' />
                    <label id='women'>女</label>
                    <input type='radio'  onClick={this.handleSex.bind(this)} id='women'  value='women' name='sex' />
                </div>
                <div>
                    手机号:<input type='text' onChange={this.handlePhone.bind(this)} value={this.state.phone} />
                </div>
                <div>
                    账号:<input type='text' onChange={this.handleUser.bind(this)} value={this.state.user} />
                </div>
                <div>
                    密码:<input type='text' onChange={this.handlePwd.bind(this)} value={this.state.pwd} />
                </div>
                
                <button type="button" style={{width:'220px'}} onClick={this.handleRegister.bind(this)}>立即注册</button>
                
            </React.Fragment>
        )
    }
}