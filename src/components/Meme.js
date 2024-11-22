import {Container, Col, Button, Image, Form, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import memesData from '../memesData';
import { useContext } from 'react';
import { MemeContext } from './MemeContext';
const  Meme = () => {
    const { meme, getMeme, handleChange, handleBlur, touched, errMsg,enable} = useContext(MemeContext);
    return (
        <Container fluid className="form-container">
            <Form 
                noValidate 
                onSubmit={getMeme}
                className='form'
                action=''
            >
                <Form.Group className="form-text">
                    <Col className='text-col'>
                        <Form.Label>Top Text</Form.Label>
                            <InputGroup  className='top-text'>
                                <Form.Control
                                    type='text'
                                    placeholder='Top Text'
                                    required
                                    name="topText"
                                    value={meme.topText}
                                    onInput={handleChange}
                                    onBlur={handleBlur}
                                />
                            </InputGroup>
                            {touched.topText && errMsg.topText && (
                                    <span className='text-danger'>
                                        {errMsg.topText}
                                    </span>
                                )}
                    </Col>
                    <Col className='text-col'>
                        <Form.Label>Bottom Text</Form.Label>
                        <InputGroup className='bottom-text'>
                            <Form.Control
                                type='text'
                                placeholder='Bottom Text'
                                required
                                name='bottomText'
                                value={meme.bottomText}
                                onInput={handleChange}
                                onBlur={handleBlur}
                            />
                        </InputGroup>
                            {touched.bottomText && errMsg.bottomText && (
                                <span className='text-danger'>
                                    {errMsg.bottomText}
                                </span>
                            )}
                    </Col>
                </Form.Group>
                <Button 
                        type="submit" 
                        className="form-btn"
                        disabled={enable}
                    >
                        Get a new meme image
                </Button>
                <Col className="meme">
                    <Image src= {meme.randomImage} className="meme-image"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </Col>
            </Form>
        </Container>
    )
}

export default Meme;