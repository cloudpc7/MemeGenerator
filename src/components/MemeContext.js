import { createContext, useState } from "react";
import memesData from '../memesData';

const MemeContext = createContext();

const MemeProvider = ({ children }) => {

    const [touched, setTouched] = useState({
        topText: false,
        bottomText: false,
    })
    const [errMsg, setErrMsg] = useState({
        topText: '',
        bottomText: '',
    });

    const [enable, setEnable] = useState(true);
    
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
    });

    const [allMemeImages] = useState(memesData)

    const getMeme = (event) =>  {
        event.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));

        resetForm();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }))

        if(meme.topText && meme.bottomText) {
            setEnable(false);
        }
    }

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));

        if(name === 'topText' && !meme.topText) {
            setErrMsg((prevErrors) => ({
                ...prevErrors,
                topText: 'Please provide top text for the meme!',
            }));
        } else if (name==='bottomText' && !meme.bottomText) {
            setErrMsg((prevErrors) => ({
                ...prevErrors,
                bottomText: 'Please provide a bottom text for the meme!',
            }));
        } else {
            setErrMsg((prevErrors) => ({
                ...prevErrors,
                [name]: '',
            }));
        }
    }

    const resetForm = (event) => {
        setMeme((prevMeme) => ({
            topText: '',
            bottomText: '',
            randomImage: prevMeme.randomImage,
        }));

        setTouched({
            topText: false,
            bottomText: false,
        });

        setErrMsg({
            topText: '',
            bottomText: '',
        })

        setEnable(true);
    }

    const contextValue = {
        meme,
        getMeme,
        handleChange,
        handleBlur,
        touched,
        errMsg,
        enable,
    };

    return (
        <MemeContext.Provider value={contextValue}>
            {children}
        </MemeContext.Provider>
    )

}

export { MemeContext, MemeProvider};
