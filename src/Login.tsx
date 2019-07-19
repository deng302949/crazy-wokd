import * as React from 'react';
import './Login.css';

interface Props {
  name?: string;
}

const Login = ({ name = "小狼" }: Props) => {
  return (
    <div className="github-bg">
      <div className="github-content">
        <div className="github-left">
          <h1>Built for developers</h1>
          <h2>{`GitHub is a development platform inspired by 
            the way you work. From open source to business, 
            you can host and review code, manage projects
            , and build software alongside 36 million developers`}</h2>
        </div>
        <div className="github-right">
          <div className="github-login">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;