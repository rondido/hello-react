import { useState } from "react";

const EventPractice = () =>{
    const [form, setForm] = useState({
        username:'',
        message:'',
        })
        const { username, message} = form;
    const onChange= e=>{
        const nextForm ={
            ...form, //기존의 form내용을 이자리에 복사 한뒤
            [e.target.name]: e.target.value // 원한은 값을 덮어 씌우기
        };
        setForm(nextForm);
    }
    const onClick = () =>{
        alert(username + ':' + message);
        setForm({
        username:'',
        message:''
        });
    };
    const onKeyPress= e =>{
        if(e.key === 'Enter'){
            onClick();
        }
    };

    
    return(
        <div>
        <h1>이벤트 연습</h1>
        <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={this.state.username}
        onChange={
            this.handleChange
        }
        ></input>
        
        <input
        type="text"
        name="message"
        placeholder="아무거나 입력해주세요"
        value={this.state.message}
        onChange={onChange
        }
        onKeyPress={
            onKeyPress
        }
        ></input>
        <button onClick={
            this.handleClick
        }>확인</button>
    </div>
    );
};