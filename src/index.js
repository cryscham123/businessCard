import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import "@fortawesome/fontawesome-free/js/all.js";
import handleAuth from "./service/auth_service";
import ImageUploader from "./service/image_upload";
import ImageUpload from './components/main/cardform/image_upload/imageUpload';
import cardMaker from './service/cardMaker';

const onAuth = new handleAuth();
const getImage = new ImageUploader();
const FileInput = props => <ImageUpload {...props} ImageUploader={getImage} />
const cardRef = new cardMaker();

ReactDOM.render(
  <React.StrictMode>
    <App onAuth={onAuth} FileInput={FileInput} cardRef={cardRef}/>
  </React.StrictMode>,
  document.getElementById('root')
);
