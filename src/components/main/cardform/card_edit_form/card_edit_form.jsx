import React,{useRef,useState} from 'react';
import "./card_edit_form.scss";

const CardEditForm = ({ FileInput,card, isNew, onInfo, onDelete,updateCard }) => {
    const { id, name, company, theme, title, email, message, fileURL } = card;
    // handle theme
    const [newTheme, setNewTheme] = useState(theme);
    const menuRef = useRef();
    const handleAppear = (value) => {
        value.current.style.opacity = "1";
        value.current.style.zIndex = "3";
        value.current.style.transform = "translateY(0)";
    }
    const handleDisappear = (value) => {
        value.current.style.opacity = "0";
        value.current.style.zIndex = "-1";
        value.current.style.transform = "translateY(-10px)";
    }
    const handleMenu = e => {
        const { target:{checked} } = e;
        if (checked) {
            handleAppear(menuRef)
        } else {
            handleDisappear(menuRef)
        }
    }
    const handleTheme = e => {
        const { target: { checked, value } } = e;
        switch (value) {
            case "dark": checked && setNewTheme("dark");
                !isNew && updateCard({ id,name:"theme",value });
                break;
            case "light": checked && setNewTheme("light");
                !isNew && updateCard({ id,name:"theme",value });
                break;
            default:
                window.alert("error");
                break;
        }
    }
    //text input handle
    const [newName, setNewName] = useState(name);
    const [newCompany, setNewCompany] = useState(company);
    const [newTitle, setNewTitle] = useState(title);
    const [newEmail, setNewEmail] = useState(email);
    const [newMessage, setNewMessage] = useState(message);
    const handletexts = e => {
        const { target: { name,value } } = e;
        switch (name) {
            case "name": setNewName(value);
                !isNew && updateCard({ id,name,value });
                break;
            case "company": setNewCompany(value);
                !isNew && updateCard({ id,name,value });
                break;
            case "title": setNewTitle(value);
                !isNew && updateCard({ id,name,value });
                break;
            case "email": setNewEmail(value);
                !isNew && updateCard({ id,name,value });
                break;
            case "message": setNewMessage(value);
                !isNew && updateCard({ id,name,value });
                break;
            default:
                window.alert("error");
                break;
        }
    }
    //image handle
    const defaultURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6affXwdu79nsCKnaRYrbRuY8DKGw52nOaXw&usqp=CAU"
    const [attachment, setAttachment] = useState("");
    const handleImage = value => {
            setAttachment(value);
            !isNew && updateCard({ id,name:"fileURL",value });
        }
    //handle form
    const onSubmit = e => {
        e.preventDefault();
        if (!isNew) {
            return;
        }
        const info = {
            id,
            name: newName,
            company: newCompany,
            theme: newTheme,
            title: newTitle,
            email: newEmail,
            message: newMessage,
            fileName: newName,
            fileURL: attachment || defaultURL,
        }
        onInfo(info);
    }
    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <li className="cardEditForm">
            <form className="cardEditForm__form" onSubmit={onSubmit}>
                <input required placeholder="Your name" onChange={handletexts} name="name" type="text" className="cardEditForm__form__name" defaultValue={name || ""}/>
                <input required placeholder="Your company" onChange={handletexts} name="company" type="text" className="cardEditForm__form__company" defaultValue={company || ""} />
                <div className="cardEditForm__form__themeWrapper">
                    <span>{newTheme}</span>
                    <label htmlFor={id} className="cardEditForm__form__themeWrapper__theme">
                        <input id={id} onChange={handleMenu} className="cardEditForm__form__themeWrapper__theme__input" type="checkbox" style={{ display: "none" }} />
                        <i className="fas fa-caret-down cardEditForm__form__themeWrapper__theme__icon"></i>
                    </label>
                    <div ref={menuRef} className="cardEditForm__form__themeWrapper__themeMenu">
                        <label htmlFor={id + "dark"} className="cardEditForm__form__themeWrapper__themeMenu__dark">
                            <input value="dark" onChange={handleTheme} style={{display:"none"}} id={id + "dark"} name="theme" type="radio" className="cardEditForm__form__themeWrapper__themeMenu__dark__input"/>
                            <span className="cardEditForm__form__themeWrapper__themeMenu__dark__span">dark</span>
                        </label>
                        <label htmlFor={id + "light"}  className="cardEditForm__form__themeWrapper__themeMenu__light">
                            <input value="light" onChange={handleTheme} style={{display:"none"}} id={id + "light"} name="theme" type="radio" className="cardEditForm__form__themeWrapper__themeMenu__light__input"/>
                            <span className="cardEditForm__form__themeWrapper__themeMenu__light__span">light</span>
                        </label>
                    </div>
                </div>
                <input required placeholder="Your job" onChange={handletexts} name="title" type="text" className="cardEditForm__form__title" defaultValue={title || ""} />
                <input required placeholder="Your email" onChange={handletexts} name="email" type="email" className="cardEditForm__form__email" defaultValue={email || ""} />
                <textarea required placeholder="100 texts limit..." onChange={handletexts} name="message" type="text" wrap="hard" className="cardEditForm__form__message" defaultValue={message || ""}></textarea>
                <FileInput id={id} fileURL={fileURL} onImage={handleImage}/>
                {isNew ?
                    <input type="submit" className="cardEditForm__form__btn" value="Add" />
                    : <button type="button" className="cardEditForm__form__btn" onClick={handleDelete}>Delete</button>
                }
            </form>
        </li>
    );
};

export default CardEditForm;