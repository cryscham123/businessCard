import React,{useState} from 'react';
import "./imageUpload.scss";

const ImageUpload = ({ id, ImageUploader, onImage, fileURL }) => {
    const [loading, setLoading] = useState(false);
    let bgColor;
    if (fileURL) {
        bgColor = "pink";
    } else {
        bgColor = "#d2dae2";
    }
    const onFileChange = async e => {
        setLoading(true);
        let { target: { files } } = e;
        let real = files[0];
        let uploaded = await ImageUploader.upload(real)
        setLoading(false);
        onImage(uploaded.url);
    }
    return (
        <div className="imageUploader">
            {!loading ?
            <>
                <label className="imageUploader__input" htmlFor={id + "img"} style={{backgroundColor:`${bgColor}`}}>{fileURL ? "Choosed" : "Choose file" }</label>
                <input id={id + "img"} type="file" accept="image/*" style={{ display: "none" }} onChange={onFileChange} />
            </>
            :
            <div className="isLoading">
                <svg className="isLoading__svg">
                    <circle cx="6" cy="6" r="6"></circle>
                </svg>
            </div>
        }
        </div>
    );
};

export default ImageUpload;